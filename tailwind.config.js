const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./src/**/*.{js,jsx,ts,tsx}","./public/css/**/*.{js,jsx,ts,tsx}", flowbite.content()],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1025px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
      "sm-max": { max: "640px" },
      "md-max": { max: "768px" },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      "lg-max": { max: "1024px" },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      "xl-max": { max: "1280px" },
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      "2xl-max": { max: "1536px" },
      // => @media (min-width: 1536px) { ... }
    },

    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      purple: "#3f3cbb",
      midnight: "#121063",
      metal: "#565584",
      tahiti: "#3ab7bf",
      silver: "#ecebff",
      "bubble-gum": "#ff77e9",
      bermuda: "#78dcca",
      primary: "#4C3DE3",
      secondary: "#71B50C",
      "primary-hover": "#3D31B6",
      "primary-developer-template": "#7843E9",
      "primary-developer-template-hover": "#4C3DE3",
      //Marketing Color
      'atical-orange' : '#FFF3CA',
      'atical-violet' : '#E9F7FF',
      'service-card-bg' : '#36363E',
      'button-hover' : '#F00B5E',
      'marketing-main-color' : '#292930',
      'testimonial-bg-color' : '#FFF8F8',
      'bg-footer' : '#717173',
      gray: {
        900: '#1a202c',
        800: '#2d3748',
      },
      'linearx' : '#E9F7FF',
      'lineary' : '#FFDBD4',
      'linearz' : '#FFF3CA',
      //Marketing ending
      "atical-orange": "#FFF3CA",
      "atical-violet": "#E9F7FF",
      "service-card-bg": "#36363E",
      "button-hover": "#F00B5E",
      "marketing-main-color": "#292930",
      "testimonial-bg-color": "#FFF8F8",
      "bg-footer": "#717173",
    },
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      width: {
        500: "500px",
      },
      fontSize: {
        h2: "36px",
        "20px": "20px",
      },
      fontSize: {
        h2: "36px",
        "20px": "20px",
      },
      backgroundImage: {
        //marketing background image
        'bg-about' : "url('./public/marketing/bg-about.png')",
      },
      margin:{
        //Marketing start
        'value-component' : '0 8px',
      }
    },
  },
  plugins: [flowbite.plugin()],
};
