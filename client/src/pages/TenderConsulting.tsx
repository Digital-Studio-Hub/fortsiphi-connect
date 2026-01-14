import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  FileCheck,
  FileText,
  Search,
  Calculator,
  Send,
  ClipboardList,
  CheckCircle,
  ArrowRight,
  AlertCircle,
  Target,
} from "lucide-react";

const services = [
  {
    icon: FileCheck,
    title: "Business Compliance Support",
    description: "CIPC registration, tax compliance, and mandatory documentation assistance.",
    step: "01",
  },
  {
    icon: Search,
    title: "Compliance Gap Assessments",
    description: "Identify and address compliance gaps before tender submission.",
    step: "02",
  },
  {
    icon: ClipboardList,
    title: "Tender Readiness Assessments",
    description: "Evaluate your business's preparedness for tender opportunities.",
    step: "03",
  },
  {
    icon: FileText,
    title: "Tender Document Interpretation",
    description: "Expert analysis and interpretation of complex tender requirements.",
    step: "04",
  },
  {
    icon: Send,
    title: "Tender Preparation & Completion",
    description: "Complete preparation and assembly of tender documents.",
    step: "05",
  },
  {
    icon: Calculator,
    title: "Pricing & Costing Support",
    description: "Strategic pricing guidance to ensure competitive and profitable bids.",
    step: "06",
  },
];

const additionalServices = [
  "RFQs & quotation preparation",
  "Tender administration support",
  "Submission management",
  "Post-submission follow-up",
];

const differentiators = [
  {
    title: "We Prepare & Submit",
    description: "Not just advice — we handle the actual preparation and submission of your tender documents.",
  },
  {
    title: "Execution Focus",
    description: "Our hands-on approach means we work alongside you through every step of the process.",
  },
  {
    title: "Compliance First",
    description: "We ensure your business meets all compliance requirements before submission.",
  },
];

export default function TenderConsulting() {
  return (
    <div className="flex flex-col">
      <section className="relative py-20 bg-primary">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-72 h-72 bg-gold rounded-full blur-3xl" />
        </div>
        <div className="container relative mx-auto px-4 md:px-6 text-center">
          <Badge className="mb-4 bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20">
            Tender Consulting
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Tender Consulting & Compliance Support
          </h1>
          <p className="text-lg text-primary-foreground/90 max-w-3xl mx-auto mb-8">
            Hands-on tender preparation and submission support. We prepare and submit — not just advise.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-cta text-cta-foreground border-0"
              data-testid="button-tender-assessment"
            >
              Book a Tender Readiness Assessment
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      <section className="py-16 bg-gold/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
            <AlertCircle className="h-8 w-8 text-gold flex-shrink-0" />
            <p className="text-lg font-medium text-foreground">
              <span className="text-gold">Key Positioning:</span> We prepare and submit — not just advise. This is execution-focused consulting.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Our Process
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Step-by-Step Support
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From compliance assessment to final submission, we guide you through every stage of the tender process.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Card key={service.title} className="bg-card hover-elevate relative overflow-visible">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary text-primary-foreground rounded-md flex items-center justify-center font-bold text-lg">
                  {service.step}
                </div>
                <CardHeader className="pt-8">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-md bg-gold/10 mb-4">
                    <service.icon className="h-6 w-6 text-gold" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
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
                Additional Services
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Complete Tender Administration
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Beyond document preparation, we offer comprehensive tender administration support to ensure your submissions are complete, compliant, and competitive.
              </p>

              <ul className="space-y-4 mb-8">
                {additionalServices.map((service) => (
                  <li key={service} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-cta mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{service}</span>
                  </li>
                ))}
              </ul>

              <Link href="/contact">
                <Button className="bg-cta text-cta-foreground border-0" data-testid="button-tender-enquiry">
                  Make an Enquiry
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="space-y-6">
              {differentiators.map((item, index) => (
                <Card key={item.title} className="bg-card">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 flex-shrink-0">
                      <Target className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2 text-card-foreground">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-foreground">
            Book a Tender Readiness Assessment
          </h2>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto mb-10">
            Let us evaluate your business's readiness for tender opportunities and identify any gaps that need to be addressed.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-cta text-cta-foreground border-0 min-w-[200px]"
                data-testid="button-tender-cta"
              >
                Book Assessment
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
