"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { section } from "framer-motion/client";

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
    return (
        <section id="services" className="relative py-32 bg-[#000000] border-t border-white/5 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16">
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

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.slug}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <Link
                                href={`/services/${service.slug}`}
                                className="group relative flex flex-col h-full overflow-hidden rounded-2xl bg-[#09090b] shadow-2xl ring-1 ring-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(99,102,241,0.15)] hover:ring-indigo-500/40"
                            >
                                {/* Spotlight Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />

                                {/* Realistic Thumbnail */}
                                <div className="relative h-48 w-full overflow-hidden border-b border-white/5">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 md:mix-blend-luminosity hover:mix-blend-normal opacity-80"
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                    />
                                </div>

                                <div className="p-6 flex-1 flex flex-col relative z-10 transition-colors duration-300 bg-[#09090b]">
                                    <div className="flex justify-between items-start mb-6 mt-[-40px]">
                                        <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-sm bg-black text-white shadow-xl border border-white/10 z-20">
                                            {service.category}
                                        </span>
                                    </div>
                                    <h3 className="mb-3 text-xl font-bold text-white/90 group-hover:text-white transition-colors line-clamp-2">
                                        {service.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed flex-1 line-clamp-3 mb-6 font-medium">
                                        {service.description}
                                    </p>

                                    {/* Bottom Meta mimicking premium Fiverr/Upwork Enterprise */}
                                    <div className="mt-auto pt-6 border-t border-white/10 flex items-center justify-between text-sm">
                                        <div className="flex items-center gap-1 text-white/90 font-bold tracking-tight">
                                            <span className="text-indigo-400">★</span> {service.rating}
                                        </div>
                                        <div className="flex flex-col items-end">
                                            <span className="text-[10px] uppercase font-bold tracking-widest text-white/50">Starting At</span>
                                            <span className="font-extrabold text-white text-base">
                                                {service.price}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section >
    );

};
