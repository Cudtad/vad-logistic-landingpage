import colors from "./colors";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      sm: "540px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1440px",
    },
    borderRadius: {
      none: 0,
      DEFAULT: "8px",
      md: "10px",
      lg: "12px",
      xl: "14px",
      xxl: "20px",
      full: "9999px",
    },
    extend: {
      colors,
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        openSan: ["var(--font-openSan)"],
        titanOne: ["var(--font-titanOne)"]
      },
      fontSize: {
        large: "54px",
        "mb-large": "32px",
      },
      boxShadow: {
        box: "0px 35px 100px 0px rgba(171, 181, 189, 0.35)",
      },
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-3px)' },
          '20%, 40%, 60%, 80%': { transform: 'translateX(3px)' },
        },
      },
      animation: {
        shake: 'shake 0.5s ease-in-out infinite',
      },
    },

    variants: {
      textColor: ["responsive", "hover", "focus", "focus-within"],
    },
  },
  plugins: [],
};
