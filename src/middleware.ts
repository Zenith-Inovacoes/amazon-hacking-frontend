import createIntlMiddleware from "next-intl/middleware";
import { locales } from "./services/utils/locale.utils";
import { NextRequest } from "next/server";

export default async function middleware(request: NextRequest) {
  const localeHeader = request.headers.get("x-current-locale") || "pt";

  const defaultLocale =
    locales.find((locale) => locale.locale === localeHeader)?.locale || "pt";

  const handleI18nRouting = createIntlMiddleware({
    locales: locales.map((locale) => locale.locale),
    defaultLocale: defaultLocale,
  });

  const response = handleI18nRouting(request);

  response.headers.set("x-current-locale", defaultLocale);
  response.headers.set("x-current-path", request.nextUrl.pathname);
  response.headers.set(
    "x-current-search-params",
    request.nextUrl.searchParams.toString()
  );

  return response;
}

export const config = {
  // This is not supported yet, reference: https://github.com/vercel/next.js/issues/56398
  // matcher: ['/', `/(${locales.map(locale => locale.locale).join("|")})/:path*`]
  matcher: ["/", `/(pt|en)/:path*`],
};
