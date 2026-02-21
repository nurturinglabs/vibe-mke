# VIBE MKE

**Milwaukee's AI Creation Community**

*Describe it. Build it. Ship it.*

---

Every month, we gather in Milwaukee to create with AI. Code, video, design, apps. No experience needed. Just show up and vibe.

The name comes from Andrej Karpathy's "vibe coding" concept — describe what you want, let AI handle the how, judge the output, iterate. Vibe MKE extends this beyond coding to all forms of AI-powered creation.

## What People Create

| Medium | Tools |
|--------|-------|
| Vibe Code | Cursor, Replit, Bolt |
| Vibe Video | Runway, Kling, Sora |
| Vibe Design | Midjourney, DALL-E, Canva |
| Vibe Apps | Lovable, v0, Claude |

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Styling:** Inline styles with a custom design system
- **Fonts:** Bebas Neue, DM Sans, JetBrains Mono (via `next/font/google`)
- **Analytics:** [Vercel Speed Insights](https://vercel.com/docs/speed-insights)
- **Hosting:** [Vercel](https://vercel.com)

## Design System — Milwaukee Gritty

This is NOT a Silicon Valley tech landing page. This is Milwaukee.

- **Primary:** Cream City Brick `#C4613A`
- **Accent:** Amber `#E8A838`
- **Background:** Warm Black `#1A1714` / Charcoal `#2A2522`
- **Text:** Cream `#F5EDE0`
- **Corners:** Sharp 90° everywhere — no border-radius, no softness. Industrial.
- **Texture:** Subtle brick pattern overlay. Custom Milwaukee skyline SVG.

## Project Structure

```
src/
├── app/
│   ├── layout.js          # Root layout, fonts, SEO meta
│   ├── page.js            # Composes all 10 sections
│   └── globals.css        # Reset, smooth scroll, hover states
├── components/
│   ├── Hero.jsx           # Full-viewport hero with skyline
│   ├── About.jsx          # Origin story, photo strip, mediums
│   ├── WhoShowsUp.jsx     # 6 persona cards
│   ├── HowItWorks.jsx     # 4-step process
│   ├── Events.jsx         # Upcoming events + venue
│   ├── EmailSignup.jsx    # Email capture form
│   ├── Gallery.jsx        # Past builds showcase
│   ├── FAQ.jsx            # Expandable Q&A
│   ├── Sponsors.jsx       # Sponsor pitch + CTA
│   ├── Footer.jsx         # Links, credits, inverted skyline
│   └── decorative/
│       ├── MilwaukeeSkyline.jsx  # Custom SVG skyline
│       └── BrickTexture.jsx      # CSS brick overlay
└── constants/
    ├── colors.js           # Color tokens
    ├── fonts.js            # Font stacks
    ├── images.js           # Milwaukee photos (base64)
    ├── events.js           # Event schedule
    ├── mediums.js          # Creation mediums
    ├── personas.js         # Who Shows Up data
    └── faq.js              # FAQ content
```

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

## Deployment

Push to GitHub and connect to [Vercel](https://vercel.com) for automatic deployments. The app is optimized for Vercel's edge network out of the box.

## Links

- **Website:** [vibemke.com](https://vibemke.com)
- **Twitter/X:** [@VibeMKE](https://x.com/VibeMKE)
- **Meetup:** [meetup.com/vibe-mke](https://meetup.com/vibe-mke)

---

Built with brick in Milwaukee. Cream City forever.

Powered by MKE Community
