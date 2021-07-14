import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    gray: {
      "900": "#2A2B26",
      "800": "#313131",
      "700": "#3F4043",
      "600": "#54565A",
      "500": "#36383A",
      "400": "#BFBEBF",
      "300": "#E7E7E1",
      "200": "#F0F0F0",
      "100": "#F2F2F2",
    },
    green: {
      "400": "#74776D",
      "300": "#EEF5DB",
    },
    blue: {
      "800": "#00173D",
      "300": "#4ABDF1",
    },
    pink: {
      "500": "#FF6978",
      "200": "#FFF6E5",
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
        color: "gray.800",
      },
    },
  },
});
