import { darken } from "polished";
import { DefaultTheme } from "styled-components";

export const lightTheme: DefaultTheme = {
  mainColor: "#D8605B",
  mainColorPage: "#D8605B",

  textTitle: "#4c4141",
  textBody: "#756a69",
  surface: "#FCF7F2",
  background: "#F7EDE1",

  buttonVariant: {
    basic: {
      mainColor: "#F7EDE1",
      contrastColor: "#4c4141",
    },
    header: {
      mainColor: "#FCF7F2",
      contrastColor: "#994845",
    },
    colored: {
      mainColor: "#D8605B",
      contrastColor: "#FCF7F2",
    },
    semitransparent: {
      mainColor: "#D8605B",
      contrastColor: "#D8605B",
    },
    transparent: {
      mainColor: "transparent",
      contrastColor: "#FCF7F2",
    },
    warning: {
      mainColor: darken(0.2, "#D8605B"),
      contrastColor: "#FCF7F2",
    },
  },

  toast: {
    success: "#2D403B",
    error: "#513c27",
    onToast: "#FCF7F2",
  },
};

export const darkTheme: DefaultTheme = {
  mainColorPage: "#994845",
  mainColor: "#D8605B",

  textTitle: "#F2E0DF",
  textBody: "#BFB1B0",
  surface: "#2B2927",
  background: "#1F1D1C",

  buttonVariant: {
    basic: {
      mainColor: "#1F1D1C",
      contrastColor: "#F2E0DF",
    },
    header: {
      mainColor: "#F2E0DF",
      contrastColor: "#994845",
    },
    colored: {
      mainColor: "#D8605B",
      contrastColor: "#F2E0DF",
    },
    semitransparent: {
      mainColor: "#E07F7B",
      contrastColor: "#E07F7B",
    },
    transparent: {
      mainColor: "transparent",
      contrastColor: "#F2E0DF",
    },
    warning: {
      mainColor: darken(0.2, "#D8605B"),
      contrastColor: "#F2E0DF",
    },
  },

  toast: {
    success: "#2D403B",
    error: "#513c27",
    onToast: "#F2E0DF",
  },
};
