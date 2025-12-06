import { useQuery } from "@tanstack/react-query";
import { shooter } from "../Services/shooter";

export const useshooter = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, error, isLoading } = useQuery({
    queryKey: ["shooter"],
    queryFn: shooter,
    refetchOnMount: "always",
    staleTime: 0,
  });

  return { data, error, isLoading };
};
