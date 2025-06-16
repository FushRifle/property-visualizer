// src/components/ErrorBoundary.tsx
"use client";

import { useEffect } from "react";

export function ErrorBoundary({ error, reset }: { error: Error; reset: () => void }) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="flex flex-col items-center justify-center h-screen space-y-4">
            <h2 className="text-2xl font-bold">Something went wrong!</h2>
            <p className="text-gray-600">{error.message}</p>
            <button
                onClick={() => reset()}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
                Try again
            </button>
        </div>
    );
}