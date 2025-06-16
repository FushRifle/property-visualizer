"use client";

import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { FloorPlanModal } from "./FloorPlanModal";

export function Floor3DViewer({ floor }: { floor: Floor }) {
    const [viewMode, setViewMode] = useState<"2d" | "3d">("2d");

    return (
        <div className="bg-gray-50 rounded-xl p-6 shadow-inner border border-gray-200">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Floor {floor.number} Layout</h3>
                <div className="flex space-x-2">
                    <button
                        onClick={() => setViewMode("2d")}
                        className={`px-3 py-1 text-sm rounded-md ${viewMode === "2d" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
                            }`}
                    >
                        2D View
                    </button>
                    <button
                        onClick={() => setViewMode("3d")}
                        className={`px-3 py-1 text-sm rounded-md ${viewMode === "3d" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
                            }`}
                    >
                        3D View
                    </button>
                </div>
            </div>

            {viewMode === "2d" ? (
                <FloorMap floor={floor} />
            ) : (
                <div className="h-96 w-full bg-black rounded-lg overflow-hidden relative">
                    <Canvas camera={{ position: [10, 10, 10], fov: 50 }}>
                        <Suspense fallback={null}>
                            <ambientLight intensity={0.5} />
                            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                            <FloorPlanModel floor={floor} />
                            <Environment preset="city" />
                            <OrbitControls
                                enablePan={true}
                                enableZoom={true}
                                enableRotate={true}
                                minPolarAngle={Math.PI / 6}
                                maxPolarAngle={Math.PI / 2}
                            />
                        </Suspense>
                    </Canvas>
                </div>
            )}
        </div>
    );
}