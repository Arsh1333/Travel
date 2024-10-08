/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["Playfair Display", "serif"], // Your custom font
        rubik: ["Rubik", "sans-serif"],
      },
      backgroundImage: {
        "hero-pattern": "url('./assets/Hero_Section.png')",
      },
      backgroundSize: {
        auto: "auto",
        cover: "cover",
        contain: "contain",
        "50%": "50%",
        16: "4rem",
      },
    },
    // screens: {
    //   "2xl": { max: "1535px" },
    //   // => @media (max-width: 1535px) { ... }

    //   xl: { max: "1279px" },
    //   // => @media (max-width: 1279px) { ... }

    //   lg: { max: "1023px" },
    //   // => @media (max-width: 1023px) { ... }

    //   md: { max: "767px" },
    //   // => @media (max-width: 767px) { ... }

    //   sm: { min: "375px" },
    //   // => @media (max-width: 639px) { ... }
    // },
    // colors: {
    //   org: "#ff7757",
    // },
  },
  plugins: [],
};
