"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const projects = [
    {
        title: "Excel Data Cleaning & Formatting",
        slug: "excel-data-cleaning",
        category: "Data Operations",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
        color: "from-emerald-500/80 text-emerald-500",
        bgAccent: "bg-emerald-500/10",
    },
    {
        title: "Canva Social Media Poster Design",
        slug: "canva-poster-design",
        category: "Visual Design",
        image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop",
        color: "from-blue-500/80 text-blue-500",
        bgAccent: "bg-blue-500/10",
    },
    {
        title: "Minimalist Logo Design",
        slug: "logo-design",
        category: "Visual Design",
        image: "https://images.unsplash.com/photo-1626785774625-ddc1c712cbd6?q=80&w=2071&auto=format&fit=crop",
        color: "from-secondary/80 text-secondary",
        bgAccent: "bg-secondary/10",
    },
    {
        title: "Figma UI to Next.js Code",
        slug: "figma-ui-conversion",
        category: "Website Design",
        image: "https://images.unsplash.com/photo-1618477247222-ac60c62857b8?q=80&w=2076&auto=format&fit=crop",
        color: "from-primary/80 text-primary",
        bgAccent: "bg-primary/10",
    },
];

export function Projects() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section id="work" className="relative py-32 bg-background border-t border-white/5 overflow-hidden">
            {/* Ambient Top Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/[0.03] via-transparent to-transparent pointer-events-none" />

            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="max-w-2xl"
                    >
                        <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl border-b-2 border-primary/20 pb-4 inline-block">
                            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-500">Work</span>
                        </h2>
                        <p className="mt-6 text-lg text-muted-foreground/80">
                            A curated selection of our high-quality deliverables. We provide rapid, agency-tier solutions for clients across the globe.
                        </p>
                    </motion.div>
                </div>

                {/* Tabbed Interface */}
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 min-h-[500px]">

                    {/* Left Side: Tabs */}
                    <div className="lg:col-span-4 flex flex-col gap-3">
                        {projects.map((project, index) => {
                            const isActive = activeTab === index;
                            return (
                                <button
                                    key={project.slug}
                                    onClick={() => setActiveTab(index)}
                                    className={cn(
                                        "group flex items-center justify-between p-5 rounded-2xl border transition-all duration-300 text-left",
                                        isActive
                                            ? "bg-white/[0.05] border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.02)]"
                                            : "bg-transparent border-transparent hover:bg-white/[0.02] hover:border-white/5"
                                    )}
                                >
                                    <div>
                                        <span className={cn(
                                            "text-xs font-semibold uppercase tracking-wider mb-2 block transition-colors",
                                            isActive ? "text-foreground" : "text-muted-foreground group-hover:text-foreground/80"
                                        )}>
                                            {project.category}
                                        </span>
                                        <h3 className={cn(
                                            "text-lg sm:text-xl font-bold transition-colors",
                                            isActive ? "text-foreground" : "text-muted-foreground group-hover:text-foreground/90"
                                        )}>
                                            {project.title}
                                        </h3>
                                    </div>
                                    <ChevronRight
                                        size={20}
                                        className={cn(
                                            "transition-all duration-300",
                                            isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                                        )}
                                    />
                                </button>
                            );
                        })}
                    </div>

                    {/* Right Side: Content */}
                    <div className="lg:col-span-8 relative rounded-3xl overflow-hidden bg-white/[0.02] border border-white/10 shadow-2xl group ring-1 ring-white/5 ring-inset">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.02 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="relative h-full w-full min-h-[400px] sm:min-h-[500px] flex flex-col"
                            >
                                {/* Image */}
                                <div className="absolute inset-0 z-0">
                                    <div className="absolute inset-0 bg-black/40 z-10 transition-colors duration-500 group-hover:bg-black/20" />
                                    <Image
                                        src={projects[activeTab].image}
                                        alt={projects[activeTab].title}
                                        fill
                                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-60 md:mix-blend-luminosity hover:mix-blend-normal"
                                        sizes="(max-width: 1024px) 100vw, 66vw"
                                        priority
                                    />
                                    <div className="absolute inset-0 z-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
                                </div>

                                {/* Content Overlay */}
                                <div className="relative z-20 mt-auto p-8 sm:p-12 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
                                    <span className={cn(
                                        "mb-4 inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-indigo-500/10 text-indigo-400 border border-indigo-500/20"
                                    )}>
                                        {projects[activeTab].category}
                                    </span>
                                    <h3 className="mb-8 text-3xl sm:text-4xl font-extrabold tracking-tight text-white/90">
                                        {projects[activeTab].title}
                                    </h3>

                                    <div className="flex flex-wrap items-center gap-4">
                                        <Link
                                            href={`/work/${projects[activeTab].slug}`}
                                            className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 px-6 py-3 text-sm font-bold text-white transition-all hover:from-violet-500 hover:to-indigo-500 hover:shadow-[0_0_30px_rgba(99,102,241,0.4)]"
                                        >
                                            View Case Study <ArrowUpRight size={16} />
                                        </Link>
                                        <a
                                            href="#contact"
                                            className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.02] px-6 py-3 text-sm font-bold text-white/80 transition-all hover:bg-white/5 hover:border-white/20"
                                        >
                                            Request Similar Work
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
