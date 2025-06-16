"use client";

import { SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/Button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/DropdownMenu";

export function FilterBar() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2">
                    <SlidersHorizontal className="h-4 w-4" />
                    <span>Filters</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuItem>Available Only</DropdownMenuItem>
                <DropdownMenuItem>Premium Towers</DropdownMenuItem>
                <DropdownMenuItem>Under Construction</DropdownMenuItem>
                <DropdownMenuItem>Ready to Move</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}