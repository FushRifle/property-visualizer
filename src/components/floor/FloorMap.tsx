"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Floor } from "@/types/page";
import { cn } from "@/lib/utils";

export function FloorMap({ floor }: { floor: Floor }) {
    const [selectedApartment, setSelectedApartment] = useState<string | null>(null);
    const [hoveredApartment, setHoveredApartment] = useState<string | null>(null);

    return (
        <div className="relative bg-gray-50 rounded-xl p-6 shadow-inner border border-gray-200">
            <h3 className="text-lg font-semibold mb-4">Floor {floor.number} Layout</h3>

            {/* Floor plan SVG */}
            <div className="relative h-96 w-full bg-white rounded-lg shadow-sm border border-gray-300 overflow-hidden">
                {/* Background grid */}
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />

                {/* Apartments */}
                {floor.apartments.map((apt) => (
                    <motion.div
                        key={apt.id}
                        initial={false}
                        animate={{
                            backgroundColor: selectedApartment === apt.id
                                ? "var(--blue-100)"
                                : hoveredApartment === apt.id
                                    ? "var(--blue-50)"
                                    : "var(--white)",
                            borderColor: selectedApartment === apt.id
                                ? "var(--blue-500)"
                                : "var(--gray-200)",
                        }}
                        whileHover={{
                            backgroundColor: "var(--blue-50)",
                            zIndex: 10
                        }}
                        transition={{ duration: 0.2 }}
                        className={cn(
                            "absolute border-2 rounded-md cursor-pointer",
                            "flex items-center justify-center"
                        )}
                        style={{
                            left: `${apt.position.x}%`,
                            top: `${apt.position.y}%`,
                            width: `${apt.position.width}%`,
                            height: `${apt.position.height}%`,
                        }}
                        onClick={() => setSelectedApartment(apt.id)}
                        onMouseEnter={() => setHoveredApartment(apt.id)}
                        onMouseLeave={() => setHoveredApartment(null)}
                    >
                        <div className="text-xs font-medium text-center p-1">
                            {apt.type}
                            {selectedApartment === apt.id && (
                                <motion.div
                                    initial={{ opacity: 0, y: -5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="absolute -top-6 left-0 right-0 text-blue-600 font-semibold"
                                >
                                    {apt.area} sq.ft
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Apartment info panel */}
            <AnimatePresence>
                {selectedApartment && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        className="mt-6 bg-white rounded-lg shadow-md p-4 border border-gray-200"
                    >
                        {/* Detailed apartment info */}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}