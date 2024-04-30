import { notFound } from "next/navigation";
import {getRequestConfig} from "next-intl/server"
import { locales } from "../utils/locale.utils";

export default getRequestConfig(async ({locale}) => {
    if(!locales.map(locale => locale.locale).includes(locale as any)) notFound()

    return {
        messages: (await import(`../../dictionaries/${locale}.json`)).default
    }
})