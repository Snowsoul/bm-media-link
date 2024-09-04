import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      white: string;
      darkGrey: string;
      lightGrey: string;
    };

    margins: {
      big: string;
      regular: string;
      small: string;
    };
  }
}
