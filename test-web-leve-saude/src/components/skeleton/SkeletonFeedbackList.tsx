import { Skeleton } from "./SkeletonItem";

export default function SkeletonPage() {
  return (
    <div className="flex min-h-[calc(100vh-64px)] w-full flex-col items-center p-4 md:h-screen">
      <div className="w-full max-w-full space-y-4 rounded-lg bg-white p-6 shadow-md">
        <Skeleton className="h-8 w-full" />
        <Skeleton className="h-8 w-full" />
        <Skeleton className="h-8 w-full" />
        <Skeleton className="h-8 w-full" />
        <Skeleton className="h-8 w-full" />
        <Skeleton className="h-8 w-full" />
        <Skeleton className="h-8 w-full" />
      </div>
    </div>
  );
}
