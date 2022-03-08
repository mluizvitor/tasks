import "styled-components";

interface variantProps {
  mainColor: string;
  contrastColor: string;
}

declare module "styled-components" {
  export interface DefaultTheme {
    mainColor: string;
    mainColorPage: string;

    textTitle: string;
    textBody: string;
    surface: string;
    background: string;

    buttonVariant: {
      basic: variantProps;
      header: variantProps;
      colored: variantProps;
      semitransparent: variantProps;
      transparent: variantProps;
      warning: variantProps;
    };

    toast: {
      success: string;
      error: string;
      onToast: string;
    };
  }
}
