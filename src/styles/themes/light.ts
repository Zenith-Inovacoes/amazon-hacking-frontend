import { ThemeProps } from "./types";

const colors: ThemeProps["colors"] = {
    primary: {
        "100": "#0165B7",
        "200": "#005194",
        "300": "#014780",
        "400": "#00335B"
    }, 
    secondary: {
        "100": "#059177",
        "200": "#0AE7BD",
        "300": "#70BAE9",
        "400": "#633CFF"
    },
    neutrals:{ 
        "100": "#FFFFFF",
        "200": "#E7E7E7",
        "300": "#B1B1B1",
        "400": "#8D8D8D",
        "500": "#595959",
        "600": "#222222",
        "700": "#0A0A0A"
    }
}

const fontSizes: ThemeProps["fontSizes"] = {
    "16": "16px",
    "18": "18px",
    "20": "20px",
    "24": "24px",
    "26": "26px",
    "28": "28px",
    "36": "36px",
    "40": "40px",
    "50": "50px",
    "60": "60px"
}

const lineHeights: ThemeProps["lineHeights"] = {
    "20": "20px",
    "22": "22px",
    "24": "24px",
    "28": "28px",
    "30": "30px",
    "34": "34px",
    "40": "40px",
    "44": "44px",
    "62": "62px",
    "65": "65px"
}

const fontFamilies: ThemeProps["fontFamilies"] = {
    primary: 'var(--font-gilroy)'
}

const light: ThemeProps = {
    colors,
    fontSizes,
    lineHeights,
    fontFamilies
}

export default light