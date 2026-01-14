import { Link } from "wouter";
import { Phone, Mail, MapPin } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import logoWhite from "@assets/White_Logo_1768385337557.png";
import lekkerLogo from "@assets/lekkerlogo_1768384232442.png";
import certBadge from "@assets/Badge_Level_1_1768384224164.png";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          <div className="space-y-4">
            <img src={logoWhite} alt="Fortsiphi" className="h-16 w-auto" />
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              From Compliance to Contract. Professional cleaning services and hands-on tender consulting for SMMEs, corporates, and institutions.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors" data-testid="link-footer-about">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/cleaning-services" className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors" data-testid="link-footer-cleaning">
                  Cleaning Services
                </Link>
              </li>
              <li>
                <Link href="/tender-consulting" className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors" data-testid="link-footer-tender">
                  Tender Consulting
                </Link>
              </li>
              <li>
                <Link href="/tender-ready-hub" className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors" data-testid="link-footer-hub">
                  Tender Ready Hub
                </Link>
              </li>
              <li>
                <Link href="/compliance" className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors" data-testid="link-footer-compliance">
                  Compliance
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 mt-0.5 text-gold" />
                <div className="text-sm">
                  <a href="tel:0100653247" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors" data-testid="link-footer-phone">
                    010 065 3247
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <SiWhatsapp className="h-4 w-4 mt-0.5 text-gold" />
                <div className="text-sm">
                  <a href="https://wa.me/27813655901" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors" data-testid="link-footer-whatsapp">
                    081 365 5901
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 mt-0.5 text-gold" />
                <div className="text-sm">
                  <a href="mailto:info@fortsiphi.co.za" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors" data-testid="link-footer-email">
                    info@fortsiphi.co.za
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-gold flex-shrink-0" />
                <address className="text-sm text-primary-foreground/80 not-italic">
                  Unit 49, Electron Exchange<br />
                  50 Electron Avenue<br />
                  Isando, Kempton Park, 1619
                </address>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Compliance</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>PAYE Compliant</li>
              <li>UIF Compliant</li>
              <li>COIDA Compliant</li>
              <li>Tax Compliant</li>
              <li>B-BBEE Compliant</li>
              <li>NCCA Registered</li>
              <li>ISSA Registered</li>
            </ul>
          </div>

          <div className="flex flex-col items-center justify-start">
            <a
              href="https://lekker.network/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center"
              data-testid="link-footer-cert-badge"
            >
              <img src={certBadge} alt="Certified by Lekker Network - Level 1" className="h-28 w-auto" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 md:px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-primary-foreground/70">
              &copy; {new Date().getFullYear()} Fortsiphi (Pty) Ltd. All rights reserved.
            </p>

            <a
              href="https://lekker.network/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-1"
              data-testid="link-lekker-network"
            >
              <img src={lekkerLogo} alt="Lekker Network" className="h-8 w-auto" />
              <span className="text-xs text-primary-foreground/60">Powered by Lekker Network</span>
            </a>

            <div className="flex items-center gap-4 text-sm">
              <Link href="/privacy-policy" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors" data-testid="link-footer-privacy">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
