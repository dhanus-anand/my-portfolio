import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { ResumeModalProvider } from "@/components/providers/ResumeModalProvider";
import { FirstLoadProvider } from "@/components/providers/FirstLoadProvider";
import { Header } from "@/components/layout/Header";
import { SkipLink } from "@/components/layout/SkipLink";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://dhanush.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  icons: {
    icon: "/images/logo-dk.png",
    apple: "/images/logo-dk.png",
  },
  title: {
    default: "Dhanus Kanth Anand | Software Engineer",
    template: "%s | Dhanus Kanth Anand",
  },
  description:
    "Building production-grade systems across the stack. MS CS @ UMass Amherst. Full-stack, distributed systems, ML engineering.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Dhanus Kanth Anand",
    title: "Dhanus Kanth Anand | Software Engineer",
    description:
      "Building production-grade systems across the stack. MS CS @ UMass Amherst.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dhanus Kanth Anand | Software Engineer",
    description: "Building production-grade systems across the stack.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Dhanus Kanth Anand",
      url: siteUrl,
      jobTitle: "Software Engineer",
      description:
        "MS CS @ UMass Amherst. Full-stack, distributed systems, ML engineering.",
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Dhanus Kanth Anand Portfolio",
      publisher: { "@id": `${siteUrl}/#person` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SkipLink />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={false}
          forcedTheme="dark"
        >
          <ResumeModalProvider>
            <Header />
            <FirstLoadProvider>{children}</FirstLoadProvider>
          </ResumeModalProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
