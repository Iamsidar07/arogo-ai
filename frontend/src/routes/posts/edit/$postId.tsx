import { createFileRoute, useRouter } from "@tanstack/react-router";
import api from "../../../lib/axios";
import PostForm from "../../../components/PostForm";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export const Route = createFileRoute("/posts/edit/$postId")({
  component: RouteComponent,
  loader: async ({ params }) => {
    const data = await api.get(`/posts/${params.postId}`);
    return {
      post: data.data,
    };
  },
  pendingComponent: () => <div>Loading...</div>,
  errorComponent: () => <div>Something went wrong</div>,
});

function RouteComponent() {
  const router = useRouter();
  const { post } = Route.useLoaderData();
  const queryClient = useQueryClient();
  const updatePost = useMutation({
    mutationFn: async (data: { title: string; body: string }) =>
      api.put(`/posts/${post._id}`, data),
  });
  const onSubmit = async (data: { title: string; body: string }) => {
    try {
      const result = await updatePost.mutateAsync(data);
      if (result.data.error) {
        console.log("failed", result.data.error);
        toast.error(result.data.error);
      } else {
        console.log("updated");
        toast.success("Post updated successfully");
        queryClient.invalidateQueries({ queryKey: ["posts", post._id] });
        router.navigate({ to: "/" });
      }
    } catch (e) {
      console.log(e);
      toast.error("Something went wrong");
    }
  };
  return (
    <PostForm
      body={post.body}
      title={post.title}
      onSubmit={onSubmit}
      isLoading={updatePost.isPending}
      mode="update"
    />
  );
}
