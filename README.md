# LoyLegal PH

Official website for **LoyLegal PH** — the law office of Atty. Marilou "Loy" S. Dumadag, Attorney-at-Law & Notary Public, Philippines.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| UI Library | React 19 |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Fonts | Playfair Display · Lato (via `next/font/google`) |
| Email | Nodemailer + Gmail SMTP |
| Mail Routing | Cloudflare Email Routing → Gmail |

---

## Project Structure

```
loylegal-ph/
├── app/
│   ├── api/contact/route.ts   # Contact form POST handler (nodemailer)
│   ├── globals.css            # Tailwind v4 theme tokens
│   ├── layout.tsx             # Root layout, font setup, metadata
│   ├── page.tsx               # Single-page composition
│   └── icon.svg               # Favicon
├── components/
│   ├── Navbar.tsx             # Fixed, scroll-aware, mobile hamburger, scroll-spy
│   ├── Hero.tsx               # Full-height hero, stats bar
│   ├── Services.tsx           # 10 practice area cards with SVG icons
│   ├── About.tsx              # Attorney bio, photo, credentials
│   ├── HowWeWork.tsx          # Engagement options, commitment statement
│   ├── WhyUs.tsx              # 6-reason dark navy section
│   ├── Contact.tsx            # Contact form + contact channels
│   └── Footer.tsx             # Dark footer
└── public/
    └── attorney-profile.jpg   # Attorney photo
```

---

## Design System

| Token | Value | Usage |
|---|---|---|
| Navy | `#1E3A5F` | Primary brand, buttons, headings |
| Navy Deep | `#0A1520` | Footer background |
| Navy Mid | `#0F2440` | Why Us section background |
| Gold | `#C9A84C` | Accents, eyebrows, hover states |
| Background | `#F6F7F9` | Page background |
| Surface 2 | `#ECEEF2` | About, Contact section background |
| Text | `#0A1520` | Primary text |
| Muted | `#4A6070` | Body copy, descriptions |
| Border | `#E2E8F0` | Dividers, card borders |

---

## Page Sections

| Section | Component | ID |
|---|---|---|
| Navigation | `Navbar.tsx` | — |
| Hero | `Hero.tsx` | `#hero` |
| Practice Areas | `Services.tsx` | `#services` |
| About the Attorney | `About.tsx` | `#about` |
| How We Work | `HowWeWork.tsx` | `#how` |
| Why LoyLegal PH | `WhyUs.tsx` | `#why-us` |
| Contact | `Contact.tsx` | `#contact` |
| Footer | `Footer.tsx` | — |

---

## Contact Form Setup

The contact form (`/api/contact`) uses **Nodemailer** with Gmail SMTP and **Cloudflare Email Routing**.

### Flow

```
Contact Form → Nodemailer (Gmail SMTP) → info@loylegal.ph → Cloudflare Email Routing → Gmail Inbox
```

### Environment Variables

Create a `.env.local` file in the project root:

```env
GMAIL_USER=your-gmail@gmail.com
GMAIL_APP_PASSWORD=your-app-password
RECIPIENT_EMAIL=info@loylegal.ph
```

**`GMAIL_USER`** — The Gmail account used to send emails (must match the App Password).

**`GMAIL_APP_PASSWORD`** — A Gmail App Password (not your login password). Generate one at:
`myaccount.google.com` → Security → 2-Step Verification → App Passwords

**`RECIPIENT_EMAIL`** — Where inquiries are delivered. Set to `info@loylegal.ph` so Cloudflare routes it to your Gmail inbox.

### Cloudflare Email Routing Setup

1. Cloudflare Dashboard → `loylegal.ph` → **Email** → **Email Routing**
2. Enable Email Routing (Cloudflare auto-adds MX/TXT DNS records)
3. Add rule: `info` → forward to your Gmail address
4. Verify the destination email via the confirmation link Cloudflare sends

---

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
# → http://localhost:3000

# Production build
npm run build

# Start production server
npm start
```

---

## Attorney Information

**Atty. Marilou "Loy" S. Dumadag**
Attorney-at-Law & Notary Public

- Juris Doctor — Ateneo de Manila University School of Law
- Member in Good Standing — Integrated Bar of the Philippines (since 1996)
- Program of Instructions for Lawyers — Harvard Law School

**Contact:**
- Email: info@loylegal.ph
- Phone / Viber: +63 917 701 2235
- Office: Unit 1, Inocencia Row, Guinoyuran Road, P4A-Poblacion, Valencia City, Bukidnon 8709, Philippines
- Hours: Monday – Friday, 9:00 AM – 5:00 PM PHT
