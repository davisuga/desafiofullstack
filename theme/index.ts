import { extendTheme } from "@chakra-ui/react";

import Button from "./components/button";
import Input from "./components/input";
import Box from "./components/box";

const theme = extendTheme({
  colors: {
    black: "#16161D",
  },
  components: {
    Box,
    Button,
    Input,
  },
});
console.log(`theme: `);
console.log(theme);
export default theme;
