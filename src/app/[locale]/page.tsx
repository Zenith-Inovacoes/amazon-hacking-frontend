import { useTranslations } from "next-intl";
import Partners from "@/components/templates/Partners";

export default function Home() {
  const t = useTranslations("Index")

  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-60 font-bold tracking-widest">
      {t("title")}
      <Partners />
    </main>
  );
}
