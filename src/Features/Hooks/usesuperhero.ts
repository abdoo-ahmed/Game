import { useQuery } from "@tanstack/react-query";
import { superhero } from "../Services/superhero";

export const usesuperhero = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, error, isLoading } = useQuery({
    queryKey: ["superhero"],
    queryFn: superhero,
    refetchOnMount: "always",
    staleTime: 0,
  });

  return { data, error, isLoading };
};
