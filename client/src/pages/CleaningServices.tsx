import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Building2,
  Calendar,
  Sparkles,
  HardHat,
  Package,
  CheckCircle,
  ArrowRight,
  Clock,
  Shield,
  Users,
  FileText,
  ClipboardCheck,
} from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Office & Commercial Cleaning",
    description: "Comprehensive cleaning solutions for offices, commercial buildings, and professional spaces.",
    features: ["Daily cleaning schedules", "Reception and lobby care", "Washroom sanitation", "Window and glass cleaning"],
  },
  {
    icon: Calendar,
    title: "Contract Cleaning",
    description: "Flexible contract options tailored to your business needs and schedule.",
    features: ["Daily contracts", "Weekly contracts", "Monthly contracts", "Custom schedules"],
  },
  {
    icon: Sparkles,
    title: "Deep Cleaning Services",
    description: "Intensive cleaning for spaces requiring thorough sanitization and restoration.",
    features: ["Carpet deep cleaning", "Upholstery cleaning", "Tile and grout cleaning", "Sanitization services"],
  },
  {
    icon: HardHat,
    title: "Post-Construction Cleaning",
    description: "Specialized cleaning to prepare newly built or renovated spaces for occupation.",
    features: ["Debris removal", "Dust and particle cleaning", "Surface preparation", "Final polish and handover"],
  },
  {
    icon: Clock,
    title: "Once-Off Cleaning",
    description: "Single-service cleaning for events, moves, or special occasions.",
    features: ["Event preparation", "Post-event cleanup", "Move-in/move-out cleaning", "Spring cleaning"],
  },
  {
    icon: Package,
    title: "Supply of Cleaning Materials",
    description: "Quality cleaning supplies and consumables for your facility needs.",
    features: ["Cleaning chemicals", "Paper products", "Sanitary supplies", "Equipment and tools"],
  },
];

const complianceItems = [
  {
    icon: Shield,
    title: "PAYE, UIF & COIDA Compliant",
    description: "All cleaning staff are formally registered for PAYE, UIF, and COIDA. Proof of registration and good standing is available for procurement review.",
  },
  {
    icon: Users,
    title: "PPE-Compliant & Trained Personnel",
    description: "Every team member is trained, uniformed, and equipped with proper personal protective equipment in line with occupational health and safety requirements.",
  },
  {
    icon: ClipboardCheck,
    title: "NCCA & ISSA Registered",
    description: "Registered with the National Contract Cleaners Association (NCCA) and the International Sanitary Supply Association (ISSA) for industry-standard service delivery.",
  },
  {
    icon: FileText,
    title: "Procurement-Ready Documentation",
    description: "All compliance certificates, tax clearance, B-BBEE affidavit, company registration, and statutory documents are current and available on request for tender and procurement processes.",
  },
];

export default function CleaningServices() {
  return (
    <div className="flex flex-col">
      <section className="relative py-20 bg-primary">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-10 left-20 w-72 h-72 bg-cta rounded-full blur-3xl" />
        </div>
        <div className="container relative mx-auto px-4 md:px-6 text-center">
          <Badge className="mb-4 bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20">
            Compliant Commercial Cleaning
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Professional Cleaning Services
          </h1>
          <p className="text-lg text-primary-foreground/90 max-w-3xl mx-auto mb-8">
            Fully compliant cleaning operations for offices, commercial
            buildings, and post-construction sites. All staff are PAYE, UIF &
            COIDA registered with procurement-ready documentation available.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-cta text-cta-foreground border-0"
              data-testid="button-cleaning-proposal"
            >
              Request a Cleaning Proposal
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <Badge className="mb-4 bg-cta/10 text-cta border-cta/20">
                Compliance First
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Structured, Compliant & Procurement-Ready
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                At Fortsiphi, cleaning is not just operational — it is structured
                and compliance-driven. Every aspect of our cleaning division is
                set up to meet the documentation and compliance requirements of
                corporate procurement, government tenders, and institutional
                contracts.
              </p>

              <div className="space-y-6">
                {complianceItems.map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-cta/10 flex-shrink-0 mt-0.5">
                      <item.icon className="h-5 w-5 text-cta" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <Card className="bg-card border-gold/20">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4 text-card-foreground flex items-center gap-2">
                    <Shield className="h-5 w-5 text-gold" />
                    Documentation Available for Procurement
                  </h3>
                  <div className="space-y-3">
                    {[
                      "CIPC Registration Certificate",
                      "Valid Tax Clearance (TCS Pin)",
                      "B-BBEE Certificate / Affidavit",
                      "PAYE Registration Confirmation",
                      "UIF Registration & Proof",
                      "COIDA Letter of Good Standing",
                      "NCCA Membership Certificate",
                      "ISSA Registration",
                      "Health & Safety Policy",
                      "Company Profile & References",
                    ].map((doc) => (
                      <div key={doc} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-cta flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{doc}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4 text-card-foreground">Contract Options</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-muted rounded-md">
                      <span className="font-medium text-sm">Daily Contracts</span>
                      <Badge variant="secondary">Available</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-muted rounded-md">
                      <span className="font-medium text-sm">Weekly Contracts</span>
                      <Badge variant="secondary">Available</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-muted rounded-md">
                      <span className="font-medium text-sm">Monthly Contracts</span>
                      <Badge variant="secondary">Available</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-muted rounded-md">
                      <span className="font-medium text-sm">Once-Off Services</span>
                      <Badge variant="secondary">Available</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
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
              Comprehensive Cleaning Solutions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From daily office maintenance to specialized post-construction
              cleanup, we deliver compliant, quality-assured service across all
              cleaning categories.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Card key={service.title} className="bg-card hover-elevate">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-md bg-primary/10 mb-4">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-cta mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-foreground">
            Request a Cleaning Proposal
          </h2>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto mb-10">
            Get a customized, compliant cleaning proposal with all required
            documentation for your procurement process.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-cta text-cta-foreground border-0 min-w-[200px]"
                data-testid="button-cleaning-cta"
              >
                Request a Proposal
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <a href="tel:0100653247">
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground min-w-[200px] backdrop-blur-sm bg-primary-foreground/10"
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
