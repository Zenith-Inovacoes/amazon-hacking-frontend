import type { Metadata } from "next";
import "./globals.css";
import { gilroy } from "@/services/utils/fonts.utils";
import Favicon from "@/components/Favicon";

export const metadata: Metadata = {
  title: "Amazon Hacking",
  description: "Amazon Hacking",
};

export default function RootLayout({
  children,
  params: { locale }
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string }
}>) {
  return (
    <html lang={locale}>
      <Favicon />
      <body className={gilroy.className}>{children}</body>
    </html>
  );
}
