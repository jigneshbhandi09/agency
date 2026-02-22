"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function About() {
    return (
        <section id="about" className="relative py-32 overflow-hidden bg-[#000000] border-t border-white/5">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Side: Image / Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="relative h-[500px] w-full rounded-3xl overflow-hidden border border-white/10 bg-[#09090b] shadow-2xl ring-1 ring-white/5">
                            <Image
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop"
                                alt="Agency Team Collaboration"
                                fill
                                className="object-cover transition-transform duration-700 hover:scale-105"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-black/10 mix-blend-overlay" />
                        </div>
                    </motion.div>

                    {/* Right Side: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-col gap-6"
                    >
                        <div>
                            <span className="text-sm font-bold uppercase tracking-widest text-indigo-400 mb-2 block">
                                Who We Are
                            </span>
                            <h2 className="text-3xl font-extrabold tracking-tight text-white/90 sm:text-5xl">
                                We Engineer <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-500">Digital Success</span>
                            </h2>
                        </div>

                        <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                            At our core, we believe that great design and flawless execution dictate business growth. We aren't just order-takers; we act as your dedicated growth partners.
                        </p>

                        <p className="text-lg text-muted-foreground leading-relaxed mt-2 font-medium">
                            Whether you need a full website replatform, pixel-perfect Figma translations, persuasive sales copy, or meticulous data operations, our elite team of specialists delivers uncompromising quality on every single project.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-6 mt-10">
                            {/* Value 1 */}
                            <div className="flex flex-col gap-3 p-6 rounded-2xl border border-white/10 bg-[#09090b] shadow-2xl transition-all hover:bg-white/[0.02]">
                                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-black font-extrabold shadow-[0_0_20px_rgba(255,255,255,0.3)]">1</span>
                                <h4 className="font-bold text-white text-lg tracking-tight">Elite Talent</h4>
                                <p className="text-sm text-muted-foreground leading-relaxed">We rigorously recruit and retain only the top 1% of digital specialists globally.</p>
                            </div>
                            {/* Value 2 */}
                            <div className="flex flex-col gap-3 p-6 rounded-2xl border border-white/10 bg-[#09090b] shadow-2xl transition-all hover:bg-white/[0.02]">
                                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-black font-extrabold shadow-[0_0_20px_rgba(255,255,255,0.3)]">2</span>
                                <h4 className="font-bold text-white text-lg tracking-tight">Rapid Execution</h4>
                                <p className="text-sm text-muted-foreground leading-relaxed">Delivering uncompromising, pixel-perfect quality at aggressive startup speeds.</p>
                            </div>
                            {/* Value 3 */}
                            <div className="flex flex-col gap-3 p-6 rounded-2xl border border-white/10 bg-[#09090b] shadow-2xl transition-all hover:bg-white/[0.02]">
                                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-black font-extrabold shadow-[0_0_20px_rgba(255,255,255,0.3)]">3</span>
                                <h4 className="font-bold text-white text-lg tracking-tight">Data-Driven Strategy</h4>
                                <p className="text-sm text-muted-foreground leading-relaxed">Every design and copy decision is backed by rigorous analytics and testing.</p>
                            </div>
                            {/* Value 4 */}
                            <div className="flex flex-col gap-3 p-6 rounded-2xl border border-white/10 bg-[#09090b] shadow-2xl transition-all hover:bg-white/[0.02]">
                                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-black font-extrabold shadow-[0_0_20px_rgba(255,255,255,0.3)]">4</span>
                                <h4 className="font-bold text-white text-lg tracking-tight">Flawless Delivery</h4>
                                <p className="text-sm text-muted-foreground leading-relaxed">Zero bugs, pristine code, and seamless handoffs—guaranteed every time.</p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
