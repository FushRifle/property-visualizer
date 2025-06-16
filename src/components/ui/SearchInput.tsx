import { Search } from "lucide-react";
import { Input, InputProps } from "@/components/ui/Input";
import { cn } from "@/lib/utils";

export function SearchInput({ className, ...props }: InputProps) {
    return (
        <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
                type="search"
                placeholder="Search..."
                className={cn(
                    "w-full rounded-lg bg-background pl-9 pr-4",
                    className
                )}
                {...props}
            />
        </div>
    );
}