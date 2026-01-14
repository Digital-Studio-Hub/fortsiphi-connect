import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Sparkles,
  FileCheck,
  Users,
  Shield,
  CheckCircle,
  ArrowRight,
  Building2,
  ClipboardCheck,
  Briefcase,
  Award,
  Target,
  Handshake,
} from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import logoWhite from "@assets/White_Logo_1768385337557.png";
import certBadge from "@assets/Badge_Level_1_1768384224164.png";

const services = [
  {
    icon: Sparkles,
    title: "Professional Cleaning",
    description:
      "Office & commercial cleaning with PAYE, UIF & COIDA compliant staff. Daily, weekly, and monthly contracts available.",
    href: "/cleaning-services",
    color: "text-cta",
  },
  {
    icon: FileCheck,
    title: "Tender Consulting",
    description:
      "Hands-on tender preparation and submission support. We prepare and submit — not just advise.",
    href: "/tender-consulting",
    color: "text-gold",
  },
  {
    icon: Users,
    title: "Tender Ready Hub",
    description:
      "Structured SMME development platform. Prepare your business before tender submission.",
    href: "/tender-ready-hub",
    color: "text-primary",
  },
];

const complianceBadges = [
  "PAYE Compliant",
  "UIF Compliant",
  "COIDA Compliant",
  "Tax Compliant",
  "B-BBEE Compliant",
  "NCCA Registered",
  "ISSA Registered",
  "PPE Compliant",
];

const whyChooseUs = [
  {
    icon: Shield,
    title: "Full Compliance",
    description: "All staff are PAYE, UIF & COIDA compliant with proper documentation.",
  },
  {
    icon: Award,
    title: "Industry Registered",
    description: "Registered with NCCA and ISSA for professional cleaning standards.",
  },
  {
    icon: Target,
    title: "Execution Focus",
    description: "We prepare and submit tenders — not just provide advisory services.",
  },
  {
    icon: Handshake,
    title: "Trusted Partner",
    description: "Serving SMMEs, corporates, and institutions across South Africa.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative min-h-[80vh] flex items-center justify-center bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/90" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gold rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cta rounded-full blur-3xl" />
        </div>

        <div className="container relative mx-auto px-4 md:px-6 py-20 text-center">
          <img
            src={logoWhite}
            alt="Fortsiphi"
            className="h-24 md:h-32 w-auto mx-auto mb-8"
          />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 tracking-tight">
            From Compliance to Contract.
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-10 leading-relaxed">
            Professional Cleaning Services and Hands-on Tender Consulting for SMMEs, Corporates, and Institutions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-cta text-cta-foreground border-0 min-w-[200px]"
                data-testid="button-hero-consultation"
              >
                Request a Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <a
              href="https://wa.me/27813655901"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground min-w-[200px] backdrop-blur-sm bg-primary-foreground/10"
                data-testid="button-hero-whatsapp"
              >
                <SiWhatsapp className="mr-2 h-4 w-4" />
                WhatsApp Us
              </Button>
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-gold/10 text-gold-foreground border-gold/20">
                About Fortsiphi
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Building Business Readiness & Delivering Excellence
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Fortsiphi (Pty) Ltd is a multi-service business solutions company operating across South Africa. We specialize in professional commercial cleaning services and hands-on tender consulting that helps businesses move from compliance to successful contracts.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Our mission is to prepare, support, and empower SMMEs, corporates, and institutions with structured, compliant, and results-driven services.
              </p>
              <Link href="/about">
                <Button variant="outline" data-testid="button-learn-more">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="bg-muted rounded-md p-8 relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-card rounded-md p-6 text-center">
                    <Building2 className="h-10 w-10 mx-auto mb-3 text-primary" />
                    <p className="text-2xl font-bold text-foreground">100+</p>
                    <p className="text-sm text-muted-foreground">Commercial Clients</p>
                  </div>
                  <div className="bg-card rounded-md p-6 text-center">
                    <ClipboardCheck className="h-10 w-10 mx-auto mb-3 text-cta" />
                    <p className="text-2xl font-bold text-foreground">500+</p>
                    <p className="text-sm text-muted-foreground">Tenders Prepared</p>
                  </div>
                  <div className="bg-card rounded-md p-6 text-center">
                    <Briefcase className="h-10 w-10 mx-auto mb-3 text-gold" />
                    <p className="text-2xl font-bold text-foreground">50+</p>
                    <p className="text-sm text-muted-foreground">SMMEs Supported</p>
                  </div>
                  <div className="bg-card rounded-md p-6 text-center">
                    <Users className="h-10 w-10 mx-auto mb-3 text-secondary" />
                    <p className="text-2xl font-bold text-foreground">8+</p>
                    <p className="text-sm text-muted-foreground">Compliance Badges</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Our Services
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Comprehensive Business Solutions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From professional cleaning to tender consulting, we provide end-to-end support for your business needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service) => (
              <Card key={service.title} className="hover-elevate bg-card">
                <CardContent className="p-6">
                  <service.icon className={`h-12 w-12 ${service.color} mb-4`} />
                  <h3 className="text-xl font-semibold mb-3 text-card-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <Link href={service.href}>
                    <Button variant="ghost" className="p-0 h-auto text-primary" data-testid={`link-service-${service.title.toLowerCase().replace(/\s+/g, "-")}`}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-cta/10 text-cta border-cta/20">
              Compliance & Accreditation
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Fully Compliant Operations
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We maintain the highest standards of compliance and are registered with leading industry bodies.
            </p>
          </div>

          <div className="flex justify-center mb-8">
            <img src={certBadge} alt="Certified by Lekker Network - Level 1" className="h-32 w-auto" />
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {complianceBadges.map((badge) => (
              <Badge
                key={badge}
                variant="secondary"
                className="px-4 py-2 text-sm bg-card border"
              >
                <CheckCircle className="h-4 w-4 mr-2 text-cta" />
                {badge}
              </Badge>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/compliance">
              <Button variant="outline" data-testid="button-view-compliance">
                View All Compliance Details
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-gold/10 text-gold-foreground border-gold/20">
              Why Choose Fortsiphi
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              The Fortsiphi Difference
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-foreground">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto mb-10">
            Whether you need professional cleaning services or tender consulting support, we're here to help your business succeed.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-cta text-cta-foreground border-0 min-w-[200px]"
                data-testid="button-cta-consultation"
              >
                Request a Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <a href="tel:0100653247">
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground min-w-[200px] backdrop-blur-sm bg-primary-foreground/10"
                data-testid="button-cta-call"
              >
                Call 010 065 3247
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
