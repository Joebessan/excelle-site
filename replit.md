# Excelle pour Christ - Church Website

## Overview
A modern, minimalist church website for "Excelle pour Christ International" with fluid, elastic animations throughout. Features a deep navy blue color scheme with gold/bronze accents, creating an immersive spiritual experience.

## Architecture

### Frontend (React + Vite)
- **Framework**: React with TypeScript
- **Styling**: Tailwind CSS with custom design tokens
- **Animations**: Framer Motion for elastic, spring-based animations
- **Routing**: Wouter for client-side navigation
- **State Management**: TanStack Query for server state

### Backend (Express)
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **API**: RESTful endpoints

## Project Structure
```
client/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx      # Navigation with logo and social links
│   │   │   └── Footer.tsx      # Secondary navigation, contact info
│   │   ├── ui/
│   │   │   ├── AnimatedSection.tsx  # Reusable scroll animations
│   │   │   └── [shadcn components]
│   │   └── verse/
│   │       └── VerseCard.tsx   # Random verse display with download
│   ├── pages/
│   │   ├── Home.tsx           # Hero carousel + verse generator + mission sections
│   │   ├── About.tsx          # History timeline, leadership (College des Serviteurs)
│   │   ├── Donate.tsx         # Donation form with 3 options
│   │   ├── Join.tsx           # Contact form + volunteer signup
│   │   └── not-found.tsx
│   └── hooks/
│       └── use-in-view.ts     # Intersection observer for scroll animations
server/
├── db.ts                      # PostgreSQL connection with Drizzle
├── routes.ts                  # API endpoints
├── storage.ts                 # Database storage implementation
└── index.ts                   # Express server setup
shared/
└── schema.ts                  # TypeScript types and Zod schemas
```

## Key Features

### Pages
1. **Home (Accueil)**: Full-screen hero with image carousel, "Tirer mon verset" button (modal overlay), newsletter subscription, weekly program, upcoming events, support card, blog section, mission cards
2. **About (Qui sommes-nous)**: Church history (founded 2001 by Apôtre Janine AHO), Collège des Serviteurs, values
3. **Donate (Faire un don)**: Three donation types (Dîme, Offrande, Soutenir un projet), amounts in FCFA, Mobile Money as primary payment
4. **Join (Nous rejoindre)**: Contact form with volunteer area selection, Beninese placeholders (Koffi AHOUANSOU, +229)

### Animations
- Elastic spring transitions (Framer Motion)
- Scroll-triggered fade/slide animations
- Gold glow effects on buttons
- Parallax depth effects on hero
- Image carousel with auto-advance

### Navigation
- Scroll reset on page navigation
- Responsive mobile menu
- Social links (Facebook, Instagram, YouTube, TikTok, Telegram, WhatsApp)
- Official logo from Cloudinary in top-left position

## API Endpoints
- `GET /api/verse/random` - Returns a random Bible verse
- `POST /api/contact` - Submits contact form (saved to PostgreSQL)
- `GET /api/contact` - Retrieves all contact submissions

## Design System

### Colors
- **Primary**: Deep navy (#011C40, #021F59)
- **Accent**: Gold (#D9AA52) and Bronze (#A6702E)
- **Text**: Off-white (#F2F2F2)

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Montserrat (sans-serif)

### Assets
- Logo: https://res.cloudinary.com/dmngvz0f4/image/upload/v1766769765/logo_f_rzbbkh.png
- Church images carousel from Cloudinary

## Database
- PostgreSQL with Drizzle ORM
- Tables: users, contact_submissions
- Push schema: `npm run db:push`

## Development
- Start: `npm run dev`
- Frontend runs on port 5000
- Backend API prefixed with `/api`

## Church Information
- **Name**: Excelle pour Christ International
- **Founded**: April 5, 2001, Guinkomey, Cotonou, Benin
- **Founder**: Apôtre Janine AHO
- **Formerly**: Mount Horeb International Foundation

## Recent Changes
- Set up PostgreSQL database for permanent storage
- Added scroll reset on navigation
- Updated visual design with modern split-layout hero
- Added image carousel with Cloudinary images
- Updated About page with warm editorial content and leadership list
- Added official logo and social media links
- Converted donations to CFA (Franc CFA) with Mobile Money as primary payment
- Added "Suivez-nous" section in footer with 6 social platforms
- Updated all placeholders with Beninese references (names, addresses, +229 phone)
- Added newsletter subscription for daily email teachings
- Fixed verse card display with modal overlay for foreground visibility
- Added weekly program section (Lundi-Dimanche)
- Added upcoming events and support card for current programs
- Added blog section on home page
- **[Dec 2025]** Added Teachings page with video-style teaching cards
- **[Dec 2025]** Updated blog section with 5 categories: Marriage, Births, Baptism, Youth, Teens/Kids
- **[Dec 2025]** Complete About page overhaul: new mission section, 9 values, social work section, missionary churches list (20+ locations)
- **[Dec 2025]** Added founder biography with full credentials and World Peace Ambassador distinction
- **[Dec 2025]** Extended history timeline (6 events from 2001-2020)
- **[Dec 2025]** Updated College of Servants with 18 leaders' photos and mini-descriptions
- **[Dec 2025]** Added footer ministry sections: "Join the Choir" and "Join the Welcome Team" with images
- **[Dec 2025]** Moved newsletter to bottom of page after "Ready to join us" section
