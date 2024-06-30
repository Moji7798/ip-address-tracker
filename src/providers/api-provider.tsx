"use client";

import { ReactNode } from "react";
import { api } from "@/services/api";

/**
 * Api provider for use 'api' inside client.
 * This provider add some information that need in client side data fetching.
 * @param children
 * @constructor
 */
export default function ApiProvider({ children }: { children?: ReactNode }) {
  api.interceptors.request.use(async (config) => {
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;

    // Add the apikey to the request url
    console.log(config);

    config.params = {
      ...config.params,
      apiKey,
    };

    return config;
  });
  return children;
}
