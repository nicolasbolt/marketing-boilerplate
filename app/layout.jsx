
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

export const viewport = "width=device-width, initial-scale=1.0";

export const metadata = {
  title: "Marketing Boilerplate",
  description: "Marketing boilerplate for Next.js",
  keywords: "marketing,nextjs,boilerplate",
  openGraph: {
    title: "Marketing Boilerplate",
    description: "Marketing boilerplate for Next.js",
    type: "website",
    url: "https://yourwebsite.com",
    images: [
      {
        url: "https://yourwebsite.com/og-image.jpg",
        width: 800,
        height: 600,
        alt: "Og Image Alt",
      },
    ],
  },
  charset: "UTF-8",
  alternates: {
    canonical: './',
  },
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
