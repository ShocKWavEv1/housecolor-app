import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";
import localFonts from "next/font/local";

const PPHatton = localFonts({
  src: [
    {
      path: "../assets/hatton/PPHatton-Ultralight.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/hatton/PPHatton-Light.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/hatton/PPHatton-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/hatton/PPHatton-Bold.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/hatton/PPHatton-Ultrabold.woff",
      weight: "700",
      style: "normal",
    },
  ],
});

const PPNeue = localFonts({
  src: [
    {
      path: "../assets/neue/PPNeueMontrealMono-Thin.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/neue/PPNeueMontrealMono-Light.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/neue/PPNeueMontrealMono-Book.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/neue/PPNeueMontrealMono-Regular.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/neue/PPNeueMontrealMono-Medium.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/neue/PPNeueMontrealMono-Bold.woff",
      weight: "800",
      style: "normal",
    },
  ],
});

const baseH1Styles = {
  fontFamily: PPNeue.style.fontFamily,
  fontSize: "140px",
};

const baseH2Styles = {
  fontFamily: PPNeue.style.fontFamily,
  fontSize: "110px",
};

const baseH3Styles = {
  fontFamily: PPNeue.style.fontFamily,
  fontSize: "96px",
};

const baseH4Styles = {
  fontFamily: PPNeue.style.fontFamily,
  fontSize: "82px",
};

const baseH5Styles = {
  fontFamily: PPNeue.style.fontFamily,
  fontSize: "68px",
};

const baseH6Styles = {
  fontFamily: PPNeue.style.fontFamily,
  fontSize: "54px",
};

const baseH7Styles = {
  fontFamily: PPNeue.style.fontFamily,
  fontSize: "40px",
};

const baseH8Styles = {
  fontFamily: PPNeue.style.fontFamily,
  fontSize: "32px",
};

const baseH9Styles = {
  fontFamily: PPNeue.style.fontFamily,
  fontSize: "26px",
};

const baseH10Styles = {
  fontFamily: PPNeue.style.fontFamily,
  fontSize: "20px",
};

const JUMBOTHIN = defineStyle({
  ...baseH1Styles,
  fontWeight: 300,
});

/* H1 VARIANTS */
const H1THIN = defineStyle({
  ...baseH1Styles,
  fontWeight: 300,
});

const H1LIGHT = defineStyle({
  ...baseH1Styles,
  fontWeight: 400,
});

const H1REGULAR = defineStyle({
  ...baseH1Styles,
  fontWeight: 500,
});

const H1MEDIUM = defineStyle({
  ...baseH1Styles,
  fontWeight: 600,
});

const H1SEMIBOLD = defineStyle({
  ...baseH1Styles,
  fontWeight: 700,
});

const H1BOLD = defineStyle({
  ...baseH1Styles,
  fontWeight: 800,
});

const H1BOLDER = defineStyle({
  ...baseH1Styles,
  fontWeight: 900,
});

/* H2 VARIANTS */
const H2THIN = defineStyle({
  ...baseH2Styles,
  fontWeight: 300,
});

const H2LIGHT = defineStyle({
  ...baseH2Styles,
  fontWeight: 400,
});

const H2REGULAR = defineStyle({
  ...baseH2Styles,
  fontWeight: 500,
});

const H2MEDIUM = defineStyle({
  ...baseH2Styles,
  fontWeight: 600,
});

const H2SEMIBOLD = defineStyle({
  ...baseH2Styles,
  fontWeight: 700,
});

const H2BOLD = defineStyle({
  ...baseH2Styles,
  fontWeight: 800,
});

const H2BOLDER = defineStyle({
  ...baseH2Styles,
  fontWeight: 900,
});

/* H3 VARIANTS */
const H3THIN = defineStyle({
  ...baseH3Styles,
  fontWeight: 300,
});

const H3LIGHT = defineStyle({
  ...baseH3Styles,
  fontWeight: 400,
});

const H3REGULAR = defineStyle({
  ...baseH3Styles,
  fontWeight: 500,
});

const H3MEDIUM = defineStyle({
  ...baseH3Styles,
  fontWeight: 600,
});

const H3SEMIBOLD = defineStyle({
  ...baseH3Styles,
  fontWeight: 700,
});

const H3BOLD = defineStyle({
  ...baseH3Styles,
  fontWeight: 800,
});

