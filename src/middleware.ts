import createMiddleware from "next-intl/middleware";
import { locales } from "./services/utils/locale.utils";

export default createMiddleware({
    locales: locales.map(locale => locale.locale),
    defaultLocale: locales.find(locale => locale.default === true)!.locale
})

export const config = {
    // This is not supported yet, reference: https://github.com/vercel/next.js/issues/56398
    // matcher: ['/', `/(${locales.map(locale => locale.locale).join("|")})/:path*`]
    matcher: ['/', `/(pt|en)/:path*`]
}


