import { Rocket, Twitter, Linkedin, Github } from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t border-black/10 dark:border-white/10 bg-background pt-16 pb-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid gap-12 lg:grid-cols-4">
                    <div className="lg:col-span-2">
                        <a href="#" className="mb-6 flex items-center gap-2">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                                <Rocket size={20} className="text-black" />
                            </div>
                            <span className="text-2xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-500 to-indigo-500">
                                Magnetiq
                            </span>
                        </a>
                        <p className="max-w-md text-muted-foreground">
                            We engineer digital experiences that drive results. From captivating web designs to engaging copy and flawless data operations.
                        </p>
                    </div>

                    <div>
                        <h3 className="mb-6 text-lg font-semibold text-foreground">Navigation</h3>
                        <ul className="flex flex-col gap-4 text-muted-foreground">
                            <li><a href="#services" className="transition-colors hover:text-primary">Our Services</a></li>
                            <li><a href="#work" className="transition-colors hover:text-primary">Featured Work</a></li>
                            <li><a href="#about" className="transition-colors hover:text-primary">About Us</a></li>
                            <li><a href="#contact" className="transition-colors hover:text-primary">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-6 text-lg font-semibold text-foreground">Connect</h3>
                        <div className="flex gap-4">
                            <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground transition-all hover:bg-primary hover:text-primary-foreground">
                                <Twitter size={18} />
                            </a>
                            <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground transition-all hover:bg-primary hover:text-primary-foreground">
                                <Linkedin size={18} />
                            </a>
                            <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground transition-all hover:bg-primary hover:text-primary-foreground">
                                <Github size={18} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-black/10 dark:border-white/10 pt-8 sm:flex-row text-sm text-muted-foreground">
                    <p>© {new Date().getFullYear()} Magnetiq Digital Agency. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
