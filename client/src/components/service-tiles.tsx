import { Link } from "wouter";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Shirt, Megaphone, Banknote, ArrowRight } from "lucide-react";

interface ServiceItem {
  id: string;
  brandName: string;
  subtitle: string;
  shortDescription: string;
  icon: typeof Globe;
  href: string;
  color: string;
}

const services: ServiceItem[] = [
  {
    id: "immigration",
    brandName: "Stash Leading",
    subtitle: "Immigration Services",
    shortDescription: "Expert guidance for visa applications, work permits, and immigration processes in Zambia.",
    icon: Globe,
    href: "/immigration",
    color: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  },
  {
    id: "laundry",
    brandName: "Stash Laundry",
    subtitle: "& Cleaning Services",
    shortDescription: "Professional laundry and dry cleaning services with pickup and delivery options.",
    icon: Shirt,
    href: "/laundry",
    color: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  },
  {
    id: "media",
    brandName: "Stash Media",
    subtitle: "Design & Marketing",
    shortDescription: "Digital marketing, branding, and promotional strategies to grow your business.",
    icon: Megaphone,
    href: "/marketing",
    color: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
  },
  {
    id: "loans",
    brandName: "Stash Lending",
    subtitle: "Collateral Loans",
    shortDescription: "Collateral-based loans with competitive rates for personal and business needs.",
    icon: Banknote,
    href: "/lending",
    color: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  },
];

export function ServiceTiles() {
  return (
    <section id="our-work" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <p className="text-sm uppercase tracking-wide text-primary font-medium">Display Of Our Work</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold" data-testid="text-services-title">
            Our Brands
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Comprehensive solutions across multiple industries under the Stash Leading Services umbrella.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <Link key={service.id} href={service.href}>
                <Card className="group h-full hover-elevate cursor-pointer transition-all duration-300" data-testid={`card-service-${service.id}`}>
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${service.color}`}>
                        <IconComponent className="w-7 h-7" />
                      </div>
                      <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <CardTitle className="text-xl" data-testid={`text-service-title-${service.id}`}>
                      {service.brandName}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground font-medium">{service.subtitle}</p>
                    <CardDescription className="text-base" data-testid={`text-service-desc-${service.id}`}>
                      {service.shortDescription}
                    </CardDescription>
                    <span className="text-sm text-primary font-medium">
                      Learn More
                    </span>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
