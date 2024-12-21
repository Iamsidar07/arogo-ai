import { createFileRoute } from "@tanstack/react-router";
import { PostList } from "../../components/PostList";
import { usePosts } from "../../hooks/usePosts";
import { PostCardSkeletonList } from "../../components/PostCardSkeletonList";

export const Route = createFileRoute("/posts/")({
  component: Posts,
});

function Posts() {
  const { isLoading, isError, data } = usePosts();

  if (isLoading) return <PostCardSkeletonList />;
  if (isError) return "Something went wrong";
  return (
    <div>
      <PostList data={data?.data} />
    </div>
  );
}
