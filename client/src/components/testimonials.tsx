import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

type Testimonial = {
  name: string;
  meta: string;
  timeLabel: string;
  content: string;
  rating: number;
  initials: string;
  authorUri?: string;
};

interface GoogleReviewsResponse {
  enabled: boolean;
  placeName: string;
  placeAddress?: string;
  placeGoogleMapsUri?: string;
  rating?: number;
  userRatingCount?: number;
  reviews: Array<{
    authorName: string;
    authorUri?: string;
    rating: number;
    text: string;
    relativePublishTimeDescription?: string;
  }>;
  sortDescription?: string;
  error?: string;
}

const fallbackTestimonials: Testimonial[] = [
  {
    name: "Debby Chanda",
    meta: "1 review",
    timeLabel: "a month ago",
    content:
      "Fast and efficient services offered right here. I had a rush hour of a week and my schedule was swamped, I had suits that needed to be worked on and a friend of mine directed me to Stash Laundry. Their efficiency is off the charts. I took my suits in the morning and by noon I was called to pick them up, and I managed to attend my event with a fresh and clean suit.",
    rating: 5,
    initials: "DC",
  },
  {
    name: "Memory Mweene",
    meta: "1 review · 2 photos",
    timeLabel: "3 months ago",
    content: "They are really good at what they do. Customer service is top notch.",
    rating: 5,
    initials: "MM",
  },
  {
    name: "Chansa Kalimanshi",
    meta: "1 review",
    timeLabel: "3 months ago",
    content:
      "Excellent service. The laundry company consistently delivers clean, fresh clothes with a quick turnaround time. Their attention to detail and professionalism are top-notch. Highly recommend.",
    rating: 5,
    initials: "CK",
  },
  {
    name: "Yvonne Lukwesa",
    meta: "1 review",
    timeLabel: "a month ago",
    content:
      "The services are just wow. The packaging is smarter and if you have a busy schedule they have reliable and affordable delivery services. When you think of laundry think Stash Laundry and Cleaning Services.",
    rating: 5,
    initials: "YL",
  },
  {
    name: "makungu simonda",
    meta: "1 review",
    timeLabel: "8 months ago",
    content:
      "I recently used Stash Laundry and Cleaning Services for both cleaning and laundry services, and I was extremely impressed. The team was punctual, professional, and paid great attention to detail. My home was left spotless.",
    rating: 5,
    initials: "MS",
  },
  {
    name: "Catherine Tembo",
    meta: "2 reviews",
    timeLabel: "8 months ago",
    content:
      "I visited Stash Laundry and Cleaning Services Lusaka and found the service to be prompt, friendly, and efficient. My clothes were cleaned well, and I appreciated the care taken with delicate items. The prices were reasonable for the quality.",
    rating: 5,
    initials: "CT",
  },
  {
    name: "christopher mwanza",
    meta: "3 reviews",
    timeLabel: "a month ago",
    content: "They're very efficient and do a very good job. Their customer service is very caring and hardworking.",
    rating: 5,
    initials: "CM",
  },
  {
    name: "Mulando Chilambwe",
    meta: "1 review",
    timeLabel: "8 months ago",
    content:
      "I took my graduation gown to Stash Laundry and they did an amazing job. It came back well-pressed and packed. They handled it with so much care and I really appreciated how professional and friendly the service was.",
    rating: 5,
    initials: "MC",
  },
  {
    name: "Chimwemwe Theresa Mtonga",
    meta: "1 review",
    timeLabel: "8 months ago",
    content:
      "I've been using this laundry service for a while now and I'm consistently impressed by the top-notch care they put into every load. The clothes, beddings, and curtains always come back fresh, spotless, and neatly folded.",
    rating: 5,
    initials: "CT",
  },
  {
    name: "Lushomo Mubita",
    meta: "1 review",
    timeLabel: "8 months ago",
    content:
      "Stash Laundry is absolute perfection. Their customer service is top notch, friendly, responsive, and genuinely caring. Their attention to detail and commitment to delivering exceptional cleaning services really stand out.",
    rating: 5,
    initials: "LM",
  },
  {
    name: "Allan Jere",
    meta: "1 review",
    timeLabel: "a month ago",
    content:
      "They offer the best cleaning services in Lusaka and the customer service is excellent. I highly recommend.",
    rating: 5,
    initials: "AJ",
  },
  {
    name: "Jabule Wanu",
    meta: "3 reviews",
    timeLabel: "a month ago",
    content:
      "They're efficient and very careful. I was impressed with how they handled my laundry.",
    rating: 5,
    initials: "JW",
  },
  {
    name: "mweembe pukeni",
    meta: "1 review",
    timeLabel: "a month ago",
    content: "I was so excited being at the place. They are so welcoming and good to work with.",
    rating: 5,
    initials: "MP",
  },
  {
    name: "Maria Mahlah",
    meta: "2 reviews",
    timeLabel: "4 months ago",
    content: "Their services exceeded my expectations. Their attention to detail is top notch. I highly recommend them.",
    rating: 5,
    initials: "MM",
  },
  {
    name: "Ndanji Nayame",
    meta: "1 review",
    timeLabel: "8 months ago",
    content: "Stash Laundry and Cleaning Services Lusaka are the definition of excellent service providers.",
    rating: 5,
    initials: "NN",
  },
  {
    name: "Nancy jay Buumba",
    meta: "1 review",
    timeLabel: "a month ago",
    content: "Good customer service. Clothes were delivered on time and well packed.",
    rating: 5,
    initials: "NB",
  },
  {
    name: "Samuel Bulambo",
    meta: "3 reviews · 1 photo",
    timeLabel: "4 months ago",
    content: "Awesome service, excellent customer service, and the prices are fair too.",
    rating: 5,
    initials: "SB",
  },
  {
    name: "Chibwe Chikosa",
    meta: "3 reviews",
    timeLabel: "4 months ago",
    content: "Best laundry service I've visited so far in Lusaka. I rate it 10/10.",
    rating: 5,
    initials: "CC",
  },
  {
    name: "Patience Mwape",
    meta: "1 review",
    timeLabel: "8 months ago",
    content:
      "Stash Laundry gave me the best service. My wedding gown had hard stains that I thought would not come out, but to my surprise it came back whiter and the fragrance was excellent.",
    rating: 5,
    initials: "PM",
  },
  {
    name: "Jasper percy",
    meta: "1 review",
    timeLabel: "7 months ago",
    content: "Excellent service. Clothes came back spotless, fresh, and perfectly folded. Always on time and very professional.",
    rating: 5,
    initials: "JP",
  },
  {
    name: "Zuba Moonga",
    meta: "1 review",
    timeLabel: "a month ago",
    content: "I am satisfied with the quality and consistency of your services.",
    rating: 5,
    initials: "ZM",
  },
  {
    name: "Emmah chipili",
    meta: "1 review",
    timeLabel: "8 months ago",
    content: "Excellent services. The team did a good job on the clothes, not forgetting the top notch customer service. I highly recommend.",
    rating: 5,
    initials: "EC",
  },
  {
    name: "ob smith_ Pb",
    meta: "1 review",
    timeLabel: "a month ago",
    content: "Very neat, clean, and fast laundry service.",
    rating: 5,
    initials: "OP",
  },
  {
    name: "Sepo Mate",
    meta: "1 review",
    timeLabel: "2 months ago",
    content: "Good customer service, good prices, and good people.",
    rating: 5,
    initials: "SM",
  },
];

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() || "")
    .join("");
}

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: Testimonial;
  index: number;
}) {
  return (
    <Card
      className="relative border-none shadow-sm bg-card min-w-[250px] max-w-[250px] sm:min-w-[280px] sm:max-w-[280px] flex-shrink-0"
      data-testid={`card-testimonial-${index}`}
    >
      <CardContent className="p-5">
        <div className="flex items-center gap-2.5">
          <Avatar className="h-8 w-8 border border-primary/10">
            <AvatarFallback className="bg-primary text-primary-foreground text-xs font-bold">
              {testimonial.initials}
            </AvatarFallback>
          </Avatar>
          <div className="min-w-0">
            {testimonial.authorUri ? (
              <a
                href={testimonial.authorUri}
                target="_blank"
                rel="noreferrer"
                className="block truncate font-semibold text-xs hover:text-primary transition-colors"
                data-testid={`text-testimonial-name-${index}`}
              >
                {testimonial.name}
              </a>
            ) : (
              <p
                className="truncate font-semibold text-xs"
                data-testid={`text-testimonial-name-${index}`}
              >
                {testimonial.name}
              </p>
            )}
            <p className="text-[10px] text-muted-foreground">
              {testimonial.meta}
            </p>
          </div>
        </div>

        <div className="mt-3 flex items-center gap-2">
          <div className="flex items-center gap-0.5">
            {Array.from({ length: testimonial.rating }).map((_, i) => (
              <Star
                key={i}
                className="w-3 h-3 fill-yellow-500 text-yellow-500"
              />
            ))}
          </div>
          <span className="text-[10px] text-muted-foreground">
            {testimonial.timeLabel}
          </span>
        </div>

        <p
          className="mt-3 text-foreground/80 text-sm leading-relaxed line-clamp-4"
          data-testid={`text-testimonial-content-${index}`}
        >
          {testimonial.content}
        </p>
      </CardContent>
    </Card>
  );
}