const H3BOLDER = defineStyle({
  ...baseH3Styles,
  fontWeight: 900,
});

/* H4 VARIANTS */
const H4THIN = defineStyle({
  ...baseH4Styles,
  fontWeight: 300,
});

const H4LIGHT = defineStyle({
  ...baseH4Styles,
  fontWeight: 400,
});

const H4REGULAR = defineStyle({
  ...baseH4Styles,
  fontWeight: 500,
});

const H4MEDIUM = defineStyle({
  ...baseH4Styles,
  fontWeight: 600,
});

const H4SEMIBOLD = defineStyle({
  ...baseH4Styles,
  fontWeight: 700,
});

const H4BOLD = defineStyle({
  ...baseH4Styles,
  fontWeight: 800,
});

const H4BOLDER = defineStyle({
  ...baseH4Styles,
  fontWeight: 900,
});

/* H5 VARIANTS */
const H5THIN = defineStyle({
  ...baseH5Styles,
  fontWeight: 300,
});

const H5LIGHT = defineStyle({
  ...baseH5Styles,
  fontWeight: 400,
});

const H5REGULAR = defineStyle({
  ...baseH5Styles,
  fontWeight: 500,
});

const H5MEDIUM = defineStyle({
  ...baseH5Styles,
  fontWeight: 600,
});

const H5SEMIBOLD = defineStyle({
  ...baseH5Styles,
  fontWeight: 700,
});

const H5BOLD = defineStyle({
  ...baseH5Styles,
  fontWeight: 800,
});

const H5BOLDER = defineStyle({
  ...baseH5Styles,
  fontWeight: 900,
});

/* H6 VARIANTS */
const H6THIN = defineStyle({
  ...baseH6Styles,
  fontWeight: 300,
});

const H6LIGHT = defineStyle({
  ...baseH6Styles,
  fontWeight: 400,
});

const H6REGULAR = defineStyle({
  ...baseH6Styles,
  fontWeight: 500,
});

const H6MEDIUM = defineStyle({
  ...baseH6Styles,
  fontWeight: 600,
});

const H6SEMIBOLD = defineStyle({
  ...baseH6Styles,
  fontWeight: 700,
});

const H6BOLD = defineStyle({
  ...baseH6Styles,
  fontWeight: 800,
});

const H6BOLDER = defineStyle({
  ...baseH6Styles,
  fontWeight: 900,
});

/* H7 VARIANTS */
const H7THIN = defineStyle({
  ...baseH7Styles,
  fontWeight: 300,
});

const H7LIGHT = defineStyle({
  ...baseH7Styles,
  fontWeight: 400,
});

const H7REGULAR = defineStyle({
  ...baseH7Styles,
  fontWeight: 500,
});

const H7MEDIUM = defineStyle({
  ...baseH7Styles,
  fontWeight: 600,
});

const H7SEMIBOLD = defineStyle({
  ...baseH7Styles,
  fontWeight: 700,
});

const H7BOLD = defineStyle({
  ...baseH7Styles,
  fontWeight: 800,
});

const H7BOLDER = defineStyle({
  ...baseH7Styles,
  fontWeight: 900,
});

/* H8 VARIANTS */
const H8THIN = defineStyle({
  ...baseH8Styles,
  fontWeight: 300,
});

const H8LIGHT = defineStyle({
  ...baseH8Styles,
  fontWeight: 400,
});

const H8REGULAR = defineStyle({
  ...baseH8Styles,
  fontWeight: 500,
});

const H8MEDIUM = defineStyle({
  ...baseH8Styles,
  fontWeight: 600,
});

const H8SEMIBOLD = defineStyle({
  ...baseH8Styles,
  fontWeight: 700,
});

const H8BOLD = defineStyle({
  ...baseH8Styles,
  fontWeight: 800,
});

const H8BOLDER = defineStyle({
  ...baseH8Styles,
  fontWeight: 900,
});

/* H9 VARIANTS */
const H9THIN = defineStyle({
  ...baseH9Styles,
  fontWeight: 300,
});

const H9LIGHT = defineStyle({
  ...baseH9Styles,
  fontWeight: 400,
});

const H9REGULAR = defineStyle({
  ...baseH9Styles,
  fontWeight: 500,
});

const H9MEDIUM = defineStyle({
  ...baseH9Styles,
  fontWeight: 600,
});

