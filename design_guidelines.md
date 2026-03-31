# Design Guidelines: Stash Laundry & Cleaning Services

## Design Approach

**Selected Approach:** Reference-Based + Service Industry Best Practices

Drawing inspiration from modern service platforms like Handy, TaskRabbit, and Airbnb's clean aesthetic. The design prioritizes trust-building, clear service differentiation, and local business accessibility while maintaining a polished, contemporary feel.

## Color Scheme

**Primary Palette:**
- **Navy Blue (Primary):** HSL 221 45% 19% - Deep professional navy for headers, buttons, and accents
- **Maroon (Secondary):** HSL 351 68% 32% - Rich burgundy for highlights and secondary elements
- **White/Light Gray:** Background and card colors for clean contrast

**Dark Mode:**
- **Primary:** HSL 221 45% 45% - Brighter navy for dark backgrounds
- **Secondary:** HSL 351 68% 48% - Lighter maroon for visibility
- **Background:** HSL 222 32% 10% - Deep navy background

**Usage Guidelines:**
- Use primary (navy) for main CTAs, headers, and navigation
- Use secondary (maroon) for accents, highlights, and secondary actions
- Maintain high contrast between text and backgrounds
- Charts use navy and maroon as primary colors

## Core Design Elements

### Typography
- **Primary Font:** Inter (Google Fonts) - Clean, professional, highly readable
- **Headings:** 
  - H1: text-5xl md:text-6xl font-bold
  - H2: text-4xl md:text-5xl font-bold
  - H3: text-2xl md:text-3xl font-semibold
  - H4: text-xl font-semibold
- **Body:** text-base md:text-lg, line-height relaxed
- **Accent Text:** text-sm uppercase tracking-wide font-medium

### Layout System
**Spacing Units:** Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistency
- Section padding: py-16 md:py-24
- Card padding: p-6 md:p-8
- Element gaps: gap-4, gap-6, gap-8
- Container: max-w-7xl mx-auto px-6

### Component Library

**Navigation**
- Sticky header with logo left, service links center, "Contact Us" CTA right
- Mobile: Hamburger menu with slide-out drawer
- Include phone number in header for immediate contact

**Hero Section**
- Full-width hero with background image (professional cleaning/laundry operation)
- Centered content overlay with blurred button backgrounds
- H1: "Stash Laundry & Cleaning Services"
- Subheading highlighting multi-service offerings
- Dual CTA: "View Services" + "Get Quote"
- Trust indicators below CTAs: "Trusted by 500+ Local Clients" with star rating

**What We Offer Section**
- 3 expandable tiles for main services
- Each tile: Icon, title, short intro, "See More" button for details
- Collapsible content with service features
- "Learn More" link to dedicated service page

**Service Tiles (4-Column Grid)**
- Large interactive cards in 2x2 grid (desktop) → single column (mobile)
- Each tile: Icon, service name, 2-line description, "Learn More" link
- Hover: Subtle lift effect (translate-y-1)
- Services: Laundry & Cleaning, Marketing Services, Lending Solutions, Immigration Consultancy

**Pricing Section**
- Clean pricing tables with clear tier differentiation
- Two package types: Pay Per KG and Monthly Packages
- 3-column layout (Basic/Standard/Premium)
- Premium marked as "Most Popular"
- List-style pricing for other services
- Note about package exclusions

**Contact & Location**
- Two-column layout: Contact form left, business info right
- Business info includes: Address, phone (0973848122), emails
- Form fields: Name, Email, Phone, Service Interest (dropdown), Message
- Social media links
- Footer includes: Quick links, services menu, contact info

## Contact Information

- **Phone:** 0973848122
- **Email (Laundry):** sales@stashleading.com
- **Email (Sales):** sales@stashleading.com
- **Location:** Lusaka, Zambia

## Images

**Hero Image:** 
Professional photograph of clean, modern laundry facility or cleaning team in action. Should convey professionalism and trust. Full-width, 60vh height with overlay gradient for text readability.

**Service Section Images:**
- Laundry: Fresh folded linens, modern washing equipment
- Marketing: Team collaboration, digital screens
- Lending: Professional handshake, documents
- Immigration: Consultation meeting, paperwork assistance

All images should be high-quality, authentic (not stock-looking), and feature diverse representation.

## Page Structure

**Multi-Page Layout:**
1. Navigation with theme toggle
2. Hero with dual CTAs
3. What We Offer (expandable tiles)
4. Service tiles grid
5. Pricing packages (Per KG + Monthly)
6. Testimonials carousel (3 client reviews)
7. Contact & Location
8. Footer

**Dedicated Service Pages:**
- Laundry: Full price list with tabs (Dry Cleaning, General, Beddings, Sofa/Mattress, Shoes)
- Marketing: Media services pricing
- Lending: Loan products
- Immigration: Consultancy services

**Animations:** Minimal - fade-in on scroll for sections, subtle hover states only. No distracting motion.

**Trust Elements Throughout:**
- Star ratings and review count
- Years in Business badge
- Clear pricing and terms
