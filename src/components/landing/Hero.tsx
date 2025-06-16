'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export function HeroSection() {
    return (
        <section className="relative min-h-[90vh] bg-black flex flex-col items-center justify-center px-4 py-12">
            {/* Central Tower Image (not background) */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="relative w-full max-w-3xl h-[60vh]"
            >
                <Image
                    src="/towers/hero-b.avif"
                    alt="Tower Hero"
                    fill
                    className="object-contain"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 via-transparent to-purple-500/10 mix-blend-overlay" />
            </motion.div>

            {/* Content Below Image */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="mt-8 text-center max-w-2xl z-10"
            >
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
                        Redefining Urban Luxury
                    </span>
                </h1>

                <p className="text-white/80 text-lg mb-8">
                    Discover unparalleled living in our signature towers, where cutting-edge design meets timeless elegance.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Button
                        size="lg"
                        className="bg-white text-black hover:bg-white/90 transition-all"
                        asChild
                    >
                        <Link href="/towers">Explore Properties</Link>
                    </Button>
                    <Button
                        variant="outline"
                        size="lg"
                        className="text-white border-white hover:bg-white/10"
                    >
                        Virtual Tours
                    </Button>
                </div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
            >
                <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
                    <motion.div
                        animate={{ y: [0, 6, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="w-1 h-2 bg-white rounded-full mt-2"
                    />
                </div>
            </motion.div>
        </section>
    );
}
