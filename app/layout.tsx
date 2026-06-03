import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Thư mời Lễ Tốt nghiệp 🎓",
  description: "Trân trọng kính mời bạn tham dự Lễ Tốt nghiệp",

  openGraph: {
    title: "Thư mời Lễ Tốt nghiệp 🎓",
    description: "Trân trọng kính mời bạn tham dự Lễ Tốt nghiệp",
    url: "https://graduation-invitation-nguyen-ngoc-tuan-anh.vercel.app/",
    siteName: "Graduation Invitation",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: "Thư mời Lễ Tốt nghiệp",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Thư mời Lễ Tốt nghiệp 🎓",
    description: "Trân trọng kính mời bạn tham dự Lễ Tốt nghiệp",
    images: ["/preview.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
