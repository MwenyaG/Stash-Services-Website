# Stash Connect

Stash Connect 2 is a multi-service business website for Stash Leading Services. It presents four service lines in one experience:

- Stash Leading: immigration and consultancy services
- Stash Laundry: laundry and cleaning services
- Stash Media: design and media services
- Stash Lending: collateral-based loan services

The project combines a React + Vite frontend with a lightweight Express server. The frontend handles the customer journey and service pages, while the backend provides small API utilities such as Google review fetching and contact-message storage.

## Screenshots

### Homepage

#### Light Mode

![Homepage Light Mode](https://github.com/user-attachments/assets/de82e9e0-61e6-4338-a323-7e416d723c47)

#### Dark Mode

![Homepage Dark Mode](https://github.com/user-attachments/assets/af5c5c44-ed6c-44d3-a482-9ef8535c04e8)

### Immigration

![Immigration Page](https://github.com/user-attachments/assets/38827cf4-641b-440f-8b58-9c06205f062e)

### Laundry

![Laundry Page](https://github.com/user-attachments/assets/d736ab96-ffc1-4016-b8db-6e46106a0d73)

### Media

![Media Page](https://github.com/user-attachments/assets/94128c19-c751-4eed-a401-98b954404e83)

### Loans

![Loans Page](https://github.com/user-attachments/assets/4344a001-e695-4d4d-8251-b2cd75b35906)

## What the Website Does

- Responsive marketing website with shared home page and service-specific pages
- Dedicated landing pages for immigration, laundry, media, and loans
- Service-specific contact details in shared navigation and footer
- Brand-consistent logos, favicon, dark-mode treatment, and responsive layouts
- Contact and consultation forms that submit through FormSubmit to `sales@stashleading.com`
- Laundry invoice builder with printable invoice and quote-request submission
- Google Places review integration for live laundry reviews
- Real review fallback content when Google Places is not configured

## Main Pages

`/`
- Home page with hero, service overview, testimonials, and contact section

`/immigration`
- Immigration packages and consultation booking form
- Packages currently reflect the documented consultation, basic, standard, and premium plans

`/laundry`
- Laundry pricing tables
- Cart-style invoice builder
- Printable invoice
- Quote request form that sends selected services to sales

`/marketing`
- Design and media pricing
- Media consultation form tailored to branding and creative work

`/lending`
- Loan rate cards
- Accepted collateral overview
- Loan intake form tailored to collateral-based lending

## Forms and Lead Handling

The customer-facing forms use FormSubmit through the shared helper in `client/src/lib/formsubmit.ts`.

Current behavior:

- Forms submit to `sales@stashleading.com`
- FormSubmit opens in a new tab
- Emails use the FormSubmit table template
- Reply-to is set from the customer email when available

Important note:

- New FormSubmit recipient addresses may require FormSubmit activation before emails are delivered

Current forms wired this way:

- Home contact form
- Immigration consultation form
- Media consultation form
- Loan application form
- Laundry quote request form

## Reviews

The testimonials section supports two modes:

- Live Google reviews from Google Places API
- Local fallback reviews rendered in a Google-style card format

Server route:

- `GET /api/google-reviews`

Implementation:

- `server/google-reviews.ts` resolves a place, fetches place details, normalizes reviews, and caches the response for 6 hours
- `client/src/components/testimonials.tsx` uses the API when configured and falls back to local review data when not configured

## Backend API

`POST /api/contact`
- Validates against the Zod contact schema
- Stores contact submissions in memory

`GET /api/contact`
- Returns stored contact submissions from memory

`GET /api/google-reviews`
- Returns Google Places review data or a disabled/fallback payload

Important note:

- The current public website forms do not rely on `/api/contact` for email delivery
- `/api/contact` stores data in memory only and resets when the server restarts

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Radix UI primitives
- Wouter for routing
- TanStack Query
- Express
- Zod
- Drizzle ORM and Drizzle Kit

## Local Development

### 1. Install dependencies

```bash
npm install
```

### 2. Start development server

```bash
npm run dev
```

The app runs on:

- `http://localhost:5000`

### 3. Type-check the project

```bash
npm run check
```

### 4. Create a production build

```bash
npm run build
```

### 5. Start the production server

```bash
npm run start
```

## Environment Variables

These variables are relevant to the current project:

`PORT`
- Optional
- Defaults to `5000`

`GOOGLE_PLACES_API_KEY`
- Required to enable live Google reviews

`GOOGLE_PLACE_ID`
- Optional
- Recommended if you want to avoid text-search ambiguity

`GOOGLE_PLACE_QUERY`
- Optional
- Used only when `GOOGLE_PLACE_ID` is not set
- Current default in code is `Stash Laundry and Cleaning Services Lusaka Zambia`

`DATABASE_URL`
- Required only for Drizzle Kit commands such as `npm run db:push`
- Not required for normal frontend development

## Database Notes

The repo includes Drizzle configuration and a shared schema, but the active contact-message storage is currently in-memory through `server/storage.ts`.

What this means:

- `npm run dev` does not need a database for the current website behavior
- `npm run db:push` does require `DATABASE_URL`
- If you want persistent contact messages, the storage layer should be swapped from `MemStorage` to a database-backed implementation

## Project Structure

```text
client/
  src/
    components/   Shared UI sections and reusable components
    pages/        Route-level pages for each service
    lib/          Shared client utilities such as FormSubmit helper
server/
  index.ts        Express entry point
  routes.ts       API route registration
  google-reviews.ts Google Places review fetcher and cache
  storage.ts      In-memory storage implementation
shared/
  schema.ts       Shared Zod and Drizzle schema definitions
```

## Useful Scripts

```bash
npm run dev
npm run check
npm run build
npm run start
npm run db:push
```

## Current Product Notes

- The favicon uses the same brand logo as the header
- Shared header and footer phone links change by active service page
- Social links in the footer open in a new tab
- Instagram has been removed from the footer and LinkedIn added
- The site has been adjusted for stronger mobile responsiveness across shared sections and service pages

## Recommended Next Improvements

- Replace FormSubmit with a first-party transactional email provider such as Gmail SMTP or Resend
- Persist contact messages to PostgreSQL instead of in-memory storage
- Add `.env.example` for faster onboarding
- Add browser-based QA or component tests for key form flows
- Add analytics or event tracking for consultation and quote submissions