const H9SEMIBOLD = defineStyle({
  ...baseH9Styles,
  fontWeight: 700,
});

const H9BOLD = defineStyle({
  ...baseH9Styles,
  fontWeight: 800,
});

const H9BOLDER = defineStyle({
  ...baseH9Styles,
  fontWeight: 900,
});

/* H10 VARIANTS */
const H10THIN = defineStyle({
  ...baseH10Styles,
  fontWeight: 300,
});

const H10LIGHT = defineStyle({
  ...baseH10Styles,
  fontWeight: 400,
});

const H10REGULAR = defineStyle({
  ...baseH10Styles,
  fontWeight: 500,
});

const H10MEDIUM = defineStyle({
  ...baseH10Styles,
  fontWeight: 600,
});

const H10SEMIBOLD = defineStyle({
  ...baseH10Styles,
  fontWeight: 700,
});

const H10BOLD = defineStyle({
  ...baseH10Styles,
  fontWeight: 800,
});

const H10BOLDER = defineStyle({
  ...baseH10Styles,
  fontWeight: 900,
});

/* HATTON FONT VARIANTS */

const baseHattonH1Styles = {
  fontFamily: PPHatton.style.fontFamily,
  fontSize: "140px",
};

const baseHattonH2Styles = {
  fontFamily: PPHatton.style.fontFamily,
  fontSize: "110px",
};

const baseHattonH3Styles = {
  fontFamily: PPHatton.style.fontFamily,
  fontSize: "96px",
};

const baseHattonH4Styles = {
  fontFamily: PPHatton.style.fontFamily,
  fontSize: "82px",
};

const baseHattonH5Styles = {
  fontFamily: PPHatton.style.fontFamily,
  fontSize: "68px",
};

const baseHattonH6Styles = {
  fontFamily: PPHatton.style.fontFamily,
  fontSize: "54px",
};

const baseHattonH7Styles = {
  fontFamily: PPHatton.style.fontFamily,
  fontSize: "40px",
};

const baseHattonH8Styles = {
  fontFamily: PPHatton.style.fontFamily,
  fontSize: "32px",
};

const baseHattonH9Styles = {
  fontFamily: PPHatton.style.fontFamily,
  fontSize: "26px",
};

const baseHattonH10Styles = {
  fontFamily: PPHatton.style.fontFamily,
  fontSize: "20px",
};

const jumboHattonStyles = {
  fontFamily: PPHatton.style.fontFamily,
  fontSize: "230px",
};

/* MAIN HEADER STYLES */
const mainXXLHattonStyles = {
  fontFamily: PPHatton.style.fontFamily,
  fontSize: "4.6vw",
};

const mainXLHattonStyles = {
  fontFamily: PPHatton.style.fontFamily,
  fontSize: "4.6vw",
};

const mainLGHattonStyles = {
  fontFamily: PPHatton.style.fontFamily,
  fontSize: "5.6vw",
};

const mainMDHattonStyles = {
  fontFamily: PPHatton.style.fontFamily,
  fontSize: "7vw",
};

const mainSMHattonStyles = {
  fontFamily: PPHatton.style.fontFamily,
  fontSize: "7.2vw",
};

const mainXSHattonStyles = {
  fontFamily: PPHatton.style.fontFamily,
  fontSize: "11.2vw",
};

/* SECONDARY HEADER STYLES */

const secondaryXXLHattonStyles = {
  fontFamily: PPHatton.style.fontFamily,
  fontSize: "4.4vw",
};

const secondaryXLHattonStyles = {
  fontFamily: PPHatton.style.fontFamily,
  fontSize: "4.8vw",
};

const secondaryLGHattonStyles = {
  fontFamily: PPHatton.style.fontFamily,
  fontSize: "6vw",
};

const secondaryMDHattonStyles = {
  fontFamily: PPHatton.style.fontFamily,
  fontSize: "7.5vw",
};

const secondarySMHattonStyles = {
  fontFamily: PPHatton.style.fontFamily,
  fontSize: "8vw",
};

const secondaryXSHattonStyles = {
  fontFamily: PPHatton.style.fontFamily,
  fontSize: "10.5vw",
};

/* MAIN HEADER STYLES */

const MAINXXLHATTONREGULAR = defineStyle({
  ...mainXXLHattonStyles,
  fontWeight: 400,
});

