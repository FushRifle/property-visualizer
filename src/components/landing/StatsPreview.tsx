'use client';

import { motion } from 'framer-motion';

const stats = [
    { value: '450+', label: 'Properties Listed' },
    { value: '1.2K+', label: 'Happy Clients' },
    { value: '25+', label: 'Cities Covered' },
    { value: '10 Years', label: 'In Real Estate' },
];

export function StatsPreview() {
    return (
        <section className="bg-white dark:bg-neutral-900 py-20 px-4">
            <div className="max-w-6xl mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6"
                >
                    Trusted by Thousands Across the Country
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12"
                >
                    We’ve helped individuals and families find their dream homes for over a decade.
                </motion.p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.15 }}
                            className="text-center"
                        >
                            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">{stat.value}</div>
                            <div className="text-gray-700 dark:text-gray-300 text-sm mt-1">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
