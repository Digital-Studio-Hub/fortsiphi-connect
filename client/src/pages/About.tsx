import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Target,
  Eye,
  Heart,
  Shield,
  CheckCircle,
  ArrowRight,
  Users,
  Award,
  Briefcase,
} from "lucide-react";
import logoMain from "@assets/Main_Logo_1773066374474.png";

const values = [
  {
    icon: Shield,
    title: "Compliance First",
    description: "Every service we deliver adheres to the highest standards of regulatory compliance.",
  },
  {
    icon: Target,
    title: "Execution Focus",
    description: "We don't just advise — we prepare, execute, and deliver measurable results.",
  },
  {
    icon: Heart,
    title: "Client Partnership",
    description: "We treat every client relationship as a long-term partnership built on trust.",
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description: "Consistent quality control inspections and supervision across all operations.",
  },
];

const milestones = [
  { number: "100+", label: "Commercial Clients" },
  { number: "500+", label: "Tenders Prepared" },
  { number: "50+", label: "SMMEs Supported" },
  { number: "8+", label: "Compliance Badges" },
];

export default function About() {
  return (
    <div className="flex flex-col">
      <section className="relative py-20 bg-primary">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-72 h-72 bg-gold rounded-full blur-3xl" />
        </div>
        <div className="container relative mx-auto px-4 md:px-6 text-center">
          <Badge className="mb-4 bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20">
            About Fortsiphi
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Building Business Readiness
          </h1>
          <p className="text-lg text-primary-foreground/90 max-w-3xl mx-auto">
            Fortsiphi (Pty) Ltd is a multi-service business solutions company committed to helping organizations achieve compliance, readiness, and success.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Who We Are
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Fortsiphi (Pty) Ltd operates across South Africa, providing professional commercial cleaning services and hands-on tender consulting. We serve SMMEs, corporates, and institutions with a commitment to excellence and compliance.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our approach is simple: we prepare, support, and deliver. Whether you need spotless commercial spaces or expert assistance navigating the tender process, Fortsiphi is your trusted partner.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                This is not a generic cleaning website and not a consulting blog — it is a business readiness and service execution platform.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="bg-muted p-8 rounded-md">
                  <img
                    src={logoMain}
                    alt="Fortsiphi Logo"
                    className="w-64 h-auto mx-auto"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-gold text-gold-foreground px-4 py-2 rounded-md font-semibold">
                  Est. South Africa
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-card-foreground">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide professional, compliant, and execution-focused services that help businesses achieve procurement readiness and operational excellence.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cta/10 mb-6">
                  <Eye className="h-8 w-8 text-cta" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-card-foreground">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be the leading business solutions provider in South Africa, recognized for compliance excellence and service delivery quality.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/10 mb-6">
                  <Heart className="h-8 w-8 text-gold" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-card-foreground">Our Approach</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Structured, reliable, and results-driven. We prepare and submit — we don't just advise. Every service is delivered with precision.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-gold/10 text-gold-foreground border-gold/20">
              Our Values
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              What Drives Us
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="text-center p-6">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                  <value.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Our Track Record
            </h2>
            <p className="text-primary-foreground/80">
              Building trust through consistent delivery and compliance.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {milestones.map((milestone) => (
              <div key={milestone.label} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-gold mb-2">
                  {milestone.number}
                </p>
                <p className="text-primary-foreground/80">{milestone.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Ready to Work With Us?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-10">
            Let's discuss how Fortsiphi can support your business with professional cleaning or tender consulting services.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-cta text-cta-foreground border-0"
                data-testid="button-about-consultation"
              >
                Request a Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/cleaning-services">
              <Button size="lg" variant="outline" data-testid="button-about-services">
                Explore Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
