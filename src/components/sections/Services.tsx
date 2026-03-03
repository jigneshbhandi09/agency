"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Star } from "lucide-react";

const services = [
    {
        title: "Excel Data Operations",
        slug: "data-entry",
        category: "Data Mgmt",
        description: "Flawless, organized, and secure data handling, cleaning, and formatting to keep your business operations running efficiently.",
        price: "From $50",
        rating: "5.0 (124 reviews)",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    },
    {
        title: "Canva & Visual Design",
        slug: "graphic-design",
        category: "Design",
        description: "Eye-catching posters, social media assets, and visuals designed in Canva to make your message impossible to ignore.",
        price: "From $150",
        rating: "4.9 (89 reviews)",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
    },
    {
        title: "Figma to Next.js Code",
        slug: "figma-to-code",
        category: "Development",
        description: "Pixel-perfect translation of your Figma screens into responsive, production-ready React or Next.js code blocks.",
        price: "From $300",
        rating: "5.0 (42 reviews)",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    },
    {
        title: "Website Design & Replatforming",
        slug: "website-design",
        category: "Web & UX",
        description: "Stunning, high-performance web experiences tailored to elevate your brand identity and drive measurable conversions.",
        price: "From $900",
        rating: "4.8 (60 reviews)",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
    },
    {
        title: "SEO Copywriting",
        slug: "copywriting",
        category: "Content",
        description: "Persuasive, highly-optimized content that captures your voice and organically compells your audience to take action.",
        price: "From $100",
        rating: "4.9 (110 reviews)",
        image: "https://images.unsplash.com/photo-1455390582262-044cdead27d8?w=800&q=80",
    },
];

export function Services() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: targetRef });

    // Map the 0-1 vertical scroll progress to 0% -> -80% horizontal translation
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

    return (
        <section ref={targetRef} id="services" className="relative h-[300vh] bg-background border-t border-white/5">
            <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-8 shrink-0">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl border-b-2 border-primary/20 pb-4 inline-block">
                            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-500">Expertise</span>
                        </h2>
                        <p className="mt-6 max-w-2xl text-lg text-muted-foreground/80">
                            We deliver premium solutions across core disciplines to help your business scale effortlessly. Browse our available gigs below.
                        </p>
                    </motion.div>
                </div>

                <motion.div style={{ x }} className="flex gap-8 px-4 sm:px-6 lg:px-8 w-[max-content]">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.slug}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                            className="w-[85vw] sm:w-[450px] shrink-0"
                        >
                            <Link
                                href={`/services/${service.slug}`}
                                className="group relative flex flex-col h-full overflow-hidden rounded-2xl bg-white/[0.02] shadow-2xl ring-1 ring-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(99,102,241,0.15)] hover:ring-indigo-500/40"
                            >
                                {/* Spotlight Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />

                                {/* Realistic Thumbnail */}
                                <div className="relative h-56 w-full overflow-hidden border-b border-white/5">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 md:mix-blend-luminosity hover:mix-blend-normal opacity-80"
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                    />
                                    <div className="absolute top-4 left-4 rounded-full border border-white/20 bg-black/60 backdrop-blur-md px-3 py-1 text-xs font-semibold text-white">
                                        {service.category}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-8 flex-1 flex flex-col relative z-10 transition-colors duration-300 bg-transparent">
                                    <div className="flex items-start justify-between gap-4 mb-4">
                                        <h3 className="text-xl font-bold text-foreground group-hover:text-indigo-400 transition-colors">
                                            {service.title}
                                        </h3>
                                    </div>

                                    <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                                        {service.description}
                                    </p>

                                    <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                                        <div className="flex items-center gap-1.5 border border-indigo-500/20 bg-indigo-500/10 px-2.5 py-1 rounded-full">
                                            <Star className="text-indigo-400 fill-indigo-400" size={12} />
                                            <span className="text-xs font-medium text-indigo-300">{service.rating}</span>
                                        </div>
                                        <span className="font-bold text-white text-lg">
                                            {service.price}
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section >
    );

};
