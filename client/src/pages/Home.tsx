import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import {
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
  Search,
  FileText,
  Send,
  HeadphonesIcon,
  Clock,
  Lock,
  Download,
  Sparkles,
} from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import logoWhite from "@assets/White_Logo_1773066374475.png";

const services = [
  {
    icon: FileCheck,
    title: "Tender Consulting",
    description:
      "We prepare, structure, and submit tenders on your behalf — ensuring full compliance with all procurement requirements.",
    href: "/tender-consulting",
    color: "text-gold",
  },
  {
    icon: Shield,
    title: "Compliance & Accreditation",
    description:
      "Complete compliance management including PAYE, UIF, COIDA, B-BBEE, tax clearance, and all statutory registrations.",
    href: "/compliance",
    color: "text-primary",
  },
  {
    icon: Sparkles,
    title: "Professional Cleaning",
    description:
      "Fully compliant commercial cleaning services with PAYE, UIF & COIDA registered staff. Procurement-ready documentation available.",
    href: "/cleaning-services",
    color: "text-cta",
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

const howWeWork = [
  {
    icon: Search,
    step: "01",
    title: "Compliance Review",
    description:
      "We assess your current compliance status, identify gaps, and ensure all documentation meets procurement standards.",
  },
  {
    icon: FileText,
    step: "02",
    title: "Tender Preparation",
    description:
      "We structure your tender response, compile required documents, complete pricing schedules, and prepare all declarations.",
  },
  {
    icon: Send,
    step: "03",
    title: "Submission & Quality Check",
    description:
      "Final review for completeness and compliance before submitting your tender on time, with all required documentation.",
  },
  {
    icon: HeadphonesIcon,
    step: "04",
    title: "Post-Submission Support",
    description:
      "We provide follow-up support including clarification responses, presentation preparation, and contract readiness.",
  },
];

const whyTrustUs = [
  {
    icon: Shield,
    title: "Fully Compliant",
    description:
      "PAYE, UIF, COIDA, Tax, B-BBEE — all compliance documentation is current, verified, and available for procurement review.",
  },
  {
    icon: FileText,
    title: "Structured Documentation",
    description:
      "Every submission follows a structured format with proper indexing, cross-referencing, and compliance verification.",
  },
  {
    icon: Briefcase,
    title: "Cross-Industry Experience",
    description:
      "Proven track record across government, private sector, and institutional tenders in cleaning, facilities, and professional services.",
  },
  {
    icon: Clock,
    title: "Clear Turnaround Times",
    description:
      "We work to defined timelines with milestone checkpoints, ensuring your submission is never late or incomplete.",
  },
  {
    icon: Lock,
    title: "Confidential Handling",
    description:
      "All client information, pricing, and business details are handled with strict confidentiality and professional discretion.",
  },
  {
    icon: Award,
    title: "Proven Results",
    description:
      "Over 500 tenders prepared and submitted with a focus on compliance accuracy and competitive positioning.",
  },
];

export default function Home() {
  const { toast } = useToast();
  const [checklistForm, setChecklistForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
  });

  const checklistMutation = useMutation({
    mutationFn: async (data: typeof checklistForm) => {
      const res = await apiRequest("POST", "/api/checklist-download", data);
      return res.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Download starting...",
        description: "Your Tender Compliance Checklist is downloading.",
      });
      const link = document.createElement("a");
      link.href = data.downloadUrl;
      link.download = "Fortsiphi_Tender_Compliance_Checklist.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setChecklistForm({ name: "", email: "", phone: "", company: "" });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleChecklistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!checklistForm.name || !checklistForm.email) {
      toast({
        title: "Required fields",
        description: "Please enter your name and email address.",
        variant: "destructive",
      });
      return;
    }
    checklistMutation.mutate(checklistForm);
  };

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
            We prepare, structure, and submit tenders while ensuring full
            regulatory and procurement compliance — so your business is always
            contract-ready.
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
                Compliance & Tender Execution Specialists
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Fortsiphi (Pty) Ltd is a compliance and tender execution
                specialist operating across South Africa. We prepare, structure,
                and submit tenders while managing all compliance requirements —
                from PAYE and UIF to B-BBEE and tax clearance.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                We also deliver fully compliant professional cleaning services
                with procurement-ready documentation for corporates and
                institutions.
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
                    <p className="text-sm text-muted-foreground">
                      Commercial Clients
                    </p>
                  </div>
                  <div className="bg-card rounded-md p-6 text-center">
                    <ClipboardCheck className="h-10 w-10 mx-auto mb-3 text-cta" />
                    <p className="text-2xl font-bold text-foreground">500+</p>
                    <p className="text-sm text-muted-foreground">
                      Tenders Prepared
                    </p>
                  </div>
                  <div className="bg-card rounded-md p-6 text-center">
                    <Briefcase className="h-10 w-10 mx-auto mb-3 text-gold" />
                    <p className="text-2xl font-bold text-foreground">50+</p>
                    <p className="text-sm text-muted-foreground">
                      SMMEs Supported
                    </p>
                  </div>
                  <div className="bg-card rounded-md p-6 text-center">
                    <Users className="h-10 w-10 mx-auto mb-3 text-secondary" />
                    <p className="text-2xl font-bold text-foreground">8+</p>
                    <p className="text-sm text-muted-foreground">
                      Compliance Badges
                    </p>
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
              Compliance-Driven Business Solutions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From tender preparation and compliance management to professional
              cleaning — every service is structured, compliant, and
              procurement-ready.
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
                    <Button
                      variant="ghost"
                      className="p-0 h-auto text-primary"
                      data-testid={`link-service-${service.title.toLowerCase().replace(/\s+/g, "-")}`}
                    >
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
            <Badge className="mb-4 bg-gold/10 text-gold-foreground border-gold/20">
              Our Process
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              How We Work
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We follow a structured, step-by-step process to ensure every
              tender submission is compliant, complete, and competitive.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howWeWork.map((step, index) => (
              <div key={step.title} className="relative">
                <Card className="bg-card h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-lg">
                        {step.step}
                      </div>
                      <step.icon className="h-6 w-6 text-gold" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-card-foreground">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
                {index < howWeWork.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-5 w-5 text-muted-foreground/40" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-cta/10 text-cta border-cta/20">
              Compliance & Accreditation
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Fully Compliant Operations
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We maintain the highest standards of compliance and are registered
              with leading industry bodies.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {complianceBadges.map((badge) => (
              <Badge
                key={badge}
                variant="secondary"
                className="px-4 py-2 text-sm bg-card border"
              >
                <CheckCircle className="h-4 w-4 mr-2 text-cta" />
                <p className="text-cta">{badge}</p>
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

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Why Clients Trust Us
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Built on Compliance, Driven by Results
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Clients choose Fortsiphi because we bring structure,
              accountability, and proven compliance to every engagement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyTrustUs.map((item) => (
              <Card key={item.title} className="bg-card">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-card-foreground">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-gold/10 text-gold-foreground border-gold/20">
                Free Resource
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Download Our Tender Compliance Checklist
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Make sure your business is fully compliant before submitting any
                tender. This checklist covers company registration, tax
                compliance, labour requirements, and financial documentation.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-cta mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground text-sm">Company Registration & Legal requirements</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-cta mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground text-sm">Tax & SARS Compliance items</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-cta mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground text-sm">Labour & Statutory Compliance</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-cta mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground text-sm">Financial & Banking Documents</span>
                </div>
              </div>
            </div>

            <Card className="bg-card">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Download className="h-6 w-6 text-gold" />
                  <h3 className="text-xl font-semibold text-card-foreground">
                    Enter your details to download
                  </h3>
                </div>
                <form onSubmit={handleChecklistSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="checklist-name">Full Name *</Label>
                    <Input
                      id="checklist-name"
                      placeholder="Your full name"
                      value={checklistForm.name}
                      onChange={(e) =>
                        setChecklistForm((prev) => ({ ...prev, name: e.target.value }))
                      }
                      required
                      data-testid="input-checklist-name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="checklist-email">Email Address *</Label>
                    <Input
                      id="checklist-email"
                      type="email"
                      placeholder="your@email.co.za"
                      value={checklistForm.email}
                      onChange={(e) =>
                        setChecklistForm((prev) => ({ ...prev, email: e.target.value }))
                      }
                      required
                      data-testid="input-checklist-email"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="checklist-phone">Phone Number</Label>
                    <Input
                      id="checklist-phone"
                      placeholder="Your phone number"
                      value={checklistForm.phone}
                      onChange={(e) =>
                        setChecklistForm((prev) => ({ ...prev, phone: e.target.value }))
                      }
                      data-testid="input-checklist-phone"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="checklist-company">Company Name</Label>
                    <Input
                      id="checklist-company"
                      placeholder="Your company name"
                      value={checklistForm.company}
                      onChange={(e) =>
                        setChecklistForm((prev) => ({ ...prev, company: e.target.value }))
                      }
                      data-testid="input-checklist-company"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-cta text-cta-foreground border-0"
                    disabled={checklistMutation.isPending}
                    data-testid="button-download-checklist"
                  >
                    {checklistMutation.isPending ? (
                      "Processing..."
                    ) : (
                      <>
                        <Download className="mr-2 h-4 w-4" />
                        Download Free Checklist
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-foreground">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto mb-10">
            Whether you need tender consulting, compliance support, or
            professional cleaning services — we're here to help your business
            succeed.
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
