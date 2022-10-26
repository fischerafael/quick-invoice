import React from "react";
import * as Chakra from "@chakra-ui/react";

interface InputCustomProps extends Chakra.InputProps {
  label: string;
}

export const InputCustom = ({ label, ...props }: InputCustomProps) => {
  return (
    <Chakra.FormControl w="full">
      <Chakra.FormLabel fontSize="xs" fontWeight="normal">
        {label}
      </Chakra.FormLabel>
      <Chakra.Input {...props} />
    </Chakra.FormControl>
  );
};
