"use client";

import { motion } from "framer-motion";
import { FLOORS } from "@/config/site";
import Link from "next/link";
import { useParams } from "next/navigation";

export function FloorSelector() {
    const { towerId } = useParams();
    const floors = FLOORS[towerId as string] || [];

    return (
        <div className="space-y-4">
            <h2 className="text-2xl font-bold">Select a Floor</h2>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
                {floors.map((floor) => (
                    <Link key={floor.id} href={`/dashboard/${towerId}/${floor.id}`}>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full aspect-square bg-white rounded-lg shadow-md flex items-center justify-center border border-gray-200 hover:border-blue-500 transition-colors"
                        >
                            <span className="text-xl font-medium">{floor.number}</span>
                        </motion.button>
                    </Link>
                ))}
            </div>
        </div>
    );
}