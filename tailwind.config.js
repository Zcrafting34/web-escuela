/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "flowbite.content(),",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/src/assets/img/backgroundHome.png')",
      },
    },
  },
  plugins: ["flowbite.plugin(),"],
};
