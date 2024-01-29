"use client";

import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface PrrovidersProps extends React.PropsWithChildren {}

const Providers: React.FC<PrrovidersProps> = ({ children }) => {
  const [queryClient] = React.useState(new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default Providers;
