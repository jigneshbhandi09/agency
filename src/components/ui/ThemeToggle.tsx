"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function ThemeToggle() {
    const { theme, setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="w-10 h-10 rounded-full border border-white/10" />;
    }

    const toggleTheme = () => {
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            className="relative flex h-10 w-10 items-center justify-center rounded-full border border-black/10 dark:border-white/10 glass shadow-sm text-foreground hover:bg-foreground/5 transition-colors"
            aria-label="Toggle theme"
        >
            <div className="relative h-[1.2rem] w-[1.2rem]">
                <Sun className={`absolute inset-0 transition-all duration-300 ${resolvedTheme === 'dark' ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'}`} />
                <Moon className={`absolute inset-0 transition-all duration-300 ${resolvedTheme === 'dark' ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'}`} />
            </div>
        </motion.button>
    );
}
