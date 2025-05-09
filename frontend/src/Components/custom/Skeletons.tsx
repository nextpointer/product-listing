import { Skeleton } from '@/Components/ui/skeleton'

export function ProductSkeleton() {
  return (
    <div className="space-y-4 h-full">
      <Skeleton className="w-full aspect-square rounded-lg" />
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-4 w-1/2" />
      <Skeleton className="h-4 w-1/4" />
    </div>
  )
}