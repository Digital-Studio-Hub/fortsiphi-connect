import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Calendar,
  Clock,
  MapPin,
  Truck,
  Users,
  CheckCircle2,
  AlertTriangle,
  Share2,
  Copy,
  CreditCard,
  FileText,
  Target,
  Award,
  MessageCircle,
} from "lucide-react";
import { SiWhatsapp, SiFacebook } from "react-icons/si";
import { CheckoutForm } from "@/components/tender-this/CheckoutForm";
import bootcampPoster from "@assets/fortsiphi - tender bootcamp.png";
import logoWhite from "@assets/White_Logo_1773066374475.png";

interface BootcampResponse {
  success: boolean;
  product: {
    id: string;
    name: string;
    description?: string;
    priceInCents: number;
    priceFormatted: string;
    imageUrl?: string | null;
    inStock: boolean;
  };
  pricing: {
    standard: {
      priceFormatted: string;
    };
  };
  event: {
    dates: string;
    time: string;
    venue: string;
    address: string;
    countdownTarget: string;
  };
  seats: {
    total: number;
    left: number;
    soldOut: boolean;
  };
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const faqs = [
  {
    q: "Who should attend this bootcamp?",
    a: "First-time tender applicants, SMMEs bidding for Supply & Delivery tenders, businesses repeatedly disqualified due to compliance issues, and business owners who want practical submission experience — not theory-only training.",
  },
  {
    q: "What will I walk away with?",
    a: "A completed, submission-ready tender document, compliance verification, pricing guidance, and confidence to submit Supply & Delivery tenders with expert support.",
  },
  {
    q: "Do I need to bring my own tender?",
    a: "Yes. Bring your laptop, compliance documents, and the Supply & Delivery tender you intend to complete. A pre-event compliance checklist is provided after booking.",
  },
  {
    q: "How many participants are in each group?",
    a: "Maximum 10 participants. This is intentionally small so every attendee receives one-on-one facilitator support.",
  },
  {
    q: "What is included in the ticket price?",
    a: "Two full days of live facilitated training, individual support, compliance document review, printed materials, breakfast and lunch on both days, pre-event checklist, Wi-Fi, and a fully equipped training venue.",
  },
  {
    q: "Where is the event held?",
    a: "Unit 49, Electron Exchange, 50 Electron Avenue, Isando, Kempton Park, 1619.",
  },
  {
    q: "What are the event dates and times?",
    a: "A new date will be published soon. Sessions run 9:00 AM to 5:00 PM each day once confirmed.",
  },
  {
    q: "What is the ticket price?",
    a: "The standard seat price is R5,665. Payment plans are available — contact us on WhatsApp to discuss options.",
  },
  {
    q: "How do I pay?",
    a: "Secure your seat via PayLekker on this page. You will be redirected to a secure card payment page and returned here after payment.",
  },
  {
    q: "What if all seats are sold out?",
    a: "Join the waitlist on this page to be first in line for the next bootcamp round.",
  },
  {
    q: "Can I get help before the event?",
    a: "Yes. WhatsApp us on 081 365 5901 or call 010 065 3247 for questions about compliance documents or suitability.",
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] font-bold tracking-[0.16em] uppercase text-[#C9A84C] mb-3">
      {children}
    </p>
  );
}

export default function TenderThisLanding() {
  const params = new URLSearchParams(window.location.search);
  const paymentStatus = params.get("payment");
  const [copied, setCopied] = useState(false);

  const { data, isLoading } = useQuery<BootcampResponse>({
    queryKey: ["/api/bootcamp"],
    queryFn: async () => {
      const res = await fetch("/api/bootcamp");
      if (!res.ok) throw new Error("Could not load bootcamp details");
      return res.json();
    },
  });

  const seatsLeft = data?.seats.left ?? 10;
  const soldOut = data?.seats.soldOut ?? false;
  const urgencyTone = seatsLeft <= 4 ? "urgent" : "normal";
  const eventDates = data?.event.dates || "New date will be published soon";

  useEffect(() => {
    document.title =
      "Tender This Live Bootcamp | Supply & Delivery Tender Training | Fortsiphi";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Two-day hands-on Supply & Delivery tender submission bootcamp. Complete your real tender with expert guidance. New date will be published soon. Isando. Only 10 seats.",
      );
    }
  }, []);

  const shareUrl = typeof window !== "undefined" ? window.location.href.split("?")[0] : "";
  const shareMessage = encodeURIComponent(
    "I'm booking the Tender This Live Bootcamp with Fortsiphi — new date will be published soon. Only 10 seats. Join me: ",
  );

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      /* ignore */
    }
  };

  if (paymentStatus === "success") {
    return (
      <div className="min-h-screen bg-[#0B1D2E] text-white flex items-center justify-center px-6">
        <div className="max-w-lg text-center space-y-6">
          <CheckCircle2 className="h-16 w-16 text-[#22C55E] mx-auto" />
          <h1 className="text-3xl font-extrabold">Payment received — you're in!</h1>
          <p className="text-white/80 leading-relaxed">
            Thank you for securing your seat at Tender This™ Live Bootcamp. We will send your
            confirmation and pre-event compliance checklist shortly.
          </p>
          <p className="text-sm text-white/60">
            Questions? WhatsApp{" "}
            <a href="https://wa.me/27813655901" className="text-[#C9A84C] underline">
              081 365 5901
            </a>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="tender-this-landing font-['Montserrat',sans-serif] text-[#444]">
      {/* Section 1 — Hero */}
      <section className="relative bg-[#0B1D2E] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,#C9A84C33,transparent_60%)]" />
        <div className="max-w-[760px] mx-auto px-5 sm:px-8 py-14 sm:py-20 relative">
          <motion.p
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[11px] font-bold tracking-[0.16em] uppercase text-[#C9A84C] text-center mb-6"
          >
            Fortsiphi (Pty) Ltd — Compliance & Tender Execution Specialists
          </motion.p>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="text-[52px] sm:text-[72px] font-black leading-none tracking-[-3px] text-white"
              >
                TENDER <span className="text-[#C9A84C]">THIS</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-sm font-bold tracking-[0.3em] text-[#C9A84C] mt-2"
              >
                LIVE BOOTCAMP
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-full border border-white/20 text-xs font-semibold uppercase"
              >
                <Truck className="h-4 w-4" aria-hidden="true" />
                Supply & Delivery — Live Submission
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-6 text-[15px] leading-[1.8] text-white/85"
              >
                A two-day, hands-on bootcamp where you complete your real supply & delivery tender
                with expert guidance, compliance checks and 1-on-1 support.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-4 mt-6 text-sm text-white/80"
              >
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4 text-[#C9A84C]" /> {eventDates}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4 text-[#C9A84C]" /> 9:00 AM each day
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-4 w-4 text-[#C9A84C]" /> Isando, Kempton Park
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.75 }}
                className={`mt-6 px-4 py-3 rounded-lg text-sm ${
                  urgencyTone === "urgent"
                    ? "bg-red-950/50 border border-red-400/30 text-red-200"
                    : "bg-white/10 border border-[#C9A84C]/30"
                }`}
              >
                Only{" "}
                <strong className="text-white text-lg mx-1">
                  {isLoading ? "…" : seatsLeft}
                </strong>
                {seatsLeft === 1 ? "seat left — do not wait" : "seats remaining — this group is intentionally small"}
              </motion.div>

              <motion.a
                href="#pricing"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="inline-block mt-6 bg-[#22C55E] hover:bg-[#16A34A] text-white font-bold text-[17px] px-8 py-4 rounded-lg transition-colors"
              >
                Secure My Seat →
              </motion.a>
              <p className="mt-3 text-xs text-white/40">
                R5,665 per seat · Payment plans available
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.35 }}
              className="relative"
            >
              <img
                src={bootcampPoster}
                alt="Tender This Live Bootcamp promotional poster"
                className="w-full rounded-xl shadow-2xl"
              />
              <div className="absolute -top-3 -right-3 bg-white text-[#0B1D2E] rounded-full px-4 py-2 text-xs font-bold shadow-lg flex items-center gap-1.5">
                <Users className="h-4 w-4" aria-hidden="true" />
                ONLY 10 SEATS
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2 — Problem */}
      <section className="bg-[#F7F3E8] py-16">
        <div className="max-w-[760px] mx-auto px-5 sm:px-8">
          <SectionLabel>The problem</SectionLabel>
          <h2 className="text-[26px] font-extrabold text-[#0B1D2E] leading-tight mb-6">
            Most tenders fail before they are even opened.
          </h2>
          <div className="space-y-4 text-[15px] leading-[1.8] text-[#444]">
            <p>
              You have the capability. You have the pricing. But one missing compliance document,
              one pricing schedule error, or one unsigned declaration — and your tender is
              disqualified before evaluation even begins.
            </p>
            <p>
              Generic training tells you what to do. It does not sit with you while you complete
              your actual tender, check your compliance pack, or fix your pricing before submission.
            </p>
            <p>
              That gap between knowing and submitting is where SMMEs lose contracts they were
              capable of winning.
            </p>
          </div>
          <div className="mt-8 bg-[#0B1D2E] text-white p-6 rounded-xl text-[15px] leading-relaxed">
            Tender This™ is not a seminar. It is two full days of guided, live submission work —
            with your documents, your tender, and expert support at every step.
          </div>
        </div>
      </section>

      {/* Section 3 — What Is This */}
      <section className="bg-white py-16">
        <div className="max-w-[760px] mx-auto px-5 sm:px-8">
          <SectionLabel>What is this</SectionLabel>
          <h2 className="text-[26px] font-extrabold text-[#0B1D2E] mb-4">
            Two days. One completed tender. Expert support throughout.
          </h2>
          <p className="text-[15px] leading-[1.8] mb-8">
            Bring your compliance documents and the Supply & Delivery tender you intend to submit.
            Over two full days you will work through every section with facilitator support,
            document reviews, and a final submission check.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { day: "Day 1", title: "Compliance audit & tender structure", desc: "Full compliance document audit, evaluation criteria, mandatory requirements, and pricing schedules." },
              { day: "Day 1", title: "Live facilitator support", desc: "Work through your tender sections with one-on-one guidance as you complete each part." },
              { day: "Day 2", title: "Pricing & competitiveness", desc: "Practical pricing strategies for Supply & Delivery tenders with real-time review." },
              { day: "Day 2", title: "Final submission check", desc: "Leave with a completed, submission-ready tender document — not just notes." },
            ].map((step, i) => (
              <motion.div
                key={step.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { delay: i * 0.1 } } }}
                className="border border-[#EBEBEB] rounded-xl p-5 bg-white"
              >
                <span className="text-[11px] font-bold text-[#C9A84C] tracking-widest uppercase">{step.day}</span>
                <h3 className="text-lg font-bold text-[#0B1D2E] mt-2">{step.title}</h3>
                <p className="text-[13px] text-[#555] mt-2 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — Why Different */}
      <section className="bg-[#F8F9FA] py-16">
        <div className="max-w-[760px] mx-auto px-5 sm:px-8">
          <SectionLabel>Why different</SectionLabel>
          <h2 className="text-[26px] font-extrabold text-[#0B1D2E] mb-6">
            This is not theory training.
          </h2>
          <div className="border border-[#EBEBEB] rounded-xl overflow-hidden bg-white text-sm">
            {[
              ["Complete your actual tender", "Not a sample exercise — your real submission"],
              ["Maximum 10 participants", "Intentionally small for 1-on-1 support"],
              ["Active compliance specialists", "Fortsiphi executes tenders — not just advises"],
              ["Two full days on-site", "Not a half-day webinar or recorded course"],
              ["Compliance audit included", "Document review before you start your tender"],
              ["Submission-ready output", "Walk out with a completed tender pack"],
              ["Supply & Delivery focus", "Built for the tender type SMMEs bid most often"],
            ].map(([left, right], i) => (
              <div
                key={left}
                className={`grid grid-cols-2 gap-4 px-5 py-4 ${i % 2 === 0 ? "bg-white" : "bg-[#F8F9FA]"}`}
              >
                <span className="font-semibold text-[#0B1D2E]">{left}</span>
                <span className="text-[#555]">{right}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 bg-[#0B1D2E] text-white p-5 rounded-xl text-sm">
            We prepare and submit — not just advise. That is the Fortsiphi difference.
          </div>
        </div>
      </section>

      {/* Section 5 — Facilitator */}
      <section className="bg-white py-16">
        <div className="max-w-[760px] mx-auto px-5 sm:px-8">
          <SectionLabel>Your facilitators</SectionLabel>
          <h2 className="text-[26px] font-extrabold text-[#0B1D2E] mb-4">
            Taught by active compliance & tender execution specialists.
          </h2>
          <p className="text-[15px] leading-[1.8] mb-6">
            Fortsiphi (Pty) Ltd prepares, structures, and submits tenders for SMMEs, corporates, and
            institutions across South Africa — with full PAYE, UIF, COIDA, and B-BBEE compliance.
          </p>
          <div className="bg-[#0B1D2E] text-white rounded-xl p-6">
            <img src={logoWhite} alt="Fortsiphi" className="h-12 mb-4" />
            <p className="text-sm leading-relaxed text-white/85">
              Compliance & Tender Execution Specialists based at Electron Exchange, Isando.
              Registered with NCCA and ISSA. Procurement-ready documentation on every engagement.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {["PAYE Compliant", "UIF Compliant", "COIDA Compliant", "B-BBEE Compliant", "NCCA Registered"].map(
                (pill) => (
                  <span
                    key={pill}
                    className="text-[11px] px-3 py-1 rounded-full border border-[#C9A84C]/40 text-[#C9A84C]"
                  >
                    {pill}
                  </span>
                ),
              )}
            </div>
            <blockquote className="mt-6 border-l-2 border-[#C9A84C] pl-4 text-[#C9A84C] italic text-sm">
              "We prepare and submit — not just advise."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Section 6 — Why Fortsiphi */}
      <section className="bg-[#F8F9FA] py-16">
        <div className="max-w-[760px] mx-auto px-5 sm:px-8">
          <SectionLabel>Why Fortsiphi</SectionLabel>
          <h2 className="text-[26px] font-extrabold text-[#0B1D2E] mb-6">
            Built on compliance. Driven by results.
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: FileText, title: "Document expertise", desc: "CIPC, tax, COIDA, and mandatory tender declarations — verified before you start." },
              { icon: Target, title: "Execution focus", desc: "Hands-on submission support, not advisory-only consulting." },
              { icon: Award, title: "Procurement-ready", desc: "NCCA and ISSA registered. Fully compliant operations." },
              { icon: Users, title: "SMME specialists", desc: "We work with first-time applicants and experienced bidders alike." },
            ].map((card) => (
              <div key={card.title} className="bg-white border border-[#EBEBEB] rounded-xl p-5">
                <card.icon className="h-6 w-6 text-[#C9A84C] mb-3" aria-hidden="true" />
                <h3 className="font-bold text-[#0B1D2E]">{card.title}</h3>
                <p className="text-[13px] text-[#555] mt-2 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7 — Who Is This For */}
      <section className="bg-white py-16">
        <div className="max-w-[760px] mx-auto px-5 sm:px-8">
          <SectionLabel>Who is this for</SectionLabel>
          <h2 className="text-[26px] font-extrabold text-[#0B1D2E] mb-6">
            Is this bootcamp right for you?
          </h2>
          <div className="space-y-3">
            {[
              "First-time tender applicants entering the Supply & Delivery market",
              "SMMEs who have been disqualified due to compliance or documentation errors",
              "Business owners who want to complete — not just learn about — tender submission",
              "Companies bidding for contracts across the Eastern Cape and South Africa",
            ].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="flex items-start gap-3 p-4 border border-[#EBEBEB] rounded-xl"
              >
                <CheckCircle2 className="h-5 w-5 text-[#22C55E] shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-[15px]">{item}</span>
              </motion.div>
            ))}
          </div>
          <div className="mt-6 flex items-start gap-3 p-5 bg-amber-50 border border-amber-200 rounded-xl text-sm">
            <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0" aria-hidden="true" />
            <p>
              This bootcamp is not for spectators. You must bring your laptop, compliance documents,
              and the tender you intend to submit. Come ready to work.
            </p>
          </div>
        </div>
      </section>

      {/* Section 8 — What To Bring */}
      <section className="bg-[#F8F9FA] py-16">
        <div className="max-w-[760px] mx-auto px-5 sm:px-8">
          <SectionLabel>What to bring</SectionLabel>
          <h2 className="text-[26px] font-extrabold text-[#0B1D2E] mb-6">
            Come prepared. Leave submission-ready.
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              "Laptop (fully charged + charger)",
              "CIPC registration documents",
              "Tax clearance certificate",
              "B-BBEE affidavit or certificate",
              "COIDA / UIF / PAYE compliance proof",
              "Bank confirmation letter",
              "The Supply & Delivery tender you intend to submit",
              "Company profile and organogram (if available)",
            ].map((doc) => (
              <div
                key={doc}
                className="flex items-center gap-2 bg-white border border-[#EBEBEB] rounded-lg px-4 py-3 text-[13px] hover:border-[#C9A84C] transition-colors"
              >
                <FileText className="h-4 w-4 text-[#C9A84C] shrink-0" aria-hidden="true" />
                {doc}
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-[#555]">
            A pre-event compliance checklist is sent after you secure your seat.
          </p>
        </div>
      </section>

      {/* Section 9 — Event Details */}
      <section className="bg-[#0B1D2E] text-white py-16">
        <div className="max-w-[760px] mx-auto px-5 sm:px-8 text-center">
          <SectionLabel>Event details</SectionLabel>
          <h2 className="text-[26px] font-extrabold mb-4">{eventDates}</h2>
          <p className="text-white/70 text-sm mb-10 max-w-md mx-auto">
            We&apos;re finalising the next bootcamp dates. Join the interest list or secure your
            seat — we&apos;ll confirm the new date soon.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 text-left text-sm">
            {[
              { icon: Calendar, label: "Dates", value: eventDates },
              { icon: Clock, label: "Time", value: "9:00 AM – 5:00 PM daily" },
              { icon: MapPin, label: "Venue", value: "Electron Exchange, Isando" },
              { icon: Users, label: "Capacity", value: "Maximum 10 participants" },
              { icon: CreditCard, label: "Payment", value: "PayLekker — payment plans available" },
              { icon: MessageCircle, label: "Support", value: "081 365 5901 (WhatsApp)" },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-3 bg-white/5 rounded-lg p-4">
                <item.icon className="h-5 w-5 text-[#C9A84C] shrink-0" aria-hidden="true" />
                <div>
                  <div className="text-[11px] uppercase tracking-widest text-[#C9A84C]">{item.label}</div>
                  <div className="mt-1">{item.value}</div>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-white/70 border border-white/10 rounded-lg py-3 px-4">
            Unit 49, Electron Exchange, 50 Electron Avenue, Isando, Kempton Park, 1619
          </p>
        </div>
      </section>

      {/* Section 10 — Pricing + Checkout */}
      <section id="pricing" className="bg-white py-16 scroll-mt-4">
        <div className="max-w-[760px] mx-auto px-5 sm:px-8">
          <SectionLabel>Pricing</SectionLabel>
          <h2 className="text-[26px] font-extrabold text-[#0B1D2E] mb-2 text-center">
            Secure your seat today
          </h2>
          <p className="text-center text-sm text-[#555] mb-8">
            Pay securely via PayLekker. Payment plans available — contact us on WhatsApp.
          </p>

          {isLoading ? (
            <p className="text-center text-[#555]">Loading pricing...</p>
          ) : soldOut ? (
            <div className="text-center p-8 bg-[#F8F9FA] rounded-xl">
              <h3 className="text-xl font-bold text-[#0B1D2E]">All seats sold out</h3>
              <p className="mt-2 text-sm text-[#555]">
                Join the waitlist below to be first in line for the next round.
              </p>
            </div>
          ) : (
            <div className="max-w-md mx-auto">
              <div className="rounded-xl overflow-hidden border border-[#EBEBEB] flex flex-col">
                <div className="p-5 bg-[#0B1D2E] text-white text-center">
                  <p className="text-sm font-bold uppercase tracking-widest">Bootcamp Seat</p>
                  <p className="text-[38px] font-black leading-none mt-1">
                    {data?.pricing.standard.priceFormatted || "R5,665"}
                  </p>
                  <p className="text-[11px] mt-1 text-white/60">{eventDates} · Maximum 10 participants</p>
                </div>
                <div className="p-5 flex-1 flex flex-col bg-[#F8F9FA]">
                  {data?.product.id && (
                    <CheckoutForm
                      productId={data.product.id}
                      productName={data.product.name}
                      tier="standard"
                      buttonLabel="Reserve My Seat →"
                      buttonClassName="bg-[#22C55E] text-white hover:bg-[#16A34A]"
                    />
                  )}
                </div>
              </div>
            </div>
          )}

          <p className="text-center text-xs text-[#666] mt-6 flex items-center justify-center gap-1">
            <CreditCard className="h-3.5 w-3.5" aria-hidden="true" />
            Payment plans available — WhatsApp{" "}
            <a href="https://wa.me/27813655901" className="text-[#0B1D2E] font-semibold underline">
              081 365 5901
            </a>
          </p>
        </div>
      </section>

      {/* Section 11 — Final CTA */}
      <section className="bg-[#0B1D2E] text-white py-16">
        <div className="max-w-[760px] mx-auto px-5 sm:px-8 text-center">
          <div className="w-16 h-px bg-[#C9A84C] mx-auto mb-6" />
          <h2 className="text-[26px] font-extrabold">
            10 seats. Two days.{" "}
            <span className="text-[#C9A84C]">Walk out submission-ready.</span>
          </h2>
          <p className="mt-4 text-white/80 text-[15px] leading-relaxed max-w-lg mx-auto">
            Complete your real Supply & Delivery tender with active compliance specialists —
            not theory trainers.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 text-center">
            {[
              ["10", "Max seats"],
              ["2", "Full days"],
              ["1", "Completed tender"],
              ["R5,665", "Standard price"],
            ].map(([stat, label]) => (
              <div key={label}>
                <div className="text-2xl font-black text-[#C9A84C]">{stat}</div>
                <div className="text-[11px] text-white/60 uppercase tracking-widest mt-1">{label}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a
              href="#pricing"
              className="bg-[#22C55E] hover:bg-[#16A34A] text-white font-bold px-8 py-4 rounded-lg transition-colors"
            >
              Secure My Seat →
            </a>
            <a
              href="https://wa.me/27813655901"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/30 hover:border-[#C9A84C] text-white font-bold px-8 py-4 rounded-lg transition-colors inline-flex items-center justify-center gap-2"
            >
              <SiWhatsapp className="h-5 w-5" />
              WhatsApp Us
            </a>
          </div>
          <p className="mt-6 text-xs text-white/40">
            Fortsiphi (Pty) Ltd · info@fortsiphi.co.za · 010 065 3247
          </p>
        </div>
      </section>

      {/* Referral */}
      <section className="bg-[#0B1D2E] border-t border-white/10 py-10">
        <div className="max-w-[760px] mx-auto px-5 sm:px-8 text-center">
          <SectionLabel>Share</SectionLabel>
          <p className="text-white text-lg font-semibold">
            Send this to a business owner still losing tenders.
          </p>
          <p className="text-[#C9A84C] text-sm mt-1">
            10 seats. Once they're gone, they're gone.
          </p>
          <div className="flex justify-center gap-3 mt-6">
            <a
              href={`https://wa.me/?text=${shareMessage}${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#22C55E] text-white px-5 py-3 rounded-lg text-sm font-bold"
            >
              <SiWhatsapp className="h-4 w-4" />
              WhatsApp
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-white/30 text-white px-5 py-3 rounded-lg text-sm font-bold"
            >
              <SiFacebook className="h-4 w-4" />
              Facebook
            </a>
            <button
              type="button"
              onClick={handleCopyLink}
              className="flex items-center gap-2 border border-white/30 text-white px-5 py-3 rounded-lg text-sm font-bold"
            >
              {copied ? <CheckCircle2 className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              {copied ? "Copied!" : "Copy link"}
            </button>
          </div>
        </div>
      </section>

      {/* Section 12 — FAQ */}
      <section className="bg-[#F8F9FA] py-16">
        <div className="max-w-[760px] mx-auto px-5 sm:px-8">
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="text-[26px] font-extrabold text-[#0B1D2E] mb-6">
            Frequently asked questions
          </h2>
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={faq.q}
                value={`faq-${i}`}
                className="bg-white border border-[#EBEBEB] rounded-xl px-4 data-[state=open]:bg-[#F7F3E8]"
              >
                <AccordionTrigger className="text-left font-semibold text-[#0B1D2E] hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-[15px] text-[#555] leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Waitlist (shown when sold out) */}
      {soldOut && (
        <section className="bg-[#0B1D2E] text-white py-16">
          <div className="max-w-[760px] mx-auto px-5 sm:px-8 text-center">
            <h2 className="text-2xl font-extrabold">
              Missed this round? Be first in line for the next one.
            </h2>
            <p className="mt-3 text-white/70 text-sm">
              WhatsApp us your name and email to join the waitlist for Bootcamp Round 2.
            </p>
            <a
              href="https://wa.me/27813655901?text=Hi%20Fortsiphi%2C%20please%20add%20me%20to%20the%20Tender%20This%20bootcamp%20waitlist."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 bg-[#22C55E] text-white font-bold px-8 py-4 rounded-lg"
            >
              <SiWhatsapp className="h-5 w-5" />
              Join Waitlist via WhatsApp
            </a>
          </div>
        </section>
      )}

      {/* Minimal footer */}
      <footer className="bg-[#0B1D2E] border-t border-white/10 py-6 text-center text-xs text-white/40">
        © {new Date().getFullYear()} Fortsiphi (Pty) Ltd · Powered by{" "}
        <a href="https://lekker.network" className="text-[#C9A84C] hover:underline" target="_blank" rel="noopener noreferrer">
          Lekker Network
        </a>
      </footer>
    </div>
  );
}