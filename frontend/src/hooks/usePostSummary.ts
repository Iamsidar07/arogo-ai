import { useQuery } from "@tanstack/react-query";
import api from "../lib/axios";

export const usePostSummary = (postId: string) => {
  return useQuery({
    queryKey: ["summary", postId],
    queryFn: async () => api.get(`/summary/${postId}`),
  });
};
