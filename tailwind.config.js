module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          100: "#EBF1F5",
          200: "#D9E3EA",
          300: "#C5D2DC",
          400: "#9BA9B4",
          500: "#707D86",
          600: "#55595F",
          700: "#33363A",
          800: "#25282C",
          900: "#151719",
        },
        purple: {
          100: "#F4F4FF",
          200: "#E2E1FF",
          300: "#CBCCFF",
          400: "#ABABFF",
          500: "#8D8DFF",
          600: "#5D5DFF",
          700: "#4B4ACF",
          800: "#38379C",
          900: "#262668",
        },
        light: "#FFFFFF",
        dark: "#151719",
        purpledark: "#212137",
      },
      opacity: {
        90: "0.90",
      },
    },
    container: {
      padding: {
        DEFAULT: "2rem",
        sm: "2rem",
        lg: "0",
        xl: "0",
      },
    },
    inset: {
      0: 0,
      auto: "auto",
      "1/2": "50%",
    },
    zIndex: {
      "-1": "-1",
    },
    transitionProperty: {
      width: "width",
    }
  },
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "active", "group-hover"],
    textColor: ["responsive", "hover", "focus", "active", "group-hover"],
    borderColor: ["responsive", "hover", "focus", "active", "group-hover"],
    width: ["responsive", "hover", "focus", "active", "group-hover"],
    opacity: ["responsive", "hover", "focus", "active", "group-hover"],
    scale: ["responsive", "hover", "focus", "active", "group-hover"],
  },
  plugins: [],
};
