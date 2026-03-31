import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BrandLogo } from "@/components/brand-logo";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Globe,
  PenTool,
  BarChart3,
  Users,
  Megaphone,
  TrendingUp,
  AlertCircle,
  FileImage,
  Palette,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import mediaLogo from "@/assets/stash-media-logo.png";
import { submitToFormSubmit } from "@/lib/formsubmit";

const features = [
  {
    icon: Palette,
    title: "Logo Design",
    description:
      "Professional logo design that represents your brand identity perfectly.",
  },
  {
    icon: FileImage,
    title: "Print Design",
    description:
      "Business cards, flyers, posters, brochures, and all your print media needs.",
  },
  {
    icon: PenTool,
    title: "Brand Identity",
    description:
      "Complete brand guidelines, letterheads, and visual identity development.",
  },
  {
    icon: Globe,
    title: "Digital Design",
    description:
      "Social media covers, web banners, and digital marketing materials.",
  },
  {
    icon: Users,
    title: "Social Media",
    description:
      "Engaging content creation and management across all platforms.",
  },
  {
    icon: TrendingUp,
    title: "Marketing Strategy",
    description: "Customized marketing plans to grow your business effectively.",
  },
];

const designPrices = [
  { item: "Company Profile", price: "K1,500" },
  { item: "Logo", price: "K750" },
  { item: "Business Cards", price: "K150" },
  { item: "Flyers", price: "K250" },
  { item: "Pull Up Banner", price: "K300" },
  { item: "Poster", price: "K200" },
  { item: "Letter Head", price: "K200" },
  { item: "Banner", price: "K200" },
  { item: "Brochures", price: "K450" },
  { item: "Refleat", price: "K200" },
  { item: "Product Posters", price: "K150" },
  { item: "Book Cover", price: "K200" },
  { item: "Facebook Cover", price: "K150" },
  { item: "Song Cover", price: "K500" },
  { item: "Birthday Poster", price: "K150" },
  { item: "Food Menu", price: "K250" },
];

const importantNotes = [
  "Deposits must be made before starting any project",
  "Printing prices are not included in the prices above",
  "Revisions are included (up to 3 rounds)",
  "Final files delivered in all required formats",
];

