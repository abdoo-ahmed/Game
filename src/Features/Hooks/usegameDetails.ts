import { useQuery } from "@tanstack/react-query";
import { gameDetails } from "../Services/gameDetails";

export const useGameDetails = (id: string) => {

  const { data, error, isLoading } = useQuery({
    queryKey: ["gameDetails", id],
    queryFn: () => gameDetails(id),
    refetchOnMount: "always",
    staleTime: 0,
  });

  return { data, error, isLoading };
};
