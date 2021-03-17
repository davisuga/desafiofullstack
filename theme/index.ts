import { extendTheme } from "@chakra-ui/react";

import Button from "./components/button";
import Input from "./components/input";
import Box from "./components/box";
import Text from "./components/text";

const theme = extendTheme({
  colors: {
    black: "#16161D",
  },
  components: {
    Box,
    Button,
    Input,
    Text,
  },
});
console.log(`theme: `);
console.log(theme);
export default theme;
