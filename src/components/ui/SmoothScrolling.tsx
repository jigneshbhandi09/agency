"use client";

import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import { ReactNode, useEffect } from "react";

function AnchorScroller() {
    const lenis = useLenis();

    useEffect(() => {
        if (!lenis) return;
        const handleHashClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const anchor = target.closest('a');
            if (!anchor) return;

            const href = anchor.getAttribute('href');
            // Support hash links that point to the same page (e.g. "#contact" or "/#contact")
            if (href && (href.startsWith('#') || href.startsWith('/#'))) {
                const targetId = href.replace('/#', '#');
                const targetEl = document.querySelector(targetId) as HTMLElement;
                if (targetEl) {
                    e.preventDefault();
                    lenis.scrollTo(targetEl, { offset: -50, duration: 1.5 });
                }
            }
        };

        document.documentElement.addEventListener('click', handleHashClick);
        return () => document.documentElement.removeEventListener('click', handleHashClick);
    }, [lenis]);

    return null;
}

export function SmoothScrolling({ children }: { children: ReactNode }) {
    return (
        <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
            <AnchorScroller />
            {children as any}
        </ReactLenis>
    );
}
