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

const compliancePoints = [
  { icon: Shield, text: "PAYE, UIF & COIDA compliant staff" },
  { icon: Users, text: "PPE-compliant & trained personnel" },
  { icon: CheckCircle, text: "Registered with NCCA and ISSA" },
  { icon: Sparkles, text: "Quality control inspections & supervision" },
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
            Professional Cleaning
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Professional Cleaning Services
          </h1>
          <p className="text-lg text-primary-foreground/90 max-w-3xl mx-auto mb-8">
            Positioned for offices, commercial buildings, and post-construction sites. All staff are fully compliant and professionally trained.
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
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Our Services
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Comprehensive Cleaning Solutions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From daily office maintenance to specialized post-construction cleanup, we deliver excellence across all cleaning services.
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

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-cta/10 text-cta border-cta/20">
                Why Choose Fortsiphi
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Compliant & Professional Operations
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                At Fortsiphi, we maintain the highest standards of compliance and professionalism. Our cleaning staff are fully registered, trained, and equipped to deliver exceptional service.
              </p>

              <div className="space-y-4">
                {compliancePoints.map((point) => (
                  <div key={point.text} className="flex items-start gap-4">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-cta/10 flex-shrink-0">
                      <point.icon className="h-5 w-5 text-cta" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{point.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Card className="bg-card">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-6 text-card-foreground">Contract Options</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-muted rounded-md">
                      <span className="font-medium">Daily Contracts</span>
                      <Badge variant="secondary">Available</Badge>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-muted rounded-md">
                      <span className="font-medium">Weekly Contracts</span>
                      <Badge variant="secondary">Available</Badge>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-muted rounded-md">
                      <span className="font-medium">Monthly Contracts</span>
                      <Badge variant="secondary">Available</Badge>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-muted rounded-md">
                      <span className="font-medium">Once-Off Services</span>
                      <Badge variant="secondary">Available</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-foreground">
            Request a Cleaning Proposal
          </h2>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto mb-10">
            Get a customized cleaning proposal tailored to your business needs. Our team will assess your requirements and provide a comprehensive quote.
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
