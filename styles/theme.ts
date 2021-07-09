import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    gray: {
      "900": "#3F4043",
      "500": "#54565A",
      "200": "#F0F0F0",
      "100": "#F2F2F2",
      "50": "#FDFCFC",
    },
    blue: {
      "300": "#4ABDF1",
    },
    pink: {
      "500": "#FF6978",
    },
  },
  fonts: {
    heading: "SF Pro Display",
    body: "SF Pro Display",
  },
  shadows: {
    base: "4px 4px 12px  rgba(0, 0, 0, 0.05)",
  },
  styles: {
    global: {
      body: {
        background: "gray.100",
        color: "gray.900",
      },
    },
  },
});
