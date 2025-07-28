import { Skeleton } from "./SkeletonItem";

export default function SkeletonHeader() {
  return (
    <header className="shadow-3x1 flex h-16 items-center justify-between bg-white px-4 md:h-20 md:px-8">
      <div className="flex items-center gap-2">
        <Skeleton className="h-10 w-32 md:h-12 md:w-40" />
      </div>
      <Skeleton className="h-6 w-24" />
    </header>
  );
}
