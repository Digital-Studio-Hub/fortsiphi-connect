import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Users,
  Target,
  BookOpen,
  Shield,
  CheckCircle,
  ArrowRight,
  Lightbulb,
  TrendingUp,
  Award,
} from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Compliance Readiness",
    description: "Ensure your business meets all regulatory and tender compliance requirements before submission.",
  },
  {
    icon: Target,
    title: "Structured Preparation",
    description: "Follow a proven framework to prepare your business for successful tender applications.",
  },
  {
    icon: BookOpen,
    title: "Documentation Support",
    description: "Get help preparing all necessary documentation required for tender submissions.",
  },
  {
    icon: TrendingUp,
    title: "Competitive Positioning",
    description: "Learn how to position your business competitively in the tender market.",
  },
];

const whoIsItFor = [
  "New entrepreneurs entering the tender market",
  "SMMEs looking to improve their tender success rate",
  "Businesses needing compliance verification",
  "Companies wanting to reduce disqualification risk",
];

const outcomes = [
  {
    title: "Compliant Business",
    description: "All regulatory requirements met and documented",
  },
  {
    title: "Tender-Ready Documentation",
    description: "Complete set of documents ready for submission",
  },
  {
    title: "Competitive Pricing",
    description: "Strategic pricing approach for tender success",
  },
  {
    title: "Reduced Disqualifications",
    description: "Minimize risk of technical disqualification",
  },
];

export default function TenderReadyHub() {
  return (
    <div className="flex flex-col">
      <section className="relative py-20 bg-primary">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-20 left-10 w-72 h-72 bg-cta rounded-full blur-3xl" />
          <div className="absolute top-10 right-20 w-56 h-56 bg-gold rounded-full blur-3xl" />
        </div>
        <div className="container relative mx-auto px-4 md:px-6 text-center">
          <Badge className="mb-4 bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20">
            SMME Development
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Tender Ready Hub
          </h1>
          <p className="text-lg text-primary-foreground/90 max-w-3xl mx-auto mb-8">
            A structured SMME development platform. Prepare your business before you submit tenders.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-cta text-cta-foreground border-0"
              data-testid="button-hub-join"
            >
              Join the Tender Ready Hub
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-gold/10 text-gold-foreground border-gold/20">
                What It Is
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Your Pathway to Tender Success
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                The Tender Ready Hub is Fortsiphi's structured SMME development platform designed to prepare entrepreneurs before they submit tenders. We ensure businesses are compliant, structured, and competitive.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our purpose is clear: reduce failed or disqualified tender submissions by addressing gaps before they become problems. This is empowering, practical support — not hype.
              </p>

              <div className="flex items-start gap-4 p-4 bg-muted rounded-md">
                <Lightbulb className="h-6 w-6 text-gold flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-foreground">Empowering. Practical. Professional.</p>
                  <p className="text-muted-foreground text-sm">We prepare you to succeed, not just participate.</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {outcomes.map((outcome, index) => (
                <Card key={outcome.title} className="bg-card">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-cta/10 mb-4">
                      <CheckCircle className="h-6 w-6 text-cta" />
                    </div>
                    <h3 className="font-semibold mb-2 text-card-foreground">{outcome.title}</h3>
                    <p className="text-sm text-muted-foreground">{outcome.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Benefits
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              How You Benefit
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The Tender Ready Hub equips your business with everything needed to succeed in the tender market.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="bg-card hover-elevate">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                    <benefit.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2 text-card-foreground">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <Card className="bg-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-gold" />
                    Who It's For
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {whoIsItFor.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-cta mt-0.5 flex-shrink-0" />
                        <span className="text-card-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="order-1 lg:order-2">
              <Badge className="mb-4 bg-cta/10 text-cta border-cta/20">
                Who Should Join
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Is This Right For You?
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                The Tender Ready Hub is designed for businesses at any stage of their tender journey. Whether you're new to tenders or looking to improve your success rate, we have the support you need.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                If your business has experienced tender rejections or disqualifications, our structured approach will help identify and address the root causes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary-foreground/10 mb-6">
            <Award className="h-10 w-10 text-gold" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-foreground">
            Join the Tender Ready Hub
          </h2>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto mb-10">
            Start your journey to tender success today. Let us help you build a compliant, competitive, and structured business.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-cta text-cta-foreground border-0 min-w-[200px]"
                data-testid="button-hub-cta"
              >
                Get Started
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
