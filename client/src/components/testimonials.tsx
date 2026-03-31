import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

type Testimonial = {
  name: string;
  role: string;
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

const testimonials: Testimonial[] = [
  {
    name: "Chanda Mukuka",
    role: "Lodge Owner",
    content:
      "Stash Leading Services has been handling our lodge linens and staff uniforms for 3 years now. Their reliability and high standards of hygiene are unmatched in Lusaka.",
    rating: 5,
    initials: "CM",
  },
  {
    name: "Mwaba Kapere",
    role: "ZedTech Solutions",
    content:
      "The marketing team helped us increase our client inquiries by 300%. They truly understand the Zambian digital landscape.",
    rating: 5,
    initials: "MK",
  },
  {
    name: "Twaambo Haimbe",
    role: "Expat Professional",
    content:
      "Thanks to their consultancy, my work permit documentation was smooth and stress-free. Highly recommended!",
    rating: 5,
    initials: "TH",
  },
  {
    name: "Joseph Banda",
    role: "Restaurant Owner",
    content:
      "Their laundry service has transformed how we manage our restaurant linens. Fast turnaround and impeccable quality.",
    rating: 5,
    initials: "JB",
  },
  {
    name: "Grace Phiri",
    role: "Business Owner",
    content:
      "Got a quick loan using my laptop as collateral. The process was straightforward and I got my laptop back the same day!",
    rating: 5,
    initials: "GP",
  },
  {
    name: "Michael Tembo",
    role: "Startup Founder",
    content:
      "Stash Media designed our company logo and marketing materials. The team is creative and delivers on time.",
    rating: 5,
    initials: "MT",
  },
];

const testimonialsRow2: Testimonial[] = [
  {
    name: "Sarah Mwanza",
    role: "Hotel Manager",
    content:
      "Professional and reliable laundry services. They handle our bulk orders with care and always deliver on schedule.",
    rating: 5,
    initials: "SM",
  },
  {
    name: "David Chilufya",
    role: "Business Consultant",
    content:
      "Their immigration expertise saved me weeks of paperwork. Excellent guidance through the permit process.",
    rating: 5,
    initials: "DC",
  },
  {
    name: "Linda Mutale",
    role: "Boutique Owner",
    content:
      "The branding work they did for my boutique was exceptional. Sales increased significantly after the rebrand.",
    rating: 5,
    initials: "LM",
  },
  {
    name: "Peter Ng'andu",
    role: "Transport Business",
    content:
      "Used their lending service for an emergency. Fair rates and my vehicle was returned promptly after repayment.",
    rating: 5,
    initials: "PN",
  },
  {
    name: "Mary Kabwe",
    role: "School Administrator",
    content:
      "We trust Stash Laundry with our school uniforms. Consistent quality and great customer service.",
    rating: 5,
    initials: "MK",
  },
  {
    name: "James Zimba",
    role: "Real Estate Agent",
    content:
      "Their media team created stunning property brochures that helped close deals faster. Highly professional!",
    rating: 5,
    initials: "JZ",
  },
];

const fallbackTestimonials = [...testimonials, ...testimonialsRow2];

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
      className="relative border-none shadow-sm bg-card min-w-[280px] max-w-[280px] flex-shrink-0"
      data-testid={`card-testimonial-${index}`}
    >
      <CardContent className="p-5">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-0.5">
            {Array.from({ length: testimonial.rating }).map((_, i) => (
              <Star
                key={i}
                className="w-3 h-3 fill-yellow-500 text-yellow-500"
              />
            ))}
          </div>
          <Quote className="w-6 h-6 text-primary/10" />
        </div>

        <p
          className="text-foreground/80 text-sm leading-relaxed mb-4 line-clamp-3"
          data-testid={`text-testimonial-content-${index}`}
        >
          "{testimonial.content}"
        </p>

        <div className="flex items-center gap-2.5">
          <Avatar className="h-8 w-8 border border-primary/10">
            <AvatarFallback className="bg-primary text-primary-foreground text-xs font-bold">
              {testimonial.initials}
            </AvatarFallback>
          </Avatar>
          <div>
            {testimonial.authorUri ? (
              <a
                href={testimonial.authorUri}
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-xs hover:text-primary transition-colors"
                data-testid={`text-testimonial-name-${index}`}
              >
                {testimonial.name}
              </a>
            ) : (
              <p
                className="font-semibold text-xs"
                data-testid={`text-testimonial-name-${index}`}
              >
                {testimonial.name}
              </p>
            )}
            <p className="text-[10px] text-muted-foreground uppercase tracking-wide">
              {testimonial.role}
            </p>
          </div>
        </div>
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
          role: review.relativePublishTimeDescription || "Google Review",
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
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">
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
          <p className="text-muted-foreground max-w-xl mx-auto">
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
