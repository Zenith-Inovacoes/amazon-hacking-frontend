import createMiddleware from "next-intl/middleware";
import { locales } from "./services/utils/locale.utils";

export default createMiddleware({
    locales: locales.map(locale => locale.locale),
    defaultLocale: locales.find(locale => locale.default === true)!.locale
})

export const config = {
    // matcher: ['/', `/(${locales.map(locale => locale.locale).join("|")})/:path*`]
    matcher: ['/', `/(pt|en)/:path*`]
}


