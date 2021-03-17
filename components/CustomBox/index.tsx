import { Box, useStyleConfig, ChakraComponent } from "@chakra-ui/react";
import { ComponentProps } from "react";

type BoxProps = ComponentProps<ChakraComponent<"div", {}>>;

function CustomBox(props: BoxProps) {
  const { size, variant, ...rest } = props;
  const styles = useStyleConfig("Box", { size, variant });
  return <Box sx={styles} {...rest} />;
}
export default CustomBox;
