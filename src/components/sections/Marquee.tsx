"use client";

import { motion } from "framer-motion";

const brands = [
    "lTech", "Nexus Systems", "Quantum Data", "Horizon AI", "Vertex Solutions"
];

export function Marquee() {
    return (
        <section className="relative w-full overflow-hidden bg-background py-16 border-y border-white/5">
            {/* Fade Edges */}
            <div className="absolute left-0 top-0 z-10 h-full w-[100px] bg-gradient-to-r from-background to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 z-10 h-full w-[100px] bg-gradient-to-l from-background to-transparent pointer-events-none" />

            <motion.div
                className="flex w-max items-center gap-24 pr-24"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 30,
                }}
            >
                {[...brands, ...brands, ...brands, ...brands].map((brand, i) => (
                    <div
                        key={i}
                        className="flex items-center justify-center whitespace-nowrap text-xl font-bold tracking-tight text-white/40 uppercase transition-colors hover:text-white/80"
                    >
                        {brand}
                    </div>
                ))}
            </motion.div>
        </section>
    );
}
