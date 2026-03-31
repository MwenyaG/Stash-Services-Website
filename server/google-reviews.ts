const GOOGLE_PLACES_TEXT_SEARCH_URL =
  "https://places.googleapis.com/v1/places:searchText";
const GOOGLE_PLACES_DETAILS_URL = "https://places.googleapis.com/v1/places";
const DEFAULT_PLACE_QUERY = "Stash Laundry and Cleaning Services Lusaka Zambia";
const CACHE_TTL_MS = 1000 * 60 * 60 * 6;

interface GoogleLocalizedText {
  text?: string;
}

interface GoogleAuthorAttribution {
  displayName?: string;
  uri?: string;
  photoUri?: string;
}

interface GoogleReview {
  authorAttribution?: GoogleAuthorAttribution;
  rating?: number;
  text?: GoogleLocalizedText;
  publishTime?: string;
  relativePublishTimeDescription?: string;
  googleMapsUri?: string;
}

interface GooglePlaceDetailsResponse {
  id?: string;
  displayName?: GoogleLocalizedText;
  formattedAddress?: string;
  googleMapsUri?: string;
  rating?: number;
  userRatingCount?: number;
  reviews?: GoogleReview[];
}

interface GoogleTextSearchResponse {
  places?: Array<{
    id?: string;
    displayName?: GoogleLocalizedText;
    formattedAddress?: string;
    googleMapsUri?: string;
  }>;
}

export interface PublicGoogleReview {
  authorName: string;
  authorUri?: string;
  authorPhotoUri?: string;
  rating: number;
  text: string;
  publishTime?: string;
  relativePublishTimeDescription?: string;
  googleMapsUri?: string;
}

export interface PublicGoogleReviewsResponse {
  enabled: boolean;
  placeName: string;
  placeAddress?: string;
  placeGoogleMapsUri?: string;
  rating?: number;
  userRatingCount?: number;
  reviews: PublicGoogleReview[];
  sortDescription?: string;
  error?: string;
}

let reviewsCache:
  | {
      expiresAt: number;
      value: PublicGoogleReviewsResponse;
    }
  | undefined;

async function fetchJson<T>(url: string, init: RequestInit): Promise<T> {
  const response = await fetch(url, init);

  if (!response.ok) {
    const text = await response.text();
    throw new Error(
      `Google Places request failed (${response.status}): ${text || response.statusText}`,
    );
  }

  return (await response.json()) as T;
}

async function resolvePlaceId(apiKey: string) {
  const configuredPlaceId = process.env.GOOGLE_PLACE_ID;
  if (configuredPlaceId) {
    return configuredPlaceId;
  }

  const textQuery = process.env.GOOGLE_PLACE_QUERY || DEFAULT_PLACE_QUERY;

  const response = await fetchJson<GoogleTextSearchResponse>(
    GOOGLE_PLACES_TEXT_SEARCH_URL,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask":
          "places.id,places.displayName,places.formattedAddress,places.googleMapsUri",
      },
      body: JSON.stringify({
        textQuery,
        maxResultCount: 1,
        regionCode: "ZM",
      }),
    },
  );

  const place = response.places?.[0];

  if (!place?.id) {
    throw new Error(
      `No Google Place ID found for query "${textQuery}". Set GOOGLE_PLACE_ID to override the lookup.`,
    );
  }

  return place.id;
}

function normalizeReview(review: GoogleReview): PublicGoogleReview | null {
  const text = review.text?.text?.trim();
  const authorName = review.authorAttribution?.displayName?.trim();
  const rating = review.rating ?? 0;

  if (!text || !authorName || rating <= 0) {
    return null;
  }

  return {
    authorName,
    authorUri: review.authorAttribution?.uri,
    authorPhotoUri: review.authorAttribution?.photoUri,
    rating,
    text,
    publishTime: review.publishTime,
    relativePublishTimeDescription: review.relativePublishTimeDescription,
    googleMapsUri: review.googleMapsUri,
  };
}

export async function getGooglePlaceReviews(): Promise<PublicGoogleReviewsResponse> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;

  if (!apiKey) {
    return {
      enabled: false,
      placeName: "Stash Laundry and Cleaning Services",
      reviews: [],
      sortDescription: "Google reviews are sorted by relevance.",
      error:
        "GOOGLE_PLACES_API_KEY is not configured on the server. Add it to enable live Google reviews.",
    };
  }

  if (reviewsCache && reviewsCache.expiresAt > Date.now()) {
    return reviewsCache.value;
  }

  try {
    const placeId = await resolvePlaceId(apiKey);
    const details = await fetchJson<GooglePlaceDetailsResponse>(
      `${GOOGLE_PLACES_DETAILS_URL}/${placeId}`,
      {
        headers: {
          "Content-Type": "application/json",
          "X-Goog-Api-Key": apiKey,
          "X-Goog-FieldMask":
            "id,displayName,formattedAddress,googleMapsUri,rating,userRatingCount,reviews",
        },
      },
    );

    const value: PublicGoogleReviewsResponse = {
      enabled: true,
      placeName:
        details.displayName?.text || "Stash Laundry and Cleaning Services",
      placeAddress: details.formattedAddress,
      placeGoogleMapsUri: details.googleMapsUri,
      rating: details.rating,
      userRatingCount: details.userRatingCount,
      reviews: (details.reviews || [])
        .map(normalizeReview)
        .filter((review): review is PublicGoogleReview => review !== null),
      sortDescription: "Google reviews are sorted by relevance.",
    };

    reviewsCache = {
      expiresAt: Date.now() + CACHE_TTL_MS,
      value,
    };

    return value;
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unable to load Google reviews.";

    return {
      enabled: false,
      placeName: "Stash Laundry and Cleaning Services",
      reviews: [],
      sortDescription: "Google reviews are sorted by relevance.",
      error: message,
    };
  }
}
