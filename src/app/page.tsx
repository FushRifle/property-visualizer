"use client";

import { Suspense } from "react";
import { FilterBar } from "@/components/filters/FilterBar";
import { SearchInput } from "@/components/ui/SearchInput";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/Toggle";
import { TOWERS } from "@/config/site";
import { Button } from "@/components/ui/Button";
import HeroSection from "@/components/landing/Hero2";
import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin } from "lucide-react";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      <main className="container mx-auto px-4 py-9">

        {/* Filter Section */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
            <SearchInput
              placeholder="Search towers..."
              className="w-full md:w-[400px]"
            />

            <div className="flex flex-wrap items-center gap-4">
              <FilterBar />

              <ToggleGroupItem value="all">All</ToggleGroupItem>
              <ToggleGroupItem value="available">Available</ToggleGroupItem>
              <ToggleGroupItem value="premium">Premium</ToggleGroupItem>
            </div>
          </div>
        </div>

        {/* Towers Section */}
        <section className="py-15">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-3">Our Signature Towers</h2>
            <p className="text-xl text-gray-100 max-w-2xl mx-auto">
              Each tower is a masterpiece of architecture and luxury living.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {TOWERS.map((tower, index) => (
              <motion.div
                key={tower.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src={tower.image}
                    alt={tower.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6 w-full">
                    <div className="flex justify-between items-end">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1">{tower.name}</h3>
                        <div className="flex items-center text-white/90 text-sm">
                          <MapPin className="h-4 w-4 mr-1" />
                          {tower.address}
                        </div>
                      </div>
                      <Button asChild className="bg-white text-blue-600 hover:bg-white/90 shadow-md" size="sm">
                        <a href={`/towers/${tower.id}`}>View</a>
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                  <TowerStat label="Floors" value={tower.floors} />
                  <TowerStat label="Units" value={tower.availableUnits} />
                  <TowerStat
                    label="From"
                    value={`$${(tower.startingPrice / 1_000).toLocaleString()}K`}
                    className="text-blue-600"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Amenities Section */}
        <section className="py-24 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-2xl shadow-inner">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Unparalleled Amenities</h2>
              <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
                Experience a new standard of luxury, convenience, and comfort — all in one place.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {amenities.map((a, i) => (
                <motion.div
                  key={a.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="bg-white/10 border border-white/10 backdrop-blur-md p-6 rounded-xl text-center shadow-sm transition-all duration-300"
                >
                  <div className="text-5xl mb-3">{a.icon}</div>
                  <h3 className="text-lg font-semibold tracking-wide">{a.name}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>


        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-12 text-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold text-white mb-6"
              >
                Ready to Find Your Dream Residence?
              </motion.h2>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Button className="bg-white text-blue-600 hover:bg-white/90 px-8 py-4 text-lg cursor-pointer">
                    Schedule a Tour
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg cursor-pointer">
                    Contact Our Team
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Empty State */}
        {TOWERS.length === 0 && (
          <div className="flex flex-col items-center justify-center py-16 gap-4">
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-full">
              <BuildingIcon className="h-10 w-10 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold">No towers found</h3>
            <p className="text-muted-foreground text-center max-w-md">
              We couldn't find any towers matching your criteria. Try adjusting your filters.
            </p>
            <Button variant="outline" className="mt-4">
              Reset Filters
            </Button>
          </div>
        )}
      </main>
    </div>
  );
}

// Reusable Tower Stat Component
function TowerStat({ label, value, className = "" }: { label: string; value: string | number; className?: string }) {
  return (
    <div className="bg-white p-3 rounded-lg shadow-sm">
      <div className="text-gray-500 text-xs mb-1">{label}</div>
      <div className={`font-bold text-gray-900 ${className}`}>{value}</div>
    </div>
  );
}

// Building icon for empty state
function BuildingIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01" />
      <path d="M16 6h.01" />
      <path d="M12 6h.01" />
      <path d="M12 10h.01" />
      <path d="M12 14h.01" />
      <path d="M16 10h.01" />
      <path d="M16 14h.01" />
      <path d="M8 10h.01" />
      <path d="M8 14h.01" />
    </svg>
  );
}

// Amenity list
const amenities = [
  { name: "Infinity Pool", icon: "🏊‍♂️" },
  { name: "Sky Lounge", icon: "🍸" },
  { name: "Spa & Wellness", icon: "💆‍♀️" },
  { name: "Private Cinema", icon: "🎬" },
  { name: "Fitness Center", icon: "💪" },
  { name: "Concierge", icon: "🛎️" },
  { name: "Kids Playroom", icon: "🧸" },
  { name: "Pet Spa", icon: "🐶" },
];
