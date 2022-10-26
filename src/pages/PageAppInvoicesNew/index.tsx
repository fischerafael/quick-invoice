import React from "react";
import * as Chakra from "@chakra-ui/react";
import { InputCustom } from "../../components/InputCustom";
import { usePageAppInvoices } from "./hooks";

export const PageAppInvoicesNew = () => {
  const { state, methods } = usePageAppInvoices();

  return (
    <Chakra.SimpleGrid templateColumns="300px 1fr" h="100vh">
      <Chakra.SimpleGrid w="full" h="full">
        {state.screen === 1 && (
          <Chakra.VStack w="full" spacing="8" h="90vh" overflowY="auto" p="8">
            <Chakra.Text>Your Company</Chakra.Text>

            <InputCustom
              w="full"
              label="Name"
              value={state.companyName}
              onChange={(e) =>
                methods.handleChange("companyName", e.target.value)
              }
            />
            <InputCustom
              w="full"
              label="Address"
              value={state.companyAddress}
              onChange={(e) =>
                methods.handleChange("companyAddress", e.target.value)
              }
            />
            <InputCustom
              w="full"
              label="City"
              value={state.companyCity}
              onChange={(e) =>
                methods.handleChange("companyCity", e.target.value)
              }
            />
            <InputCustom
              w="full"
              label="Country"
              value={state.companyCountry}
              onChange={(e) =>
                methods.handleChange("companyCountry", e.target.value)
              }
            />
          </Chakra.VStack>
        )}

        {state.screen === 2 && (
          <Chakra.VStack w="full" spacing="8" h="90vh" overflowY="auto" p="8">
            <Chakra.Text>Your Client</Chakra.Text>

            <InputCustom
              w="full"
              label="Name"
              value={state.clientName}
              onChange={(e) =>
                methods.handleChange("clientName", e.target.value)
              }
            />
            <InputCustom
              w="full"
              label="Address"
              value={state.clientAddress}
              onChange={(e) =>
                methods.handleChange("clientAddress", e.target.value)
              }
            />
            <InputCustom
              w="full"
              label="City"
              value={state.clientCity}
              onChange={(e) =>
                methods.handleChange("clientCity", e.target.value)
              }
            />
            <InputCustom
              w="full"
              label="Country"
              value={state.clientCountry}
              onChange={(e) =>
                methods.handleChange("clientCountry", e.target.value)
              }
            />
          </Chakra.VStack>
        )}

        {state.screen === 3 && (
          <Chakra.VStack w="full" spacing="8" h="90vh" overflowY="auto" p="8">
            <Chakra.Text>Invoice</Chakra.Text>

            <InputCustom
              w="full"
              label="Number"
              value={state.companyName}
              onChange={(e) =>
                methods.handleChange("companyName", e.target.value)
              }
            />
            <InputCustom w="full" label="Date" type="date" />
            <InputCustom w="full" label="Due Date" type="date" />
          </Chakra.VStack>
        )}

        <Chakra.HStack h="10vh" justify="space-between" p="8">
          <Chakra.Button onClick={methods.handleNavigatePrevious}>
            Previous
          </Chakra.Button>
          <Chakra.Button onClick={methods.handleNavigateNext}>
            Next
          </Chakra.Button>
        </Chakra.HStack>
      </Chakra.SimpleGrid>
    </Chakra.SimpleGrid>
  );
};
