"use client";

import { X, ZoomIn, ZoomOut, RotateCw, Download, Expand } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/Dialog";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

type FloorPlanModalProps = {
    floor: {
        number: number;
        planImage: string;
        apartments: Array<{
            id: string;
            type: string;
            area: number;
            position: { x: number; y: number; width: number; height: number };
        }>;
    };
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onApartmentSelect?: (apartmentId: string) => void;
};

export function FloorPlanModal({
    floor,
    open,
    onOpenChange,
    onApartmentSelect,
}: FloorPlanModalProps) {
    const [zoom, setZoom] = useState(1);
    const [rotation, setRotation] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startPos, setStartPos] = useState({ x: 0, y: 0 });
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [selectedApartment, setSelectedApartment] = useState<string | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);

    // Reset zoom and position when modal opens/closes
    useEffect(() => {
        if (open) {
            setZoom(1);
            setPosition({ x: 0, y: 0 });
            setRotation(0);
            setSelectedApartment(null);
        }
    }, [open]);

    const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.25, 3));
    const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.25, 0.5));
    const handleReset = () => {
        setZoom(1);
        setPosition({ x: 0, y: 0 });
        setRotation(0);
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        setStartPos({ x: e.clientX - position.x, y: e.clientY - position.y });
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return;
        setPosition({
            x: e.clientX - startPos.x,
            y: e.clientY - startPos.y,
        });
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        if (e.touches.length === 1) {
            setIsDragging(true);
            setStartPos({
                x: e.touches[0].clientX - position.x,
                y: e.touches[0].clientY - position.y,
            });
        }
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (!isDragging || e.touches.length !== 1) return;
        setPosition({
            x: e.touches[0].clientX - startPos.x,
            y: e.touches[0].clientY - startPos.y,
        });
    };

    const handleApartmentClick = (apartmentId: string) => {
        setSelectedApartment(apartmentId);
        if (onApartmentSelect) {
            onApartmentSelect(apartmentId);
        }
    };

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = floor.planImage;
        link.download = `floor-${floor.number}-plan.jpg`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-6xl p-0 overflow-hidden">
                <DialogHeader className="border-b p-4">
                    <div className="flex justify-between items-center">
                        <DialogTitle className="text-xl">
                            Floor {floor.number} Plan
                        </DialogTitle>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => onOpenChange(false)}
                        >
                            <X className="h-5 w-5" />
                        </Button>
                    </div>
                </DialogHeader>

                <div className="flex flex-col lg:flex-row h-[70vh]">
                    <div className="flex-1 relative overflow-hidden bg-gray-50">
                        <div
                            ref={containerRef}
                            className={cn(
                                "w-full h-full relative overflow-hidden",
                                isDragging ? "cursor-grabbing" : "cursor-grab"
                            )}
                            onMouseDown={handleMouseDown}
                            onMouseMove={handleMouseMove}
                            onMouseUp={handleMouseUp}
                            onMouseLeave={handleMouseUp}
                            onTouchStart={handleTouchStart}
                            onTouchMove={handleTouchMove}
                            onTouchEnd={handleMouseUp}
                        >
                            <div
                                className="absolute inset-0 transition-transform duration-200"
                                style={{
                                    transform: `translate(${position.x}px, ${position.y}px) scale(${zoom}) rotate(${rotation}deg)`,
                                }}
                            >
                                <Image
                                    ref={imageRef}
                                    src={floor.planImage}
                                    alt={`Floor ${floor.number} plan`}
                                    fill
                                    className="object-contain"
                                    priority
                                />

                                {/* Apartment highlights */}
                                {floor.apartments.map(apartment => (
                                    <button
                                        key={apartment.id}
                                        className={cn(
                                            "absolute border-2 rounded-md transition-all duration-200",
                                            "flex items-center justify-center text-xs font-medium",
                                            selectedApartment === apartment.id
                                                ? "border-blue-500 bg-blue-500/20 z-10"
                                                : "border-transparent hover:border-blue-300 hover:bg-blue-100/30 z-0"
                                        )}
                                        style={{
                                            left: `${apartment.position.x}%`,
                                            top: `${apartment.position.y}%`,
                                            width: `${apartment.position.width}%`,
                                            height: `${apartment.position.height}%`,
                                        }}
                                        onClick={() => handleApartmentClick(apartment.id)}
                                    >
                                        {selectedApartment === apartment.id && (
                                            <span className="bg-blue-500 text-white px-2 py-1 rounded">
                                                {apartment.type}
                                            </span>
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Controls */}
                        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                            <div className="flex space-x-2">
                                <Button
                                    variant="outline"
                                    size="icon"
                                    onClick={handleZoomIn}
                                    title="Zoom in"
                                >
                                    <ZoomIn className="h-4 w-4" />
                                </Button>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    onClick={handleZoomOut}
                                    title="Zoom out"
                                >
                                    <ZoomOut className="h-4 w-4" />
                                </Button>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    onClick={() => setRotation(prev => (prev + 90) % 360)}
                                    title="Rotate"
                                >
                                    <RotateCw className="h-4 w-4" />
                                </Button>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    onClick={handleReset}
                                    title="Reset view"
                                >
                                    <Expand className="h-4 w-4" />
                                </Button>
                            </div>
                            <Button
                                variant="outline"
                                onClick={handleDownload}
                                className="space-x-2"
                            >
                                <Download className="h-4 w-4" />
                                <span>Download</span>
                            </Button>
                        </div>
                    </div>

                    {/* Side panel */}
                    <div className="w-full lg:w-80 border-t lg:border-t-0 lg:border-l p-4 overflow-y-auto">
                        <Tabs defaultValue="details">
                            <TabsList className="grid w-full grid-cols-2">
                                <TabsTrigger value="details">Details</TabsTrigger>
                                <TabsTrigger value="apartments">Apartments</TabsTrigger>
                            </TabsList>

                            <TabsContent value="details" className="mt-4 space-y-4">
                                <div>
                                    <h4 className="font-medium">Floor Overview</h4>
                                    <p className="text-sm text-gray-600 mt-1">
                                        This is the detailed layout of floor {floor.number} showing all apartment units, common areas, and building features.
                                    </p>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex justify-between">
                                        <span className="text-sm text-gray-500">Total Area</span>
                                        <span className="text-sm font-medium">
                                            {floor.apartments.reduce((sum, apt) => sum + apt.area, 0)} sq.ft
                                        </span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-sm text-gray-500">Units</span>
                                        <span className="text-sm font-medium">
                                            {floor.apartments.length}
                                        </span>
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="apartments" className="mt-4 space-y-3">
                                {floor.apartments.map(apartment => (
                                    <div
                                        key={apartment.id}
                                        className={cn(
                                            "p-3 rounded-lg border cursor-pointer transition-colors",
                                            selectedApartment === apartment.id
                                                ? "border-blue-500 bg-blue-50"
                                                : "border-gray-200 hover:border-blue-300"
                                        )}
                                        onClick={() => handleApartmentClick(apartment.id)}
                                    >
                                        <div className="flex justify-between">
                                            <span className="font-medium">{apartment.type}</span>
                                            <span className="text-sm text-gray-600">
                                                {apartment.area} sq.ft
                                            </span>
                                        </div>
                                        <div className="text-xs text-gray-500 mt-1">
                                            Position: {apartment.position.x}%, {apartment.position.y}%
                                        </div>
                                    </div>
                                ))}
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}