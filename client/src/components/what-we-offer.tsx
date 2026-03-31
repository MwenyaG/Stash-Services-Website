import { Link } from "wouter";
import { BrandLogo } from "@/components/brand-logo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

import leadingLogo from "@/assets/stash-leading-logo.png";
import laundryLogo from "@/assets/stash-laundry-logo.png";
import mediaLogo from "@/assets/stash-media-logo.png";
import lendingLogo from "@/assets/stash-lending-logo.png";

interface ServiceOffer {
  id: string;
  brandName: string;
  subtitle: string;
  logo: string;
  bullets: string[];
  href: string;
  gradient: string;
}

const services: ServiceOffer[] = [
  {
    id: "immigration",
    brandName: "Stash Leading",
    subtitle: "Immigration Services",
    logo: leadingLogo,
    bullets: [
      "Expert visa & permit consultancy",
      "Employment & investor permits",
      "Residence permits & appeals",
      "Business & transit visas",
      "Visiting permits processing",
      "Document preparation assistance",
      "End-to-end application support",
    ],
    href: "/immigration",
    gradient: "from-primary/10 via-primary/5 to-transparent",
  },
  {
    id: "laundry",
    brandName: "Stash Laundry",
    subtitle: "Cleaning Services",
    logo: laundryLogo,
    bullets: [
      "Professional laundry & dry cleaning",
      "Pickup & delivery across Lusaka",
      "72hr standard & 24hr express",
      "Bedding & duvet cleaning",
      "Sofa & mattress cleaning",
      "Professional shoe cleaning",
      "Stain removal specialists",
    ],
    href: "/laundry",
    gradient: "from-blue-500/10 via-blue-500/5 to-transparent",
  },
  {
    id: "media",
    brandName: "Stash Media",
    subtitle: "Design & Marketing",
    logo: mediaLogo,
    bullets: [
      "Creative branding solutions",
      "Logo & visual identity design",
      "Business cards & flyers",
      "Company profile creation",
      "Social media management",
      "Brochures & marketing materials",
      "Digital presence building",
    ],
    href: "/marketing",
    gradient: "from-secondary/10 via-secondary/5 to-transparent",
  },
  {
    id: "loans",
    brandName: "Stash Lending",
    subtitle: "Collateral Loans",
    logo: lendingLogo,
    bullets: [
      "Quick collateral-based loans",
      "Competitive rates from 10%",
      "Fast approval process",
      "Laptops & electronics accepted",
      "Vehicles & property collateral",
      "Flexible terms (1–4 weeks)",
      "Transparent fee structure",
    ],
    href: "/lending",
    gradient: "from-amber-500/10 via-amber-500/5 to-transparent",
  },
];

function ServiceCard({ service, index }: { service: ServiceOffer; index: number }) {
  return (
    <Card
      className={`group relative overflow-visible flex flex-col bg-gradient-to-br ${service.gradient}
        border border-border/50 hover:border-primary/30
        transition-all duration-500 ease-out
        hover:shadow-xl hover:shadow-primary/5
        hover:-translate-y-2`}
      style={{ animationDelay: `${index * 100}ms` }}
      data-testid={`card-offer-${service.id}`}
    >
      <CardHeader className="pb-4">
        <BrandLogo
          src={service.logo}
          alt={service.brandName}
          variant="card"
          frameClassName="transition-transform duration-500 group-hover:scale-105"
          testId={`img-offer-logo-${service.id}`}
        />
        <CardTitle
          className="text-lg transition-colors duration-300 group-hover:text-primary"
          data-testid={`text-offer-title-${service.id}`}
        >
          {service.brandName}
        </CardTitle>
        <p className="text-sm font-medium text-primary/80">{service.subtitle}</p>
      </CardHeader>

      <CardContent className="flex-grow flex flex-col">
        <ul
          className="space-y-2 text-sm text-muted-foreground mb-6"
          data-testid={`text-offer-intro-${service.id}`}
        >
          {service.bullets.map((bullet, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-primary mt-1.5 text-xs">●</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto">
          <Link href={service.href}>
            <div
              className="flex items-center justify-center gap-2 text-sm font-medium text-primary
                py-2 rounded-md opacity-80 transition-all duration-300
                group-hover:opacity-100 cursor-pointer hover:underline"
            >
              <span>Explore</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </Link>
        </div>
      </CardContent>

      <div
        className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/0 to-white/0
          group-hover:from-white/5 group-hover:to-transparent
          transition-all duration-500 pointer-events-none"
      />
    </Card>
  );
}

export function WhatWeOffer() {
  return (
    <section id="services" className="py-16 md:py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-x-1/2" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl translate-y-1/2" />

        <svg className="absolute inset-0 w-full h-full opacity-[0.03] dark:opacity-[0.02]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        <div className="absolute top-20 right-20 w-4 h-4 bg-primary/20 rounded-full animate-pulse" />
        <div className="absolute bottom-32 left-16 w-3 h-3 bg-secondary/20 rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-amber-500/20 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }} />
      </div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16 relative z-10">
        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-widest text-primary font-medium mb-3">Our Brands</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" data-testid="text-what-we-offer-title">
            What We Offer
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-what-we-offer-description">
            Four specialized brands under one roof, delivering excellence across Zambia.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6 items-start">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
