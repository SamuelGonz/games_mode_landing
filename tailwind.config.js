/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         colors: {
            darkGray: "#141414",
            hover: "#232323",
         },
      },
   },
   plugins: [],
};
