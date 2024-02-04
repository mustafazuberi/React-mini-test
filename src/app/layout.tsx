import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/shared/Navbar";
import { Inter } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "React Mini Test",
};
const inter = Inter({ subsets: ["latin"] });

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <section>{children}</section>
        </ThemeProvider>
      </body>
    </html>
  );
}

// dummy change