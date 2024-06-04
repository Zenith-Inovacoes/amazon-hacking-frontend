"use client";

import Input from "@/components/atoms/Input";
import { useTranslations } from "next-intl";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { startTransition } from "react";

export function Search() {
  const t = useTranslations("Solutions.gallery");
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    startTransition(() => {
      replace(`${pathname}?${params.toString()}`, { scroll: false });
    });
  }

  return (
    <Input
      defaultValue={searchParams.get("query")?.toString()}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        handleSearch(e.target.value!);
      }}
      // @ts-expect-error TODO: FIX THIS TYPE
      placeholder={t("placeholder") as string}
    />
  );
}
