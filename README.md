# HS Films & Photography

Premium website for a cinematic photography and videography studio.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- Framer Motion
- Lucide icons
- next-themes (light / dark, system default)

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Edit studio content

All copy, services, packages, portfolio, FAQs and testimonials live in `src/content/`.

- Studio details, email, phone, WhatsApp: `src/content/site.ts`
- Images currently use Unsplash URLs as **replaceable placeholders**. Swap them for files in `public/images/`.

Suggested local folders:

```
public/images/weddings
public/images/birthdays
public/images/events
public/images/portraits
public/images/portfolio
public/images/studio
public/images/albums
```

## Forms

`/booking` and `/contact` POST to `/api/booking` and `/api/contact`. Connect Resend, email, WhatsApp, Supabase, Firebase or a CRM in those route handlers.

## Theme

The site follows the system theme first, then persists the visitor's choice.
