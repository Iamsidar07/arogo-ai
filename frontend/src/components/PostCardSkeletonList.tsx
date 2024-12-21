export const PostCardSkeleton = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition-all hover:shadow-lg animate-pulse">
      <div className="flex justify-between items-start mb-4">
        {/* Title skeleton */}
        <div className="h-7 bg-gray-200 rounded w-3/4" />

        {/* Actions buttons skeleton */}
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 bg-gray-200 rounded-full" />
          <div className="w-9 h-9 bg-gray-200 rounded-full" />
        </div>
      </div>

      {/* Date skeleton */}
      <div className="h-4 bg-gray-200 rounded w-32 mt-2" />
    </div>
  );
};

// You can also create a repeated skeleton for multiple posts
export const PostCardSkeletonList = ({ count = 3 }: { count?: number }) => {
  return (
    <div className="space-y-4">
      {Array.from({ length: count }).map((_, index) => (
        <PostCardSkeleton key={index} />
      ))}
    </div>
  );
};
