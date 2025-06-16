"use client";

import { X, Heart, Share2, Printer, Copy, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import { useCompare } from "@/context/CompareContext";
import Image from "next/image";
import { useState } from "react";
import { Apartment } from "@/types/page";

export function ApartmentModal({
    apartment,
    onClose,
    onNext,
    onPrev,
    hasNext,
    hasPrev,
}: {
    apartment: Apartment;
    onClose: () => void;
    onNext: () => void;
    onPrev: () => void;
    hasNext: boolean;
    hasPrev: boolean;
}) {
    const { toggleCompare, isInCompare } = useCompare();
    const [currentImage, setCurrentImage] = useState(0);

    return (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl max-w-6xl w-full max-h-[90vh] overflow-hidden flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b">
                    <h3 className="text-xl font-semibold">{apartment.type} - {apartment.area} sq.ft</h3>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                        <X className="h-6 w-6" />
                    </button>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-auto grid grid-cols-1 lg:grid-cols-2">
                    {/* Images */}
                    <div className="relative h-full min-h-[400px] border-r">
                        <Image
                            src={apartment.images[currentImage]}
                            alt={apartment.type}
                            fill
                            className="object-cover"
                        />

                        {/* Navigation arrows */}
                        {hasPrev && (
                            <button
                                onClick={onPrev}
                                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white"
                            >
                                <ArrowLeft className="h-5 w-5" />
                            </button>
                        )}
                        {hasNext && (
                            <button
                                onClick={onNext}
                                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white"
                            >
                                <ArrowRight className="h-5 w-5" />
                            </button>
                        )}

                        {/* Thumbnails */}
                        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                            {apartment.images.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentImage(idx)}
                                    className={`h-2 w-2 rounded-full ${currentImage === idx ? "bg-blue-600" : "bg-white/50"
                                        }`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Details */}
                    <div className="p-6 overflow-auto">
                        <Tabs defaultValue="details" className="w-full">
                            <TabsList className="grid grid-cols-3 w-full">
                                <TabsTrigger value="details">Details</TabsTrigger>
                                <TabsTrigger value="floorplan">Floor Plan</TabsTrigger>
                                <TabsTrigger value="location">Location</TabsTrigger>
                            </TabsList>

                            <TabsContent value="details" className="mt-4 space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <h4 className="text-sm text-gray-500">Type</h4>
                                        <p className="font-medium">{apartment.type}</p>
                                    </div>
                                    <div>
                                        <h4 className="text-sm text-gray-500">Area</h4>
                                        <p className="font-medium">{apartment.area} sq.ft</p>
                                    </div>
                                    <div>
                                        <h4 className="text-sm text-gray-500">Rooms</h4>
                                        <p className="font-medium">{apartment.rooms}</p>
                                    </div>
                                    <div>
                                        <h4 className="text-sm text-gray-500">Price</h4>
                                        <p className="font-medium">${apartment.price.toLocaleString()}</p>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-sm text-gray-500">Description</h4>
                                    <p className="mt-1">{apartment.description}</p>
                                </div>

                                <div>
                                    <h4 className="text-sm text-gray-500">Features</h4>
                                    <div className="mt-2 flex flex-wrap gap-2">
                                        {apartment.features.map((feature) => (
                                            <span
                                                key={feature}
                                                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                                            >
                                                {feature}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="floorplan">
                                {/* Floor plan content */}
                            </TabsContent>

                            <TabsContent value="location">
                                {/* Location content */}
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>

                {/* Footer */}
                <div className="p-4 border-t flex justify-between items-center">
                    <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                            <Heart className="h-4 w-4 mr-2" />
                            Save
                        </Button>
                        <Button variant="outline" size="sm">
                            <Share2 className="h-4 w-4 mr-2" />
                            Share
                        </Button>
                        <Button variant="outline" size="sm">
                            <Printer className="h-4 w-4 mr-2" />
                            Print
                        </Button>
                    </div>
                    <div className="flex space-x-3">
                        <Button
                            variant={isInCompare(apartment.id) ? "default" : "outline"}
                            size="sm"
                            onClick={() => toggleCompare(apartment)}
                        >
                            <Copy className="h-4 w-4 mr-2" />
                            {isInCompare(apartment.id) ? "In Compare" : "Compare"}
                        </Button>
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                            Contact Agent
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}