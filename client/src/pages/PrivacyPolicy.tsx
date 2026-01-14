import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col">
      <section className="relative py-20 bg-primary">
        <div className="container relative mx-auto px-4 md:px-6 text-center">
          <Badge className="mb-4 bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20">
            Legal
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Privacy Policy
          </h1>
          <p className="text-lg text-primary-foreground/90 max-w-3xl mx-auto">
            Your privacy is important to us. This policy outlines how we collect, use, and protect your information.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <Card className="bg-card">
            <CardContent className="p-8 prose prose-neutral dark:prose-invert max-w-none">
              <p className="text-muted-foreground mb-8">
                Last updated: {new Date().toLocaleDateString('en-ZA', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>

              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">1. Introduction</h2>
              <p className="text-muted-foreground mb-4">
                Fortsiphi (Pty) Ltd ("we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>

              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">2. Information We Collect</h2>
              <p className="text-muted-foreground mb-4">
                We may collect information about you in various ways, including:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                <li><strong>Personal Data:</strong> Name, email address, phone number, company name, and other contact information you provide through our contact forms.</li>
                <li><strong>Usage Data:</strong> Information about how you access and use our website, including your IP address, browser type, pages visited, and time spent on pages.</li>
                <li><strong>Communication Data:</strong> Records of correspondence when you contact us.</li>
              </ul>

              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">3. How We Use Your Information</h2>
              <p className="text-muted-foreground mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                <li>Respond to your enquiries and provide customer support</li>
                <li>Process service requests and proposals</li>
                <li>Send you updates about our services (with your consent)</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">4. Information Sharing</h2>
              <p className="text-muted-foreground mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your information with:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                <li>Service providers who assist in our operations</li>
                <li>Legal authorities when required by law</li>
                <li>Professional advisors as necessary</li>
              </ul>

              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">5. Data Security</h2>
              <p className="text-muted-foreground mb-4">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>

              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">6. Your Rights</h2>
              <p className="text-muted-foreground mb-4">
                Under the Protection of Personal Information Act (POPIA), you have the right to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                <li>Access your personal information</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Object to processing of your information</li>
                <li>Withdraw consent at any time</li>
              </ul>

              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">7. Cookies</h2>
              <p className="text-muted-foreground mb-4">
                Our website may use cookies to enhance your browsing experience. You can choose to accept or decline cookies through your browser settings.
              </p>

              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">8. Third-Party Links</h2>
              <p className="text-muted-foreground mb-4">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites.
              </p>

              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">9. Changes to This Policy</h2>
              <p className="text-muted-foreground mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page.
              </p>

              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">10. Contact Us</h2>
              <p className="text-muted-foreground mb-4">
                If you have questions about this Privacy Policy or wish to exercise your rights, please contact us at:
              </p>
              <address className="text-muted-foreground not-italic">
                <strong>Fortsiphi (Pty) Ltd</strong><br />
                Unit 49, Electron Exchange<br />
                50 Electron Avenue<br />
                Isando, Kempton Park, 1619<br /><br />
                Phone: 010 065 3247<br />
                Email: info@fortsiphi.co.za
              </address>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
