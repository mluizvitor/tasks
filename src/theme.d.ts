import "styled-components";

interface variantProps {
  mainColor: string;
  contrastColor: string;
}

declare module "styled-components" {
  export interface DefaultTheme {
    mainColor: string;
    textTitle: string;
    textBody: string;
    surface: string;
    background: string;
    success: string;
    error: string;

    variant: {
      basic: variantProps;
      colored: variantProps;
      semitransparent: variantProps;
      warning: variantProps;
    };
  }
}
