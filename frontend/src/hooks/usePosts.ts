import { useQuery } from "@tanstack/react-query";
import api from "../lib/axios";

export const usePosts = () => {
  return useQuery({
    queryKey: ["posts"],
    queryFn: () => api.get("/posts"),
  });
};
