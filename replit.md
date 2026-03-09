# Fortsiphi (Pty) Ltd - Corporate Website

## Overview
Professional, compliance-driven corporate website for Fortsiphi (Pty) Ltd, a South African compliance and tender execution specialist.

## Purpose
- Tender consulting and compliance management (primary focus)
- Professional commercial cleaning services (compliant, procurement-ready)
- Tender Ready Hub (SMME development platform)

## Tech Stack
- **Frontend**: React 18, TypeScript, Vite, TailwindCSS, Wouter (routing)
- **Backend**: Express.js, Node.js
- **UI Components**: Shadcn/UI, Radix UI
- **State Management**: TanStack Query (React Query)
- **Forms**: React Hook Form with Zod validation

## Project Structure
```
client/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navigation.tsx    # Top navigation with mobile menu
│   │   │   └── Footer.tsx        # Footer with Lekker Network logo, 5-col grid
│   │   └── ui/                   # Shadcn UI components
│   ├── pages/
│   │   ├── Home.tsx              # Landing page (hero, services, how we work, trust, checklist)
│   │   ├── About.tsx             # About Fortsiphi
│   │   ├── CleaningServices.tsx  # Cleaning services (compliance-focused)
│   │   ├── TenderConsulting.tsx  # Tender consulting page
│   │   ├── TenderReadyHub.tsx    # SMME development hub
│   │   ├── Compliance.tsx        # Compliance & accreditation
│   │   ├── Contact.tsx           # Contact form
│   │   └── PrivacyPolicy.tsx     # Privacy policy
│   ├── App.tsx                   # Main app with routing
│   └── index.css                 # Custom CSS with design tokens
server/
├── routes.ts                     # API routes (contact form, checklist download)
└── storage.ts                    # In-memory storage
shared/
└── schema.ts                     # TypeScript schemas and types
```

## Color Palette
- **Primary (Deep Navy)**: #0F2A44 - hsl(207, 65%, 16%)
- **Secondary (Slate Grey)**: #4B5563 - hsl(215, 14%, 34%)
- **Background (Soft White)**: #F9FAFB - hsl(210, 20%, 98%)
- **Accent (Compliance Gold)**: #C8A951 - hsl(43, 52%, 55%)
- **CTA (Emerald Green)**: #16A34A - hsl(142, 76%, 36%)

## Logo Assets
- **Main Logo** (nav): Main_Logo_1773066374474.png - "Compliance & Tender Execution Specialists"
- **White Logo** (hero/footer): White_Logo_1773066374475.png
- **Black Logo**: Black_Logo_1773066374474.png

## Service Priority Order
1. Tender Consulting (primary)
2. Compliance & Accreditation
3. Professional Cleaning

## Navigation Order
Home > About > Tender Consulting > Compliance > Tender Ready Hub > Cleaning Services > Contact

## Routes
- `/` - Home page with hero, services, how we work, trust, checklist download
- `/about` - Company information
- `/tender-consulting` - Tender consulting services
- `/compliance` - Compliance & accreditation details
- `/tender-ready-hub` - SMME development platform
- `/cleaning-services` - Cleaning services (compliance-focused)
- `/contact` - Contact form
- `/privacy-policy` - Privacy policy

## API Endpoints
- `POST /api/contact` - Submit contact form inquiry
- `GET /api/contact` - Get all contact inquiries (admin)
- `POST /api/checklist-download` - Submit details for checklist download (lead capture)

## Contact Information
- **Phone**: 010 065 3247
- **WhatsApp**: 081 365 5901
- **Email**: info@fortsiphi.co.za
- **Address**: Unit 49, Electron Exchange, 50 Electron Avenue, Isando, Kempton Park, 1619

## Key Features
1. Compliance & tender execution specialist positioning
2. "How We Work" section (4-step process)
3. "Why Clients Trust Us" credibility section
4. Downloadable Tender Compliance Checklist (lead capture)
5. Compliance-focused Cleaning Services page
6. Service order: Tender Consulting > Compliance > Cleaning
7. 8 compliance badges displayed
8. Footer: 5-column grid with Lekker Network cert badge
9. Contact form with backend API
10. Responsive design (mobile-first)

## Running the Project
```bash
npm run dev
```
The app runs on port 5000.
