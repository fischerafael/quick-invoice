import React from "react";

const maxScreen = 3;

export const usePageAppInvoices = () => {
  const [state, setState] = React.useState({
    companyName: "",
    companyAddress: "",
    companyCity: "",
    companyCountry: "",
    clientName: "",
    clientAddress: "",
    clientCity: "",
    clientCountry: "",
    invoiceNumber: "",
    invoiceDate: "",
    invoiceDueDate: "",
    screen: 1,
  });

  const handleChange = (key: string, value: string) => {
    setState((state) => ({ ...state, [key]: value }));
  };

  const handleNavigateNext = () => {
    if (state.screen >= maxScreen) return;
    setState((state) => ({ ...state, screen: state.screen++ }));
  };

  const handleNavigatePrevious = () => {
    if (state.screen <= 1) return;
    setState((state) => ({ ...state, screen: state.screen-- }));
  };

  console.log(state);

  return {
    state: { ...state },
    methods: { handleChange, handleNavigatePrevious, handleNavigateNext },
  };
};

export type IScreens = "header" | "body" | "footer";
