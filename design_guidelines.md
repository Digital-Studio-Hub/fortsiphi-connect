# FORTSIPHI (PTY) LTD - DESIGN GUIDELINES

## Design Approach
**System:** Corporate Design System (Material/Fluent-inspired)
**Rationale:** Function-differentiated compliance-focused platform requiring institutional credibility, structured information delivery, and trust-building through professional consistency.

## Core Design Principles
- **Corporate Authority:** 5-star institutional credibility
- **Structured Clarity:** Clear service segmentation
- **Compliance-Driven:** Professional, minimal, trust-focused
- **No Marketing Gimmicks:** Avoid loud colors, over-animation, informal tone

## Color Palette (STRICT)
- Primary (Deep Navy): `#0F2A44`
- Secondary (Slate Grey): `#4B5563`
- Background (Soft White): `#F9FAFB`
- Accent (Compliance Gold): `#C8A951`
- CTA (Emerald Green): `#16A34A`

## Typography
- **Headings:** Montserrat or Poppins (Google Fonts)
- **Body:** Inter or Roboto
- **Buttons:** Clear, strong, professional sans-serif
- **Hierarchy:** H1: 2.5rem, H2: 2rem, H3: 1.5rem, Body: 1rem

## Layout System
**Tailwind Spacing:** Use units of 4, 6, 8, 12, 16, 20, 24 for consistency
**Grid:** 12-column responsive grid
**Max Widths:** Container: max-w-7xl, Content: max-w-6xl, Text: max-w-4xl

## Page Structure & Components

### Homepage
**Hero Section (60vh):**
- Headline: "From Compliance to Contract."
- Sub: "Professional Cleaning Services and Hands-on Tender Consulting for SMMEs, Corporates, and Institutions."
- Dual CTAs: "Request a Consultation" + "WhatsApp Us"
- Background: Corporate cleaning environment image (subtle overlay)

**Sections:**
1. About Fortsiphi (2-column: text + mission highlight)
2. Core Services (3-card grid: Cleaning, Consulting, Hub)
3. Compliance & Accreditation (badge grid, 4-columns)
4. Why Choose Fortsiphi (alternating content blocks)
5. Strong CTA banner with form

### Service Pages
**Layout:** Hero (40vh) + Service breakdown (2-column) + CTA section
**Cleaning Services:** Contract options table, compliance badges
**Tender Consulting:** Step-by-step process visualization, differentiation callout

### Compliance Page
**Badge Grid:** 8 compliance items (PAYE, UIF, COIDA, Tax, B-BBEE, NCCA, ISSA, PPE)
**Visual:** Icon + title + verification mark pattern

### Contact Page
**Layout:** Split 50/50 - Form left, Info + Map right
**Details:** Phone, WhatsApp (prominent), Email, Address
**Map:** Google Maps embed with marker

## Component Library

**Navigation:**
- Horizontal top nav with logo left, menu center, CTA right
- Sticky on scroll
- Mobile: Hamburger menu

**Cards:**
- Service cards: Icon top, title, description, CTA link
- Elevated shadow on hover
- Rounded corners: 8px

**Forms:**
- Full-width labels above inputs
- Input height: 48px
- Validation states with color feedback
- Submit button: Full width on mobile

**Footer:**
- 3-column layout: Company info left, Quick links center, Contact right
- Lekker Network logo centered between copyright and legal links
- Logo links to https://lekker.network/
- "Powered by Lekker Network" text below logo
- Responsive: Stack on mobile

**Buttons:**
- Primary: Emerald green background, white text, 48px height
- Secondary: Outline navy with white/transparent fill
- Buttons on images: Blurred background (backdrop-blur-sm)
- No custom hover states (use default)

## Images Strategy
**Hero Images:** Professional office cleaning visuals, corporate environments
**Service Sections:** Compliance documentation (abstract), professional settings
**Format:** WebP with lazy loading
**Placement:** 
- Homepage hero: Full-width background
- About: 2-column with image right
- Services: Alternating image/text blocks

**Assets Provided:**
- Main logo (header)
- White logo (dark backgrounds)
- Black logo (light backgrounds)
- Lekker Network logo (footer)
- Favicon (implemented)

## Accessibility
- WCAG 2.1 AA compliant
- Semantic HTML throughout
- Form labels and ARIA attributes
- Keyboard navigation support
- Color contrast ratios: 4.5:1 minimum

## Technical Requirements
- Mobile-first responsive
- Load time: <1.5s target
- Hero images: Optimized, compressed WebP
- Icons: Heroicons via CDN
- Schema: Organization, LocalBusiness, Service

## Key Differentiators
- Clean separation of three service divisions
- Emphasis on "execution, not just advice"
- Compliance as primary trust signal
- Institutional-grade professionalism throughout