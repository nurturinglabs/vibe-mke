import { Bebas_Neue, DM_Sans, JetBrains_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const dmSans = DM_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  title: "Vibe MKE \u2014 Milwaukee's AI Creation Community",
  description:
    "Monthly meetups in Milwaukee where you create with AI. Code, video, design, apps. No experience needed. Just show up and vibe.",
  openGraph: {
    title: "Vibe MKE",
    description:
      "Describe it. Build it. Ship it. Milwaukee's AI creation community.",
    images: ["/og-image.jpg"],
    type: "website",
  },
  keywords: [
    "vibe coding Milwaukee",
    "AI meetup Milwaukee",
    "vibe MKE",
    "Milwaukee tech meetup",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
