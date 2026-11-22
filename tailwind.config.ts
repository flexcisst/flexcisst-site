import type { Config } from "tailwindcss";

// Flexcisst tokens. Names match the Figma variables and design/tokens.css.
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1C1F22",
        "ink-2": "#23292E",
        steel: "#5E666D",
        "steel-light": "#AEB4B9",
        line: "#D4D7D9",
        paper: "#F5F5F2",
        white: "#FFFFFF",
        accent: "#FF7F00",
        "accent-text": "#A85300",
        "accent-ink": "#1C1F22",
        success: "#1F7A4D",
        danger: "#B42318",
      },
      fontFamily: {
        heading: ['"Barlow Semi Condensed"', "system-ui", "sans-serif"],
        sans: ["Barlow", "system-ui", "sans-serif"],
      },
      fontSize: {
        display: ["64px", { lineHeight: "68px", letterSpacing: "-0.01em" }],
        h1: ["52px", { lineHeight: "56px", letterSpacing: "-0.01em" }],
        h2: ["40px", { lineHeight: "44px", letterSpacing: "-0.01em" }],
        h3: ["24px", { lineHeight: "30px", letterSpacing: "-0.01em" }],
        "body-lg": ["18px", "27px"],
        body: ["16px", "24px"],
        small: ["14px", "21px"],
        eyebrow: ["12px", { lineHeight: "16px", letterSpacing: "0.08em" }],
        "m-display": ["40px", { lineHeight: "44px", letterSpacing: "-0.01em" }],
        "m-h1": ["34px", { lineHeight: "38px", letterSpacing: "-0.01em" }],
        "m-h2": ["28px", { lineHeight: "32px", letterSpacing: "-0.01em" }],
        "m-h3": ["20px", { lineHeight: "26px", letterSpacing: "-0.01em" }],
      },
      borderRadius: { none: "0px", sm: "0px", DEFAULT: "2px", md: "2px" },
      maxWidth: { container: "1280px" },
      boxShadow: { none: "none" },
    },
  },
  plugins: [],
} satisfies Config;
