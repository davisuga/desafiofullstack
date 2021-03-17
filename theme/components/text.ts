import type StyleConfig from ".";

const textStyles: StyleConfig = {
  baseStyle: {},
  sizes: {},
  variants: {
    subtitle: {
      color: "gray",
      fontSize: "2xl",
      fontStyle: "italic",
    },
    title: {
      fontSize: "3xl",
      fontWeight: "semibold",
    },
  },
};
export type variants = typeof textStyles.variants;

export default textStyles;
