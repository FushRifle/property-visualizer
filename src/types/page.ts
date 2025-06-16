export type Tower = {
    id: string;
    name: string;
    image: string;
    address: string;
    floors: number;
    availableUnits: number;
    startingPrice: number;
    completionDate: string;
    amenities: string[];
    architect: string;
    description: string;
};

export type Floor = {
    id: string;
    number: number;
    apartments: Apartment[];
    floorPlanImage: string;
};

export type Apartment = {
    id: string;
    type: string;
    area: number;
    rooms: number;
    price: number;
    status: "available" | "reserved" | "sold";
    images: string[];
    thumbnail: string;
    layout: string;
    features: string[];
    description: string;
    position: {
        x: number;
        y: number;
        width: number;
        height: number;
    };
    virtualTour?: string;
    floorPlan3D?: string;
};