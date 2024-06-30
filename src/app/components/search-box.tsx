"use client";
import { ErrorMessage } from "@/components/error-message/error-message";
import Loader from "@/components/loader/loader";
import { TextField } from "@/components/text-field";
import { zodResolver } from "@hookform/resolvers/zod";
import { IconChevronRight } from "@tabler/icons-react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  searchText: z.string().ip({
    message: "ip address is not valid.",
  }),
});

type SearchSchemaType = z.infer<typeof schema>;

export default function SearchBox({
  onSubmit,
  isPending,
}: {
  onSubmit: (value: string) => void;
  isPending: boolean;
}) {
  //   hooks
  const {
    control,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm<SearchSchemaType>({
    resolver: zodResolver(schema),
    defaultValues: {
      searchText: "",
    },
  });
  return (
    <div className="w-full flex flex-col items-center justify-start gap-4">
      <h1 className="text-2xl font-normal text-white text-center">
        IP Address Tracker
      </h1>
      <form
        className="max-w-sm w-full"
        onSubmit={handleSubmit(() => onSubmit(getValues("searchText")))}
      >
        <Controller
          control={control}
          render={({ field }) => {
            const { value, onChange } = field;

            return (
              <>
                <TextField
                  value={value}
                  onChange={onChange}
                  className="w-full"
                  placeholder="Search for any IP address or domain"
                  endAdornment={
                    <span
                      onClick={handleSubmit(() =>
                        onSubmit(getValues("searchText"))
                      )}
                      className="cursor-pointer ms-1 h-full aspect-square flex items-center justify-center bg-black rounded-tr-lg rounded-br-lg"
                    >
                      {isPending ? (
                        <Loader size="sm" />
                      ) : (
                        <IconChevronRight size={24} className="text-white" />
                      )}
                    </span>
                  }
                />
                <ErrorMessage>{errors.searchText?.message}</ErrorMessage>
              </>
            );
          }}
          name="searchText"
        />
      </form>
    </div>
  );
}
