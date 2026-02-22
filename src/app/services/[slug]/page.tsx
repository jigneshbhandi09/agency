import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { Contact } from "@/components/sections/Contact";
import Link from "next/link";
import Image from "next/image";

// Mock Database for Service Data
const serviceData = {
    "website-design": {
        title: "Website Design",
        tagline: "High-performance digital experiences.",
        description: "We don't just build websites; we engineer digital ecosystems. Our approach to website design combines stunning aesthetics with seamless functionality to ensure your brand stands out and converts visitors into loyal customers.",
        benefits: [
            "Custom, responsive layouts",
            "SEO-optimized architecture",
            "Lightning-fast load times",
            "Conversion-focused user journeys",
        ],
        process: [
            { step: "Discovery", desc: "Understanding your brand, audience, and goals." },
            { step: "Wireframing", desc: "Mapping out the user journey and structural layout." },
            { step: "Design & Dev", desc: "Bringing the vision to life with modern web tech." },
            { step: "Launch", desc: "Rigorous testing and a seamless deployment." },
        ],
        images: [
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
        ],
        color: "text-primary",
        gradient: "from-primary/20",
    },
    "figma-to-code": {
        title: "Figma to Code",
        tagline: "Pixel-perfect translations of your designs.",
        description: "You have a beautiful Figma design, but now you need it to live on the web. We specialize in taking your static screens and turning them into dynamic, responsive, and highly optimized React or Next.js applications without losing a single pixel of detail.",
        benefits: [
            "100% design fidelity",
            "Clean, modular components",
            "Responsive across all devices",
            "Optimized for performance and accessibility",
        ],
        process: [
            { step: "Audit", desc: "Reviewing your Figma files for components and assets." },
            { step: "System Setup", desc: "Establishing Tailwind variables and design tokens." },
            { step: "Development", desc: "Translating screens into semantic HTML/JSX." },
            { step: "QA & Handoff", desc: "Cross-browser testing and final delivery." },
        ],
        images: [
            "https://images.unsplash.com/photo-1618477247222-ac60c62857b8?q=80&w=2076&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"
        ],
        color: "text-blue-500",
        gradient: "from-blue-500/20",
    },
    "graphic-design": {
        title: "Visual Design",
        tagline: "Visuals that demand attention.",
        description: "In a crowded digital landscape, your visuals need to speak louder than words. We produce stunning, on-brand graphics, posters, and social media assets that capture attention and drive engagement seamlessly.",
        benefits: [
            "Consistent brand identity",
            "Rapid turnaround times",
            "Engaging social media assets",
            "Print-ready promotional materials",
        ],
        process: [
            { step: "Briefing", desc: "Gathering requirements and brand guidelines." },
            { step: "Concepting", desc: "Creating initial moodboards and visual directions." },
            { step: "Design", desc: "Executing high-quality vector and raster assets." },
            { step: "Revisions", desc: "Refining designs based on your feedback." },
        ],
        images: [
            "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
        ],
        color: "text-secondary",
        gradient: "from-secondary/20",
    },
    "copywriting": {
        title: "Copywriting",
        tagline: "Words that sell, stories that connect.",
        description: "Great design catches the eye, but great copy captures the mind. Our expert copywriters craft compelling narratives, persuasive landing pages, and engaging content that resonates with your target audience and drives action.",
        benefits: [
            "Persuasive sales copy",
            "SEO-driven blog content",
            "Engaging email campaigns",
            "Clear, concise brand messaging",
        ],
        process: [
            { step: "Research", desc: "Deep dive into your market, competitors, and audience." },
            { step: "Outlining", desc: "Structuring the narrative for maximum impact." },
            { step: "Drafting", desc: "Writing compelling, conversion-focused copy." },
            { step: "Editing", desc: "Polishing and optimizing for SEO and readability." },
        ],
        images: [
            "https://images.unsplash.com/photo-1455309036818-60529d290dbf?q=80&w=2670&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop"
        ],
        color: "text-accent",
        gradient: "from-accent/20",
    },
    "data-entry": {
        title: "Data Operations",
        tagline: "Flawless organization for your business.",
        description: "Accuracy is everything when it comes to data. We provide fast, reliable, and secure data operations to help you digitize records, maintain databases, and keep your business running smoothly without a hitch.",
        benefits: [
            "99.9% accuracy rate",
            "Secure data handling",
            "Rapid processing speeds",
            "Comprehensive database management",
        ],
        process: [
            { step: "Assessment", desc: "Evaluating data volume and formatting requirements." },
            { step: "Processing", desc: "Accurate input and digitization of records." },
            { step: "Validation", desc: "Rigorous quality checks for accuracy." },
            { step: "Delivery", desc: "Secure handover of organized data formats." },
        ],
        images: [
            "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2076&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
        ],
        color: "text-emerald-500",
        gradient: "from-emerald-500/20",
    }
};

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const data = serviceData[resolvedParams.slug as keyof typeof serviceData];

    if (!data) {
        notFound();
    }

    return (
        <>
            <Navbar />
            <main className="flex min-h-screen flex-col overflow-hidden pt-28">

                {/* Service Hero */}
                <section className="relative py-20 lg:py-32 bg-[#050505]">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <Link href="/#services" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-6 py-2.5 text-sm font-bold text-white/80 transition-all hover:bg-white/5 hover:border-white/20 mb-12">
                            <ArrowRight size={16} className="rotate-180" /> Back to Expertise
                        </Link>

                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div className="max-w-2xl">
                                <h1 className={`text-5xl font-extrabold tracking-tight sm:text-7xl mb-6 ${data.color}`}>
                                    {data.title}
                                </h1>
                                <p className="text-2xl font-medium text-foreground mb-6">
                                    {data.tagline}
                                </p>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    {data.description}
                                </p>
                            </div>

                            <div className="relative h-[400px] lg:h-[500px] w-full hidden sm:block overflow-hidden rounded-3xl border border-white/10 bg-[#09090b] shadow-2xl ring-1 ring-white/5">
                                <Image
                                    src={data.images[0]}
                                    alt={data.title}
                                    fill
                                    className="object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    priority
                                />
                                <div className={`absolute inset-0 z-0 bg-gradient-to-tr ${data.gradient} mix-blend-overlay opacity-30`} />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-[#09090b] border-y border-white/5 relative z-10">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid gap-16 lg:grid-cols-2">

                            {/* Left Column: Why Choose Us */}
                            <div>
                                <h3 className="text-3xl font-bold mb-8 text-foreground pb-4 border-b border-black/10 dark:border-white/10">Why choose us?</h3>
                                <ul className="flex flex-col gap-6">
                                    {data.benefits.map((benefit, i) => (
                                        <li key={i} className="flex items-start gap-4 text-lg text-muted-foreground p-4 bg-white/[0.01] rounded-2xl border border-white/5 shadow-sm">
                                            <CheckCircle2 className={`mt-0.5 shrink-0 ${data.color}`} size={24} />
                                            <span className="font-medium">{benefit}</span>
                                        </li>
                                    ))}
                                </ul>


                            </div>

                            {/* Right Column: Methodology */}
                            <div>
                                <h3 className="text-3xl font-bold mb-8 text-foreground pb-4 border-b border-black/10 dark:border-white/10">Our Methodology</h3>
                                <div className="flex flex-col gap-6">
                                    {data.process.map((step, i) => (
                                        <div key={i} className="flex items-start gap-6 p-6 bg-white/[0.01] rounded-2xl border border-white/5 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:border-white/10">
                                            <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/5 border border-white/10 font-bold ${data.color} text-xl shadow-inner`}>
                                                {i + 1}
                                            </div>
                                            <div>
                                                <h4 className="text-xl font-bold text-foreground mb-2">{step.step}</h4>
                                                <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <Contact />
            </main>
            <Footer />
        </>
    );
}
