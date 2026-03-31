import { Link } from "wouter";
import { BrandLogo } from "@/components/brand-logo";
import { Globe, Shirt, Megaphone, Banknote } from "lucide-react";
import { SiFacebook, SiWhatsapp, SiInstagram } from "react-icons/si";
import lead from "@/assets/stash-leading-logo.png";

const services = [
  { label: "Immigration Services", href: "/immigration", icon: Globe },
  { label: "Laundry Services", href: "/laundry", icon: Shirt },
  { label: "Media Services", href: "/marketing", icon: Megaphone },
  { label: "Loan Services", href: "/lending", icon: Banknote },
];

const socialLinks = [
  { icon: SiFacebook, href: "#", label: "Facebook" },
  { icon: SiWhatsapp, href: "https://wa.me/260973848122", label: "WhatsApp" },
  { icon: SiInstagram, href: "#", label: "Instagram" },
];

export function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="sm:col-span-2 lg:col-span-1 space-y-4">
            <Link
              href="/"
              className="flex items-center gap-2"
              data-testid="link-footer-brand"
            >
              <BrandLogo
                src={lead}
                alt="Stash Leading Services"
                variant="footer"
                testId="img-footer-logo"
              />
            </Link>
            <p className="text-sm text-muted-foreground">
              Your trusted partner for Immigration, Laundry, Media, and Loan
              services in Lusaka, Zambia.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors"
                  aria-label={social.label}
                  data-testid={`link-social-${social.label.toLowerCase()}`}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                    data-testid={`link-footer-service-${service.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    <service.icon className="w-4 h-4" />
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Contact Info</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>Lusaka, Zambia</li>
              <li>
                <a
                  href="tel:0973807864"
                  className="hover:text-foreground transition-colors"
                >
                  +260 973 807 864
                </a>
              </li>

              <li>
                <a
                  href="mailto:sales@stashleading.com"
                  className="hover:text-foreground transition-colors"
                >
                  sales@stashleading.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="text-sm text-muted-foreground"
            data-testid="text-copyright"
          >
            &copy; {new Date().getFullYear()} Stash Leading Services. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
