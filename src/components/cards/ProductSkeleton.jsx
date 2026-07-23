export default function ProductSkeleton({ count = 8 }) {
  return (
    <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="animate-pulse overflow-hidden rounded-3xl border border-stone-100 bg-white shadow-card">
          <div className="aspect-square bg-stone-200" />
          <div className="space-y-3 p-5">
            <div className="h-4 w-3/4 rounded bg-stone-200" />
            <div className="h-4 w-1/3 rounded bg-stone-200" />
          </div>
        </div>
      ))}
    </div>
  );
}
