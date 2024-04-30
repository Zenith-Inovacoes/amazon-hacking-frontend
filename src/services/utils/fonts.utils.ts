import localFont from "next/font/local";

export const gilroy = localFont({
    src: [
        {
            path: "../../styles/fonts/Gilroy/Gilroy-Bold.ttf",
            style: "normal",
            weight: "700"
        },
        {
            path: "../../styles/fonts/Gilroy/Gilroy-Medium.ttf",
            style: "normal",
            weight: "500"
        },
        {
            path: "../../styles/fonts/Gilroy/Gilroy-Regular.ttf",
            style: "normal",
            weight: "400",
        }
    ],
    variable: "--font-gilroy",
    style: "normal",
    display: "swap"
})