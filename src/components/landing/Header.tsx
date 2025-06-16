"use client";

import Link from "next/link";
import { Building2, MapPin, Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useState } from "react";

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-gray-900/90 backdrop-blur border-b border-gray-800 shadow-sm">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <Building2 className="h-6 w-6 text-blue-500" />
                        <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-blue-300 bg-clip-text text-transparent">
                            PropertyVisualizer
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <HeaderLink href="/towers" label="Our Towers" />
                        <HeaderLink href="/locations" label="Locations" />
                        <HeaderLink href="/about" label="About Us" />
                        <HeaderLink href="/contact" label="Contact" />
                    </nav>

                    {/* CTA Buttons */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Button variant="ghost" className="text-white hover:text-blue-500 transition">
                            <Phone className="h-4 w-4 mr-2" />
                            +1 (555) 123-4567
                        </Button>
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white">Schedule Tour</Button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        aria-label="Toggle menu"
                        className="md:hidden p-2 text-white focus:outline-none"
                        onClick={() => setMobileMenuOpen((prev) => !prev)}
                    >
                        {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {mobileMenuOpen && (
                    <div className="md:hidden mt-2 border-t border-gray-700 pt-4 space-y-3">
                        <MobileLink href="/towers" label="Our Towers" />
                        <MobileLink href="/locations" label="Locations" />
                        <MobileLink href="/about" label="About Us" />
                        <MobileLink href="/contact" label="Contact" />

                        <div className="pt-4 border-t border-gray-700 space-y-3">
                            <Button variant="ghost" className="w-full justify-center text-white hover:text-blue-500">
                                <Phone className="h-4 w-4 mr-2" />
                                Call Us
                            </Button>
                            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                                Schedule Tour
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}

function HeaderLink({ href, label }: { href: string; label: string }) {
    return (
        <Link
            href={href}
            className="text-gray-300 hover:text-blue-500 font-medium transition-colors"
        >
            {label}
        </Link>
    );
}

function MobileLink({ href, label }: { href: string; label: string }) {
    return (
        <Link
            href={href}
            className="block w-full text-white px-3 py-2 rounded-md font-medium hover:bg-gray-800 transition"
        >
            {label}
        </Link>
    );
}
