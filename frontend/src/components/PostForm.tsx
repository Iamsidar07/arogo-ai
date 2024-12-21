import { FC, useRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader } from "lucide-react";
import { Editor } from "./Editor";
import EditorJS from "@editorjs/editorjs";

const postSchema = z.object({
  title: z.string().min(1, "Title is required"),
});

type PostFormData = z.infer<typeof postSchema>;

interface Props {
  onSubmit: ({ title, body }: { title: string; body: string }) => Promise<void>;
  title?: string;
  body?: string;
  isLoading?: boolean;
  mode?: "create" | "update";
}

const PostForm: FC<Props> = ({
  title,
  body,
  onSubmit,
  isLoading = false,
  mode = "create",
}) => {
  const ref = useRef<EditorJS>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PostFormData>({
    resolver: zodResolver(postSchema),
    defaultValues: {
      title: title || "",
    },
  });

  const onSubmitHandler = async (data: PostFormData) => {
    try {
      if (!ref.current) return;
      const body = await ref.current.save();
      console.log(body);
      await onSubmit({ title: data.title, body: JSON.stringify(body) });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          {mode === "create" ? "Create New Post" : "Update Post"}
        </h2>
      </div>

      <form onSubmit={handleSubmit(onSubmitHandler)} className="space-y-6">
        <div className="space-y-2">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Title
          </label>
          <input
            id="title"
            type="text"
            {...register("title")}
            className={`w-full px-4 py-2 rounded-lg border focus:ring-[1px] focus:ring-offset-1 focus:ring-black/10 outline-none transition-all
              ${
                errors.title
                  ? "border-red-300 focus:ring-red-500 focus:border-red-500"
                  : "border-gray-300"
              }`}
            placeholder="Enter post title"
          />
          {errors.title && (
            <p className="text-sm text-red-500 mt-1">{errors.title.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <label
            htmlFor="body"
            className="block text-sm font-medium text-gray-700"
          >
            Content
          </label>
          <Editor ref={ref} defaultValue={JSON.parse(body || "{}")} />
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="w-full sm:w-auto ml-auto bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg
                       transition-all duration-200 ease-in-out
                       focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                       disabled:opacity-70 disabled:cursor-not-allowed
                       flex items-center justify-center space-x-2"
        >
          {isLoading && <Loader className="w-5 h-5 animate-spin" />}
          <span>{mode === "create" ? "Create Post" : "Update Post"}</span>
        </button>
      </form>
    </div>
  );
};

export default PostForm;
