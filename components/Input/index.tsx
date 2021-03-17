import { Input as ChakraInput } from "@chakra-ui/react";

function Input({ ...props }) {
  return <ChakraInput bg={"white" || props.bg} {...props} />;
}

export default Input;
