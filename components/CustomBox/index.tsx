import { Box, useStyleConfig, ChakraComponent } from "@chakra-ui/react";
import { variants } from "../../theme/components/box";
import { ComponentProps } from "react";

type BoxProps = ComponentProps<ChakraComponent<"div", {}>>;
interface CustomBoxProps extends BoxProps {
  variant?: keyof variants;
}
function CustomBox(props: CustomBoxProps) {
  const { size, variant, ...rest } = props;
  const styles = useStyleConfig("Box", { size, variant });
  return <Box sx={styles} {...rest} />;
}
export default CustomBox;
