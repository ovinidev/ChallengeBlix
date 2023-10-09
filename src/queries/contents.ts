import { useQuery } from "@tanstack/react-query";
import { getContents } from "../api/contents";

export const useContents = (contentType: string) => {
  return useQuery({
    queryKey: ["contents", { type: contentType }],
    queryFn: async () => await getContents(contentType),
  });
};
