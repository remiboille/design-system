import tokens from "./src/styles/tokens.js";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx}", "./.storybook/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  tokens.ColorBrand50,
          100: tokens.ColorBrand100,
          500: tokens.ColorBrand500,
          600: tokens.ColorBrand600,
          900: tokens.ColorBrand900,
        },
        neutral: {
          0:   tokens.ColorNeutral0,
          100: tokens.ColorNeutral100,
          500: tokens.ColorNeutral500,
          900: tokens.ColorNeutral900,
        },
      },
      fontFamily: {
        sans: [tokens.FontFamilySans],
        mono: [tokens.FontFamilyMono],
      },
      fontSize: {
        sm:   tokens.FontSizeSm,
        base: tokens.FontSizeBase,
        lg:   tokens.FontSizeLg,
        xl:   tokens.FontSizeXl,
        "2xl": tokens.FontSize2xl,
      },
      spacing: {
        1:  tokens.Spacing1,
        2:  tokens.Spacing2,
        3:  tokens.Spacing3,
        4:  tokens.Spacing4,
        6:  tokens.Spacing6,
        8:  tokens.Spacing8,
        12: tokens.Spacing12,
        16: tokens.Spacing16,
      },
    },
  },
  plugins: [],
};
