"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { Menu, X, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import Link from "next/link";

const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Work", href: "#work" },
    { name: "About", href: "#about" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const { scrollYProgress } = useScroll();

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-600 to-indigo-600 origin-left z-[100]"
                style={{ scaleX: scrollYProgress }}
            />
            <header
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                    isScrolled ? "py-4" : "py-6"
                )}
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div
                        className={cn(
                            "flex items-center justify-between rounded-full px-6 py-3 transition-all duration-300",
                            isScrolled ? "bg-white/[0.03] backdrop-blur-2xl border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]" : "bg-transparent"
                        )}
                    >
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-2 group">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black transition-transform group-hover:scale-110 shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                                <Rocket size={20} className="text-black" />
                            </div>
                            <span className="text-2xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-500 to-indigo-500">
                                Magnetiq
                            </span>
                        </Link>

                        {/* Desktop Nav */}
                        <nav className="hidden md:flex items-center gap-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="flex items-center gap-4 ml-4 pl-4 border-l border-black/10 dark:border-white/10">
                                <ThemeToggle />
                                <a
                                    href="#contact"
                                    className="rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 px-6 py-2.5 text-sm font-bold text-white transition-all hover:from-violet-500 hover:to-indigo-500 hover:shadow-[0_0_20px_rgba(99,102,241,0.4)]"
                                >
                                    Let&apos;s Talk
                                </a>
                            </div>
                        </nav>

                        {/* Mobile Menu Toggle */}
                        <button
                            className="md:hidden text-foreground p-2"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="absolute left-4 right-4 top-24 rounded-2xl p-6 bg-white/[0.03] backdrop-blur-3xl border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)] md:hidden flex flex-col gap-4"
                        >
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-lg font-medium text-foreground transition-colors hover:text-primary"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="#contact"
                                onClick={() => setMobileMenuOpen(false)}
                                className="mt-4 flex w-full justify-center rounded-xl bg-primary px-5 py-3 text-base font-semibold text-primary-foreground"
                            >
                                Let&apos;s Talk
                            </a>
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>
        </>
    );
}
