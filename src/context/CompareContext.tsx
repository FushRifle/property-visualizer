"use client"

import { createContext, useContext, useState, ReactNode } from "react"
import { Apartment } from "@/types/page"

type CompareContextType = {
    comparedApartments: Apartment[]
    addToCompare: (apartment: Apartment) => void
    removeFromCompare: (id: string) => void
    toggleCompare: (apartment: Apartment) => void
    isInCompare: (id: string) => boolean
    clearCompare: () => void
}

const CompareContext = createContext<CompareContextType | null>(null)

export function CompareProvider({ children }: { children: ReactNode }) {
    const [comparedApartments, setComparedApartments] = useState<Apartment[]>([])

    const addToCompare = (apartment: Apartment) => {
        if (comparedApartments.length >= 3) return
        if (!comparedApartments.some(apt => apt.id === apartment.id)) {
            setComparedApartments([...comparedApartments, apartment])
        }
    }

    const removeFromCompare = (id: string) => {
        setComparedApartments(comparedApartments.filter(apt => apt.id !== id))
    }

    const toggleCompare = (apartment: Apartment) => {
        if (isInCompare(apartment.id)) {
            removeFromCompare(apartment.id)
        } else {
            addToCompare(apartment)
        }
    }

    const isInCompare = (id: string) => {
        return comparedApartments.some(apt => apt.id === id)
    }

    const clearCompare = () => {
        setComparedApartments([])
    }

    return (
        <CompareContext.Provider
            value={{
                comparedApartments,
                addToCompare,
                removeFromCompare,
                toggleCompare,
                isInCompare,
                clearCompare,
            }}
        >
            {children}
        </CompareContext.Provider>
    )
}

export function useCompare() {
    const context = useContext(CompareContext)
    if (!context) {
        throw new Error("useCompare must be used within a CompareProvider")
    }
    return context
}