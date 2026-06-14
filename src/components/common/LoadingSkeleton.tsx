const LoadingSkeleton = () => {
  return (
    <div className="animate-pulse rounded-[18px] border border-[#E2E2E2] bg-white p-4">
      <div className="mx-auto h-28 w-28 rounded-xl bg-gray-200" />

      <div className="mt-5 h-4 w-3/4 rounded bg-gray-200" />

      <div className="mt-2 h-3 w-1/2 rounded bg-gray-100" />
      <div className="mt-6 flex items-center justify-between">
        <div className="h-5 w-16 rounded bg-gray-200" />

        <div className="h-11 w-11 rounded-2xl bg-gray-200" />
      </div>
    </div>
  );
};

export default LoadingSkeleton;
