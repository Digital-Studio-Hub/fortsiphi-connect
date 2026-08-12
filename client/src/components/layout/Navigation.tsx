import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, ArrowRight } from "lucide-react";
import logoMain from "@assets/Main_Logo_1773066374474.png";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/tender-consulting", label: "Tender Consulting" },
  { href: "/compliance", label: "Compliance" },
  { href: "/tender-ready-hub", label: "Tender Ready Hub" },
  { href: "/cleaning-services", label: "Cleaning Services" },
  { href: "/contact", label: "Contact" },
];

export function Navigation() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="bg-primary text-primary-foreground border-b border-primary-foreground/10">
        <div className="container mx-auto flex items-center justify-between gap-3 px-4 py-2 text-sm">
          <p className="truncate text-primary-foreground/90">
            <span className="hidden sm:inline font-medium">Tender This™ Live Bootcamp</span>
            <span className="sm:hidden font-medium">Live Bootcamp</span>
            <span className="text-primary-foreground/70"> · New date will be published soon</span>
          </p>
          <Link href="/tender-this">
            <Button
              size="sm"
              className="shrink-0 bg-gold text-gold-foreground hover:bg-gold/90 border-0 font-semibold h-8 px-3"
              data-testid="link-bootcamp-shortcut"
            >
              Book Now
              <ArrowRight className="h-3.5 w-3.5 ml-1" aria-hidden="true" />
            </Button>
          </Link>
        </div>
      </div>
      <div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto flex h-16 items-center justify-between gap-4 px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2" data-testid="link-home-logo">
          <img src={logoMain} alt="Fortsiphi" className="h-12 w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <Button
                variant="ghost"
                size="sm"
                className={`text-sm font-medium ${
                  location === link.href
                    ? "bg-muted text-foreground"
                    : "text-muted-foreground"
                }`}
                data-testid={`link-nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {link.label}
              </Button>
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:0100653247" className="flex items-center gap-2 text-sm text-muted-foreground">
            <Phone className="h-4 w-4" />
            <span>010 065 3247</span>
          </a>
          <Link href="/contact">
            <Button className="bg-cta text-cta-foreground border-0" data-testid="button-get-quote">
              Request Consultation
            </Button>
          </Link>
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" data-testid="button-mobile-menu">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col gap-4 mt-8">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)}>
                  <Button
                    variant="ghost"
                    className={`w-full justify-start text-lg ${
                      location === link.href
                        ? "bg-muted text-foreground"
                        : "text-muted-foreground"
                    }`}
                    data-testid={`link-mobile-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {link.label}
                  </Button>
                </Link>
              ))}
              <Link href="/tender-this" onClick={() => setIsOpen(false)}>
                <Button
                  className="w-full bg-gold text-gold-foreground hover:bg-gold/90 border-0 font-semibold"
                  data-testid="link-mobile-bootcamp-shortcut"
                >
                  Tender This™ Bootcamp
                  <ArrowRight className="h-4 w-4 ml-2" aria-hidden="true" />
                </Button>
              </Link>
              <div className="border-t pt-4 mt-4">
                <a href="tel:0100653247" className="flex items-center gap-2 text-muted-foreground mb-4 px-4">
                  <Phone className="h-4 w-4" />
                  <span>010 065 3247</span>
                </a>
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-cta text-cta-foreground border-0" data-testid="button-mobile-consultation">
                    Request Consultation
                  </Button>
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
      </div>
    </header>
  );
}
