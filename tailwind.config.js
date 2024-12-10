/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        antonsc: ["Anton SC", "sans-serif"],
      },
    },
  },
  plugins: [],
};

// module.exports = {
//   theme: {
//     extend: {
//       animation: {
//         skillMovement: "skillMovement 10s linear infinite",
//       },
//       keyframes: {
//         skillMovement: {
//           "0%": { transform: "translateX(-100%)", opacity: "0" },
//           "50%": { transform: "translateX(50%)", opacity: "1" },
//           "100%": { transform: "translateX(100%)", opacity: "0" },
//         },
//       },
//     },
//   },
// };
