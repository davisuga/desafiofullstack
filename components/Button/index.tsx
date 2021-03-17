import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";
import { Button as ChakraButton, ButtonProps } from "@chakra-ui/react";

function Button({ children, ...props }: ButtonProps) {
  return <ChakraButton {...props}>{children}</ChakraButton>;
}

export default Button;
