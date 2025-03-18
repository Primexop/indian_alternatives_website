"use client";

import { HeroSection } from "./components/heroSection";
import { ImpactAreas } from "./components/impactAreas";
import { FeaturedInitiatives } from "./components/featuredInitiatives";

export default function Home() {
    return (
        <main>
            <HeroSection />
            <ImpactAreas />
            <FeaturedInitiatives />
        </main>
    );
}
