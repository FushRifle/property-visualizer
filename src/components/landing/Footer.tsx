import { Building2, MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import Link from 'next/link'

export function Footer() {
    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

                    {/* Company Info */}
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <Building2 className="h-6 w-6 text-blue-400" />
                            <span className="text-xl font-bold">Propertyvisualizer</span>
                        </div>
                        <p className="text-gray-400 mb-6">
                            Redefining luxury living with exceptional design and unparalleled amenities.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Twitter className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Linkedin className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-3">
                            <li><Link href="/towers" className="text-gray-400 hover:text-white transition-colors">Our Towers</Link></li>
                            <li><Link href="/locations" className="text-gray-400 hover:text-white transition-colors">Locations</Link></li>
                            <li><Link href="/amenities" className="text-gray-400 hover:text-white transition-colors">Amenities</Link></li>
                            <li><Link href="/gallery" className="text-gray-400 hover:text-white transition-colors">Gallery</Link></li>
                            <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3">
                                <MapPin className="h-5 w-5 text-blue-400 mt-0.5" />
                                <span className="text-gray-400">123 Luxury Avenue, Miami, FL 33139</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone className="h-5 w-5 text-blue-400" />
                                <span className="text-gray-400">+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail className="h-5 w-5 text-blue-400" />
                                <span className="text-gray-400">info@elitetowers.com</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Clock className="h-5 w-5 text-blue-400" />
                                <span className="text-gray-400">Mon-Fri: 9AM - 6PM</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
                        <p className="text-gray-400 mb-4">
                            Subscribe to our newsletter for the latest updates and offers.
                        </p>
                        <form className="flex flex-col space-y-3">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                                required
                            />
                            <button
                                type="submit"
                                className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
                    <p>© {new Date().getFullYear()} EliteTowers. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}