import { ContextProvider } from "@/context/context";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Thomas Musial resume",
  description: "This is the resume of Thomas Musial, a web developer who brings absolute focus and tenacity to any project he is on.",
  keywords: "web design halifax, custom web design services, creative web page design, web designer halifax",
  openGraph: {
    title: "Thomas Musial Resume",
    description: "Learn why Thomas Musial is the man to take you to the next level",
    url: "https://thomasmusial.vercel.app",
    images: [
      {
        url: "https://thomasmusial.vercel.app/tom-side-angle.png",
        width: 1200,
        height: 630,
        alt: "
      }
    ],
    type: "website",
    locale: "en_US",
    siteName: 'FocusFlow Software | Web Design Halifax'
  },
  icons: {
    icon: ["/favicon.ico?v=4"]
  },
  // manifest:'/site.webmanifest'
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ContextProvider>

     
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
      </ContextProvider>
    </html>
  );
}
