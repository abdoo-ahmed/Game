import { useQuery } from "@tanstack/react-query";
import { sailing } from "../Services/sailing";

export const usesailing = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, error, isLoading } = useQuery({
    queryKey: ["sailing"],
    queryFn: sailing,
    refetchOnMount: "always",
    staleTime: 0,
  });

  return { data, error, isLoading };
};
