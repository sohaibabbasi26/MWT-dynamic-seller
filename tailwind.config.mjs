/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        blueBack: "#172243",
        orangeBack: "#F68323"
      },
      fontFamily: {
        redhat: ['Red Hat Display', 'sans-serif'], // Add your font here
      },
    },
  },
  plugins: [],
};
