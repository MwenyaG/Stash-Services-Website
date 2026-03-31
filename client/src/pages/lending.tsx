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
  Check,
  Banknote,
  Clock,
  Shield,
  Laptop,
  Car,
  Tv,
  Home,
  Gamepad2,
} from "lucide-react";
import lendingLogo from "@/assets/stash-lending-logo.png";
import { submitToFormSubmit } from "@/lib/formsubmit";

const features = [
  {
    icon: Banknote,
    title: "Low Interest Rates",
    description:
      "Competitive rates starting from just 10% for short-term loans.",
  },
  {
    icon: Clock,
    title: "Quick Approval",
    description:
      "Fast application processing with same-day disbursement available.",
  },
  {
    icon: Shield,
    title: "Secure & Transparent",
    description:
      "Your collateral is safely stored and returned upon full repayment.",
  },
];

const collateralItems = [
  { icon: Laptop, name: "Laptops" },
  { icon: Car, name: "Vehicles" },
  { icon: Tv, name: "Fridges & TVs" },
  { icon: Gamepad2, name: "Games & Electronics" },
  { icon: Home, name: "Houses" },
];

const loanRates = [
  {
    duration: "1 Week",
    rate: "15%",
    description: "Short-term quick cash",
    features: ["Quick disbursement", "Low interest", "Easy repayment"],
  },
  {
    duration: "2 Weeks",
    rate: "20%",
    description: "Two-week flexible loan",
    features: [
      "Extended repayment",
      "Same day approval",
      "Secure collateral storage",
    ],
    highlighted: true,
  },
  {
    duration: "3 Weeks",
    rate: "30%",
    description: "Three-week financial support",
    features: ["More time to repay", "Flexible terms", "Professional handling"],
  },
  {
    duration: "4 Weeks",
    rate: "35%",
    description: "Full month loan period",
    features: [
      "Maximum duration",
      "Competitive rate",
      "Full month flexibility",
    ],
  },
];

function LoanApplicationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    collateralType: "",
    collateralDescription: "",
    estimatedCollateralValue: "",
    desiredLoanAmount: "",
    preferredDuration: "",
    incomeSource: "",
    repaymentPlan: "",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    submitToFormSubmit({
      subject: `Loan Application Request - ${formData.collateralType || "Collateral Loan"}`,
      replyTo: formData.email,
      fields: {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        collateral_type: formData.collateralType,
        collateral_description: formData.collateralDescription,
        estimated_collateral_value: formData.estimatedCollateralValue,
        desired_loan_amount: formData.desiredLoanAmount,
        preferred_duration: formData.preferredDuration,
        source_of_income: formData.incomeSource,
        repayment_plan: formData.repaymentPlan,
        additional_notes: formData.notes,
      },
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      collateralType: "",
      collateralDescription: "",
      estimatedCollateralValue: "",
      desiredLoanAmount: "",
      preferredDuration: "",
      incomeSource: "",
      repaymentPlan: "",
      notes: "",
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Apply for a Loan</CardTitle>
        <CardDescription>
          Share your collateral and loan needs so we can assess the request quickly.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="loan-name">Full Name</Label>
              <Input
                id="loan-name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="John Doe"
                required
                data-testid="input-loan-name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="loan-email">Email</Label>
              <Input
                id="loan-email"
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="john@example.com"
                required
                data-testid="input-loan-email"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="loan-phone">Phone / WhatsApp</Label>
              <Input
                id="loan-phone"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                placeholder="+260 97..."
                required
                data-testid="input-loan-phone"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="loan-collateral-type">Collateral Type</Label>
              <Select
                value={formData.collateralType}
                onValueChange={(value) =>
                  setFormData({ ...formData, collateralType: value })
                }
              >
                <SelectTrigger id="loan-collateral-type" data-testid="select-loan-collateral">
                  <SelectValue placeholder="Select collateral type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Laptop">Laptop</SelectItem>
                  <SelectItem value="Vehicle">Vehicle</SelectItem>
                  <SelectItem value="Fridge / TV">Fridge / TV</SelectItem>
                  <SelectItem value="Game Console / Electronics">Game Console / Electronics</SelectItem>
                  <SelectItem value="House">House</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="loan-collateral-description">Collateral Description</Label>
            <Textarea
              id="loan-collateral-description"
              value={formData.collateralDescription}
              onChange={(e) =>
                setFormData({ ...formData, collateralDescription: e.target.value })
              }
              placeholder="Model, condition, registration details, or any useful information for valuation."
              className="min-h-28 resize-none"
              required
              data-testid="input-loan-collateral-description"
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="loan-collateral-value">Estimated Collateral Value</Label>
              <Input
                id="loan-collateral-value"
                value={formData.estimatedCollateralValue}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    estimatedCollateralValue: e.target.value,
                  })
                }
                placeholder="e.g. K15,000"
                required
                data-testid="input-loan-collateral-value"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="loan-amount">Desired Loan Amount</Label>
              <Input
                id="loan-amount"
                value={formData.desiredLoanAmount}
                onChange={(e) =>
                  setFormData({ ...formData, desiredLoanAmount: e.target.value })
                }
                placeholder="e.g. K6,000"
                required
                data-testid="input-loan-amount"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="loan-duration">Preferred Loan Duration</Label>
              <Select
                value={formData.preferredDuration}
                onValueChange={(value) =>
                  setFormData({ ...formData, preferredDuration: value })
                }
              >
                <SelectTrigger id="loan-duration" data-testid="select-loan-duration">
                  <SelectValue placeholder="Select duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1 Week">1 Week</SelectItem>
                  <SelectItem value="2 Weeks">2 Weeks</SelectItem>
                  <SelectItem value="3 Weeks">3 Weeks</SelectItem>
                  <SelectItem value="4 Weeks">4 Weeks</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="loan-income">Source of Income</Label>
              <Input
                id="loan-income"
                value={formData.incomeSource}
                onChange={(e) =>
                  setFormData({ ...formData, incomeSource: e.target.value })
                }
                placeholder="Salary, business income, contracts, etc."
                required
                data-testid="input-loan-income"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="loan-repayment">Repayment Plan</Label>
            <Input
              id="loan-repayment"
              value={formData.repaymentPlan}
              onChange={(e) =>
                setFormData({ ...formData, repaymentPlan: e.target.value })
              }
              placeholder="When and how you expect to repay the loan"
              required
              data-testid="input-loan-repayment"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="loan-notes">Additional Notes</Label>
            <Textarea
              id="loan-notes"
              value={formData.notes}
              onChange={(e) =>
                setFormData({ ...formData, notes: e.target.value })
              }
              placeholder="Anything else we should know before contacting you?"
              className="min-h-28 resize-none"
              data-testid="input-loan-notes"
            />
          </div>

          <Button type="submit" size="lg" className="w-full" data-testid="button-loan-submit">
            Submit Loan Request
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

