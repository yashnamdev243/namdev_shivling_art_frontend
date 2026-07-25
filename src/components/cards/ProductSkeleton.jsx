import { Skeleton } from "antd";

export default function ProductSkeleton({ count = 6 }) {
  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="overflow-hidden rounded-3xl border border-amber-100 bg-white shadow-lg"
        >
          {/* Image */}
          <Skeleton.Image
            active
            className="!h-72 !w-full"
            style={{
              width: "100%",
              height: "18rem",
            }}
          />

          {/* Content */}
          <div className="space-y-4 p-5">
            <Skeleton
              active
              title={{ width: "75%" }}
              paragraph={{
                rows: 2,
                width: ["100%", "70%"],
              }}
            />

            <div className="flex items-center justify-between">
              <Skeleton.Button
                active
                size="small"
                shape="round"
                style={{ width: 100 }}
              />

              <Skeleton.Button
                active
                size="small"
                shape="round"
                style={{ width: 80 }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
