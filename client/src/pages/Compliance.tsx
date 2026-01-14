import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Shield,
  CheckCircle,
  ArrowRight,
  FileCheck,
  Users,
  HardHat,
  Building,
  Award,
  BadgeCheck,
  ClipboardCheck,
  Briefcase,
} from "lucide-react";
import certBadge from "@assets/Badge_Level_1_1768384224164.png";

const complianceItems = [
  {
    icon: FileCheck,
    title: "PAYE Compliant",
    description: "All employees registered for Pay-As-You-Earn tax deductions as required by SARS.",
    category: "Tax & Payroll",
  },
  {
    icon: Users,
    title: "UIF Compliant",
    description: "Unemployment Insurance Fund contributions maintained for all staff members.",
    category: "Tax & Payroll",
  },
  {
    icon: Shield,
    title: "COIDA Compliant",
    description: "Compensation for Occupational Injuries and Diseases Act compliance for worker protection.",
    category: "Worker Protection",
  },
  {
    icon: ClipboardCheck,
    title: "Tax Compliant",
    description: "Full compliance with South African Revenue Service requirements and tax obligations.",
    category: "Tax & Payroll",
  },
  {
    icon: Briefcase,
    title: "B-BBEE Compliant",
    description: "Broad-Based Black Economic Empowerment compliance and certification maintained.",
    category: "Transformation",
  },
  {
    icon: Building,
    title: "NCCA Registered",
    description: "Registered member of the National Contract Cleaners Association.",
    category: "Industry Registration",
  },
  {
    icon: Award,
    title: "ISSA Registered",
    description: "Member of the International Sanitary Supply Association for industry standards.",
    category: "Industry Registration",
  },
  {
    icon: HardHat,
    title: "PPE Compliant",
    description: "Personal Protective Equipment standards maintained for all operational staff.",
    category: "Worker Protection",
  },
];

const categories = ["Tax & Payroll", "Worker Protection", "Transformation", "Industry Registration"];

export default function Compliance() {
  return (
    <div className="flex flex-col">
      <section className="relative py-20 bg-primary">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-20 w-72 h-72 bg-cta rounded-full blur-3xl" />
        </div>
        <div className="container relative mx-auto px-4 md:px-6 text-center">
          <Badge className="mb-4 bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20">
            Our Commitment
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Compliance & Accreditation
          </h1>
          <p className="text-lg text-primary-foreground/90 max-w-3xl mx-auto">
            At Fortsiphi, compliance is not just a requirement — it's a core value. We maintain the highest standards across all operations.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <img src={certBadge} alt="Certified by Lekker Network - Level 1" className="h-40 w-auto" />
            </div>
            <Badge className="mb-4 bg-gold/10 text-gold-foreground border-gold/20">
              Verified & Certified
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Fully Compliant Operations
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every aspect of our business adheres to South African regulatory requirements and industry best practices.
            </p>
          </div>

          {categories.map((category) => (
            <div key={category} className="mb-12">
              <h3 className="text-xl font-semibold mb-6 text-foreground flex items-center gap-2">
                <BadgeCheck className="h-5 w-5 text-cta" />
                {category}
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {complianceItems
                  .filter((item) => item.category === category)
                  .map((item) => (
                    <Card key={item.title} className="bg-card hover-elevate">
                      <CardContent className="p-6">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-md bg-cta/10 mb-4">
                          <item.icon className="h-6 w-6 text-cta" />
                        </div>
                        <h4 className="font-semibold mb-2 text-card-foreground flex items-center gap-2">
                          {item.title}
                          <CheckCircle className="h-4 w-4 text-cta" />
                        </h4>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                Why Compliance Matters
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Your Assurance of Quality
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                When you work with Fortsiphi, you're working with a company that takes compliance seriously. Our certifications and registrations are not just badges — they represent our commitment to professional excellence.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-cta mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">All staff properly registered and insured</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-cta mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Regular compliance audits and updates</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-cta mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Industry association memberships maintained</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-cta mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Documentation available upon request</span>
                </li>
              </ul>
            </div>

            <Card className="bg-card">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6 text-card-foreground">
                  Request Compliance Documentation
                </h3>
                <p className="text-muted-foreground mb-6">
                  Need copies of our compliance certificates for your procurement process? Contact us to request official documentation.
                </p>
                <Link href="/contact">
                  <Button className="w-full bg-cta text-cta-foreground border-0" data-testid="button-compliance-request">
                    Request Documentation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-foreground">
            Work With a Compliant Partner
          </h2>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto mb-10">
            Choose Fortsiphi for your cleaning or consulting needs and enjoy the peace of mind that comes with working with a fully compliant service provider.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-cta text-cta-foreground border-0 min-w-[200px]"
                data-testid="button-compliance-cta"
              >
                Request a Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/cleaning-services">
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground min-w-[200px] backdrop-blur-sm bg-primary-foreground/10"
              >
                Explore Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
