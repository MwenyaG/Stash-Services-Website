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

const servicePackages = [
  {
    name: "Standard Plan",
    price: "K2,000",
    priceNote: "per Application",
    description: "Ideal for clients who already have their documents prepared",
    features: [
      "Uploading and submission to the Immigration Portal",
      "Basic application monitoring",
      "Client guidance on next procedural steps",
    ],
  },
  {
    name: "Premium Plan",
    price: "From K15,000+",
    priceNote: "varies based on complexity",
    description: "Full end-to-end application management",
    features: [
      "Full end-to-end application management",
      "Document preparation, verification & compliance checks",
      "Personalized consultation and expert guidance",
      "Active follow-ups with immigration authorities",
      "Handling of rejections, appeals & resubmissions",
      "Priority handling for complex or high-risk cases",
      "Legal advisory and representation where required",
    ],
    highlighted: true,
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
              <Label htmlFor="serviceType">Service Type</Label>
              <Select
                value={formData.serviceType}
                onValueChange={(value) =>
                  setFormData({ ...formData, serviceType: value })
                }
              >
                <SelectTrigger data-testid="select-booking-service">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Employment Permit">
                    Employment Permit
                  </SelectItem>
                  <SelectItem value="Investor Permit">
                    Investor Permit
                  </SelectItem>
                  <SelectItem value="Residence Permit">
                    Residence Permit
                  </SelectItem>
                  <SelectItem value="Business Visa">Business Visa</SelectItem>
                  <SelectItem value="Transit Visa">Transit Visa</SelectItem>
                  <SelectItem value="Visiting Permit">
                    Visiting Permit
                  </SelectItem>
                  <SelectItem value="Immigration Appeal">
                    Immigration Appeal
                  </SelectItem>
                  <SelectItem value="Status Regularization">
                    Status Regularization
                  </SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Tell us about your situation</Label>
            <Textarea
              id="message"
              placeholder="Describe your immigration needs, current status, and any specific requirements..."
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
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">
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
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              data-testid="text-immigration-title"
            >
              Immigration &
              <span className="text-primary"> Consultancy Services</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-4">
              Professional consultancy firm specializing in immigration, legal
              compliance, and advisory services in Zambia.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              We assist individuals, investors, and corporate entities in
              navigating complex immigration procedures efficiently, lawfully,
              and with confidence.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#booking"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("booking")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                data-testid="link-immigration-consult"
              >
                <Button size="lg" data-testid="button-immigration-consult">
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
                data-testid="link-immigration-services"
              >
                <Button
                  size="lg"
                  variant="outline"
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
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">
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
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">
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
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="text-center space-y-4 mb-12">
            <p className="text-sm uppercase tracking-wide text-primary font-medium">
              Service Packages
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Our Service Plans
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Choose the package that best suits your needs. Transparent pricing
              and clear communication.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {servicePackages.map((pkg) => (
              <Card
                key={pkg.name}
                className={`relative ${pkg.highlighted ? "border-primary shadow-lg" : ""}`}
                data-testid={`card-package-${pkg.name.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {pkg.highlighted && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                    Recommended
                  </Badge>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-primary">
                      {pkg.price}
                    </span>
                    <p className="text-sm text-muted-foreground mt-1">
                      {pkg.priceNote}
                    </p>
                  </div>
                  <CardDescription className="mt-4">
                    {pkg.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
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
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-sm uppercase tracking-wide text-primary font-medium mb-4">
                Get Started
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Book a Consultation
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
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
