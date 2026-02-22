"use client";

import { motion } from "framer-motion";

const stats = [
    { value: "150+", label: "Projects Delivered" },
    { value: "99%", label: "Client Satisfaction" },
    { value: "5+", label: "Years Experience" },
    { value: "24/7", label: "Priority Support" },
];

export function Stats() {
    return (
        <section className="relative py-16 bg-background border-y border-white/5 overflow-hidden">

            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="flex flex-col items-center justify-center text-center group"
                        >
                            <span className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
                                {stat.value}
                            </span>
                            <span className="mt-2 text-sm md:text-base font-medium text-muted-foreground uppercase tracking-widest">
                                {stat.label}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
