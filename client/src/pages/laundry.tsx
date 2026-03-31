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
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BrandLogo } from "@/components/brand-logo";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import {
  WashingMachine,
  Truck,
  Clock,
  Sparkles,
  Shirt,
  Leaf,
  AlertCircle,
  Phone,
  Mail,
  MapPin,
  ShoppingCart,
  Printer,
  Trash2,
  Send,
} from "lucide-react";
import laundryLogo from "@/assets/stash-laundry-logo.png";
import { submitToFormSubmit } from "@/lib/formsubmit";
import { useToast } from "@/hooks/use-toast";

const features = [
  {
    icon: WashingMachine,
    title: "Professional Equipment",
    description:
      "State-of-the-art washing machines and dryers for optimal cleaning results.",
  },
  {
    icon: Truck,
    title: "Pickup & Delivery",
    description: "Convenient door-to-door service for your busy schedule.",
  },
  {
    icon: Clock,
    title: "Express 24hrs Service",
    description: "Need it fast? Express service available for urgent needs.",
  },
  {
    icon: Sparkles,
    title: "Stain Removal",
    description: "Expert treatment for tough stains and delicate fabrics.",
  },
  {
    icon: Shirt,
    title: "Professional Pressing",
    description: "Crisp, wrinkle-free garments ready to wear.",
  },
  {
    icon: Leaf,
    title: "Quality Care",
    description: "Quality detergents and careful handling of all fabrics.",
  },
];

type PriceRow72 = { item: string; price72: string; express24: string };
type PriceRowSofa = { item: string; price72: string; transport: string };

const dryCleaningPrices: PriceRow72[] = [
  { item: "Two Piece Suit", price72: "K75.00", express24: "K140.00" },
  { item: "Three Piece Suit", price72: "K95.00", express24: "K155.00" },
  {
    item: "White Suit / Wedding Suit",
    price72: "K150.00",
    express24: "K200.00",
  },
  { item: "Leather Coat", price72: "K85.00", express24: "K145.00" },
  { item: "Wedding Dress", price72: "K375.00", express24: "K425.00" },
  { item: "Graduation Gown", price72: "K90.00", express24: "K150.00" },
  { item: "Jacket", price72: "K65.00", express24: "K125.00" },
  { item: "Military Uniform", price72: "K80.00", express24: "K140.00" },
  { item: "Longline Coat", price72: "K90.00", express24: "K150.00" },
];

const generalLaundryPrices: PriceRow72[] = [
  { item: "Robe", price72: "K50.00", express24: "K105.00" },
  { item: "Pyjamas", price72: "K50.00", express24: "K100.00" },
  { item: "Hoodie", price72: "K50.00", express24: "K110.00" },
  { item: "Plain Dress", price72: "K45.00", express24: "K105.00" },
  { item: "Smart Trousers", price72: "K35.00", express24: "K95.00" },
  { item: "Jean", price72: "K40.00", express24: "K100.00" },
  { item: "Short", price72: "K25.00", express24: "K85.00" },
  { item: "Skirt", price72: "K40.00", express24: "K85.00" },
  { item: "Shirts", price72: "K35.00", express24: "K95.00" },
  { item: "Scarf", price72: "K30.00", express24: "K90.00" },
  { item: "Vest", price72: "K20.00", express24: "K80.00" },
  { item: "T-shirt", price72: "K30.00", express24: "K90.00" },
  { item: "Lab Coat", price72: "K65.00", express24: "K125.00" },
  { item: "Work Suit", price72: "K70.00", express24: "K130.00" },
  { item: "Dinner Dress", price72: "K90.00", express24: "K150.00" },
  { item: "Pleated Dress", price72: "K100.00", express24: "K160.00" },
];

const beddingPrices: PriceRow72[] = [
  { item: "Blanket King", price72: "K150.00", express24: "K230.00" },
  { item: "Blanket Queen", price72: "K140.00", express24: "K220.00" },
  { item: "Blanket Double", price72: "K130.00", express24: "K210.00" },
  { item: "Blanket Single", price72: "K120.00", express24: "K200.00" },
  { item: "Fleece Blanket", price72: "K50.00", express24: "K110.00" },
  { item: "Duvet King", price72: "K150.00", express24: "K230.00" },
  { item: "Duvet Queen", price72: "K140.00", express24: "K220.00" },
  { item: "Duvet Double", price72: "K130.00", express24: "K210.00" },
  { item: "Duvet Single", price72: "K120.00", express24: "K200.00" },
  { item: "Bed Sheet", price72: "K45.00", express24: "K100.00" },
  { item: "Pillow", price72: "K60.00", express24: "K120.00" },
  { item: "Teddy Bear (Small)", price72: "K50.00", express24: "K100.00" },
  { item: "Teddy Bear (Big)", price72: "-", express24: "K100.00" },
];

