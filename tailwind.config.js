/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "d-1": "0px 0px 4px rgba(138, 136, 148, 0.15)",
        "d-2": "0px 0px 16px rgba(138, 136, 148, 0.2)",
        "d-3": "0px 0px 32px rgba(138, 136, 148, 0.25)",
      },
    },
    colors: {
      bg: {
        primary: "#FFFFFF",
        darken: "#F0F3F6",
        disabled: "#E6E6E6",
      },
      main: {
        primary: "#CB2A49",
        secondary: "#E07F92",
        tertiary: "#F5D4DB",
        hover: "#0B80A8",
        focus: "#0B80A8",
        click: "#096A8A",
      },
      system: {
        green: {
          primary: "#439F6E",
          secondary: "#C0ECD4",
          tertiary: "#F1FFF4",
        },
        red: {
          primary: "#F93232",
          secondary: "#FFD8D8",
          tertiary: "#FFF5F5",
        },
      },
      txt: {
        primary: "#212121",
        white: "#FFFFFF",
        secondary: "#505050",
        tertiary: "#C9C8D3",
        disabled: "#C5C0DB",
      },
      field: {
        form: "#F7F7FD",
        description: "#AAAAAA",
        title: "#9D99AC",
      },
    },
  },
  plugins: [],
};
