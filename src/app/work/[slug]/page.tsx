import { notFound } from "next/navigation";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { Contact } from "@/components/sections/Contact";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

// Mock Database for Work/Case Studies
const workData = {
    "excel-data-cleaning": {
        title: "Excel Data Cleaning & Formatting",
        category: "Data Operations",
        client: "Global Logistics Co.",
        timeline: "1 Week",
        heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
        challenge: "The client had years of messy, unstructured data exported from legacy systems, leading to severe operational bottlenecks and inaccurate reporting.",
        solution: "We deployed advanced Excel algorithms and macros to clean, format, and structure over 100,000 rows of data into a pristine, actionable dashboard.",
        results: [
            "100k+ rows successfully cleaned",
            "100% data accuracy achieved",
            "Saved 40 manual hours weekly"
        ],
        gallery: [
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop"
        ],
        color: "from-emerald-500/20",
        accent: "text-emerald-500"
    },
    "canva-poster-design": {
        title: "Canva Social Media Poster Design",
        category: "Visual Design",
        client: "Fitness Startup",
        timeline: "3 Days",
        heroImage: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop",
        challenge: "A new fitness startup needed aggressive, highly-engaging social media posters to build hype for their launch, but had no in-house design team.",
        solution: "We utilized Canva Pro to design a suite of scroll-stopping, vibrant social media graphics optimized for Instagram and Facebook ad conversions.",
        results: [
            "50+ unique assets delivered",
            "3x higher click-through rate",
            "Premium brand identity secured"
        ],
        gallery: [
            "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2074&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1616423640778-28d1b5002266?q=80&w=2070&auto=format&fit=crop"
        ],
        color: "from-blue-500/20",
        accent: "text-blue-500"
    },
    "logo-design": {
        title: "Minimalist Logo Design",
        category: "Visual Design",
        client: "Boutique Coffee Roaster",
        timeline: "2 Weeks",
        heroImage: "https://images.unsplash.com/photo-1626785774625-ddc1c712cbd6?q=80&w=2071&auto=format&fit=crop",
        challenge: "The client wanted a luxurious, memorable logo to stand out in a saturated coffee market, requiring a design that worked across packaging and storefronts.",
        solution: "We engaged in a deep discovery process to craft a minimalist, scalable vector logo that strictly adhered to modern typography and color theory.",
        results: [
            "100% vector-scalable source files",
            "Full brand guidelines delivered",
            "Immediate brand recognition"
        ],
        gallery: [
            "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2064&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1598532213005-5625ff117cf0?q=80&w=2070&auto=format&fit=crop"
        ],
        color: "from-secondary/20",
        accent: "text-secondary"
    },
    "figma-ui-conversion": {
        title: "Figma UI to Next.js Code",
        category: "Website Design",
        client: "SaaS Tech Co.",
        timeline: "3 Weeks",
        heroImage: "https://images.unsplash.com/photo-1618477247222-ac60c62857b8?q=80&w=2076&auto=format&fit=crop",
        challenge: "The client had a beautiful UI design in Figma but lacked the engineering resources to convert it into a blazing-fast, responsive web application.",
        solution: "We translated their Figma files into pixel-perfect Next.js code using Tailwind CSS, ensuring 100% fidelity to the design and instantaneous load times.",
        results: [
            "Perfect 1:1 Figma translation",
            "100/100 Lighthouse performance",
            "Fully responsive across all devices"
        ],
        gallery: [
            "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2076&auto=format&fit=crop"
        ],
        color: "from-primary/20",
        accent: "text-primary"
    }
};

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const project = workData[resolvedParams.slug as keyof typeof workData];

    if (!project) {
        notFound();
    }

    return (
        <>
            <Navbar />
            <main className="flex min-h-screen flex-col overflow-hidden pt-28">

                {/* Project Hero */}
                <section className="relative pt-12 pb-24 lg:pt-20 bg-[#050505]">

                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <Link href="/#work" className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.02] text-sm font-medium text-white/80 hover:bg-white/5 transition-colors mb-12">
                            <ArrowLeft size={16} /> Back to Projects
                        </Link>

                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <span className={`inline-block mb-4 text-sm font-bold uppercase tracking-widest ${project.accent}`}>
                                    {project.category}
                                </span>
                                <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl mb-8 text-foreground leading-tight">
                                    {project.title}
                                </h1>

                                <div className="flex gap-12 text-sm text-muted-foreground border-y border-white/10 py-6 mb-8">
                                    <div>
                                        <p className="uppercase tracking-wider text-xs mb-1 font-semibold opacity-50">Client</p>
                                        <p className="font-medium text-foreground text-base">{project.client}</p>
                                    </div>
                                    <div>
                                        <p className="uppercase tracking-wider text-xs mb-1 font-semibold opacity-50">Timeline</p>
                                        <p className="font-medium text-foreground text-base">{project.timeline}</p>
                                    </div>
                                    <div>
                                        <p className="uppercase tracking-wider text-xs mb-1 font-semibold opacity-50">Services</p>
                                        <p className="font-medium text-foreground text-base">{project.category}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="relative h-[400px] sm:h-[500px] w-full rounded-3xl overflow-hidden bg-[#09090b] border border-white/10 shadow-2xl ring-1 ring-white/5">
                                <Image
                                    src={project.heroImage}
                                    alt={project.title}
                                    fill
                                    className="object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
                                    priority
                                    quality={90}
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                                <div className="absolute inset-0 z-0 bg-gradient-to-tr from-[#09090b]/40 mix-blend-overlay opacity-30" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Case Study Details */}
                <section className="py-24 bg-[#09090b] border-y border-white/5 relative z-10">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                        <div className="flex flex-col gap-16">

                            {/* Challenge & Solution */}
                            <div className="grid sm:grid-cols-2 gap-12">
                                <div>
                                    <h3 className="text-2xl font-bold mb-4 text-foreground flex items-center gap-3">
                                        <span className={`w-8 h-px bg-white/20`} /> The Challenge
                                    </h3>
                                    <p className="text-muted-foreground text-lg leading-relaxed">
                                        {project.challenge}
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-4 text-foreground flex items-center gap-3">
                                        <span className={`w-8 h-px bg-white/20`} /> The Solution
                                    </h3>
                                    <p className="text-muted-foreground text-lg leading-relaxed">
                                        {project.solution}
                                    </p>
                                </div>
                            </div>

                            {/* Results */}
                            <div className="p-10 rounded-3xl bg-[#050505] border border-white/10 shadow-2xl relative overflow-hidden ring-1 ring-white/5">
                                <h3 className="text-2xl font-bold mb-8 text-foreground text-center">Project Impact</h3>
                                <div className="grid gap-6 sm:grid-cols-3 text-center">
                                    {project.results.map((result, i) => {
                                        const limitStr = result.split(' ').slice(1).join(' ');
                                        const stat = result.split(' ')[0];
                                        return (
                                            <div key={i}>
                                                <p className={`text-4xl sm:text-5xl font-extrabold tracking-tighter mb-2 ${project.accent}`}>
                                                    {stat}
                                                </p>
                                                <p className="text-sm font-medium text-foreground/80">{limitStr}</p>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* Full Gallery */}
                <section className="py-24">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid gap-8 sm:grid-cols-2">
                            {project.gallery.map((img, i) => (
                                <div key={i} className="relative h-[300px] sm:h-[450px] overflow-hidden rounded-3xl bg-[#09090b] border border-white/10 shadow-2xl ring-1 ring-white/5">
                                    <Image
                                        src={img}
                                        alt={`${project.title} deliverable ${i + 1}`}
                                        fill
                                        quality={90}
                                        className="object-cover opacity-70 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700 hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-24 bg-[#050505] text-center border-t border-white/5">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-6 text-foreground">Ready to achieve similar results?</h2>
                        <Link href="/#contact" className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-8 py-4 text-base font-semibold text-black transition-all hover:bg-white/90">
                            <span className="relative z-10 flex items-center gap-2">
                                Start Your Project <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </span>
                        </Link>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    );
}
