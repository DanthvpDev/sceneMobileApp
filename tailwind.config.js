/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./App.tsx", "./components/**/*.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        "midnight-blue": {
          DEFAULT: "#2C3E50",
        },
        "hot-pink": {
          DEFAULT: "#FF1493",
        },
        "cold-white": {
          DEFAULT: "#EDFBFF",
          300: "#d8e4e8",
          500: "#b9c5c9"
        },
        gold: {
          DEFAULT: "#e6c405"
        }
      },
      fontFamily: {
        Poppins: ["PoppinsRegular"],
        "Poppins-SemiBold": "PoppinsSemibold",
        "Poppins-Italic": "PoppinsItalic",
        "Poppins-Bold": "PoppinsBold",
        "Poppins-SemiBold-Italic": "PoppinsSemiboldItalic",
        ArchivoBlack: ["ArchivoBlack"]
        
      }
    },
  },
  plugins: [],
}