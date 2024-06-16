"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "@templates/header/Header";
import { ReactNode } from "react";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      retry: 1,
    },
  },
});

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="md:px-20">
        <Header />
        {children}
      </div>
    </QueryClientProvider>
  );
};

export default Providers;
