import { useState } from "react";
import { Link } from "wouter";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { BrandLogo } from "@/components/brand-logo";
import { submitToFormSubmit } from "@/lib/formsubmit";
import {
  Check,
  Globe,
  FileCheck,
  Users,
  Clock,
  Shield,
  BookOpen,
  Send,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import leadingLogo from "@/assets/stash-leading-logo.png";

const features = [
  {
    icon: Globe,
    title: "Zambia Expertise",
    description:
      "Proven expertise in Zambian immigration procedures and regulations.",
  },
  {
    icon: FileCheck,
    title: "Document Preparation",
    description: "Document preparation, verification, and compliance checks.",
  },
  {
    icon: Users,
    title: "Personalized Service",
    description:
      "Personalized consultation and expert guidance for your unique situation.",
  },
  {
    icon: Clock,
    title: "Timely Processing",
    description: "Reduced risk of rejection through professional handling.",
  },
  {
    icon: Shield,
    title: "Compliance Assured",
    description:
      "Strong understanding of compliance and regulatory requirements.",
  },
  {
    icon: BookOpen,
    title: "Ongoing Support",
    description: "Dedicated client support from submission to final decision.",
  },
];

type ServicePackage = {
  name: string;
  price: string;
  priceNote: string;
  description: string;
  features: string[];
  whyChoose: string;
  addOns?: string[];
  highlighted?: boolean;
  badge?: string;
};

const servicePackages: ServicePackage[] = [
  {
    name: "Consultation Package",
    price: "From K500+",
    priceNote: "per session",
    description:
      "Best for individuals or businesses exploring immigration options or preparing applications.",
    features: [
      "One-on-one consultation to assess your immigration or permit needs",
      "Guidance on visa types, investor permits, and employment permits",
      "Initial labour law and compliance overview",
      "Comprehensive document audit and review",
      "Identification of missing, incomplete, or improperly prepared documents",
      "Recommendations to make your application audit-ready",
    ],
    addOns: [
      "Document sourcing or notarization: custom pricing",
      "Labour advisory consultation: +K1,500",
    ],
    whyChoose:
      "Get clarity and confidence before you submit. This package helps reduce the risk of rejection, fines, delays, and avoidable documentation issues.",
  },
  {
    name: "Basic Plan",
    price: "From K2,000",
    priceNote: "per case",
    description:
      "Best for clients managing straightforward applications who want professional guidance without handing over the full case.",
    features: [
      "Tailored document checklist for your application",
      "Document verification and basic review",
      "Identification of missing or incorrect documents",
      "Review of your completed application before submission",
      "Error correction and improvement suggestions",
      "One consultation session, in-person or virtual",
      "Clear guidance on process requirements and next steps",
    ],
    whyChoose:
      "Ideal if you want to submit independently while avoiding costly mistakes, delays, and rejection caused by avoidable errors.",
  },
  {
    name: "Standard Plan",
    price: "K6,000+",
    priceNote: "most popular package",
    description:
      "Best for individuals and SMEs who want reliable professional support, stronger applications, and less stress during the process.",
    features: [
      "Form filling assistance that is accurate and error-free",
      "Document preparation guidance and comprehensive review",
      "Professionally drafted cover letters",
      "Application submission on your behalf",
      "Active follow-ups with immigration authorities",
      "Status updates and support on additional requirements",
      "Basic legal compliance checks",
      "Appeal letter drafting if the case is rejected",
      "Ongoing WhatsApp and email support throughout the process",
    ],
    whyChoose:
      "This is the smart choice for serious applicants who want professional handling, continuous follow-ups, and a much stronger chance of approval. Even if challenges arise, appeal support means you are not left stranded.",
    highlighted: true,
    badge: "Most Popular",
  },
  {
    name: "Premium Package",
    price: "From K16,000",
    priceNote: "per case",
    description:
      "Best for serious clients who want full handling, compliance support, and peace of mind from start to finish.",
    features: [
      "Full preparation and submission of permits or visa applications",
      "Handling of employment, residence, or investor permits",
      "Detailed document review and verification",
      "Professionally drafted cover letters and formal responses",
      "Management of queries and compliance issues",
      "Appeal drafting for the same case if rejected",
      "Liaison with immigration authorities on your behalf",
      "Preparation for immigration inspections and document reviews",
      "Assigned case handler with ongoing WhatsApp and email support",
      "Priority follow-ups and regular progress updates until final decision",
    ],
    whyChoose:
      "Designed for clients who want everything handled professionally with minimal risk, stronger compliance, and expert attention at every stage.",
  },
];

const scopeOfServices = [
  "Employment Permit Applications",
  "Investor's Permit Applications",
  "Residence Permit Applications",
  "Business & Transit Visas",
  "Visiting Permits",
  "Immigration Appeals & Reconsiderations",
  "Legal & Compliance Advisory",
  "Report Orders and Immigration Status Regularization",
];

function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    submitToFormSubmit({
      subject: `Immigration Consultation Request - ${formData.serviceType || "General"}`,
      replyTo: formData.email,
      fields: {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service_type: formData.serviceType,
        message: formData.message,
      },
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      serviceType: "",
      message: "",
    });
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl">Book a Consultation</CardTitle>
        <CardDescription>
          Fill out the form below and we'll get back to you within 24 hours.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                data-testid="input-booking-name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                data-testid="input-booking-email"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone / WhatsApp</Label>
              <Input
                id="phone"
                placeholder="+260 97..."
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                required
                data-testid="input-booking-phone"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="serviceType">Package of Interest</Label>
              <Select
                value={formData.serviceType}
                onValueChange={(value) =>
                  setFormData({ ...formData, serviceType: value })
                }
              >
                <SelectTrigger data-testid="select-booking-service">
                  <SelectValue placeholder="Select a package" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Consultation Package">
                    Consultation Package
                  </SelectItem>
                  <SelectItem value="Basic Plan">Basic Plan</SelectItem>
                  <SelectItem value="Standard Plan">Standard Plan</SelectItem>
                  <SelectItem value="Premium Package">
                    Premium Package
                  </SelectItem>
                  <SelectItem value="Not Sure Yet">Not Sure Yet</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Tell us about your situation</Label>
            <Textarea
              id="message"
              placeholder="Describe your immigration needs, permit or visa type, current status, and any specific requirements..."
              className="min-h-32 resize-none"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              required
              data-testid="input-booking-message"
            />
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full"
            data-testid="button-booking-submit"
          >
            <Send className="w-4 h-4 mr-2" />
            Send Consultation Request
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

export default function Immigration() {
  return (
    <div>
      <section className="py-16 md:py-24 bg-gradient-to-br from-emerald-500/10 via-background to-primary/5">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
          <div className="max-w-3xl">
            <BrandLogo
              src={leadingLogo}
              alt="Stash Leading Services"
              variant="hero"
              testId="img-leading-logo"
            />
            <Badge className="mb-4 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20">
              Stash Leading Services
            </Badge>
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              data-testid="text-immigration-title"
            >
              Immigration &
              <span className="text-primary"> Consultancy Services</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-4">
              Professional consultancy firm specializing in immigration, legal
              compliance, and advisory services in Zambia.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground mb-8">
              We assist individuals, investors, and corporate entities in
              navigating complex immigration procedures efficiently, lawfully,
              and with confidence.
            </p>
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4">
              <a
                href="#booking"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("booking")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full sm:w-auto"
                data-testid="link-immigration-consult"
              >
                <Button size="lg" className="w-full sm:w-auto" data-testid="button-immigration-consult">
                  Book Now
                </Button>
              </a>
              <a
                href="#pricing"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("pricing")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full sm:w-auto"
                data-testid="link-immigration-services"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto"
                  data-testid="button-immigration-services"
                >
                  View Services
                </Button>
              </a>
            </div>
            <div className="mt-6 space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+260 973 807 864</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>sales@stashleading.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>26570, Lunu Rd, Lusaka 10101</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
          <div className="text-center space-y-4 mb-12">
            <p className="text-sm uppercase tracking-wide text-primary font-medium">
              Our Approach
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Why Choose Stash Leading Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our approach is built on accuracy, compliance, professionalism,
              and timely delivery, ensuring our clients achieve successful
              outcomes.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <Card key={feature.title} className="text-center">
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-emerald-500/10 flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
          <div className="text-center space-y-4 mb-12">
            <p className="text-sm uppercase tracking-wide text-primary font-medium">
              Scope of Services
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Comprehensive Immigration Support
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We manage both individual applications and corporate immigration
              portfolios for companies employing expatriates in Zambia.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {scopeOfServices.map((service) => (
              <div
                key={service}
                className="flex items-center gap-3 p-4 rounded-lg bg-background border"
              >
                <Check className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span className="text-sm font-medium">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-16 md:py-24">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
          <div className="text-center space-y-4 mb-12">
            <p className="text-sm uppercase tracking-wide text-primary font-medium">
              Service Packages
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Our Service Plans
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              From a focused consultation to full case handling, our immigration
              packages are structured to match different levels of support,
              complexity, and compliance needs.
            </p>
          </div>

          <div className="grid xl:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
            {servicePackages.map((pkg) => (
              <Card
                key={pkg.name}
                className={`relative ${pkg.highlighted ? "border-primary shadow-lg" : ""}`}
                data-testid={`card-package-${pkg.name.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {pkg.highlighted && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                    {pkg.badge ?? "Recommended"}
                  </Badge>
                )}
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-primary">
                      {pkg.price}
                    </span>
                    <p className="text-sm text-muted-foreground mt-1">
                      {pkg.priceNote}
                    </p>
                  </div>
                  <CardDescription className="mt-4 text-sm leading-6">
                    {pkg.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="rounded-xl border bg-muted/30 p-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                      Why Choose This Package
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground leading-6">
                      {pkg.whyChoose}
                    </p>
                  </div>
                  <ul className="space-y-3">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {pkg.addOns && (
                    <div className="rounded-xl border border-dashed p-4">
                      <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                        Optional Add-Ons
                      </p>
                      <ul className="mt-3 space-y-2">
                        {pkg.addOns.map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                            <span className="text-sm text-muted-foreground">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <Link href="#booking">
                    <Button
                      className="w-full mt-4"
                      variant={pkg.highlighted ? "default" : "outline"}
                    >
                      Book Now
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="booking" className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
            <div>
              <p className="text-sm uppercase tracking-wide text-primary font-medium mb-4">
                Get Started
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Book a Consultation
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-8">
                We act not just as service providers, but as strategic partners
                committed to our clients' long-term success in Zambia.
              </p>

              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="font-semibold mb-4">
                    Client Responsibilities
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      Provide accurate and complete documentation
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      Respond promptly to requests for additional information
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      Comply with all applicable immigration laws and
                      regulations
                    </li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold mb-4">Contact Information</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-primary" />
                      <a
                        href="tel:+260973807864"
                        className="hover:text-primary transition-colors"
                      >
                        +260 973 807 864 (Phone/WhatsApp)
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-primary" />
                      <a
                        href="mailto:sales@stashleading.com"
                        className="hover:text-primary transition-colors"
                      >
                        sales@stashleading.com
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>26570, Lunu Rd, Lusaka 10101, Zambia</span>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            <BookingForm />
          </div>
        </div>
      </section>
    </div>
  );
}
