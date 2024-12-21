import { createLazyFileRoute } from "@tanstack/react-router";
import { usePosts } from "../hooks/usePosts";
import { PostList } from "../components/PostList";
import { PostCardSkeletonList } from "../components/PostCardSkeletonList";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  const { data, isLoading } = usePosts();
  if (isLoading) return <PostCardSkeletonList />;
  return (
    <div className="p-2">
      <PostList data={data?.data} />
    </div>
  );
}
