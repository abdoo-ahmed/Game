import { useQuery } from "@tanstack/react-query";
import { pixel } from "../Services/pixel";

export const usepixel = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, error, isLoading } = useQuery({
    queryKey: ["pixel"],
    queryFn: pixel,
    refetchOnMount: "always",
    staleTime: 0,
  });

  return { data, error, isLoading };
};
