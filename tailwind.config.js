/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "accent": "#12463a",
        "bg": "#e2ede9",
        "bg-accent": "#cfe3dc",
        "aqua":"#4bb79e"
      },
      spacing: {
        "10px": "10px",
        "20px": "20px",
        "30px": "30px",
        "40px": "40px",
        "50px": "50px",
        "60px": "60px",
      },
      boxShadow: {
        "3xl": "0px 4px 4px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
