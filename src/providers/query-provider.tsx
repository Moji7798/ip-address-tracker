"use client";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactNode } from "react";

/**
 * Query provider for use react-query inside project.
 * This provider sets up react-query and passes some default options.
 * @param children
 * @constructor
 */

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 60 * 1000,
    },
  },
});

export default function QueryProvider({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
