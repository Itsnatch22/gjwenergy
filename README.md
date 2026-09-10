# GJW Energy

GJW Energy is a principal-led engineering and EPC company based in Kenya, delivering commercial and industrial solar PV, battery energy storage, and electrical infrastructure across East Africa.

The website presents GJW Energy's capabilities, experience, sectors, case studies, and project enquiry workflow in an editorial, engineering-led interface.

## What the website covers

- **EPC** - Turnkey engineering, procurement, and construction for C&I and utility-scale solar PV, BESS, and grid infrastructure.
- **Construction** - Civil, mechanical, and electrical works delivered to programme and specification.
- **Design** - Feasibility studies, yield modelling, system design, and grid interconnection studies.
- **Technical advisory** - Owner's engineering, technical due diligence, feasibility modelling, and EPC tender support.
- **Operations and maintenance** - Preventive and corrective maintenance, monitoring, and rapid response.
- **Asset management** - Technical and commercial management of operating energy assets.

The experience section highlights a team track record of approximately **20 MWp of solar PV** and **10 MWh of battery energy storage** across East Africa.

## Website routes

| Route | Purpose |
| --- | --- |
| `/` | Homepage with the GJW Energy positioning, manifesto, sectors, services, selected work, and call to action |
| `/about` | Company story, operating model, governance, and engineering principles |
| `/services` | Detailed service capabilities for EPCs, IPPs, asset owners, and project teams |
| `/experience` | Solar PV, BESS, and transmission and distribution experience |
| `/case-studies` | Selected projects across manufacturing, hospitality, healthcare, horticulture, and infrastructure |
| `/contact` | Project enquiry form and company contact details |

## Contact enquiries

The contact form submits to `POST /api/contact`. The route validates the enquiry with Zod and sends a branded React Email template through Resend. Enquiries include:

- Name
- Email
- Phone
- Company
- Service of interest
- Project details

Configure these environment variables before enabling email delivery:

```env
RESEND_API_KEY=re_xxxxxxxxx
CONTACT_EMAIL_FROM=GJW Energy <hello@your-verified-domain.com>
```

`CONTACT_EMAIL_FROM` must use a domain verified in Resend. The visitor's email is assigned as `replyTo` so the team can respond directly from the notification.
Contact form submissions are delivered to `locogeff70@gmail.com`.

## Technology

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Lenis smooth scrolling
- Resend and React Email
- Zod request validation
- Radix UI and shadcn/ui components
- Lucide icons

The visual system uses the GJW Energy palette:

- Obsidian: `#0A0A0C`
- Bone: `#F7F7F5`
- Ochre: `#D97725`
- Forest: `#2B3A2F`

Fonts are loaded from Cabinet Grotesk, Satoshi, and JetBrains Mono to support the site's display, body, and technical label styles.

## Local development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production commands

Create an optimized production build:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

Run ESLint:

```bash
npm run lint
```

## Project structure

```text
app/
  about/              About page
  api/contact/        Contact enquiry API route
  case-studies/       Case studies page
  contact/            Contact page and form
  experience/         Experience page
  services/           Services page
  globals.css         Global Tailwind theme and website styles
  layout.tsx          Root layout and shared application shell
  page.tsx            Homepage

components/
  AppShell.tsx        Lenis, navigation, footer, and toaster
  Navbar.tsx          Primary site navigation
  Footer.tsx          Footer navigation and contact details
  KineticHero.tsx     Animated page hero
  ...                 Website sections and reusable UI components

emails/
  ContactSubmissionEmail.tsx
                      Branded contact notification email

public/images/
                      Project, sector, and editorial imagery
```

## Company contact

- Email: [gjwenergy.co.ke](mailto:info@gjwenergy.com)
- Phone: [+254 722 660 630](tel:+254722660630)
- Office: Ngong, Kajiado County, Kenya
- Coverage: Kenya and the wider East African region
