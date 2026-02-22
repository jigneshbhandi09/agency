"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Mail, Send, Phone, ChevronDown } from "lucide-react";

const serviceOptions = [
    { value: "web", label: "Website Design" },
    { value: "figma", label: "Figma to Code" },
    { value: "graphic", label: "Visual Design" },
    { value: "copy", label: "Copywriting" },
    { value: "data", label: "Data Operations" },
];

export function Contact() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedService, setSelectedService] = useState("");

    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "center center"]
    });

    const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0]);
    const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
    const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <section ref={containerRef} id="contact" className="relative py-32 overflow-hidden bg-background [perspective:2000px]">

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    style={{ rotateX, y, opacity }}
                    className="grid gap-16 lg:grid-cols-2 lg:items-center"
                >

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-4xl font-extrabold tracking-tight text-white/90 sm:text-6xl">
                            Ready to <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-500">Collaborate?</span>
                        </h2>
                        <p className="mt-6 text-lg text-muted-foreground">
                            Whether you need a full website redesign, compelling copy, or seamless data entry, we are here to bring your vision to life.
                        </p>

                        <div className="mt-12 flex flex-col gap-6">
                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black/5 border border-black/10 dark:bg-white/5 dark:border-white/10 text-primary">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-muted-foreground">Drop us a line</p>
                                    <a href="mailto:hello@vanguardagency.com" className="text-lg font-semibold text-foreground hover:text-primary transition-colors">hello@vanguardagency.com</a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black/5 border border-black/10 dark:bg-white/5 dark:border-white/10 text-secondary">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-muted-foreground">Give us a call</p>
                                    <p className="text-lg font-semibold text-foreground">+1 (555) 123-4567</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="rounded-3xl border border-white/10 bg-[#09090b] p-8 sm:p-12 shadow-2xl relative"
                    >
                        <form className="flex flex-col gap-6" onSubmit={(e) => { e.preventDefault(); alert('In a production app, this would send an email!'); }}>
                            <div className="grid gap-6 sm:grid-cols-2">
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="name" className="text-sm font-medium text-muted-foreground">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        placeholder="Jane Doe"
                                        className="rounded-xl border border-white/10 bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-white/30 focus:outline-none focus:ring-1 focus:ring-white/30 transition-colors"
                                        required
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="email" className="text-sm font-medium text-muted-foreground">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="jane@company.com"
                                        className="rounded-xl border border-white/10 bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-white/30 focus:outline-none focus:ring-1 focus:ring-white/30 transition-colors"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-2 relative z-50">
                                <label className="text-sm font-medium text-muted-foreground">Service Required</label>

                                {/* Custom Dropdown Trigger */}
                                <button
                                    type="button"
                                    onClick={() => setIsOpen(!isOpen)}
                                    className="flex w-full items-center justify-between rounded-xl border border-white/10 bg-background px-4 py-3 text-left text-foreground transition-colors hover:border-white/20 focus:border-white/30 focus:outline-none focus:ring-1 focus:ring-white/30"
                                >
                                    <span className={selectedService ? "text-foreground" : "text-muted-foreground"}>
                                        {selectedService ? serviceOptions.find(opt => opt.value === selectedService)?.label : "Select a service"}
                                    </span>
                                    <ChevronDown size={18} className={`text-muted-foreground transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                                </button>

                                {/* Hidden input for actual form submission */}
                                <input type="hidden" name="service" value={selectedService} required />

                                {/* Custom Dropdown Menu */}
                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{ duration: 0.2 }}
                                            className="absolute top-[calc(100%+8px)] left-0 w-full rounded-xl border border-white/10 bg-black/90 backdrop-blur-3xl p-2 shadow-2xl z-[100]"
                                        >
                                            {serviceOptions.map((option) => (
                                                <button
                                                    key={option.value}
                                                    type="button"
                                                    onClick={() => {
                                                        setSelectedService(option.value);
                                                        setIsOpen(false);
                                                    }}
                                                    className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors hover:bg-white/10 hover:text-white ${selectedService === option.value ? "bg-white/10 text-white" : "text-muted-foreground"
                                                        }`}
                                                >
                                                    {option.label}
                                                </button>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="message" className="text-sm font-medium text-muted-foreground">Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    placeholder="Tell us about your project..."
                                    className="rounded-xl border border-white/10 bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-white/30 focus:outline-none focus:ring-1 focus:ring-white/30 transition-colors resize-none"
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="group relative mt-4 flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-primary px-8 py-4 text-base font-bold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-[0_0_30px_rgba(99,102,241,0.4)]"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    Submit Inquiry
                                    <Send size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                </span>
                            </button>
                        </form>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
}
