const ProductDetailSkeleton = () => {
  return (
    <div className="animate-pulse">
      <div className="h-80 rounded-3xl bg-gray-200" />

      <div className="mt-8 h-8 w-1/2 rounded bg-gray-200" />

      <div className="mt-4 h-4 w-1/3 rounded bg-gray-100" />

      <div className="mt-8 h-32 rounded bg-gray-100" />
    </div>
  );
};

export default ProductDetailSkeleton;
