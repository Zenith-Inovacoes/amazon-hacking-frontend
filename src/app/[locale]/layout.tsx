import type { Metadata } from "next";
import "./globals.css";
import { gilroy } from "@/services/utils/fonts.utils";
import Favicon from "@/components/Favicon";
import Providers from "./providers";
import FloatingOptions from "@/components/molecules/FloatingOptions";
import { Suspense } from "react";
import Loading from "@/components/templates/Loading";
import { NextIntlClientProvider } from 'next-intl'
import { Header } from "@/components/molecules";
import Footer from "@/components/templates/Footer";
import { getMessages } from "next-intl/server";
import { Toaster } from 'sonner'

export const metadata: Metadata = {
  metadataBase: new URL('https://amazonhacking.com.br'),
  title: 'Amazon Hacking',
  description: 'O Amazon Hacking é um programa de formação para alunos da Escola de Negócios, Tecnologia e Inovação do CESUPA - ARGO, que visa conectar empresas comprometidas com a sustentabilidade amazônica, a comunidade local e seu conhecimento tradicional, junto ao conhecimento científico e tecnológico em prol do  desenvolvimento bioeconômico da região olhando para uma perspectiva global.',
  category: 'Institucional',
  keywords: [
    'projetos',
    'startups',
    'inovação',
    'cesupa',
    'computação amostra',
    'amazon hacking',
    'google for startups'
  ],
  generator: 'Amazon Hacking',
  applicationName: 'Amazon Hacking',
  alternates: {
    canonical: 'https://amazonhacking.com.br',
  },
  openGraph: {
    title: 'Amazon Hacking',
    description: 'O Amazon Hacking é um programa de formação para alunos da Escola de Negócios, Tecnologia e Inovação do CESUPA - ARGO, que visa conectar empresas comprometidas com a sustentabilidade amazônica, a comunidade local e seu conhecimento tradicional, junto ao conhecimento científico e tecnológico em prol do  desenvolvimento bioeconômico da região olhando para uma perspectiva global.',
    locale: 'pt_BR',
    url: 'https://amazonhacking.com.br',
    type: 'website',
    siteName: 'Amazon Hacking',
  },
  twitter: {
    title: 'Amazon Hacking',
    description: 'O Amazon Hacking é um programa de formação para alunos da Escola de Negócios, Tecnologia e Inovação do CESUPA - ARGO, que visa conectar empresas comprometidas com a sustentabilidade amazônica, a comunidade local e seu conhecimento tradicional, junto ao conhecimento científico e tecnológico em prol do  desenvolvimento bioeconômico da região olhando para uma perspectiva global.',
    creator: '@cesupaonline',
    card: 'summary_large_image',
  },
}

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode
  params: { locale: string }
}>) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <Favicon />
      <body className={gilroy.className}>
        <Suspense fallback={<Loading />}>
          <Providers>
            <NextIntlClientProvider locale={locale} messages={messages}>
              {/* This line solves the problem of the radix ui elements hiding the scroll bar, but breaks about section */}
              {/* https://github.com/radix-ui/primitives/issues/346#issuecomment-1121440376 */}
              {/* <div className='fixed w-full top-0 bottom-0 overflow-x-hidden'> */}
              <main className="scroll-smooth antialiased">
                {children}
                <Footer />
                <Toaster 
                  position="top-right"
                  richColors
                  expand
                />
              </main>
              {/* </div> */}
            </NextIntlClientProvider>
            <FloatingOptions />
          </Providers>
        </Suspense>
      </body>
    </html>
  )
}
