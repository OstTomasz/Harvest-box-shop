import { Config } from "tailwindcss";
const Config = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
    "./index.html",
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        tertiary: "var(--color-tertiary)",
        textPrimary: "var(--color-text-primary)",
        textSecondary: "var(--color-text-secondary)",
        background: "var(--color-background)",
        strawberry: "var(--color-strawberry)",
        banana: "var(--color-banana)",
        watermelon: "var(--color-watermelon)",
        lime: "var(--color-lime)",
        apple: "var(--color-apple)",
        peach: "var(--color-peach)",
        plums: "var(--color-plums)",
        orange: "var(--color-orange)",
        kiwi: "var(--color-kiwi)",
        raspberry: "var(--color-raspberry)",
      },
    },
  },

  plugins: [],
};
