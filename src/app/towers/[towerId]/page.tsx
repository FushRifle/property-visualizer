"use client";

import { notFound } from 'next/navigation'
import { TOWERS } from '@/config/site'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Star, MapPin, Ruler, Bed, Bath, Layers, Phone, ChevronRight, Home } from 'lucide-react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { FloorLayouts } from '@/components/floor/FloorThumb'
import { use } from 'react'

export default function TowerPage({ params }: { params: Promise<{ towerId: string }> }) {
    // Unwrap the params promise
    const { towerId } = use(params)
    const tower = TOWERS.find(t => t.id === towerId)
    if (!tower) return notFound()

    const [selectedFloor, setSelectedFloor] = useState<number | null>(null)

    const floors = Array.from({ length: 15 }, (_, i) => i + 1)

    return (
        <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen">
            {/* Navigation Breadcrumbs */}
            <div className="container mx-auto px-4 pt-6">
                <nav className="flex items-center text-sm text-gray-600 mb-6">
                    <a href="/" className="flex items-center hover:text-blue-600 transition-colors">
                        <Home className="h-4 w-4 mr-2" />
                        Home
                    </a>
                    <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />
                    <span className="text-blue-600">{tower.name}</span>
                </nav>
            </div>

            {/* Hero Section */}
            <div className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
                <Image
                    src={tower.image}
                    alt={tower.name}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                <div className="container mx-auto px-4 relative h-full flex flex-col justify-end pb-16">
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-3xl"
                    >
                        <Badge className="mb-4 bg-white text-blue-600 hover:bg-white shadow-md">
                            <Star className="h-3 w-3 mr-1" />
                            Premium Tower
                        </Badge>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 drop-shadow-lg">{tower.name}</h1>
                        <div className="flex items-center text-white/90">
                            <MapPin className="h-5 w-5 mr-1" />
                            <span>{tower.address}</span>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Left Column */}
                    <div className="lg:col-span-2">
                        {/* Overview */}
                        <section className="mb-12">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-3xl font-bold mb-6 text-gray-900"
                            >
                                Tower Overview
                            </motion.h2>

                            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
                                {[
                                    { icon: <Layers className="h-5 w-5 text-blue-600" />, label: 'Floors', value: tower.floors },
                                    { icon: <Ruler className="h-5 w-5 text-blue-600" />, label: 'Height', value: '320m' },
                                    { icon: <Bed className="h-5 w-5 text-blue-600" />, label: 'Units', value: tower.availableUnits },
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        whileHover={{ y: -5 }}
                                        className="bg-white p-5 rounded-xl shadow-sm border border-gray-100"
                                    >
                                        <div className="flex items-center mb-3">
                                            {item.icon}
                                            <span className="font-medium text-gray-700 ml-2">{item.label}</span>
                                        </div>
                                        <span className="text-2xl font-bold text-gray-900">{item.value}</span>
                                    </motion.div>
                                ))}
                            </div>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                viewport={{ once: true }}
                                className="text-gray-700 leading-relaxed"
                            >
                                {tower.name} is a masterpiece of modern architecture, offering unparalleled luxury in the heart of the city.
                                With breathtaking views, world-class amenities, and exceptional design, this tower redefines urban living.
                                The tower features floor-to-ceiling windows, smart home technology, and premium finishes throughout.
                            </motion.p>
                        </section>

                        {/* Floor Selection */}
                        <section className="mb-12">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-3xl font-bold mb-6 text-gray-900"
                            >
                                {selectedFloor ? `Floor ${selectedFloor}` : 'Select a Floor'}
                            </motion.h2>

                            {!selectedFloor ? (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 gap-3"
                                >
                                    {floors.map(floor => (
                                        <motion.button
                                            key={floor}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => setSelectedFloor(floor)}
                                            className={`p-4 rounded-xl text-center transition-all ${floor % 10 === 0
                                                ? 'bg-blue-600 text-white shadow-lg hover:bg-blue-700'
                                                : 'bg-white text-gray-700 shadow-sm hover:shadow-md border border-gray-200'
                                                }`}
                                        >
                                            {floor}
                                        </motion.button>
                                    ))}
                                </motion.div>
                            ) : (
                                <>
                                    <motion.button
                                        onClick={() => setSelectedFloor(null)}
                                        whileHover={{ x: -3 }}
                                        className="flex items-center text-blue-600 hover:text-blue-800 mb-6"
                                    >
                                        <ChevronRight className="h-5 w-5 rotate-180 mr-1" />
                                        Back to all floors
                                    </motion.button>

                                    {/* Integrated FloorLayouts component */}
                                    <FloorLayouts floorNumber={selectedFloor} />
                                </>
                            )}
                        </section>

                        {/* Gallery */}
                        {!selectedFloor && (
                            <section className="mb-12">
                                <motion.h2
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="text-3xl font-bold mb-6 text-gray-900"
                                >
                                    Gallery
                                </motion.h2>

                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    {[1, 2, 3, 4, 5, 6].map((item) => (
                                        <motion.div
                                            key={item}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.5 }}
                                            viewport={{ once: true }}
                                            whileHover={{ scale: 1.02 }}
                                            className="aspect-square relative overflow-hidden rounded-xl shadow-sm"
                                        >
                                            <Image
                                                src={`/gallery-${item}.jpg`}
                                                alt="Tower gallery"
                                                fill
                                                className="object-cover hover:scale-105 transition-transform duration-300"
                                            />
                                        </motion.div>
                                    ))}
                                </div>
                            </section>
                        )}
                    </div>

                    {/* Right Column - Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24 space-y-6">
                            {/* Pricing Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm"
                            >
                                <h3 className="text-xl font-bold mb-4 text-gray-900">Pricing & Availability</h3>
                                <div className="space-y-4 mb-6">
                                    <div>
                                        <p className="text-gray-600">Starting Price</p>
                                        <p className="text-2xl font-bold text-blue-600">${tower.startingPrice.toLocaleString()}</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-600">Completion Date</p>
                                        <p className="font-medium text-blue-600">{tower.completionDate}</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-600">Available Units</p>
                                        <p className="font-medium text-blue-600">{tower.availableUnits} remaining</p>
                                    </div>
                                </div>

                                <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                                    <Button className="w-full bg-blue-600 hover:bg-blue-700 mb-4 shadow-md">
                                        Schedule a Tour
                                    </Button>
                                </motion.div>
                                <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                                    <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">
                                        Download Brochure
                                    </Button>
                                </motion.div>

                                <div className="mt-8 pt-6 border-t border-gray-200">
                                    <h4 className="font-medium mb-3 text-gray-900">Contact Sales</h4>
                                    <p className="text-gray-600 mb-4">Our team is ready to assist you with any questions.</p>
                                    <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                                        <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">
                                            <Phone className="h-4 w-4 mr-2" />
                                            Contact Agent
                                        </Button>
                                    </motion.div>
                                </div>
                            </motion.div>

                            {/* Amenities Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm"
                            >
                                <h3 className="text-xl font-bold mb-4 text-gray-900">Tower Amenities</h3>
                                <div className="space-y-3">
                                    {[
                                        'Infinity Pool with Sky Deck',
                                        '24/7 Concierge Service',
                                        'State-of-the-Art Fitness Center',
                                        'Residents Lounge with Bar',
                                        'Private Dining Rooms',
                                        'Spa & Wellness Center',
                                        'Business Center',
                                        'Children\'s Playroom',
                                        'Pet Spa & Grooming',
                                        'Private Cinema'
                                    ].map((amenity, index) => (
                                        <motion.div
                                            key={index}
                                            whileHover={{ x: 5 }}
                                            className="flex items-start"
                                        >
                                            <div className="bg-blue-100 p-1 rounded-full mr-3 mt-0.5 flex-shrink-0">
                                                <Star className="h-3 w-3 text-blue-600" />
                                            </div>
                                            <span className="text-gray-700">{amenity}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}