import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Building2, ChevronRight, Star } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

type Tower = {
    id: string;
    name: string;
    image: string;
    address: string;
    floors: number;
    availableUnits: number;
    startingPrice: number;
    completionDate: string;
    premium?: boolean;
};

export function TowerCard({
    tower,
    className,
}: {
    tower: Tower;
    className?: string;
}) {
    return (
        <motion.div
            initial={false}
            whileHover={{
                y: -8,
                scale: 1.02,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)"
            }}
            whileTap={{ scale: 0.98 }}
            transition={{
                type: "spring",
                stiffness: 400,
                damping: 15
            }}
            className={cn(
                "group relative overflow-hidden rounded-xl border bg-card shadow-sm transition-all",
                className
            )}
        >
            {tower.premium && (
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400 }}
                >
                    <Badge className="absolute left-3 top-3 z-10 flex items-center gap-1 bg-amber-100 text-amber-800 hover:bg-amber-100">
                        <Star className="h-3 w-3" />
                        <span>Premium</span>
                    </Badge>
                </motion.div>
            )}

            <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                <motion.img
                    src={tower.image}
                    alt={tower.name}
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 z-10" />
                <span className="absolute bottom-2 left-2 z-20 text-white font-semibold text-lg shadow">
                    {tower.name}
                </span>
            </div>


            <motion.div
                whileHover={{
                    backgroundColor: "white"
                }}
                className="p-6"
            >
                <div className="mb-4">
                    <h3 className="text-lg font-semibold group-hover:text-blue-600 transition-colors">
                        {tower.name}
                    </h3>
                    <p className="text-sm text-muted-foreground group-hover:text-gray-600 transition-colors">
                        {tower.address}
                    </p>
                </div>

                <div className="grid grid-cols-3 gap-4 text-sm">
                    {[
                        { label: "Floors", value: tower.floors },
                        { label: "Available", value: `${tower.availableUnits} units` },
                        { label: "From", value: `$${tower.startingPrice.toLocaleString()}` }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 500 }}
                        >
                            <p className="text-muted-foreground group-hover:text-gray-600 transition-colors">
                                {item.label}
                            </p>
                            <p className="font-medium group-hover:text-blue-600 transition-colors">
                                {item.value}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400 }}
                >
                    <Button asChild variant="outline" className="mt-6 w-full bg-black group-hover:border-blue-300 
                    group-hover:bg-black group-hover:text-white transition-colors">
                        <Link href={`/towers/${tower.id}`}>
                            View Details <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </Button>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}

// Keep your existing TowerCardSkeleton component unchanged
export function TowerCardSkeleton() {
    return (
        <div className="overflow-hidden rounded-xl border bg-card shadow-sm">
            <div className="h-48 w-full animate-pulse bg-gray-200" />
            <div className="p-6">
                <div className="mb-4 space-y-2">
                    <div className="h-5 w-3/4 animate-pulse rounded bg-gray-200" />
                    <div className="h-4 w-1/2 animate-pulse rounded bg-gray-200" />
                </div>
                <div className="grid grid-cols-3 gap-4">
                    {[...Array(3)].map((_, i) => (
                        <div key={i} className="space-y-1">
                            <div className="h-4 w-3/4 animate-pulse rounded bg-gray-200" />
                            <div className="h-4 w-1/2 animate-pulse rounded bg-gray-200" />
                        </div>
                    ))}
                </div>
                <div className="mt-6 h-10 w-full animate-pulse rounded-md bg-gray-200" />
            </div>
        </div>
    );
}