# Stash Leading Services

## Overview
A modern, multi-page landing website for Stash Leading Services - a multi-service business based in Lusaka, Zambia offering Immigration, Laundry, Media, and Loan services. The website features a clean, professional design with navy blue and maroon color scheme and dark/light theme support.

## Tech Stack
- **Frontend**: React with TypeScript, Vite, Tailwind CSS, shadcn/ui components
- **Backend**: Express.js with TypeScript
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack React Query
- **Form Handling**: React Hook Form with Zod validation
- **Styling**: Tailwind CSS with custom design tokens

## Project Structure
```
client/
  src/
    assets/           # Logo and brand assets
      stash-logo.png  # Main company logo
    components/       # Reusable UI components
      navigation.tsx  # Header with logo, nav links and theme toggle
      hero.tsx        # Hero section with logo and CTAs
      what-we-offer.tsx # About section with 4 service cards
      service-tiles.tsx # Display of Our Work section
      pricing-section.tsx # Pricing tables
      contact-section.tsx # Contact form
      testimonials.tsx # Reviews/testimonials
      footer.tsx      # Footer with links
      ui/             # shadcn/ui base components
    pages/
      home.tsx        # Landing page
      laundry.tsx     # Laundry services detail
      marketing.tsx   # Media services detail  
      lending.tsx     # Loan services detail
      immigration.tsx # Immigration services detail
    lib/
      theme.tsx       # Theme provider for dark/light mode
      queryClient.ts  # React Query setup
    App.tsx           # Main app with routing and scroll-to-top
server/
  routes.ts           # API endpoints
  storage.ts          # In-memory storage
shared/
  schema.ts           # Shared types and validation schemas
```

## Pages
1. **Home (/)** - Main landing page with hero, About (services), Display of Work, Pricing, Reviews, Contacts
2. **Immigration (/immigration)** - Zambia-focused immigration services with Kwacha pricing
3. **Laundry (/laundry)** - Laundry & cleaning services with detailed pricing
4. **Media (/marketing)** - Media/design services with price list
5. **Loans (/lending)** - Collateral-based loan services

## Services
1. **Immigration Services** - Employment Permits, Investor Permits, Residence Permits, Business & Transit Visas, Visiting Permits, Appeals & Reconsiderations (Zambia-focused)
   - Standard Plan: K2,000 per application (portal submission, basic monitoring)
   - Premium Plan: From K15,000 (full end-to-end management, legal advisory)
   - Booking form sends to sales@stashleading.com via mailto:
2. **Laundry Services** - General laundry packages (Per KG and Monthly), dry cleaning, special items
3. **Media Services** - Logo design, company profiles, business cards, flyers, social media
4. **Loan Services** - Collateral-based loans (10% 1wk, 20% 2wk, 30% 3wk, 35% 4wk)
   - Accepted collateral: Laptops, Vehicles, Fridges, TVs, Games, Houses

## Contact Information
- **Address**: 26570, Lunu Rd, Lusaka 10101, Zambia
- **Main Phone**: +260 973 807 864
- **Loan Services**: 0968 650 955, 0774 861 486
- **Email**: sales@stashleading.com, sales@stashleading.com
- **Google Maps**: Embedded in contact section

## Features
- Responsive design (mobile, tablet, desktop)
- Dark/light theme toggle with system preference detection
- Contact form with validation
- Scroll-to-top on page navigation
- Service-specific pricing for each category
- Reviews/testimonials section
- Professional business information display

## API Endpoints
- `POST /api/contact` - Submit contact form
  - Body: `{ name, email, phone, service, message }`
  - Returns: `{ success: true, message: "..." }`
- `GET /api/contact` - Get all contact messages (admin)

## Design System
- Primary Color: Navy Blue (HSL 221 45% 19%)
- Secondary Color: Maroon (HSL 351 68% 32%)
- Modern, clean typography using Inter font
- Consistent spacing and component patterns
- Card-based layouts for services and pricing
- Trust indicators and social proof elements

## Running the Project
```bash
npm run dev
```
The application runs on port 5000.
