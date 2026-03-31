import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { contactFormSchema, type ContactFormData } from "@shared/schema";
import { SALES_EMAIL, submitToFormSubmit } from "@/lib/formsubmit";
import { MapPin, Phone, Mail, Send } from "lucide-react";

export function ContactSection() {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "laundry",
      message: "",
    },
  });

  const serviceLabels: Record<string, string> = {
    immigration: "Immigration Services",
    laundry: "Laundry Services",
    marketing: "Media Services",
    lending: "Loan Services",
  };

  const onSubmit = (data: ContactFormData) => {
    submitToFormSubmit({
      subject: `New Contact Request: ${serviceLabels[data.service] || data.service}`,
      replyTo: data.email,
      fields: {
      name: data.name,
      email: data.email,
      phone: data.phone,
      service: serviceLabels[data.service] || data.service,
      message: data.message,
      },
    });
    form.reset();
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="text-center space-y-4 mb-12">
          <p className="text-sm uppercase tracking-wide text-primary font-medium">
            Get In Touch
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold"
            data-testid="text-contact-title"
          >
            Contact Us
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Have questions? We'd love to hear from you. Send us a message and
            we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <Card className="lg:col-span-3">
            <CardHeader>
              <CardTitle>Send us a message</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you shortly.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="John Doe"
                              {...field}
                              data-testid="input-name"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="john@example.com"
                              type="email"
                              {...field}
                              data-testid="input-email"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="0973848122"
                              {...field}
                              data-testid="input-phone"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="service"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Service Interest</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger data-testid="select-service">
                                <SelectValue placeholder="Select a service" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="immigration">
                                Immigration Services
                              </SelectItem>
                              <SelectItem value="laundry">
                                Laundry Services
                              </SelectItem>
                              <SelectItem value="marketing">
                                Media Services
                              </SelectItem>
                              <SelectItem value="lending">
                                Loan Services
                              </SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us about your needs..."
                            className="min-h-32 resize-none"
                            {...field}
                            data-testid="input-message"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full sm:w-auto"
                    data-testid="button-submit-contact"
                  >
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Business Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Address</p>
                    <p
                      className="text-sm text-muted-foreground"
                      data-testid="text-address"
                    >
                      26570, Lunu Rd, Lusaka 10101
                      <br />
                      Zambia
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <a
                      href="tel:+260973807864"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      data-testid="text-phone"
                    >
                      +260 973 807 864
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    {/* <a href="mailto:sales@stashleading.com" className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="text-email">
                      Stashcleaning24@gmail.com
                    </a>
                    <br /> */}
                    <a
                      href={`mailto:${SALES_EMAIL}`}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {SALES_EMAIL}
                    </a>
                  </div>
                </div>

              
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-video">
                <iframe
                  src="https://maps.google.com/maps?q=26570+Lunu+Rd,+Lusaka+10101,+Zambia&t=&z=17&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Stash Leading Services - 26570 Lunu Rd, Lusaka 10101, Zambia"
                  className="w-full h-full"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
