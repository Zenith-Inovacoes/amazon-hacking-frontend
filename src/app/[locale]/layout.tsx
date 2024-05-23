import type { Metadata } from "next";
import "./globals.css";
import { gilroy } from "@/services/utils/fonts.utils";
import Favicon from "@/components/Favicon";
import Providers from "./providers";
import FloatingOptions from "@/components/molecules/FloatingOptions";

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
      <body className={gilroy.className}>
        <Providers>
          {children}
          <FloatingOptions />
        </Providers>
      </body>
    </html>
  );
}
