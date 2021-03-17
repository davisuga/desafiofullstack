import type StyleConfig from ".";

const boxStyles: StyleConfig = {
  baseStyle: {},
  sizes: {
    xl: {
      h: "56px",
      fontSize: "lg",
      px: "32px",
    },
  },
  variants: {
    "flex-center": {
      display: "flex",
      flexDir: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    question: {
      display: "flex",
      flexDir: "row",
      justifyContent: "flex-start",
      alignItems: "center",
      padding: 3,
      maxHeight: 100,
      border: "lightgray 1px solid",
      marginTop: 2,
      borderRadius: 5,
    },
    "question-content-wrapper": {
      display: "flex",
      flexDir: "row",
      justifyContent: "space-between",
      alignItems: "stretch",
    },
    "question-content": {
      display: "flex",
      flexDir: "column",
      flexGrow: 1,
      padding: 1,
    },
    "question-info": {
      display: "flex",
      alignItems: "flex-end",
    },
    "profile-image": {
      padding: 1,
      height: "100%",
    },
  },
};
export type variants = typeof boxStyles.variants;

export default boxStyles;
