import { useQuery } from "@tanstack/react-query";
import { mmorpg } from "../Services/mmorpg";

export const usemmorpg = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, error, isLoading } = useQuery({
    queryKey: ["mmorpg"],
    queryFn: mmorpg,
    refetchOnMount: "always",
    staleTime: 0,
  });

  return { data, error, isLoading };
};
