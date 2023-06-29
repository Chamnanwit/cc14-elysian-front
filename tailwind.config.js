/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        "c-white1": "#F4F6FF",
        "c-white2": "#F5F1F1",
        "c-gray1": "#ADB5BE",
        "c-gray2": "#818892",
        "c-gray3": "#333333",
        "c-green1": "#E7F0B1",
        "c-green2": "#C1DE70",
        "c-green3": "#588B40",
        "c-green4": "#386649",
        "c-blue1": "#127C8B",
        "c-blue2": "#214B68",
        "c-blue3": "#142E3F",
        "c-blue4": "#1799AB",
        "c-brown1": "#3F381E",
        "c-yellow1": "#E4B845",
        "c-yellow2": "#ECBF4C",
        "c-yellow3": "#C59E3C",
        "c-red1": "#951C1C",
        "c-orange1": "#DA6F41",
      },
    },
  },
  // plugins: [require("flowbite/plugin")],
  plugins: [require("daisyui")],
};
