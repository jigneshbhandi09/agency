"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
    return (
        <section className="relative min-h-[100vh] bg-background pt-40 pb-20 overflow-hidden flex items-center justify-center">
            {/* Vibrant Ambient Glow Background */}
            <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
                <div
                    className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-indigo-500 to-violet-500 opacity-20"
                    style={{
                        clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
                    }}
                />
            </div>
            {/* Subtle grid on top of ambient glow */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-foreground shadow-sm backdrop-blur-2xl font-medium tracking-wide z-10"
                >
                    <Sparkles size={16} className="text-primary hidden sm:block" />
                    <span className="text-white">Premium Agency Partner</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-5xl text-6xl font-extrabold tracking-tighter text-foreground sm:text-7xl lg:text-9xl leading-[1.0] text-balance z-10"
                >
                    Elite Digital <br className="hidden sm:block" />
                    <span className="text-white/90">Execution.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-8 max-w-2xl text-lg text-muted-foreground sm:text-xl font-medium leading-relaxed text-balance z-10"
                >
                    We build uncompromising digital experiences, powerful copywriting, and robust data systems for brands that demand perfection.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-12 flex flex-col gap-4 sm:flex-row sm:gap-6 z-10"
                >
                    <a
                        href="#work"
                        className="inline-flex items-center justify-center rounded-full border border-white/10 bg-transparent px-8 py-4 text-base font-bold text-white transition-all hover:bg-white/5"
                    >
                        View Portfolio <ArrowRight size={18} className="ml-2" />
                    </a>
                    <a
                        href="#contact"
                        className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-8 py-4 text-base font-bold text-black transition-all hover:bg-neutral-200"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            Book a Discovery Call <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                        </span>
                    </a>
                </motion.div>
            </div>

            {/* 3D Floating Geometry Elements */}
            <motion.div
                className="absolute left-[-5%] lg:left-[5%] top-[10%] w-48 h-48 md:w-64 md:h-64 rounded-full z-0 opacity-80"
                style={{
                    background: "radial-gradient(circle at 30% 30%, rgba(99, 102, 241, 0.8), rgba(67, 56, 202, 0.2), transparent)",
                    boxShadow: "inset -10px -10px 20px rgba(0,0,0,0.5), 0 20px 40px rgba(99, 102, 241, 0.3)",
                    backdropFilter: "blur(10px)"
                }}
                animate={{
                    y: [0, -40, 0],
                    x: [0, 30, 0],
                    rotate: [0, 15, -15, 0],
                    scale: [1, 1.1, 1]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div
                className="absolute right-[-10%] lg:right-[10%] top-[20%] w-40 h-40 md:w-56 md:h-56 rounded-2xl z-0 opacity-70"
                style={{
                    background: "linear-gradient(135deg, rgba(168, 85, 247, 0.6) 0%, rgba(126, 34, 206, 0.1) 100%)",
                    boxShadow: "inset 2px 2px 10px rgba(255,255,255,0.2), inset -5px -5px 15px rgba(0,0,0,0.4), 0 15px 30px rgba(168, 85, 247, 0.2)",
                    backdropFilter: "blur(8px)",
                    transformStyle: "preserve-3d"
                }}
                animate={{
                    y: [0, 50, 0],
                    rotateX: [20, 50, 20],
                    rotateY: [-20, 20, -20],
                    rotateZ: [10, 40, 10]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />

            <motion.div
                className="absolute right-[20%] bottom-[-5%] md:bottom-[10%] w-56 h-56 md:w-80 md:h-80 rounded-full z-0 opacity-50 hidden md:block"
                style={{
                    background: "radial-gradient(circle at 70% 30%, rgba(139, 92, 246, 0.5), transparent)",
                    boxShadow: "inset 10px 10px 30px rgba(0,0,0,0.3), 0 30px 60px rgba(139, 92, 246, 0.1)",
                    filter: "blur(4px)"
                }}
                animate={{
                    y: [0, -30, 0],
                    x: [0, -20, 0],
                    scale: [1, 1.15, 1]
                }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            />
        </section>
    );
}
