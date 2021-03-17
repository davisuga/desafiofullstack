import { StyleObjectOrFn, Theme } from "@chakra-ui/react";
type StyleInterpolation =
  | StyleObjectOrFn
  | ((options: StyleOptions) => StyleObjectOrFn);

interface StyleOptions {
  theme: Theme;
  colorMode: "light" | "dark";
  colorScheme: string;
}
export default interface StyleConfig {
  baseStyle: StyleInterpolation;
  sizes: { [size: string]: StyleInterpolation };
  variants: { [variant: string]: StyleInterpolation };
  defaultProps?: {
    variant: string;
    size: string;
  };
}
