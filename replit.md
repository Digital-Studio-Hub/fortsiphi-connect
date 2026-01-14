# Fortsiphi (Pty) Ltd - Corporate Website

## Overview
Professional, compliance-driven corporate website for Fortsiphi (Pty) Ltd, a South African multi-service business solutions company.

## Purpose
- Professional commercial cleaning services
- Hands-on tender consulting and compliance support
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
│   │   │   └── Footer.tsx        # Footer with Lekker Network logo
│   │   └── ui/                   # Shadcn UI components
│   ├── pages/
│   │   ├── Home.tsx              # Landing page
│   │   ├── About.tsx             # About Fortsiphi
│   │   ├── CleaningServices.tsx  # Cleaning services page
│   │   ├── TenderConsulting.tsx  # Tender consulting page
│   │   ├── TenderReadyHub.tsx    # SMME development hub
│   │   ├── Compliance.tsx        # Compliance & accreditation
│   │   ├── Contact.tsx           # Contact form
│   │   └── PrivacyPolicy.tsx     # Privacy policy
│   ├── App.tsx                   # Main app with routing
│   └── index.css                 # Custom CSS with design tokens
server/
├── routes.ts                     # API routes (contact form)
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

## Routes
- `/` - Home page with hero, services, compliance
- `/about` - Company information
- `/cleaning-services` - Cleaning services details
- `/tender-consulting` - Tender consulting services
- `/tender-ready-hub` - SMME development platform
- `/compliance` - Compliance & accreditation details
- `/contact` - Contact form
- `/privacy-policy` - Privacy policy

## API Endpoints
- `POST /api/contact` - Submit contact form inquiry
- `GET /api/contact` - Get all contact inquiries (admin)

## Contact Information
- **Phone**: 010 065 3247
- **WhatsApp**: 081 365 5901
- **Email**: info@fortsiphi.co.za
- **Address**: Unit 49, Electron Exchange, 50 Electron Avenue, Isando, Kempton Park, 1619

## Key Features
1. Professional corporate design
2. Clear service segmentation (Cleaning, Consulting, Hub)
3. Compliance emphasis with 8 compliance badges
4. Contact form with validation
5. Responsive design (mobile-first)
6. Footer with Lekker Network attribution

## Running the Project
```bash
npm run dev
```
The app runs on port 5000.

## Recent Changes
- Initial build with all 8 pages
- Contact form with backend API
- Lekker Network logo in footer
- Favicon configured
- Design tokens implemented with Fortsiphi brand colors
