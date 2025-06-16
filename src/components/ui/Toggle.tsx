"use client";

import * as React from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";

import { cn } from "@/lib/utils";

const toggleVariants = cva(
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",
    {
        variants: {
            variant: {
                default: "bg-transparent",
                outline: "border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground",
            },
            size: {
                default: "h-9 px-3",
                sm: "h-8 px-2",
                lg: "h-10 px-3",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

type ToggleContextType = VariantProps<typeof toggleVariants>;

const ToggleGroupContext = React.createContext<ToggleContextType>({
    variant: "default",
    size: "default",
});

const ToggleGroup = React.forwardRef<
    React.ElementRef<typeof TogglePrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> & ToggleContextType
>(({ className, variant = "default", size = "default", children, ...props }, ref) => (
    <TogglePrimitive.Root
        ref={ref}
        className={cn("flex items-center justify-center gap-1", className)}
        {...props}
    >
        <ToggleGroupContext.Provider value={{ variant, size }}>
            {children}
        </ToggleGroupContext.Provider>
    </TogglePrimitive.Root>
));

ToggleGroup.displayName = "ToggleGroup";

interface ToggleGroupItemProps
    extends React.ComponentPropsWithoutRef<typeof TogglePrimitive.Toggle>,
    VariantProps<typeof toggleVariants> {
    asChild?: boolean;
}

const ToggleGroupItem = React.forwardRef<
    React.ElementRef<typeof TogglePrimitive.Toggle>,
    ToggleGroupItemProps
>(({ className, children, variant, size, asChild = false, ...props }, ref) => {
    const context = React.useContext(ToggleGroupContext);

    const Comp = asChild ? Slot : TogglePrimitive.Toggle;

    return (
        <Comp
            ref={ref}
            className={cn(
                toggleVariants({
                    variant: variant ?? context.variant,
                    size: size ?? context.size,
                }),
                className
            )}
            {...props}
        >
            {children}
        </Comp>
    );
});

ToggleGroupItem.displayName = "ToggleGroupItem";

export { ToggleGroup, ToggleGroupItem };