const MAINXLHATTONREGULAR = defineStyle({
  ...mainXLHattonStyles,
  fontWeight: 400,
});

const MAINLGHATTONREGULAR = defineStyle({
  ...mainLGHattonStyles,
  fontWeight: 400,
});

const MAINMDHATTONREGULAR = defineStyle({
  ...mainMDHattonStyles,
  fontWeight: 400,
});

const MAINSMHATTONREGULAR = defineStyle({
  ...mainSMHattonStyles,
  fontWeight: 400,
});

const MAINXSHATTONREGULAR = defineStyle({
  ...mainXSHattonStyles,
  fontWeight: 400,
});

/* SECONDARY HEADER STYLES */

const SECONDARYXXLHATTONREGULAR = defineStyle({
  ...secondaryXXLHattonStyles,
  fontWeight: 400,
});

const SECONDARYXLHATTONREGULAR = defineStyle({
  ...secondaryXLHattonStyles,
  fontWeight: 400,
});

const SECONDARYLGHATTONREGULAR = defineStyle({
  ...secondaryLGHattonStyles,
  fontWeight: 400,
});

const SECONDARYMDHATTONREGULAR = defineStyle({
  ...secondaryMDHattonStyles,
  fontWeight: 400,
});

const SECONDARYSMHATTONREGULAR = defineStyle({
  ...secondarySMHattonStyles,
  fontWeight: 400,
});

const SECONDARYXSHATTONREGULAR = defineStyle({
  ...secondaryXSHattonStyles,
  fontWeight: 400,
});

/* JUMBO STYLES */

const JUMBOHATTONLIGHT = defineStyle({
  ...jumboHattonStyles,
  fontWeight: 300,
});

const JUMBOHATTONREGULAR = defineStyle({
  ...jumboHattonStyles,
  fontWeight: 400,
});

const JUMBOHATTONMEDIUM = defineStyle({
  ...jumboHattonStyles,
  fontWeight: 500,
});

const JUMBOHATTONBOLD = defineStyle({
  ...jumboHattonStyles,
  fontWeight: 600,
});

const JUMBOHATTONBOLDER = defineStyle({
  ...jumboHattonStyles,
  fontWeight: 700,
});

/* H1 VARIANT */

const H1HATTONLIGHT = defineStyle({
  ...baseHattonH1Styles,
  fontWeight: 300,
});

const H1HATTONREGULAR = defineStyle({
  ...baseHattonH1Styles,
  fontWeight: 400,
});

const H1HATTONMEDIUM = defineStyle({
  ...baseHattonH1Styles,
  fontWeight: 500,
});

const H1HATTONBOLD = defineStyle({
  ...baseHattonH1Styles,
  fontWeight: 600,
});

const H1HATTONBOLDER = defineStyle({
  ...baseHattonH1Styles,
  fontWeight: 700,
});

/* H2 VARIANT */

const H2HATTONLIGHT = defineStyle({
  ...baseHattonH2Styles,
  fontWeight: 300,
});

const H2HATTONREGULAR = defineStyle({
  ...baseHattonH2Styles,
  fontWeight: 400,
});

const H2HATTONMEDIUM = defineStyle({
  ...baseHattonH2Styles,
  fontWeight: 500,
});

const H2HATTONBOLD = defineStyle({
  ...baseHattonH2Styles,
  fontWeight: 600,
});

const H2HATTONBOLDER = defineStyle({
  ...baseHattonH2Styles,
  fontWeight: 700,
});

/* H3 VARIANT */

const H3HATTONLIGHT = defineStyle({
  ...baseHattonH3Styles,
  fontWeight: 300,
});

const H3HATTONREGULAR = defineStyle({
  ...baseHattonH3Styles,
  fontWeight: 400,
});

const H3HATTONMEDIUM = defineStyle({
  ...baseHattonH3Styles,
  fontWeight: 500,
});

const H3HATTONBOLD = defineStyle({
  ...baseHattonH3Styles,
  fontWeight: 600,
});

const H3HATTONBOLDER = defineStyle({
  ...baseHattonH3Styles,
  fontWeight: 700,
});

/* H4 VARIANT */

const H4HATTONLIGHT = defineStyle({
  ...baseHattonH4Styles,
  fontWeight: 300,
});

const H4HATTONREGULAR = defineStyle({
  ...baseHattonH4Styles,
  fontWeight: 400,
});

