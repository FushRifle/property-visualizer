"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Apartment } from "@/types/page";
import Image from "next/image";

export function ApartmentCard({ apartment }: { apartment: Apartment }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="relative">
            {/* Background overlay effect */}
            {isHovered && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.1 }}
                    className="absolute inset-0 bg-black rounded-xl"
                />
            )}

            <motion.div
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                whileHover={{ scale: 1.03 }}
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 relative z-10"
            >
                <div className="h-48 relative">
                    <Image
                        src={apartment.thumbnail}
                        alt={`${apartment.type} layout`}
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="p-4">
                    <h3 className="font-semibold text-lg">{apartment.type}</h3>
                    <div className="flex justify-between mt-2 text-sm text-gray-600">
                        <span>{apartment.area} sq.ft</span>
                        <span>{apartment.rooms} rooms</span>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}