export function Testimonials() {
  const { data } = useQuery<GoogleReviewsResponse>({
    queryKey: ["/api/google-reviews"],
  });

  const liveTestimonials =
    data?.enabled && data.reviews.length
      ? data.reviews.map((review) => ({
          name: review.authorName,
          meta: "Google review",
          timeLabel: review.relativePublishTimeDescription || "Recent review",
          content: review.text,
          rating: review.rating,
          initials: getInitials(review.authorName),
          authorUri: review.authorUri,
        }))
      : [];

  const activeTestimonials = liveTestimonials.length
    ? liveTestimonials
    : fallbackTestimonials;
  const midpoint = Math.ceil(activeTestimonials.length / 2);
  const rowOne = activeTestimonials.slice(0, midpoint);
  const rowTwo = activeTestimonials.slice(midpoint);
  const secondRow = rowTwo.length ? rowTwo : rowOne;

  return (
    <section className="py-16 md:py-20 bg-muted/20 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="text-center space-y-3 mb-10">
          <p className="text-sm uppercase tracking-widest text-primary font-medium">
            Testimonials
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold"
            data-testid="text-testimonials-title"
          >
            What Our Clients Say
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto">
            {liveTestimonials.length
              ? `Live Google reviews for ${data?.placeName || "Stash Laundry and Cleaning Services"}.`
              : "Don't just take our word for it. Here's what our satisfied customers across Zambia have to say."}
          </p>
          {liveTestimonials.length > 0 && (
            <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-muted-foreground">
              {typeof data?.rating === "number" && (
                <span>
                  Rated {data.rating.toFixed(1)} / 5 from {data.userRatingCount || liveTestimonials.length} Google reviews
                </span>
              )}
              {data?.sortDescription && <span>{data.sortDescription}</span>}
              {data?.placeGoogleMapsUri && (
                <a
                  href={data.placeGoogleMapsUri}
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary hover:underline"
                >
                  View on Google Maps
                </a>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="space-y-4">
        <div className="relative">
          <div className="flex animate-scroll gap-4">
            {rowOne.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} index={index} />
            ))}
            {rowOne.map((testimonial, index) => (
              <TestimonialCard key={`dup-${index}`} testimonial={testimonial} index={index} />
            ))}
          </div>
        </div>
        
        <div className="relative">
          <div className="flex animate-scroll-reverse gap-4">
            {secondRow.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                testimonial={testimonial}
                index={index + rowOne.length}
              />
            ))}
            {secondRow.map((testimonial, index) => (
              <TestimonialCard
                key={`dup-${index}`}
                testimonial={testimonial}
                index={index + rowOne.length}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
