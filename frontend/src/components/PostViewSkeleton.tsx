export const PostViewSkeleton = () => {
  return (
    <article className="max-w-2xl mx-auto space-y-8 animate-pulse">
      {/* Header Section */}
      <header className="space-y-4">
        {/* Title Skeleton */}
        <div className="h-9 bg-gray-200 rounded-lg w-3/4" />

        {/* Date Skeleton */}
        <div className="flex items-center">
          <div className="h-4 bg-gray-200 rounded w-40" />
        </div>
      </header>

      {/* AI Summary Section */}
      <section className="bg-gray-50 rounded-xl p-6 shadow-sm">
        {/* Summary Title Skeleton */}
        <div className="h-7 bg-gray-200 rounded w-32 mb-4" />

        {/* Summary Content Skeleton */}
        <div className="space-y-3">
          <div className="h-4 bg-gray-200 rounded w-full" />
          <div className="h-4 bg-gray-200 rounded w-5/6" />
          <div className="h-4 bg-gray-200 rounded w-4/6" />
        </div>
      </section>

      {/* Editor Content Section */}
      <div className="space-y-4">
        {/* Multiple content blocks */}
        <div className="h-4 bg-gray-200 rounded w-full" />
        <div className="h-4 bg-gray-200 rounded w-11/12" />
        <div className="h-4 bg-gray-200 rounded w-full" />
        <div className="h-4 bg-gray-200 rounded w-4/5" />
        <div className="h-4 bg-gray-200 rounded w-full" />
        <div className="h-4 bg-gray-200 rounded w-3/4" />
      </div>
    </article>
  );
};

// You can replace your current pendingComponent with this:
export const LoadingPost = () => {
  return (
    <div className="min-h-[400px]">
      <PostViewSkeleton />
    </div>
  );
};
