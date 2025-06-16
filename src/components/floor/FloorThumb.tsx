"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Ruler, Bed, Bath, ChevronRight } from 'lucide-react';

// Dummy data for apartment layouts
const APARTMENT_LAYOUTS = [
    {
        id: 1,
        type: '2BHK Premium',
        area: 1250,
        rooms: 2,
        baths: 2,
        price: 950000,
        thumbnail: '/tower-b/gallery-1.jpg',
        fullImage: '/tower-b/gallery-1.jpg',
        features: ['Open kitchen', 'Walk-in closet', 'Balcony', 'Smart home system']
    },
    {
        id: 2,
        type: '3BHK Deluxe',
        area: 1850,
        rooms: 3,
        baths: 3,
        price: 1350000,
        thumbnail: '/tower-b/gallery-2.jpg',
        fullImage: '/tower-b/gallery-2.jpg',
        features: ['Living + dining', 'Utility room', '2 Balconies', 'Smart home system']
    },
    {
        id: 3,
        type: '4BHK Luxury',
        area: 3200,
        rooms: 4,
        baths: 4,
        price: 2800000,
        thumbnail: '/tower-b/gallery-3.jpg',
        fullImage: '/tower-b/gallery-3.jpg',
        features: ['Family lounge', 'Maid room', '3 Balconies', 'Premium finishes']
    },
    {
        id: 4,
        type: 'Penthouse',
        area: 4800,
        rooms: 5,
        baths: 5,
        price: 5200000,
        thumbnail: '/tower-b/gallery-4.jpg',
        fullImage: '/tower-b/gallery-4.jpg',
        features: ['Private pool', 'Roof terrace', 'Home theater', 'Smart home system']
    }
];

export function FloorLayouts({ floorNumber }: { floorNumber: number }) {
    const [selectedLayout, setSelectedLayout] = useState<number | null>(null);

    return (
        <div className="mt-8">
            {!selectedLayout ? (
                <>
                    <h3 className="text-2xl font-semibold mb-6 text-gray-800">
                        Floor {floorNumber} - Available Layouts
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {APARTMENT_LAYOUTS.map((layout) => (
                            <motion.div
                                key={layout.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                                whileHover={{ scale: 1.02 }}
                                className="relative"
                            >
                                {/* Darken effect on hover */}
                                <motion.div
                                    whileHover={{
                                        opacity: 0.1,
                                        transition: { duration: 0.2 }
                                    }}
                                    className="absolute inset-0 bg-black rounded-xl pointer-events-none"
                                />

                                {/* Layout Card */}
                                <motion.div
                                    whileHover={{
                                        scale: 1.03,
                                        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                                        transition: {
                                            type: "spring",
                                            stiffness: 400,
                                            damping: 10
                                        }
                                    }}
                                    onClick={() => setSelectedLayout(layout.id)}
                                    className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 relative z-10 h-full cursor-pointer"
                                >
                                    {/* Thumbnail Image */}
                                    <div className="h-48 bg-gray-100 relative">
                                        <Image
                                            src={layout.thumbnail}
                                            alt={`${layout.type} layout`}
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute top-3 left-3 bg-white text-blue-600 px-2 py-1 rounded-md text-xs font-medium shadow-sm">
                                            {layout.type}
                                        </div>
                                    </div>

                                    {/* Metadata */}
                                    <div className="p-5">
                                        <div className="flex justify-between items-start mb-3">
                                            <h4 className="font-bold text-lg text-gray-900">{layout.type}</h4>
                                            <p className="text-blue-600 font-bold">${layout.price.toLocaleString()}</p>
                                        </div>

                                        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                                            <span className="flex items-center">
                                                <Ruler className="h-4 w-4 mr-1 text-blue-500" />
                                                {layout.area} sq.ft
                                            </span>
                                            <span className="flex items-center">
                                                <Bed className="h-4 w-4 mr-1 text-blue-500" />
                                                {layout.rooms} beds
                                            </span>
                                            <span className="flex items-center">
                                                <Bath className="h-4 w-4 mr-1 text-blue-500" />
                                                {layout.baths} baths
                                            </span>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </>
            ) : (
                <AnimatePresence>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden"
                    >
                        {/* Back button */}
                        <button
                            onClick={() => setSelectedLayout(null)}
                            className="flex items-center text-blue-600 hover:text-blue-800 p-6 pb-0"
                        >
                            <ChevronRight className="h-5 w-5 rotate-180 mr-1" />
                            Back to layouts
                        </button>

                        {/* Full layout view */}
                        <div className="p-6">
                            <div className="mb-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-1">
                                    {APARTMENT_LAYOUTS.find(l => l.id === selectedLayout)?.type}
                                </h3>
                                <p className="text-gray-600">Floor {floorNumber}</p>
                            </div>

                            {/* Large layout image */}
                            <div className="relative h-80 w-full bg-gray-100 rounded-lg overflow-hidden mb-8">
                                <Image
                                    src={APARTMENT_LAYOUTS.find(l => l.id === selectedLayout)?.fullImage || ''}
                                    alt="Detailed floor plan"
                                    fill
                                    className="object-contain"
                                />
                            </div>

                            {/* Full metadata */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <h4 className="font-medium text-gray-800 mb-3">Specifications</h4>
                                    <div className="space-y-3">
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Area</span>
                                            <span className="font-medium text-gray-900">
                                                {APARTMENT_LAYOUTS.find(l => l.id === selectedLayout)?.area} sq.ft
                                            </span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Bedrooms</span>
                                            <span className="font-medium text-gray-900">
                                                {APARTMENT_LAYOUTS.find(l => l.id === selectedLayout)?.rooms}
                                            </span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Bathrooms</span>
                                            <span className="font-medium text-gray-900">
                                                {APARTMENT_LAYOUTS.find(l => l.id === selectedLayout)?.baths}
                                            </span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Price</span>
                                            <span className="font-bold text-blue-600">
                                                ${APARTMENT_LAYOUTS.find(l => l.id === selectedLayout)?.price.toLocaleString()}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <h4 className="font-medium text-gray-800 mb-3">Key Features</h4>
                                    <ul className="space-y-2">
                                        {APARTMENT_LAYOUTS.find(l => l.id === selectedLayout)?.features.map((feature, i) => (
                                            <li key={i} className="flex items-start">
                                                <span className="bg-blue-100 text-blue-600 rounded-full p-1 mr-2">
                                                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </span>
                                                <span className="text-gray-700">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Action buttons */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button className="bg-blue-600 hover:bg-blue-700">
                                    Schedule Viewing
                                </Button>
                                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                                    Download Floor Plan
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            )}
        </div>
    );
}