const H4HATTONMEDIUM = defineStyle({
  ...baseHattonH4Styles,
  fontWeight: 500,
});

const H4HATTONBOLD = defineStyle({
  ...baseHattonH4Styles,
  fontWeight: 600,
});

const H4HATTONBOLDER = defineStyle({
  ...baseHattonH4Styles,
  fontWeight: 700,
});

/* H5 VARIANT */

const H5HATTONLIGHT = defineStyle({
  ...baseHattonH5Styles,
  fontWeight: 300,
});

const H5HATTONREGULAR = defineStyle({
  ...baseHattonH5Styles,
  fontWeight: 400,
});

const H5HATTONMEDIUM = defineStyle({
  ...baseHattonH5Styles,
  fontWeight: 500,
});

const H5HATTONBOLD = defineStyle({
  ...baseHattonH5Styles,
  fontWeight: 600,
});

const H5HATTONBOLDER = defineStyle({
  ...baseHattonH5Styles,
  fontWeight: 700,
});

/* H6 VARIANT */

const H6HATTONLIGHT = defineStyle({
  ...baseHattonH6Styles,
  fontWeight: 300,
});

const H6HATTONREGULAR = defineStyle({
  ...baseHattonH6Styles,
  fontWeight: 400,
});

const H6HATTONMEDIUM = defineStyle({
  ...baseHattonH6Styles,
  fontWeight: 500,
});

const H6HATTONBOLD = defineStyle({
  ...baseHattonH6Styles,
  fontWeight: 600,
});

const H6HATTONBOLDER = defineStyle({
  ...baseHattonH6Styles,
  fontWeight: 700,
});

/* H7 VARIANT */

const H7HATTONLIGHT = defineStyle({
  ...baseHattonH7Styles,
  fontWeight: 300,
});

const H7HATTONREGULAR = defineStyle({
  ...baseHattonH7Styles,
  fontWeight: 400,
});

const H7HATTONMEDIUM = defineStyle({
  ...baseHattonH7Styles,
  fontWeight: 500,
});

const H7HATTONBOLD = defineStyle({
  ...baseHattonH7Styles,
  fontWeight: 600,
});

const H7HATTONBOLDER = defineStyle({
  ...baseHattonH7Styles,
  fontWeight: 700,
});

/* H8 VARIANT */

const H8HATTONLIGHT = defineStyle({
  ...baseHattonH8Styles,
  fontWeight: 300,
});

const H8HATTONREGULAR = defineStyle({
  ...baseHattonH8Styles,
  fontWeight: 400,
});

const H8HATTONMEDIUM = defineStyle({
  ...baseHattonH8Styles,
  fontWeight: 500,
});

const H8HATTONBOLD = defineStyle({
  ...baseHattonH8Styles,
  fontWeight: 600,
});

const H8HATTONBOLDER = defineStyle({
  ...baseHattonH8Styles,
  fontWeight: 700,
});

/* H9 VARIANT */

const H9HATTONLIGHT = defineStyle({
  ...baseHattonH9Styles,
  fontWeight: 300,
});

const H9HATTONREGULAR = defineStyle({
  ...baseHattonH9Styles,
  fontWeight: 400,
});

const H9HATTONMEDIUM = defineStyle({
  ...baseHattonH9Styles,
  fontWeight: 500,
});

const H9HATTONBOLD = defineStyle({
  ...baseHattonH9Styles,
  fontWeight: 600,
});

const H9HATTONBOLDER = defineStyle({
  ...baseHattonH9Styles,
  fontWeight: 700,
});

/* H10 VARIANT */

const H10HATTONLIGHT = defineStyle({
  ...baseHattonH10Styles,
  fontWeight: 300,
});

const H10HATTONREGULAR = defineStyle({
  ...baseHattonH10Styles,
  fontWeight: 400,
});

const H10HATTONMEDIUM = defineStyle({
  ...baseHattonH10Styles,
  fontWeight: 500,
});

const H10HATTONBOLD = defineStyle({
  ...baseHattonH10Styles,
  fontWeight: 600,
});

const H10HATTONBOLDER = defineStyle({
  ...baseHattonH10Styles,
  fontWeight: 700,
});

