import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { ThemeProvider } from "@/components/ThemeProvider";
import { SmoothScrolling } from "@/components/ui/SmoothScrolling";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans-fallback",
});

export const metadata: Metadata = {
  title: "Vanguard | Premium Digital Agency",
  description: "A premium modern wrapper for data entry, copywriting, graphic design, and web development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans antialiased selection:bg-primary/30 selection:text-primary-foreground min-h-screen bg-background text-foreground transition-colors duration-300`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothScrolling>
            {children}
            <ScrollToTop />
          </SmoothScrolling>
        </ThemeProvider>
      </body>
    </html>
  );
}
