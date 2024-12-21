import { createFileRoute } from "@tanstack/react-router";
import api from "../../lib/axios";
import { usePostSummary } from "../../hooks/usePostSummary";
import { Editor } from "../../components/Editor";
import { useRef } from "react";
import EditorJS from "@editorjs/editorjs";
import { PostViewSkeleton } from "../../components/PostViewSkeleton";

export const Route = createFileRoute("/posts/$postId")({
  component: Post,
  loader: async ({ params }) => {
    const data = await api.get(`/posts/${params.postId}`);
    return {
      post: data.data,
    };
  },
  pendingComponent: () => <PostViewSkeleton />,
  errorComponent: () => (
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="text-red-500">Something went wrong</div>
    </div>
  ),
});

function Post() {
  const ref = useRef<EditorJS>(null);
  const { post } = Route.useLoaderData();
  const { data, isLoading, isError } = usePostSummary(post._id);

  return (
    <article className="max-w-2xl mx-auto space-y-8">
      <header className="space-y-4">
        <h1 className="text-3xl font-bold text-gray-900 leading-tight">
          {post.title}
        </h1>
        <div className="flex items-center text-sm text-gray-500">
          <time dateTime={post.createdAt}>
            {new Date(post.createdAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </div>
      </header>

      <section className="bg-gray-50 rounded-xl p-6 border">
        <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <img src="/icon.png" alt="logo" className="w-8 h-8 animate-bounce" />
          AI Summary
        </h2>
        <div className="text-gray-700">
          {isLoading && (
            <div className="flex items-center space-x-2 text-gray-600">
              <div className="w-4 h-4 border-2 border-gray-600 border-t-transparent rounded-full animate-spin" />
              <span>Generating AI Summary...</span>
            </div>
          )}
          {isError && (
            <div className="text-red-500">
              Something went wrong while generating summary.
            </div>
          )}
          {data?.data?.summary && (
            <div className="prose prose-gray">{data.data.summary}</div>
          )}
        </div>
      </section>

      <Editor ref={ref} defaultValue={JSON.parse(post.body || "")} isViewOnly />
    </article>
  );
}

export default Post;