function MediaConsultationForm() {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    email: "",
    phone: "",
    serviceInterest: "",
    budgetRange: "",
    timeline: "",
    projectBrief: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    submitToFormSubmit({
      subject: `Media Consultation Request - ${formData.serviceInterest || "General Media Services"}`,
      replyTo: formData.email,
      fields: {
        name: formData.name,
        business_name: formData.businessName,
        email: formData.email,
        phone: formData.phone,
        service_interest: formData.serviceInterest,
        budget_range: formData.budgetRange,
        preferred_timeline: formData.timeline,
        project_brief: formData.projectBrief,
      },
    });

    setFormData({
      name: "",
      businessName: "",
      email: "",
      phone: "",
      serviceInterest: "",
      budgetRange: "",
      timeline: "",
      projectBrief: "",
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Get a Free Consultation</CardTitle>
        <CardDescription>
          Tell us what you need and we&apos;ll reach out with the right creative direction.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="media-name">Full Name</Label>
              <Input
                id="media-name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="John Doe"
                required
                data-testid="input-media-name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="media-business">Business / Brand Name</Label>
              <Input
                id="media-business"
                value={formData.businessName}
                onChange={(e) =>
                  setFormData({ ...formData, businessName: e.target.value })
                }
                placeholder="Acme Creative"
                required
                data-testid="input-media-business"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="media-email">Email</Label>
              <Input
                id="media-email"
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="john@example.com"
                required
                data-testid="input-media-email"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="media-phone">Phone / WhatsApp</Label>
              <Input
                id="media-phone"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                placeholder="+260 97..."
                required
                data-testid="input-media-phone"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="media-service">Service Needed</Label>
              <Select
                value={formData.serviceInterest}
                onValueChange={(value) =>
                  setFormData({ ...formData, serviceInterest: value })
                }
              >
                <SelectTrigger id="media-service" data-testid="select-media-service">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Logo Design">Logo Design</SelectItem>
                  <SelectItem value="Company Profile">Company Profile</SelectItem>
                  <SelectItem value="Print Design">Print Design</SelectItem>
                  <SelectItem value="Social Media Content">Social Media Content</SelectItem>
                  <SelectItem value="Brand Identity">Brand Identity</SelectItem>
                  <SelectItem value="Digital Design">Digital Design</SelectItem>
                  <SelectItem value="Marketing Strategy">Marketing Strategy</SelectItem>
                  <SelectItem value="Mixed Project">Mixed Project</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="media-budget">Estimated Budget</Label>
              <Select
                value={formData.budgetRange}
                onValueChange={(value) =>
                  setFormData({ ...formData, budgetRange: value })
                }
              >
                <SelectTrigger id="media-budget" data-testid="select-media-budget">
                  <SelectValue placeholder="Choose a budget range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Below K500">Below K500</SelectItem>
                  <SelectItem value="K500 - K1,500">K500 - K1,500</SelectItem>
                  <SelectItem value="K1,500 - K5,000">K1,500 - K5,000</SelectItem>
                  <SelectItem value="Above K5,000">Above K5,000</SelectItem>
                  <SelectItem value="Need Recommendation">Need Recommendation</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="media-timeline">Preferred Timeline</Label>
            <Input
              id="media-timeline"
              value={formData.timeline}
              onChange={(e) =>
                setFormData({ ...formData, timeline: e.target.value })
              }
              placeholder="e.g. Need first draft within 5 days"
              required
              data-testid="input-media-timeline"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="media-brief">Project Brief</Label>
            <Textarea
              id="media-brief"
              value={formData.projectBrief}
              onChange={(e) =>
                setFormData({ ...formData, projectBrief: e.target.value })
              }
              placeholder="Describe the deliverables, style, channels, and any references you want us to use."
              className="min-h-32 resize-none"
              required
              data-testid="input-media-brief"
            />
          </div>

          <Button type="submit" size="lg" className="w-full" data-testid="button-media-submit">
            Get Free Consultation
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

export default function Marketing() {
  return (
    <div>
      <section className="py-16 md:py-24 bg-gradient-to-br from-purple-500/10 via-background to-primary/5">
          <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
          <div className="max-w-3xl">
            <BrandLogo
              src={mediaLogo} 
              alt="Stash Media Services" 
              variant="hero"
              testId="img-media-logo"
            />
            <Badge className="mb-4 bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20">
              Media Services
            </Badge>
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              data-testid="text-marketing-title"
            >
              Professional Design &
              <span className="text-primary"> Media Services</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8">
              From logos to marketing materials, we create stunning designs that
              make your brand stand out. Quality design at affordable prices.
            </p>
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4">
              <a
                href="#consultation"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("consultation")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full sm:w-auto"
                data-testid="link-marketing-quote"
              >
                <Button size="lg" className="w-full sm:w-auto" data-testid="button-marketing-quote">
                  Get a Free Consultation
                </Button>
              </a>
            </div>
            <div className="mt-6 space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+260 962 104 857</span>
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
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <p className="text-sm uppercase tracking-wide text-primary font-medium">
              Our Expertise
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Full-Service Design & Media
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {features.map((feature) => (
              <Card key={feature.title} className="text-center">
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-purple-500/10 flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-7 h-7 text-purple-600 dark:text-purple-400" />
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

      <section id="pricing" className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <p className="text-sm uppercase tracking-wide text-primary font-medium">
              Price List
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Design Services Pricing
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Transparent pricing for all our design and media services. Quality work at competitive rates.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Palette className="w-5 h-5 text-primary" />
                  Design Services
                </CardTitle>
                <CardDescription>Professional design for all your business needs</CardDescription>
              </CardHeader>
              <CardContent>
                <Table className="min-w-[420px]">
                  <TableHeader>
                    <TableRow>
                      <TableHead>Service</TableHead>
                      <TableHead className="text-right">Price</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {designPrices.slice(0, 8).map((item) => (
                      <TableRow key={item.item} data-testid={`row-design-${item.item.toLowerCase().replace(/\s+/g, '-')}`}>
                        <TableCell className="font-medium">{item.item}</TableCell>
                        <TableCell className="text-right font-semibold text-primary">{item.price}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileImage className="w-5 h-5 text-primary" />
                  Print & Digital Media
                </CardTitle>
                <CardDescription>Marketing materials and digital content</CardDescription>
              </CardHeader>
              <CardContent>
                <Table className="min-w-[420px]">
                  <TableHeader>
                    <TableRow>
                      <TableHead>Service</TableHead>
                      <TableHead className="text-right">Price</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {designPrices.slice(8).map((item) => (
                      <TableRow key={item.item} data-testid={`row-media-${item.item.toLowerCase().replace(/\s+/g, '-')}`}>
                        <TableCell className="font-medium">{item.item}</TableCell>
                        <TableCell className="text-right font-semibold text-primary">{item.price}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-8 border-amber-500/50 bg-amber-500/5 max-w-4xl mx-auto">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Important Notes</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    {importantNotes.map((note, index) => (
                      <li key={index}>{note}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="consultation" className="py-16 md:py-24">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-10 items-start">
            <div>
              <p className="text-sm uppercase tracking-wide text-primary font-medium mb-4">
                Start Your Project
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Media Brief & Consultation
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-8">
                Share the creative work you need and we&apos;ll reply with the best-fit service,
                estimated scope, and next steps for delivery.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                <Card className="p-5">
                  <h3 className="font-semibold mb-2">Best For</h3>
                  <p className="text-sm text-muted-foreground">
                    Logos, company profiles, flyers, posters, social media content, and
                    complete branding projects.
                  </p>
                </Card>
                <Card className="p-5">
                  <h3 className="font-semibold mb-2">What We Need</h3>
                  <p className="text-sm text-muted-foreground">
                    Your brand name, preferred service, rough budget, timeline, and the
                    kind of look or campaign you want us to deliver.
                  </p>
                </Card>
              </div>
            </div>

            <MediaConsultationForm />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Elevate Your Brand?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Let&apos;s create stunning designs that make your business stand out from the competition.
          </p>
          <a
            href="#consultation"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("consultation")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-block w-full sm:w-auto"
          >
            <Button size="lg" className="w-full sm:w-auto" data-testid="button-marketing-cta">
              Start Your Project
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
