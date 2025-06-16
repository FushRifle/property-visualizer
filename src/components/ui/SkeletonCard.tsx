// src/components/ui/SkeletonCard.tsx
export function SkeletonCard() {
    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
            <div className="h-48 bg-gray-200 animate-pulse" />
            <div className="p-6 space-y-3">
                <div className="h-6 bg-gray-200 rounded w-3/4 animate-pulse" />
                <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse" />
                <div className="flex justify-between">
                    <div className="h-4 bg-gray-200 rounded w-1/4 animate-pulse" />
                    <div className="h-4 bg-gray-200 rounded w-1/4 animate-pulse" />
                </div>
            </div>
        </div>
    );
}