"use client";

import { X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useCompare } from "@/context/CompareContext";

export function CompareBar() {
    const { comparedApartments, removeFromCompare, toggleCompare } = useCompare();

    if (comparedApartments.length === 0) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-50">
            <div className="container mx-auto px-4 py-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 overflow-x-auto py-2">
                        {comparedApartments.map((apt) => (
                            <div key={apt.id} className="flex items-center space-x-2 bg-gray-50 rounded-lg p-2 min-w-[200px]">
                                <div className="h-12 w-12 bg-blue-100 rounded-md flex items-center justify-center text-xs font-medium">
                                    {apt.type}
                                </div>
                                <div>
                                    <p className="text-sm font-medium">{apt.area} sq.ft</p>
                                    <p className="text-xs text-gray-500">{apt.rooms} rooms</p>
                                </div>
                                <button
                                    onClick={() => removeFromCompare(apt.id)}
                                    className="text-gray-400 hover:text-gray-600"
                                >
                                    <X className="h-4 w-4" />
                                </button>
                            </div>
                        ))}
                    </div>
                    <Button
                        onClick={() => toggleCompare(comparedApartments[0])}
                        className="bg-blue-600 hover:bg-blue-700"
                    >
                        Compare ({comparedApartments.length})
                    </Button>
                </div>
            </div>
        </div>
    );
}