export default function Lending() {
  return (
    <div>
      <section className="py-16 md:py-24 bg-gradient-to-br from-amber-500/10 via-background to-primary/5">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
          <div className="max-w-3xl">
            <BrandLogo
              src={lendingLogo}
              alt="Stash Lending Services"
              variant="hero"
              testId="img-lending-logo"
            />
            <Badge className="mb-4 bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20">
              Loan Services
            </Badge>
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              data-testid="text-lending-title"
            >
              Collateral Based
              <span className="text-primary"> Loans</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-4">
              Empowering Financial Futures, One Loan at a Time
            </p>
            <p className="text-base sm:text-lg text-muted-foreground mb-8">
              Get quick access to funds using your valuable items as collateral.
              Low interest rates, transparent terms, and fast approval.
            </p>
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4">
              <a
                href="#loan-application"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("loan-application")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full sm:w-auto"
                data-testid="link-lending-apply"
              >
                <Button size="lg" className="w-full sm:w-auto" data-testid="button-lending-apply">
                  Apply Now
                </Button>
              </a>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span>Phone: +260 968 650 955</span>
              <span>Alt: +260 774 861 486</span>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <p className="text-sm uppercase tracking-wide text-primary font-medium">
              Why Choose Us
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Lending Made Simple
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mb-12">
            {features.map((feature) => (
              <Card key={feature.title} className="text-center">
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-amber-500/10 flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-7 h-7 text-amber-600 dark:text-amber-400" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="p-6">
            <h3 className="font-semibold text-lg mb-4 text-center">
              Accepted Collateral
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {collateralItems.map((item) => (
                <div
                  key={item.name}
                  className="flex flex-col items-center gap-2 p-4 rounded-lg bg-muted/50"
                >
                  <item.icon className="w-8 h-8 text-primary" />
                  <span className="text-sm font-medium text-center">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>
      <section id="rates" className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <p className="text-sm uppercase tracking-wide text-primary font-medium">
              Interest Rates
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">Loan @ Low Rates</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Choose the loan duration that works best for you. Simple,
              transparent pricing.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {loanRates.map((loan) => (
              <Card
                key={loan.duration}
                className={`relative ${loan.highlighted ? "border-primary shadow-lg" : ""}`}
                data-testid={`card-loan-${loan.duration.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {loan.highlighted && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                    Popular
                  </Badge>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl">{loan.duration}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl sm:text-5xl font-bold text-primary">
                      {loan.rate}
                    </span>
                    <span className="text-muted-foreground ml-1">interest</span>
                  </div>
                  <CardDescription className="mt-2">
                    {loan.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {loan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#loan-application"
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById("loan-application")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    <Button
                      className="w-full mt-4"
                      variant={loan.highlighted ? "default" : "outline"}
                    >
                      Apply Now
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="p-6 mt-8">
            <h3 className="font-semibold text-lg mb-4">How It Works</h3>
            <ul className="grid sm:grid-cols-2 gap-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                Bring your item for valuation
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                Receive instant loan offer based on item value
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                Item securely stored during loan period
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                Repay loan + interest to collect your item
              </li>
            </ul>
          </Card>
        </div>
      </section>
      <section id="loan-application" className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-10 items-start">
            <div>
              <p className="text-sm uppercase tracking-wide text-primary font-medium mb-4">
                Loan Intake
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Loan Application Form
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-8">
                This form helps us understand your collateral, preferred loan size,
                and repayment capacity before we contact you.
              </p>

              <div className="space-y-4">
                <Card className="p-5">
                  <h3 className="font-semibold mb-2">Prepare These Details</h3>
                  <p className="text-sm text-muted-foreground">
                    Collateral description, estimated market value, desired loan amount,
                    repayment timeline, and your best contact number.
                  </p>
                </Card>
                <Card className="p-5">
                  <h3 className="font-semibold mb-2">What Happens Next</h3>
                  <p className="text-sm text-muted-foreground">
                    We review your request, advise on likely valuation, then arrange
                    inspection and approval for the next available disbursement.
                  </p>
                </Card>
              </div>
            </div>

            <LoanApplicationForm />
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Quick Cash?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Contact us today to get a loan against your valuables. Fast approval
            and same-day disbursement available.
          </p>
          <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-3 sm:gap-4">
            <a href="tel:0968650955" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto" data-testid="button-lending-call">
                Call 0968 650 955
              </Button>
            </a>
            <a href="tel:0774861486" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto"
                data-testid="button-lending-call-alt"
              >
                Call 0774 861 486
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
