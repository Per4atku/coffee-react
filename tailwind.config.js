/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage:{
        "green-circle-200": "radial-gradient(200px circle at 50% 100%, #12463a 49.7%, transparent 50%)",
        "green-circle-240": "radial-gradient(240px circle at 50% 100%, #12463a 49.7%, transparent 50%)",
        "green-circle-280": "radial-gradient(280px circle at 50% 100%, #12463a 49.7%, transparent 50%)",
        "green-circle-300": "radial-gradient(300px circle at 50% 100%, #12463a 49.7%, transparent 50%)",
        "green-circle-340": "radial-gradient(340px circle at 50% 100%, #12463a 49.7%, transparent 50%)",
      },
      fontSize: {
        "calc_5vw_.5rem" : "calc(5vw + .5rem)"
      },
      screens: {
        "xs": "400px",
        "md-lg": "830px",
        "mui-md": "900px"
      },
      colors: {
        "dark": "#111",
        "accent": "#12463a",
        "bg": "#e2ede9",
        "bg-accent": "#cfe3dc",
        "aqua":"#4bb79e",
        "reservation": "rgba(18, 70, 58, 0.90)",
        "off-white": "#f3f3f3",
        "p-gray": "#D9D9D9"
      },
      boxShadow: {
        "3xl": "0px 4px 4px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
