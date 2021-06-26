import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const colors = {
  brand: {
    50: "#FFF5F5",
    100: "#FED7D7",
    200: "#FEB2B2",
    300: "#FC8181",
    400: "#F56565",
    500: "#E53E3E",
    600: "#C53030",
    700: "#9B2C2C",
    800: "#822727",
    900: "#63171B",
    muted: "#808080"
  },
  bg: {
    dark: "#202020",
    extradark: "#141414",
    light: "#343434"
  }
};

const fonts = {
  body: "Prompt, system-ui, sans-serif",
  heading: "Prompt, system-ui, sans-serif",
  mono: "Menlo, monospace",
};

const theme = extendTheme({ 
  config, 
  colors, 
  fonts, 
});

export default theme;