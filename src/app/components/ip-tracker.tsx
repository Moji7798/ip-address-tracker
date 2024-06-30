"use client";
import { cn } from "@/lib/utils/cn";
import styles from "./styles.module.css";
import ResultBox from "./result-box";
import { useMutation } from "@tanstack/react-query";
import { api } from "@/services/api";
import { CountryCityT } from "../types";
import Map from "./map";
import { useEffect } from "react";
import SearchBox from "./search-box";

/*
 * fetch function that send a ip address to geo.ipify api and returns related data
 * its location, domain, isp and ...
 */
const fetchResults = async (searchText: string): Promise<CountryCityT> => {
  const res = await api.get(`country,city`, {
    params: {
      ipAddress: searchText,
    },
  });
  return res.data;
};

export default function IpTracker() {
  const { mutate, data, isPending } = useMutation({
    mutationFn: fetchResults,
  });

  // functions
  const handleSearch = (value: string) => {
    mutate(value);
  };

  // effects
  /*
   * sends an empty ip address to api on mount in order to
   * fetch user's current ip address and other data
   */
  useEffect(() => {
    mutate("");
  }, []);
  return (
    <>
      <main className="w-full h-dvh bg-white flex flex-col">
        <section className={cn(styles.cover, "relative w-full pt-8 px-8")}>
          <SearchBox onSubmit={handleSearch} isPending={isPending} />
          <ResultBox data={data} isPending={isPending} />
        </section>
        <Map coords={{ lat: data?.location.lat, lng: data?.location.lng }} />
      </main>
    </>
  );
}