export const HeadingTheme = defineStyleConfig({
  variants: {
    H1THIN,
    H1LIGHT,
    H1REGULAR,
    H1MEDIUM,
    H1SEMIBOLD,
    H1BOLD,
    H1BOLDER,
    H2THIN,
    H2LIGHT,
    H2REGULAR,
    H2MEDIUM,
    H2SEMIBOLD,
    H2BOLD,
    H2BOLDER,
    H3THIN,
    H3LIGHT,
    H3REGULAR,
    H3MEDIUM,
    H3SEMIBOLD,
    H3BOLD,
    H3BOLDER,
    H4THIN,
    H4LIGHT,
    H4REGULAR,
    H4MEDIUM,
    H4SEMIBOLD,
    H4BOLD,
    H4BOLDER,
    H5THIN,
    H5LIGHT,
    H5REGULAR,
    H5MEDIUM,
    H5SEMIBOLD,
    H5BOLD,
    H5BOLDER,
    H6THIN,
    H6LIGHT,
    H6REGULAR,
    H6MEDIUM,
    H6SEMIBOLD,
    H6BOLD,
    H6BOLDER,
    H7THIN,
    H7LIGHT,
    H7REGULAR,
    H7MEDIUM,
    H7SEMIBOLD,
    H7BOLD,
    H7BOLDER,
    H8THIN,
    H8LIGHT,
    H8REGULAR,
    H8MEDIUM,
    H8SEMIBOLD,
    H8BOLD,
    H8BOLDER,
    H9THIN,
    H9LIGHT,
    H9REGULAR,
    H9MEDIUM,
    H9SEMIBOLD,
    H9BOLD,
    H9BOLDER,
    H10THIN,
    H10LIGHT,
    H10REGULAR,
    H10MEDIUM,
    H10SEMIBOLD,
    H10BOLD,
    H10BOLDER,
    /* MAIN HEADER VARIANTS */
    MAINXXLHATTONREGULAR,
    MAINXLHATTONREGULAR,
    MAINLGHATTONREGULAR,
    MAINMDHATTONREGULAR,
    MAINSMHATTONREGULAR,
    MAINXSHATTONREGULAR,
    /* SECONDARY HEADER VARIANTS */
    SECONDARYXXLHATTONREGULAR,
    SECONDARYXLHATTONREGULAR,
    SECONDARYLGHATTONREGULAR,
    SECONDARYMDHATTONREGULAR,
    SECONDARYSMHATTONREGULAR,
    SECONDARYXSHATTONREGULAR,
    /* HATTON FONT VARIANTS */
    JUMBOHATTONLIGHT,
    JUMBOHATTONREGULAR,
    JUMBOHATTONMEDIUM,
    JUMBOHATTONBOLD,
    JUMBOHATTONBOLDER,
    H1HATTONLIGHT,
    H1HATTONREGULAR,
    H1HATTONMEDIUM,
    H1HATTONBOLD,
    H1HATTONBOLDER,
    H2HATTONLIGHT,
    H2HATTONREGULAR,
    H2HATTONMEDIUM,
    H2HATTONBOLD,
    H2HATTONBOLDER,
    H3HATTONLIGHT,
    H3HATTONREGULAR,
    H3HATTONMEDIUM,
    H3HATTONBOLD,
    H3HATTONBOLDER,
    H4HATTONLIGHT,
    H4HATTONREGULAR,
    H4HATTONMEDIUM,
    H4HATTONBOLD,
    H4HATTONBOLDER,
    H5HATTONLIGHT,
    H5HATTONREGULAR,
    H5HATTONMEDIUM,
    H5HATTONBOLD,
    H5HATTONBOLDER,
    H6HATTONLIGHT,
    H6HATTONREGULAR,
    H6HATTONMEDIUM,
    H6HATTONBOLD,
    H6HATTONBOLDER,
    H7HATTONLIGHT,
    H7HATTONREGULAR,
    H7HATTONMEDIUM,
    H7HATTONBOLD,
    H7HATTONBOLDER,
    H8HATTONLIGHT,
    H8HATTONREGULAR,
    H8HATTONMEDIUM,
    H8HATTONBOLD,
    H8HATTONBOLDER,
    H9HATTONLIGHT,
    H9HATTONREGULAR,
    H9HATTONMEDIUM,
    H9HATTONBOLD,
    H9HATTONBOLDER,
    H10HATTONLIGHT,
    H10HATTONREGULAR,
    H10HATTONMEDIUM,
    H10HATTONBOLD,
    H10HATTONBOLDER,
  },
});
