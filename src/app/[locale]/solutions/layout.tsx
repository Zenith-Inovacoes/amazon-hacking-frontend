import { Header } from "@/components/molecules";
import { locales } from "@/services/utils/locale.utils";

// type Props = {
//   params: { locale: string }
//   searchParams: { [key: string]: string | string[] | undefined }
// }

// export function generateMetadata({ params }: Props) {
//   const locale = locales.find((locale) => params.locale.includes(locale.locale))?.locale || 'en'

//   return {
//     title: locale === 'en' ? 'Solutions | Amazon Hacking' : 'Soluções | Amazon Hacking',
//   }
// }

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
