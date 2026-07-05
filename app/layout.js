import "./globals.css";
import { Inter, Fredoka } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";
import ThemeToggle from "@/components/ThemeToggle";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const fredoka = Fredoka({ variable: "--font-fredoka", subsets: ["latin"], weight: ["500", "600", "700"] });

const __jsonld = {"@context":"https://schema.org","@type":"ProfilePage","mainEntity":{"@type":"Person","name":"Milo","jobTitle":"Designer & Illustrator","url":"https://milo.pintuweb.com","inLanguage":"en"}};

export const metadata = {
  metadataBase: new URL("https://milo.pintuweb.com"),
  title: "Milo — Designer & Illustrator",
  description: "Portfolio of Milo: playful, friendly product design & illustration that make digital products delightful.",
  applicationName: "Milo",
  keywords: ["illustrator", "product designer", "portfolio", "playful design", "illustration"],
  authors: [{ name: "Milo" }],
  creator: "Milo",
  publisher: "Milo",
  alternates: { canonical: "https://milo.pintuweb.com" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://milo.pintuweb.com",
    siteName: "Milo",
    title: "Milo — Designer & Illustrator",
    description: "Portfolio of Milo: playful, friendly product design & illustration that make digital products delightful.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Milo — Designer & Illustrator" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Milo — Designer & Illustrator",
    description: "Portfolio of Milo: playful, friendly product design & illustration that make digital products delightful.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${fredoka.variable} antialiased`}>
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
          <ThemeToggle />
        </ThemeProvider>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(__jsonld) }} />
        </body>
    </html>
  );
}
