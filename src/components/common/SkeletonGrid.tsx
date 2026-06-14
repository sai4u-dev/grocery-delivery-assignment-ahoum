import LoadingSkeleton from "./LoadingSkeleton";

interface SkeletonGridProps {
  count?: number;
}

const SkeletonGrid = ({ count = 6 }: SkeletonGridProps) => {
  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 xl:grid-cols-5">
      {Array.from({ length: count }).map((_, index) => (
        <LoadingSkeleton key={index} />
      ))}
    </div>
  );
};

export default SkeletonGrid;