const sofaMattressPrices: PriceRowSofa[] = [
  { item: "Sofa", price72: "K95.00", transport: "K200.00" },
  { item: "Mattress King", price72: "K370.00", transport: "K200.00" },
  { item: "Mattress Queen", price72: "K330.00", transport: "K200.00" },
  { item: "Mattress Double", price72: "K270.00", transport: "K200.00" },
  { item: "Mattress Single", price72: "K230.00", transport: "K200.00" },
  { item: "Head Board", price72: "K175.00", transport: "K200.00" },
  { item: "Dining Chairs", price72: "K40.00", transport: "K200.00" },
  { item: "Blinds", price72: "K60.00", transport: "K200.00" },
  { item: "Carpet (m²)", price72: "K50.00", transport: "K200.00" },
  { item: "Curtains (per kg)", price72: "K70.00", transport: "K200.00" },
  { item: "Door Mats", price72: "K25.00", transport: "K0.00" },
];

const shoesPrices: PriceRow72[] = [
  { item: "Leather Shoes", price72: "K50.00", express24: "K80.00" },
  { item: "Suede", price72: "K55.00", express24: "K85.00" },
  { item: "Sneakers", price72: "K50.00", express24: "K80.00" },
  { item: "Ladies Shoes", price72: "K45.00", express24: "K75.00" },
];

const importantNotes = [
  "Ironing only: +K30 of normal service",
  "Express 5-6hrs: +K100 of normal service",
  "Penalty for late collection: K25",
  "Collection without receipts shall not be granted",
];

type InvoiceItem = {
  id: string;
  category: string;
  item: string;
  serviceType: string;
  price: string;
  priceValue: number;
  qty: number;
};

function parsePrice(p: string): number {
  if (!p || p === "-") return 0;
  return parseFloat(p.replace("K", "").replace(",", "")) || 0;
}

function makeId(category: string, item: string, service: string) {
  return `${category}__${item}__${service}`;
}

