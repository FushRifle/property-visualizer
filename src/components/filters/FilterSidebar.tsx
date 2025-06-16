"use client";

import { SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Slider } from "@/components/ui/Slider";
import { Checkbox } from "@/components/ui/Checkbox";
import { useState } from "react";

const FILTER_OPTIONS = [
    { id: "type-2bhk", label: "2BHK" },
    { id: "type-3bhk", label: "3BHK" },
    { id: "type-4bhk", label: "4BHK" },
    { id: "type-penthouse", label: "Penthouse" },
];

export function FiltersSidebar() {
    const [priceRange, setPriceRange] = useState([500000, 2000000]);
    const [areaRange, setAreaRange] = useState([800, 3000]);
    const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

    return (
        <div className="hidden lg:block w-72 shrink-0 border-r border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-lg">Filters</h3>
                <Button variant="ghost" size="sm">
                    Reset
                </Button>
            </div>

            <div className="space-y-8">
                {/* Search */}
                <div>
                    <h4 className="text-sm font-medium mb-3">Search</h4>
                    <Input placeholder="Search apartments..." />
                </div>

                {/* Price Range */}
                <div>
                    <h4 className="text-sm font-medium mb-3">Price Range</h4>
                    <Slider
                        value={priceRange}
                        onValueChange={setPriceRange}
                        min={300000}
                        max={5000000}
                        step={100000}
                    />
                    <div className="flex justify-between mt-2 text-sm text-gray-600">
                        <span>${priceRange[0].toLocaleString()}</span>
                        <span>${priceRange[1].toLocaleString()}</span>
                    </div>
                </div>

                {/* Area Range */}
                <div>
                    <h4 className="text-sm font-medium mb-3">Area (sq.ft)</h4>
                    <Slider
                        value={areaRange}
                        onValueChange={setAreaRange}
                        min={500}
                        max={5000}
                        step={50}
                    />
                    <div className="flex justify-between mt-2 text-sm text-gray-600">
                        <span>{areaRange[0]} sq.ft</span>
                        <span>{areaRange[1]} sq.ft</span>
                    </div>
                </div>

                {/* Apartment Types */}
                <div>
                    <h4 className="text-sm font-medium mb-3">Apartment Type</h4>
                    <div className="space-y-2">
                        {FILTER_OPTIONS.map((option) => (
                            <div key={option.id} className="flex items-center space-x-2">
                                <Checkbox
                                    id={option.id}
                                    checked={selectedTypes.includes(option.id)}
                                    onCheckedChange={(checked: any) => {
                                        if (checked) {
                                            setSelectedTypes([...selectedTypes, option.id]);
                                        } else {
                                            setSelectedTypes(selectedTypes.filter(id => id !== option.id));
                                        }
                                    }}
                                />
                                <label htmlFor={option.id} className="text-sm">
                                    {option.label}
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}