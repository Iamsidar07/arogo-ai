import { FC } from "react";
import { PostCard } from "./PostCard";

export interface Post {
  _id: string;
  createdAt: string;
  updatedAt: string;
  title: string;
  body: string;
}
interface PostListProps {
  data: Post[];
}
export const PostList: FC<PostListProps> = ({ data }) => {
  return (
    <div className="flex flex-col gap-4">
      {data?.map((post) => <PostCard key={post._id} {...post} />)}
    </div>
  );
};
