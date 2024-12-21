import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createFileRoute, useRouter } from "@tanstack/react-router";
import api from "../../../lib/axios";
import PostForm from "../../../components/PostForm";
import { toast } from "sonner";

export const Route = createFileRoute("/posts/create/")({
  component: RouteComponent,
});

function RouteComponent() {
  const queryClient = useQueryClient();
  const router = useRouter();
  const createPost = useMutation({
    mutationKey: ["posts"],
    mutationFn: async (data: { title: string; body: string }) =>
      api.post("/posts", data),
  });
  const onSubmit = async (data: { title: string; body: string }) => {
    try {
      const result = await createPost.mutateAsync(data);
      if (result.data.error) {
        console.log("failed");
        toast.error(result.data.error);
      } else {
        console.log("success");
        toast.success("Post created successfully");
        queryClient.invalidateQueries({ queryKey: ["posts"] });
        router.navigate({ to: "/" });
      }
    } catch (e) {
      toast.error("Something went wrong");
    }
  };
  return <PostForm onSubmit={onSubmit} isLoading={createPost.isPending} />;
}
