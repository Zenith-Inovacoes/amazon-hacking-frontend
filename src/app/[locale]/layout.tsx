import type { Metadata } from "next";
import "./globals.css";
import { gilroy } from "@/services/utils/fonts.utils";
import Favicon from "@/components/Favicon";
import Providers from "./providers";
import FloatingOptions from "@/components/molecules/FloatingOptions";
import { Suspense } from "react";
import Loading from "@/components/templates/Loading";
import { NextIntlClientProvider } from 'next-intl'

export const metadata: Metadata = {
  title: 'Amazon Hacking',
  description: 'Amazon Hacking',
}

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode
  params: { locale: string }
}>) {
  return (
    <html lang={locale}>
      <Favicon />
      <body className={gilroy.className}>
        <Suspense fallback={<Loading />}>
          <Providers>
            <NextIntlClientProvider locale={locale}>
              {/* This line solves the problem of the radix ui elements hiding the scroll bar, but breaks about section */}
              {/* https://github.com/radix-ui/primitives/issues/346#issuecomment-1121440376 */}
              {/* <div className='fixed w-full top-0 bottom-0 overflow-x-hidden'> */}
              {children}
              {/* </div> */}
            </NextIntlClientProvider>
            <FloatingOptions />
          </Providers>
        </Suspense>
      </body>
    </html>
  )
}
