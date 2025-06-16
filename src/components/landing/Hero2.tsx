'use client';

import React, { useState } from 'react';
import { SearchIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

type SearchTab = 'buy' | 'rent' | 'invest';

const HeroSection = () => {
    const [activeTab, setActiveTab] = useState<SearchTab>('buy');
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Searching for:', searchQuery, activeTab);
    };

    const tabVariants = {
        active: { backgroundColor: '#EFF6FF', color: '#2563EB' },
        inactive: { backgroundColor: '#FFFFFF', color: '#6B7280' },
    };

    return (
        <div className='relative mx-auto'>
            <main className="relative flex flex-col lg:flex-row min-h-[80vh] bg-black text-white">

                {/* Left Section */}
                <div className="flex-1 px-6 py-16 lg:px-12 lg:py-24 xl:px-24 flex flex-col justify-center z-10 bg-gradient-to-br from-white/5 via-white/10 to-white/5 backdrop-blur-md">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
                            Discover Your Perfect <span className="text-blue-500">Dream Home</span>
                        </h1>
                        <p className="text-lg md:text-xl text-white/70 mb-10 max-w-3xl">
                            Explore thousands of properties and find the perfect match with our AI-powered real estate platform.
                        </p>
                    </motion.div>

                    {/* Search Box */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg p-8 mb-14 max-w-4xl w-full"
                    >
                        {/* Tabs */}
                        <div className="flex space-x-2 mb-6">
                            {(['buy', 'rent', 'invest'] as SearchTab[]).map((tab) => (
                                <motion.button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    animate={activeTab === tab ? 'active' : 'inactive'}
                                    variants={tabVariants}
                                    transition={{ duration: 0.2 }}
                                    className="px-4 py-2 rounded-lg font-medium text-sm"
                                >
                                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                                </motion.button>
                            ))}
                        </div>

                        {/* Search Form */}
                        <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4 w-full">
                            <div className="relative flex-1">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <SearchIcon className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="block w-full pl-10 pr-4 py-3 rounded-lg bg-white text-gray-800 placeholder-gray-500 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                    placeholder="Enter city, neighborhood, or address"
                                />
                            </div>
                            <Button
                                type="submit"
                                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow transition-all w-full sm:w-auto"
                            >
                                Search
                            </Button>
                        </form>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-wrap gap-6 md:gap-10"
                    >
                        <StatItem number="10K+" label="Properties" />
                        <StatItem number="95%" label="Happy Clients" />
                        <StatItem number="24/7" label="Support" />
                        <StatItem number="500+" label="Virtual Tours" />
                    </motion.div>

                </div>

                {/* Right Section */}
                <div className="md:block hidden flex-1 relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-white/5 via-white/10 to-white/5 backdrop-blur-md">
                    <div className="relative z-10 min-h-[90vh] flex flex-col items-center justify-center px-6 py-12">
                        {/* Tower Image */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="relative w-full max-w-3xl h-[50vh]"
                        >
                            <Image
                                src="/towers/hero-b.avif"
                                alt="Luxury Tower"
                                fill
                                className="object-cover rounded-xl"
                                priority
                                quality={100}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 via-transparent to-purple-500/10 mix-blend-overlay rounded-xl" />
                        </motion.div>

                        {/* CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="mt-8 text-center max-w-2xl z-10"
                        >
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
                                    Redefining Urban Luxury
                                </span>
                            </h2>

                            <p className="text-white/80 text-lg mb-8">
                                Discover unparalleled living in our signature towers, where cutting-edge design meets timeless elegance.
                            </p>

                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <Button
                                    size="lg"
                                    className="bg-white text-black hover:bg-white/90 transition-all hover:scale-105"
                                    asChild
                                >
                                    <Link href="/towers">Explore Properties</Link>
                                </Button>
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="text-white border-white hover:bg-white/10 hover:scale-105 transition-all"
                                    asChild
                                >
                                    <Link href="/virtual-tours">Virtual Tours</Link>
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </main>

            {/* Scroll Indicator */}
            <div className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 z-10">
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                >
                    <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
                        <motion.div
                            animate={{ y: [0, 6, 0] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                            className="w-1 h-2 bg-white rounded-full mt-2"
                        />
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

// Stat Box
const StatItem: React.FC<{ number: string; label: string }> = ({ number, label }) => (
    <motion.div
        whileHover={{ scale: 1.05 }}
        className="flex flex-col p-4 rounded-xl bg-white/10 backdrop-blur-sm text-white shadow"
    >
        <span className="text-2xl md:text-3xl font-bold">{number}</span>
        <span className="text-sm md:text-base text-white/70">{label}</span>
    </motion.div>
);

export default HeroSection;
