# Perfect Knives — Industrial Knives & Cutting Blades

A Next.js (App Router), TypeScript, and Tailwind CSS web application replicating and enhancing [sitecraftix.com/perfectknives/](https://sitecraftix.com/perfectknives/).

Developed for **Perfect Knives** (operating under **Perfect Engineering Works**, Established 1985 in Maharashtra, India).

---

## 🚀 Getting Started

The project is located at:
```
F:\perfect-knives
```

### 1. Install Dependencies (Already installed)
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
npm run start
```

---

## ✨ Features & Interactive Enhancements

### 1. Authentic Branding & Visual Fidelity
- Exact replica of the original layout, structure, content, and industrial engineering color palette.
- Company logo (`/images/logo.png`), machinery workshops (`/images/about-machine.jpeg`), hero slides (`/images/hero-1.png`, `/images/hero-2.png`), 10 product images (`/images/prod-1.png` to `/images/prod-10.png`), and client logos (`/images/client-1.png` to `/images/client-6.png`).

### 2. Interactive Navigation & Drawers
- **Top Bar**: Direct phone dial (`+91 9967882739`), email link (`accuratemachinerysg@gmail.com`), social icons, and **Request A Quote** button.
- **Sticky Header**: Glassmorphism navbar with scroll detection.
- **Search Modal**: Instant keyboard-accessible (`ESC`) search across all blades, metallurgy grades, industries, and FAQs.
- **Slide-out Quick Contact Drawer**: Slide-in panel with contact info, direct calling, and quick note form.
- **Mobile Responsive Drawer**: Smooth mobile menu with collapsible navigation.

### 3. Hero Slider with Cinematic Effects
- Multi-slide auto-cycling banner with pause-on-hover.
- Subtle Ken Burns scale zoom on slide background images.
- Text stagger reveals, technical feature pills (CNC Precision Ground, Vacuum Heat Treated, Tolerances to ±0.005mm).
- Manual previous / next controls and active progress indicators.

### 4. Interactive Product Catalog
- **Category Filter Tabs**: *All Products*, *Packaging & Sealing*, *Slitting & Trimming*, *Rotary & Circular*, *Industrial Guillotine*.
- **Real-Time Search Bar**: Instant search by blade name, tool steel (e.g., D2, HSS, Carbide), or application.
- **Quick View Specifications Modal**: Inspect metallurgy grade, hardness (HRC), compatible OEM machines (Multivac, Polar, Totani, etc.), and tooling features.
- **Instant Quote Pre-fill**: Clicking "Get Quote" opens the quote form pre-populated with the chosen blade.

### 5. Interactive Blade Configurator & Material Selector
- Interactive tooling calculator: select **Cutting Machine Mechanism**, **Target Substrate Being Cut**, and **Operating Environment**.
- Real-time calculation of recommended **Tool Steel Metallurgy**, **Optimal Core Hardness (HRC)**, and **Bevel Angle**.
- 1-click export to quotation request.

### 6. Animated Metrics & Social Proof
- Animated count-up numbers when scrolled into view:
  - **300+** Ton's Of Customers
  - **500+** Modern Equipments
  - **1,000+** Expert Members
  - **1,824+** Ton's Of Harvest
- **Infinite Logo Marquee**: Smooth infinite ticker displaying client brand logos.
- **Interactive Testimonial Carousel**: Verified reviews from Rajesh Sharma, Amit Patel, and Sandeep Verma.

### 7. Interactive FAQ Accordion
- Accordion with smooth toggle animation.
- Category filters (*General*, *Custom Orders*, *Technical & Materials*, *Quotation & Orders*).
- Instant search filter for all 10 technical questions.

### 8. Interactive RFQ Form & WhatsApp Integration
- Multi-field quotation modal and contact form.
- Direct celebration confetti effect on submission.
- **1-Click WhatsApp Shortcut**: Automatically formats all selected blade specifications and opens a WhatsApp chat with `+91 9967882739`.
- Embedded Google Maps frame for the Thane West factory.

### 9. Global Floating Helpers
- **Pulsing WhatsApp Quick-Chat button** with tooltip.
- **Circular Progress Back-To-Top button** that measures scroll depth.

---

## 📁 Project Directory Structure

```
F:\perfect-knives/
├── app/
│   ├── about/page.tsx         # Dedicated About Us page
│   ├── contact/page.tsx       # Dedicated Contact Us page
│   ├── faq/page.tsx           # Dedicated FAQ page
│   ├── products/page.tsx      # Dedicated Products Catalog page
│   ├── globals.css            # Tailwind CSS & keyframe animations
│   ├── layout.tsx             # Root layout with Inter & Poppins fonts
│   └── page.tsx               # Interactive Home page
├── components/
│   ├── AboutSection.tsx       # 25+ years experience badge & story
│   ├── BackToTop.tsx          # Circular scroll-depth progress button
│   ├── BladeConfigurator.tsx  # Interactive metallurgy & tolerance calculator
│   ├── ClientsTestimonials.tsx# Infinite logo marquee & client slider
│   ├── ContactSection.tsx     # RFQ form with confetti & Google Map
│   ├── FaqSection.tsx         # Categorized accordion with search
│   ├── FeaturesStrip.tsx      # Application, Precision, & Quality cards
│   ├── FloatingWhatsApp.tsx   # Pulsing floating WhatsApp trigger
│   ├── Footer.tsx             # Full footer with newsletter & SiteCraftix credits
│   ├── Header.tsx             # Top bar, sticky navbar & mobile drawer
│   ├── HeroSlider.tsx         # Multi-slide banner with Ken Burns zoom
│   ├── MetricsBanner.tsx      # Animated counter metrics & callout
│   ├── ProductCatalog.tsx     # Filterable product grid with Quick View
│   ├── QuickContactDrawer.tsx # Slide-out sidebar with company details
│   ├── QuoteModal.tsx         # Interactive RFQ dialog with confetti
│   ├── SearchModal.tsx        # Real-time search dialog
│   └── SocialIcons.tsx        # Clean SVG social icons
├── data/
│   ├── company.ts             # Contact details, address, stats
│   ├── faq.ts                 # 10 categorized FAQ items
│   ├── industries.ts          # 6 industries with technical requirements
│   ├── products.ts            # 10 industrial products with specifications
│   └── testimonials.ts        # Client reviews & brand logos
└── public/
    └── images/                # 20 original downloaded high-res assets
```

---

## 🛠 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, Turbopack, React 19)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Effects**: [canvas-confetti](https://www.npmjs.com/package/canvas-confetti)
- **Deployment**: Ready for Vercel, Node.js server, or static export.
