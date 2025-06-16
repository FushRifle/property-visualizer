import { cn } from '@/lib/utils'
// Badge.tsx
export function Badge({
    children,
    variant = "default",
    className,
}: {
    children: React.ReactNode;
    variant?: "default" | "secondary" | "premium";
    className?: string;
}) {
    const variants = {
        default: "bg-blue-100 text-blue-800",
        secondary: "bg-gray-100 text-gray-800",
        premium: "bg-amber-100 text-amber-800",
    };

    return (
        <span
            className={
                cn(
                    "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
                    variants[variant],
                    className
                )
            }
        >
            {children}
        </span>
    );
}

// Skeleton.tsx
export function Skeleton({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={cn("animate-pulse rounded-md bg-gray-200", className)}
            {...props}
        />
    );
}

// HoverCard.tsx
export function HoverCard({
    children,
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={
                cn(
                    "bg-white rounded-lg shadow-sm border border-gray-200 transition-all",
                    "hover:shadow-md hover:border-blue-300 hover:-translate-y-1",
                    className
                )
            }
            {...props}
        >
            {children}
        </div>
    );
}