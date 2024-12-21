import { Link } from "@tanstack/react-router";
import { FC } from "react";
import { Post } from "./PostList";
import { DeleteIcon, Loader, PencilIcon } from "lucide-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../lib/axios";
import { toast } from "sonner";

export const PostCard: FC<Post> = ({ _id, createdAt, title }) => {
  const queryClient = useQueryClient();
  const deletePost = useMutation({
    mutationFn: () => api.delete(`/posts/${_id}`),
  });
  const handleDeletePost = async () => {
    try {
      const result = await deletePost.mutateAsync();
      if (result.data.error) {
        console.log("failed");
      } else {
        console.log("success");
        toast.success("Deleted successfull");
        queryClient.invalidateQueries({ queryKey: ["posts"] });
      }
    } catch (e) {
      toast.error("Something went wrong");
    }
  };
  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition-all hover:shadow-lg">
      <div className="flex justify-between items-start mb-4">
        <Link
          to="/posts/$postId"
          params={{ postId: _id }}
          className="text-xl font-semibold text-gray-800 hover:text-blue-600 transition-colors"
        >
          {title}
        </Link>
        <div className="flex items-center space-x-3">
          <Link
            to="/posts/edit/$postId"
            params={{ postId: _id }}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <PencilIcon className="w-5 h-5 text-gray-600 hover:text-blue-600" />
          </Link>
          <button
            onClick={handleDeletePost}
            disabled={deletePost.isPending}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            {deletePost.isPending ? (
              <Loader className="w-5 h-5 text-gray-600 animate-spin" />
            ) : (
              <DeleteIcon className="w-5 h-5 text-gray-600 hover:text-red-600" />
            )}
          </button>
        </div>
      </div>
      <div className="text-sm text-gray-500">
        {new Date(createdAt).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </div>
    </div>
  );
};