export default function Laundry() {
  const { toast } = useToast();
  const [invoiceItems, setInvoiceItems] = useState<Map<string, InvoiceItem>>(
    new Map(),
  );
  const [invoiceOpen, setInvoiceOpen] = useState(false);
  const [quoteDetails, setQuoteDetails] = useState({
    name: "",
    email: "",
    phone: "",
    collectionAddress: "",
    turnaroundPreference: "",
    notes: "",
  });

  function toggleItem(
    category: string,
    item: string,
    serviceType: string,
    price: string,
  ) {
    const id = makeId(category, item, serviceType);
    const priceValue = parsePrice(price);
    if (priceValue === 0) return;
    setInvoiceItems((prev) => {
      const next = new Map(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.set(id, {
          id,
          category,
          item,
          serviceType,
          price,
          priceValue,
          qty: 1,
        });
      }
      return next;
    });
  }

  function updateQty(id: string, qty: number) {
    if (qty < 1) return;
    setInvoiceItems((prev) => {
      const next = new Map(prev);
      const entry = next.get(id);
      if (entry) next.set(id, { ...entry, qty });
      return next;
    });
  }

  function removeItem(id: string) {
    setInvoiceItems((prev) => {
      const next = new Map(prev);
      next.delete(id);
      return next;
    });
  }

  const isChecked = (category: string, item: string, service: string) =>
    invoiceItems.has(makeId(category, item, service));

  const total = Array.from(invoiceItems.values()).reduce(
    (sum, it) => sum + it.priceValue * it.qty,
    0,
  );

  function printInvoice() {
    const rows = Array.from(invoiceItems.values())
      .map(
        (it) =>
          `${it.item} (${it.serviceType}) x${it.qty} — ${it.price} each = K${(it.priceValue * it.qty).toFixed(2)}`,
      )
      .join("\n");
    const content = `STASH LAUNDRY SERVICES\n26570, Lunu Rd, Lusaka 10101, Zambia\nPhone: +260 973 848 122\n\nINVOICE\n${"=".repeat(40)}\n${rows}\n${"=".repeat(40)}\nTOTAL: K${total.toFixed(2)}\n\nThank you for choosing Stash Laundry!`;
    const win = window.open("", "_blank");
    if (win) {
      win.document.write(
        `<pre style="font-family:monospace;padding:2rem;font-size:14px;">${content}</pre>`,
      );
      win.document.close();
      win.print();
    }
  }

  function sendLaundryQuote() {
    if (
      !quoteDetails.name ||
      !quoteDetails.email ||
      !quoteDetails.phone ||
      !quoteDetails.collectionAddress
    ) {
      toast({
        title: "Missing Quote Details",
        description:
          "Please add your name, email, phone number, and collection address before requesting a quote.",
        variant: "destructive",
      });
      return;
    }

    if (invoiceItems.size === 0) {
      toast({
        title: "No Items Selected",
        description: "Add at least one laundry item before requesting a quote.",
        variant: "destructive",
      });
      return;
    }

    const selectedItems = Array.from(invoiceItems.values())
      .map(
        (it) =>
          `${it.item} | ${it.category} | ${it.serviceType} | Qty: ${it.qty} | Unit: ${it.price} | Subtotal: K${(it.priceValue * it.qty).toFixed(2)}`,
      )
      .join("\n");

    submitToFormSubmit({
      subject: `Laundry Quote Request - ${quoteDetails.name}`,
      replyTo: quoteDetails.email,
      fields: {
        customer_name: quoteDetails.name,
        email: quoteDetails.email,
        phone: quoteDetails.phone,
        collection_address: quoteDetails.collectionAddress,
        turnaround_preference: quoteDetails.turnaroundPreference,
        selected_items: selectedItems,
        estimated_total: `K${total.toFixed(2)}`,
        notes: quoteDetails.notes,
      },
    });

    toast({
      title: "Quote Request Opened",
      description: "Your laundry quote request has been opened in a new tab for delivery.",
    });
  }

  function PricingRow72({
    category,
    row,
  }: {
    category: string;
    row: PriceRow72;
  }) {
    const std = isChecked(category, row.item, "72hrs");
    const exp = isChecked(category, row.item, "Express 24hrs");
    const noStd = row.price72 === "-";
    const noExp = row.express24 === "-";
    return (
      <TableRow
        data-testid={`row-${category}-${row.item.toLowerCase().replace(/\s+/g, "-")}`}
      >
        <TableCell className="min-w-[170px] font-medium">{row.item}</TableCell>
        <TableCell className="min-w-[110px] text-right">
          <div className="flex items-center justify-end gap-2">
            <span className={noStd ? "text-muted-foreground" : ""}>
              {row.price72}
            </span>
            {!noStd && (
              <Checkbox
                checked={std}
                onCheckedChange={() =>
                  toggleItem(category, row.item, "72hrs", row.price72)
                }
                data-testid={`checkbox-${category}-${row.item.toLowerCase().replace(/\s+/g, "-")}-std`}
              />
            )}
          </div>
        </TableCell>
        <TableCell className="min-w-[130px] text-right">
          <div className="flex items-center justify-end gap-2">
            <span
              className={
                noExp ? "text-muted-foreground" : "text-primary font-medium"
              }
            >
              {row.express24}
            </span>
            {!noExp && (
              <Checkbox
                checked={exp}
                onCheckedChange={() =>
                  toggleItem(category, row.item, "Express 24hrs", row.express24)
                }
                data-testid={`checkbox-${category}-${row.item.toLowerCase().replace(/\s+/g, "-")}-exp`}
              />
            )}
          </div>
        </TableCell>
      </TableRow>
    );
  }

  function PricingRowSofa({ row }: { row: PriceRowSofa }) {
    const std = isChecked("sofa", row.item, "Price");
    return (
      <TableRow
        data-testid={`row-sofa-${row.item.toLowerCase().replace(/\s+/g, "-")}`}
      >
        <TableCell className="min-w-[170px] font-medium">{row.item}</TableCell>
        <TableCell className="min-w-[110px] text-right">
          <div className="flex items-center justify-end gap-2">
            <span>{row.price72}</span>
            <Checkbox
              checked={std}
              onCheckedChange={() =>
                toggleItem("sofa", row.item, "Price", row.price72)
              }
              data-testid={`checkbox-sofa-${row.item.toLowerCase().replace(/\s+/g, "-")}`}
            />
          </div>
        </TableCell>
        <TableCell className="min-w-[110px] text-right text-primary font-medium">
          {row.transport}
        </TableCell>
      </TableRow>
    );
  }

  return (
    <div>
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-500/10 via-background to-primary/5">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
          <div className="max-w-3xl">
            <BrandLogo
              src={laundryLogo}
              alt="Stash Laundry Services"
              variant="hero"
              testId="img-laundry-logo"
            />
            <Badge className="mb-4" data-testid="badge-laundry-location">
              Laundry and Cleaning Services
            </Badge>
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
              data-testid="text-laundry-title"
            >
              Professional Laundry & Cleaning Services
            </h1>
            <p
              className="text-base sm:text-lg text-muted-foreground mb-8"
              data-testid="text-laundry-description"
            >
              From everyday garments to specialty items, we provide
              comprehensive cleaning solutions with professional care and
              attention to detail.
            </p>
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4">
              <a
                href="#pricing"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("pricing")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full sm:w-auto"
                data-testid="link-laundry-pricing"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto"
                  data-testid="button-laundry-pricing"
                >
                  View Pricing
                </Button>
              </a>
            </div>
            <div className="mt-6 space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+260 973 848 122</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>sales@stashleading.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>26570, Lunu Rd, Lusaka 10101, Zambia</span>
              </div>
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
              Premium Laundry Services
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {features.map((feature) => (
              <Card key={feature.title} className="text-center">
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-7 h-7 text-primary" />
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
          <div className="text-center space-y-3 mb-8">
            <p className="text-sm uppercase tracking-widest text-primary font-medium">
              Price List
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Transparent Pricing
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Select items using the checkboxes and build your invoice
              instantly.
            </p>
          </div>

          <Tabs defaultValue="dry-cleaning" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList
                className="flex w-full justify-start gap-1 p-1 sm:w-auto"
                data-testid="tabs-pricing"
              >
                <TabsTrigger
                  value="dry-cleaning"
                  data-testid="tab-dry-cleaning"
                >
                  Dry Cleaning
                </TabsTrigger>
                <TabsTrigger value="general" data-testid="tab-general">
                  General Laundry
                </TabsTrigger>
                <TabsTrigger value="beddings" data-testid="tab-beddings">
                  Beddings
                </TabsTrigger>
                <TabsTrigger value="sofa" data-testid="tab-sofa">
                  Sofa & Mattress
                </TabsTrigger>
                <TabsTrigger value="shoes" data-testid="tab-shoes">
                  Shoes
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="dry-cleaning">
              <Card>
                <CardHeader>
                  <CardTitle>Dry Cleaning</CardTitle>
                  <CardDescription>
                    Professional dry cleaning services — tick items to add to
                    invoice
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table className="min-w-[560px]">
                    <TableHeader>
                      <TableRow>
                        <TableHead>Item</TableHead>
                        <TableHead className="text-right">72hrs</TableHead>
                        <TableHead className="text-right">
                          24hrs Express
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {dryCleaningPrices.map((row) => (
                        <PricingRow72
                          key={row.item}
                          category="dry-cleaning"
                          row={row}
                        />
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="general">
              <Card>
                <CardHeader>
                  <CardTitle>General Laundry</CardTitle>
                  <CardDescription>
                    Everyday clothing items — tick items to add to invoice
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table className="min-w-[560px]">
                    <TableHeader>
                      <TableRow>
                        <TableHead>Item</TableHead>
                        <TableHead className="text-right">72hrs</TableHead>
                        <TableHead className="text-right">
                          24hrs Express
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {generalLaundryPrices.map((row) => (
                        <PricingRow72
                          key={row.item}
                          category="general"
                          row={row}
                        />
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="beddings">
              <Card>
                <CardHeader>
                  <CardTitle>Beddings</CardTitle>
                  <CardDescription>
                    Blankets, duvets, sheets & more — tick items to add to
                    invoice
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table className="min-w-[560px]">
                    <TableHeader>
                      <TableRow>
                        <TableHead>Item</TableHead>
                        <TableHead className="text-right">72hrs</TableHead>
                        <TableHead className="text-right">
                          24hrs Express
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {beddingPrices.map((row) => (
                        <PricingRow72
                          key={row.item}
                          category="beddings"
                          row={row}
                        />
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="sofa">
              <Card>
                <CardHeader>
                  <CardTitle>Sofa & Mattress</CardTitle>
                  <CardDescription>
                    Large items — tick items to add to invoice (transport is
                    additional)
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table className="min-w-[560px]">
                    <TableHeader>
                      <TableRow>
                        <TableHead>Item</TableHead>
                        <TableHead className="text-right">Price</TableHead>
                        <TableHead className="text-right">Transport</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {sofaMattressPrices.map((row) => (
                        <PricingRowSofa key={row.item} row={row} />
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="shoes">
              <Card>
                <CardHeader>
                  <CardTitle>Shoes</CardTitle>
                  <CardDescription>
                    Professional shoe cleaning — tick items to add to invoice
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table className="min-w-[560px]">
                    <TableHeader>
                      <TableRow>
                        <TableHead>Item</TableHead>
                        <TableHead className="text-right">72hrs</TableHead>
                        <TableHead className="text-right">
                          24hrs Express
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {shoesPrices.map((row) => (
                        <PricingRow72
                          key={row.item}
                          category="shoes"
                          row={row}
                        />
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <Card className="mt-8 border-amber-500/30 bg-amber-500/5">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Important Notes</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    {importantNotes.map((note, index) => (
                      <li key={index}>• {note}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {invoiceItems.size > 0 && (
        <div className="fixed inset-x-4 bottom-4 z-50 sm:inset-x-auto sm:right-6 sm:bottom-6">
          <Button
            size="lg"
            className="w-full shadow-2xl gap-2 pr-5 sm:w-auto"
            onClick={() => setInvoiceOpen(true)}
            data-testid="button-view-invoice"
          >
            <ShoppingCart className="w-5 h-5" />
            View Invoice
            <Badge
              variant="secondary"
              className="ml-1 bg-white text-primary font-bold"
            >
              {invoiceItems.size}
            </Badge>
          </Button>
        </div>
      )}

      <Dialog open={invoiceOpen} onOpenChange={setInvoiceOpen}>
        <DialogContent
          className="max-w-2xl max-h-[85vh] overflow-y-auto"
          data-testid="dialog-invoice"
        >
          <DialogHeader>
            <DialogTitle className="text-xl">Your Laundry Invoice</DialogTitle>
            <DialogDescription>
              Review your selected items below. Adjust quantities or remove
              items as needed.
            </DialogDescription>
          </DialogHeader>

          <div className="border rounded-lg overflow-hidden mt-2">
            <div className="bg-primary text-primary-foreground px-4 py-3">
              <p className="font-bold text-lg">Stash Laundry Services</p>
              <p className="text-sm opacity-80">
                26570, Lunu Rd, Lusaka 10101, Zambia
              </p>
              <p className="text-sm opacity-80">+260 973 848 122</p>
            </div>

            <Table className="min-w-[720px]">
              <TableHeader>
                <TableRow>
                  <TableHead>Item</TableHead>
                  <TableHead>Service</TableHead>
                  <TableHead className="text-center">Qty</TableHead>
                  <TableHead className="text-right">Unit Price</TableHead>
                  <TableHead className="text-right">Subtotal</TableHead>
                  <TableHead></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {Array.from(invoiceItems.values()).map((it) => (
                  <TableRow key={it.id}>
                    <TableCell className="font-medium">{it.item}</TableCell>
                    <TableCell className="text-muted-foreground text-sm">
                      {it.serviceType}
                    </TableCell>
                    <TableCell className="text-center">
                      <div className="flex items-center justify-center gap-1">
                        <Button
                          type="button"
                          size="icon"
                          variant="outline"
                          className="h-6 w-6 text-xs"
                          onClick={() => updateQty(it.id, it.qty - 1)}
                          data-testid={`button-qty-minus-${it.id}`}
                        >
                          −
                        </Button>
                        <span className="w-6 text-center font-medium">
                          {it.qty}
                        </span>
                        <Button
                          type="button"
                          size="icon"
                          variant="outline"
                          className="h-6 w-6 text-xs"
                          onClick={() => updateQty(it.id, it.qty + 1)}
                          data-testid={`button-qty-plus-${it.id}`}
                        >
                          +
                        </Button>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">{it.price}</TableCell>
                    <TableCell className="text-right font-semibold">
                      K{(it.priceValue * it.qty).toFixed(2)}
                    </TableCell>
                    <TableCell>
                      <Button
                        type="button"
                        size="icon"
                        variant="ghost"
                        className="h-7 w-7 text-destructive hover:text-destructive"
                        onClick={() => removeItem(it.id)}
                        data-testid={`button-remove-${it.id}`}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            <div className="border-t px-4 py-4 bg-muted/30">
              <div className="flex items-center justify-between text-lg font-bold">
                <span>Total</span>
                <span className="text-primary">K{total.toFixed(2)}</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                * Transport fees for Sofa & Mattress items are not included in
                the total.
              </p>
            </div>
          </div>

          <div className="mt-2 flex flex-col gap-3 sm:flex-row">
            <Button
              type="button"
              className="w-full gap-2 sm:flex-1"
              onClick={printInvoice}
              data-testid="button-print-invoice"
            >
              <Printer className="w-4 h-4" />
              Print Invoice
            </Button>
            <Button
              type="button"
              variant="outline"
              className="w-full sm:w-auto"
              onClick={() => {
                setInvoiceItems(new Map());
                setInvoiceOpen(false);
              }}
              data-testid="button-clear-invoice"
            >
              Clear All
            </Button>
          </div>

          <Card className="mt-4">
            <CardHeader>
              <CardTitle className="text-lg">Request a Quote</CardTitle>
              <CardDescription>
                Send the selected laundry items to sales@stashleading.com with your
                contact and collection details.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="quote-name">Full Name</Label>
                  <Input
                    id="quote-name"
                    value={quoteDetails.name}
                    onChange={(e) =>
                      setQuoteDetails({ ...quoteDetails, name: e.target.value })
                    }
                    placeholder="John Doe"
                    data-testid="input-quote-name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="quote-email">Email</Label>
                  <Input
                    id="quote-email"
                    type="email"
                    value={quoteDetails.email}
                    onChange={(e) =>
                      setQuoteDetails({ ...quoteDetails, email: e.target.value })
                    }
                    placeholder="john@example.com"
                    data-testid="input-quote-email"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="quote-phone">Phone / WhatsApp</Label>
                  <Input
                    id="quote-phone"
                    value={quoteDetails.phone}
                    onChange={(e) =>
                      setQuoteDetails({ ...quoteDetails, phone: e.target.value })
                    }
                    placeholder="+260 97..."
                    data-testid="input-quote-phone"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="quote-turnaround">Turnaround Preference</Label>
                  <Input
                    id="quote-turnaround"
                    value={quoteDetails.turnaroundPreference}
                    onChange={(e) =>
                      setQuoteDetails({
                        ...quoteDetails,
                        turnaroundPreference: e.target.value,
                      })
                    }
                    placeholder="72hrs, express 24hrs, pickup date, etc."
                    data-testid="input-quote-turnaround"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="quote-address">Collection / Delivery Address</Label>
                <Textarea
                  id="quote-address"
                  value={quoteDetails.collectionAddress}
                  onChange={(e) =>
                    setQuoteDetails({
                      ...quoteDetails,
                      collectionAddress: e.target.value,
                    })
                  }
                  placeholder="Where should we collect from or deliver to?"
                  className="min-h-24 resize-none"
                  data-testid="input-quote-address"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="quote-notes">Additional Notes</Label>
                <Textarea
                  id="quote-notes"
                  value={quoteDetails.notes}
                  onChange={(e) =>
                    setQuoteDetails({ ...quoteDetails, notes: e.target.value })
                  }
                  placeholder="Any stain notes, pickup timing, or handling instructions?"
                  className="min-h-24 resize-none"
                  data-testid="input-quote-notes"
                />
              </div>

              <Button
                type="button"
                className="w-full gap-2"
                onClick={sendLaundryQuote}
                data-testid="button-send-laundry-quote"
              >
                <Send className="w-4 h-4" />
                Make Quote
              </Button>
            </CardContent>
          </Card>
        </DialogContent>
      </Dialog>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Experience Clean?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Schedule your first pickup today and enjoy fresh, professionally
            cleaned clothes.
          </p>
          <a
            href="#pricing"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("pricing")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-block w-full sm:w-auto"
          >
            <Button size="lg" className="w-full sm:w-auto" data-testid="button-laundry-cta">
              Build Your Quote
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
