import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { Link } from "wouter";

interface PricingTier {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

const immigrationPackages: PricingTier[] = [
  {
    name: "Initial Consultation",
    price: "K500",
    description: "Assessment and guidance session",
    features: [
      "Eligibility assessment",
      "Permit category recommendation",
      "Document checklist",
      "Timeline planning",
    ],
  },
  {
    name: "Work Permit Assistance",
    price: "From K2,500",
    description: "Complete work permit support",
    features: [
      "Application preparation",
      "Document verification",
      "Employer coordination",
      "Follow-up with Immigration",
    ],
    highlighted: true,
  },
  {
    name: "Full Immigration Package",
    price: "From K7,500",
    description: "End-to-end immigration service",
    features: [
      "Complete case management",
      "All document preparation",
      "Interview preparation",
      "Permit collection",
    ],
  },
];

const permitServices = [
  { name: "Temporary Employment Permit (TEP)", price: "From K1,500" },
  { name: "Employment Permit", price: "From K2,500" },
  { name: "Investor Permit", price: "From K5,000" },
  { name: "Residence Permit", price: "From K3,500" },
  { name: "Permit Renewal", price: "From K1,000" },
  { name: "Visa Extension", price: "From K750" },
];

function PricingCard({ tier }: { tier: PricingTier }) {
  return (
    <Card
      className={`relative border-2 ${tier.highlighted ? "border-primary shadow-lg scale-105 z-10" : "border-transparent"}`}
      data-testid={`card-pricing-${tier.name.toLowerCase().replace(/\s+/g, "-")}`}
    >
      {tier.highlighted && (
        <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1">
          Most Popular
        </Badge>
      )}
      <CardHeader className="text-center pb-4">
        <CardTitle className="text-xl">{tier.name}</CardTitle>
        <div className="mt-4">
          <span className="text-4xl font-bold">{tier.price}</span>
          {tier.period && (
            <span className="text-muted-foreground ml-1">
              /{tier.period}
            </span>
          )}
        </div>
        <CardDescription className="mt-2">
          {tier.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <ul className="space-y-3">
          {tier.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
        <Link href="/#contact">
          <Button
            className="w-full mt-4"
            variant={tier.highlighted ? "default" : "outline"}
          >
            Book Now
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}

export function PricingSection() {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <p className="text-sm uppercase tracking-wide text-primary font-medium">
            Services & Pricing
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold"
            data-testid="text-pricing-title"
          >
            Zambia Immigration Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Comprehensive immigration support for individuals and businesses in Zambia.
          </p>
        </div>

        <div className="mb-12">
          <div className="grid md:grid-cols-3 gap-6">
            {immigrationPackages.map((tier) => (
              <PricingCard key={tier.name} tier={tier} />
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-6 text-center">
            Zambia Permit Services
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {permitServices.map((service) => (
              <Card key={service.name} className="p-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">{service.name}</span>
                  <span className="text-primary font-bold">{service.price}</span>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link href="/immigration">
              <Button variant="outline">View All Immigration Services</Button>
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6">
            <h4 className="font-semibold mb-4 text-primary border-b pb-2">
              Stash Laundry Services
            </h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex justify-between items-center">
                <span>Basic Plan</span>
                <span className="font-bold text-foreground">K35/KG</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Standard Plan</span>
                <span className="font-bold text-foreground">K60/KG</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Premium Plan</span>
                <span className="font-bold text-foreground">K120/KG</span>
              </li>
            </ul>
            <Link href="/laundry">
              <Button variant="ghost" className="p-0 mt-4 text-primary h-auto">
                View All Laundry Prices
              </Button>
            </Link>
          </Card>

          <Card className="p-6">
            <h4 className="font-semibold mb-4 text-primary border-b pb-2">
              Stash Media Services
            </h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex justify-between items-center">
                <span>Logo Design</span>
                <span className="font-bold text-foreground">K750</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Company Profile</span>
                <span className="font-bold text-foreground">K1,500</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Business Cards</span>
                <span className="font-bold text-foreground">K150</span>
              </li>
            </ul>
            <Link href="/marketing">
              <Button variant="ghost" className="p-0 mt-4 text-primary h-auto">
                View All Media Prices
              </Button>
            </Link>
          </Card>

          <Card className="p-6">
            <h4 className="font-semibold mb-4 text-primary border-b pb-2">
              Stash Lending Services
            </h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex justify-between items-center">
                <span>1 Week Loan</span>
                <span className="font-bold text-foreground">10% interest</span>
              </li>
              <li className="flex justify-between items-center">
                <span>2 Weeks Loan</span>
                <span className="font-bold text-foreground">20% interest</span>
              </li>
              <li className="flex justify-between items-center">
                <span>3-4 Weeks Loan</span>
                <span className="font-bold text-foreground">30-35% interest</span>
              </li>
            </ul>
            <p className="text-xs text-muted-foreground mt-2">Collateral-based loans</p>
            <Link href="/lending">
              <Button variant="ghost" className="p-0 mt-4 text-primary h-auto">
                View All Lending Options
              </Button>
            </Link>
          </Card>
        </div>
      </div>
    </section>
  );
}
