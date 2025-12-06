import { useQuery } from "@tanstack/react-query";
import { permadeath } from "../Services/permadeath";

export const usepermadeath = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, error, isLoading } = useQuery({
    queryKey: ["permadeath"],
    queryFn: permadeath,
    refetchOnMount: "always",
    staleTime: 0,
  });

  return { data, error, isLoading };
};
