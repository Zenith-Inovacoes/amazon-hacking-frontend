import type { Metadata } from "next";
import "./globals.css";
import { gilroy } from "@/services/utils/fonts.utils";

export const metadata: Metadata = {
  title: "Amazon Hacking",
  description: "Amazon Hacking",
};

export default function RootLayout({
  children,
  // params: { locale }
}: Readonly<{
  children: React.ReactNode;
  // params: { locale: string }
}>) {
  return (
    <html lang="pt-br">
      <body className={gilroy.className}>{children}</body>
    </html>
  );
}
