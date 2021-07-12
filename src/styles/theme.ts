import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    gray: {
      "900": "#313131",
      "800": "#3F4043",
      "500": "#54565A",
      "400": "#BFBEBF",
      "300": "#E7E7E1",
      "200": "#F0F0F0",
      "100": "#F2F2F2",
    },
    blue: {
      "800": "#00173D",
      "300": "#4ABDF1",
    },
    pink: {
      "500": "#FF6978",
    },
    purple: {
      "500": "#451475",
    },
    red: {
      "100": "#FDFCFC",
      "50": "#FEFEFE",
    },
    orange: {
      "50": "#FEFAF6",
    },
    green: {
      "300": "#EEF5DB",
    },
  },
  fonts: {
    heading: "SF Pro Display",
    body: "SF Pro Text, Roboto, Playfair Display, serif",
    mono: "Roboto",
  },
  shadows: {
    base: "4px 4px 12px  rgba(0, 0, 0, 0.05)",
  },
  styles: {
    global: {
      body: {
        background: "orange.50",
        color: "gray.900",
      },
    },
  },
});
