import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { BrandLogo } from "@/components/brand-logo";
import { Menu, Phone, Moon, Sun } from "lucide-react";
import { useTheme } from "@/lib/theme";
import lead from "@/assets/stash-leading-logo.png";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Immigration", href: "/immigration" },
  { label: "Laundry", href: "/laundry" },
  { label: "Media", href: "/marketing" },
  { label: "Loans", href: "/lending" },
];

const routePhoneMap = {
  laundry: {
    href: "tel:+260973848122",
    label: "+260 973 848 122",
  },
  marketing: {
    href: "tel:+260962104857",
    label: "+260 962 104 857",
  },
  lending: {
    href: "tel:+260968650955",
    label: "+260 968 650 955",
  },
  default: {
    href: "tel:+260973807864",
    label: "+260 973 807 864",
  },
};

export function Navigation() {
  const [location] = useLocation();
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const activePhone = location.startsWith("/laundry")
    ? routePhoneMap.laundry
    : location.startsWith("/marketing")
      ? routePhoneMap.marketing
      : location.startsWith("/lending")
        ? routePhoneMap.lending
      : routePhoneMap.default;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="flex h-[4.5rem] sm:h-20 md:h-24 items-center justify-between gap-3 sm:gap-4">
          <Link href="/" className="flex items-center gap-2" data-testid="link-brand-home">
            <BrandLogo
              src={lead}
              alt="Stash Leading Services"
              variant="nav"
              testId="img-nav-logo"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <Button
                  variant={location === item.href ? "secondary" : "ghost"}
                  size="sm"
                  data-testid={`link-nav-${item.label.toLowerCase()}`}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={activePhone.href}
              className="hidden lg:flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-phone"
            >
              <Phone className="w-4 h-4" />
              <span>{activePhone.label}</span>
            </a>

            <Button
              size="icon"
              variant="ghost"
              onClick={toggleTheme}
              data-testid="button-theme-toggle"
            >
              {theme === "light" ? (
                <Moon className="w-4 h-4" />
              ) : (
                <Sun className="w-4 h-4" />
              )}
            </Button>

            {/* <Link href="/#contact" className="hidden sm:block">
              <Button data-testid="button-contact-us">Contact Us</Button>
            </Link> */}

            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button size="icon" variant="ghost" data-testid="button-mobile-menu">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[85vw] max-w-xs sm:w-72">
                <div className="flex flex-col gap-4 mt-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-bold text-lg">Menu</span>
                  </div>
                  {navItems.map((item) => (
                    <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
                      <Button
                        variant={location === item.href ? "secondary" : "ghost"}
                        className="w-full justify-start"
                        data-testid={`link-mobile-nav-${item.label.toLowerCase()}`}
                      >
                        {item.label}
                      </Button>
                    </Link>
                  ))}
                  <div className="border-t pt-4 mt-4">
                    <a
                      href={activePhone.href}
                      className="flex items-center gap-2 text-sm text-muted-foreground p-2"
                    >
                      <Phone className="w-4 h-4" />
                      <span>{activePhone.label}</span>
                    </a>
                  </div>
                  <Link href="/#contact" onClick={() => setOpen(false)}>
                    <Button className="w-full" data-testid="button-mobile-contact">
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
