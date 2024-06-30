import Card from "@/components/card/card";
import { cn } from "@/lib/utils/cn";
import { CountryCityT } from "../types";

export default function ResultBox({
  data,
  isPending,
}: {
  data: CountryCityT | undefined;
  isPending: boolean;
}) {
  // render
  const renderCardBody = () => {
    if (isPending) return <ResultBoxLoader />;
    else
      return (
        <>
          <ResultItem title="IP ADDRESS" value={data?.ip || ""} />
          <Divider />
          <ResultItem
            title="LOCATION"
            value={`${data?.location?.country || ""}, ${
              data?.location?.region || ""
            }`}
          />
          <Divider />
          <ResultItem title="TIMEZONE" value={data?.location?.timezone || ""} />
          <Divider />
          <ResultItem title="ISP" value={data?.as?.name || ""} />
        </>
      );
  };

  return (
    <Card
      className={cn(
        "relative -bottom-16 w-full md:w-3/4 mx-auto min-h-32 z-10",
        "flex items-center justify-evenly flex-col sm:grid sm:grid-cols-2 md:flex md:flex-row gap-4"
      )}
    >
      {renderCardBody()}
    </Card>
  );
}

function ResultItem({
  title,
  value,
  className,
}: {
  title: string;
  value: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center sm:items-start gap-2 justify-start",
        className
      )}
    >
      <h1 className="text-gray-400 text-xs font-bold">{title}</h1>
      <h2 className="text-black text-lg font-bold">{value}</h2>
    </div>
  );
}

function Divider() {
  return (
    <div className={"w-[2px] h-3/4 my-auto hidden bg-gray-200 md:flex"}></div>
  );
}

function ResultBoxLoader() {
  return (
    <div className="flex items-center justify-evenly flex-col sm:grid sm:grid-cols-2 md:flex md:flex-row gap-4 w-full h-full">
      <div className="flex flex-col gap-3">
        <div className="react-loading-skeleton !h-3 !w-20 rounded-sm"></div>
        <div className="react-loading-skeleton !h-3 !w-24 rounded-sm"></div>
      </div>

      <Divider />

      <div className="flex flex-col gap-3">
        <div className="react-loading-skeleton !h-3 !w-20 rounded-sm"></div>
        <div className="react-loading-skeleton !h-3 !w-24 rounded-sm"></div>
      </div>

      <Divider />

      <div className="flex flex-col gap-3">
        <div className="react-loading-skeleton !h-3 !w-20 rounded-sm"></div>
        <div className="react-loading-skeleton !h-3 !w-24 rounded-sm"></div>
      </div>

      <Divider />

      <div className="flex flex-col gap-3">
        <div className="react-loading-skeleton !h-3 !w-20 rounded-sm"></div>
        <div className="react-loading-skeleton !h-3 !w-24 rounded-sm"></div>
      </div>
    </div>
  );
}
