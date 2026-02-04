"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, MessageSquare, Globe, Plus, CheckCircle2, Eye, Lock, ShieldCheck, Zap, Github } from "lucide-react";
import { PageLayout } from "@repo/ui/page-layout";
import { Container, Section } from "@repo/ui/layout";
import { PremiumButton } from "@repo/ui/premium-button";

export default function ContactPage() {
    const [submitted, setSubmitted] = React.useState(false);
    const [isSubmitting, setIsSubmitting] = React.useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate a secure connection establishing
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setSubmitted(true);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
            },
        },
    };

    return (
        <PageLayout>
            <main className="relative pt-24 pb-16 bg-[#FAFAFB] overflow-hidden">
                {/* Atmospheric Background Elements */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute inset-0 opacity-[0.4] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px]" />
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2 }}
                        className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#6226FA]/5 rounded-full blur-[120px] animate-pulse"
                    />
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2, delay: 0.5 }}
                        className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#00C2FF]/5 rounded-full blur-[150px]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#FAFAFB] via-transparent to-[#FAFAFB]" />
                </div>

                <Container className="relative z-10">
                    {/* Hero Section */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <motion.div
                            variants={itemVariants}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 shadow-sm mb-6"
                        >
                            <div className="w-2 h-2 rounded-full bg-[#6226FA] animate-pulse" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">Architectural Advisory</span>
                        </motion.div>
                        <motion.h1
                            variants={itemVariants}
                            className="text-5xl md:text-8xl font-bold tracking-tight text-[#0D161C] mb-8 leading-[0.9]"
                        >
                            Architecting the <br />
                            <span className="text-gradient-vibrant">Future, Together.</span>
                        </motion.h1>
                        <motion.p
                            variants={itemVariants}
                            className="text-xl text-gray-500 font-medium leading-relaxed max-w-2xl mx-auto"
                        >
                            Engage with our principal systems architects and AI strategists. Whether you&apos;re building global Kubernetes clusters or private intelligence clouds, we provide the technical foundation for success.
                        </motion.p>
                    </motion.div>

                    {/* Unified Contact Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="bg-white rounded-[48px] shadow-[0_48px_128px_-32px_rgba(98,38,250,0.1)] border border-gray-100 overflow-hidden"
                    >
                        <div className="grid lg:grid-cols-12 items-stretch">
                            {/* Left Side: Contact Form */}
                            <div className="lg:col-span-7 p-8 md:p-14 relative overflow-hidden group">
                                {/* Subtle decorative gradient */}
                                <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-[#6226FA]/5 to-[#00C2FF]/5 rounded-full blur-3xl -mr-40 -mt-40 pointer-events-none group-hover:scale-110 transition-transform duration-1000" />

                                {submitted ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="h-full flex flex-col items-center justify-center text-center py-20"
                                    >
                                        <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
                                            <ShieldCheck className="w-10 h-10 text-green-500" />
                                        </div>
                                        <h3 className="text-3xl font-bold text-[#0D161C] mb-4">Message Securely Sent</h3>
                                        <p className="text-gray-500 max-w-sm mx-auto font-medium">
                                            Thank you for reaching out. A technical advisor will review your inquiry and respond within 12-24 hours.
                                        </p>
                                        <button
                                            onClick={() => setSubmitted(false)}
                                            className="mt-8 text-sm font-bold text-[#6226FA] hover:underline"
                                        >
                                            Send another message
                                        </button>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="relative z-10 grid md:grid-cols-2 gap-x-6 gap-y-7">
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">First Name</label>
                                            <input
                                                type="text"
                                                required
                                                placeholder="Jane"
                                                className="w-full h-14 px-5 rounded-2xl bg-gray-50/50 border border-gray-100 focus:bg-white focus:border-[#6226FA] focus:ring-4 focus:ring-[#6226FA]/5 outline-none transition-all placeholder:text-gray-300 font-medium hover:bg-gray-50"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Last Name</label>
                                            <input
                                                type="text"
                                                required
                                                placeholder="Doe"
                                                className="w-full h-14 px-5 rounded-2xl bg-gray-50/50 border border-gray-100 focus:bg-white focus:border-[#6226FA] focus:ring-4 focus:ring-[#6226FA]/5 outline-none transition-all placeholder:text-gray-300 font-medium hover:bg-gray-50"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Work Email</label>
                                            <input
                                                type="email"
                                                required
                                                placeholder="jane@company.com"
                                                className="w-full h-14 px-5 rounded-2xl bg-gray-50/50 border border-gray-100 focus:bg-white focus:border-[#6226FA] focus:ring-4 focus:ring-[#6226FA]/5 outline-none transition-all placeholder:text-gray-300 font-medium hover:bg-gray-50"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Company</label>
                                            <input
                                                type="text"
                                                required
                                                placeholder="Acme Corp"
                                                className="w-full h-14 px-5 rounded-2xl bg-gray-50/50 border border-gray-100 focus:bg-white focus:border-[#6226FA] focus:ring-4 focus:ring-[#6226FA]/5 outline-none transition-all placeholder:text-gray-300 font-medium hover:bg-gray-50"
                                            />
                                        </div>
                                        <div className="md:col-span-2 space-y-2">
                                            <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Inquiry Reason</label>
                                            <div className="relative">
                                                <select
                                                    required
                                                    defaultValue=""
                                                    className="w-full h-14 px-5 rounded-2xl bg-gray-50/50 border border-gray-100 focus:bg-white focus:border-[#6226FA] focus:ring-4 focus:ring-[#6226FA]/5 outline-none transition-all font-medium hover:bg-gray-50 appearance-none cursor-pointer"
                                                >
                                                    <option value="" disabled>Select an option</option>
                                                    <option value="infrastructure">Infrastructure & Hybrid Cloud</option>
                                                    <option value="ai">AI Platforms & Intelligence</option>
                                                    <option value="ecosystem">Developer Ecosystems</option>
                                                    <option value="audit">Security & Sovereignty Audit</option>
                                                    <option value="partnership">Strategic Partnership</option>
                                                </select>
                                                <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                                    <Plus className="w-4 h-4" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="md:col-span-2 space-y-2">
                                            <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Message</label>
                                            <textarea
                                                required
                                                rows={4}
                                                placeholder="How can we help you?"
                                                className="w-full px-5 py-4 rounded-2xl bg-gray-50/50 border border-gray-100 focus:bg-white focus:border-[#6226FA] focus:ring-4 focus:ring-[#6226FA]/5 outline-none transition-all placeholder:text-gray-300 font-medium resize-none hover:bg-gray-50"
                                            />
                                        </div>
                                        <div className="md:col-span-2 pt-2">
                                            <PremiumButton
                                                variant="purple"
                                                type="submit"
                                                disabled={isSubmitting}
                                                className="w-full h-16 text-lg font-bold shadow-xl shadow-[#6226FA]/10 active:scale-[0.98] transition-transform flex items-center justify-center gap-2"
                                            >
                                                {isSubmitting ? "Initiating Secure Channel..." : "Send Message"}
                                                {!isSubmitting && <ArrowRight className="w-5 h-5" />}
                                            </PremiumButton>
                                        </div>
                                        <div className="md:col-span-2 py-4 border-t border-gray-50 mt-4">
                                            <div className="flex flex-wrap items-center justify-center gap-8 opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700">
                                                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-500">
                                                    <ShieldCheck className="w-4 h-4" /> SOC2 TYPE II
                                                </div>
                                                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-500">
                                                    <Lock className="w-4 h-4" /> ISO 27001
                                                </div>
                                                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-500">
                                                    <Globe className="w-4 h-4" /> GDPR READY
                                                </div>
                                            </div>
                                        </div>
                                        <p className="md:col-span-2 text-center text-[10px] text-gray-400 font-medium">
                                            By clicking send, you agree to our <a href="#" className="underline">Privacy Policy</a> and <a href="#" className="underline">Terms</a>.
                                        </p>
                                    </form>
                                )}
                            </div>

                            {/* Right Side: Info Channels */}
                            <div className="lg:col-span-5 bg-gray-50/50 border-l border-gray-100 p-8 md:p-14 relative overflow-hidden flex flex-col">
                                {/* Sophisticated Background Decor */}
                                <div className="absolute top-0 right-0 w-full h-full opacity-[0.4] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />
                                <div className="absolute top-[-10%] right-[-10%] w-[100%] h-[100%] bg-gradient-to-br from-[#6226FA]/5 to-transparent rounded-full blur-[100px] pointer-events-none" />

                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="mb-12">
                                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-100 shadow-sm mb-6">
                                            <span className="relative flex h-2 w-2">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6226FA] opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#6226FA]"></span>
                                            </span>
                                            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Direct Channels</span>
                                        </div>
                                        <h3 className="text-3xl font-bold text-[#0D161C] tracking-tight mb-4">
                                            Prefer direct contact?
                                        </h3>
                                        <p className="text-gray-500 font-medium text-lg leading-relaxed">
                                            Reach out through our specialized channels for prioritized response times across our entire ecosystem.
                                        </p>
                                    </div>

                                    <div className="grid gap-4 flex-1">
                                        {[
                                            {
                                                title: "Customer Support",
                                                desc: "Technical implementation and infrastructure assistance.",
                                                link: "support@broadsage.com",
                                                icon: MessageSquare,
                                                color: "text-[#6226FA]",
                                                bg: "bg-[#6226FA]/10",
                                                border: "border-[#6226FA]/20",
                                                accent: "bg-[#6226FA]",
                                                meta: "Avg Response: < 2h"
                                            },
                                            {
                                                title: "Security Research",
                                                desc: "Vulnerability reporting and bug bounty programs.",
                                                link: "security@broadsage.com",
                                                icon: ShieldCheck,
                                                color: "text-[#00C2FF]",
                                                bg: "bg-[#00C2FF]/10",
                                                border: "border-[#00C2FF]/20",
                                                accent: "bg-[#00C2FF]",
                                                meta: "24/7 Monitoring"
                                            },
                                            {
                                                title: "Open Source",
                                                desc: "Contribute to core projects and ecosystem discussions.",
                                                link: "github.com/broadsage",
                                                icon: Github,
                                                isExternal: true,
                                                color: "text-[#0D161C]",
                                                bg: "bg-gray-100",
                                                border: "border-gray-200",
                                                accent: "bg-[#0D161C]",
                                                meta: "Active Community"
                                            },
                                            {
                                                title: "General Inquiries",
                                                desc: "Strategic partnerships and general questions.",
                                                link: "hello@broadsage.com",
                                                icon: Mail,
                                                color: "text-[#F59E0B]",
                                                bg: "bg-[#F59E0B]/10",
                                                border: "border-[#F59E0B]/20",
                                                accent: "bg-[#F59E0B]",
                                                meta: "M-F 9am-6pm PST"
                                            }
                                        ].map((item) => (
                                            <div
                                                key={item.title}
                                                className="group/card relative p-5 rounded-[28px] border border-gray-200 bg-white/80 hover:bg-white transition-all duration-300 backdrop-blur-sm flex items-start gap-4 hover:shadow-[0_12px_32px_-8px_rgba(0,0,0,0.06)] hover:-translate-y-0.5"
                                            >
                                                <div className={`w-10 h-10 shrink-0 rounded-xl ${item.bg} border ${item.border} flex items-center justify-center group-hover/card:scale-110 transition-transform duration-500`}>
                                                    <item.icon className={`w-5 h-5 ${item.color}`} />
                                                </div>
                                                <div className="flex-1">
                                                    <div className="flex items-center justify-between mb-1">
                                                        <h4 className="font-bold text-[#0D161C] text-[15px] tracking-tight">{item.title}</h4>
                                                        <span className="text-[9px] font-bold text-gray-400 border border-gray-100 px-1.5 py-0.5 rounded-md bg-gray-50/50 uppercase tracking-tighter">
                                                            {item.meta}
                                                        </span>
                                                    </div>
                                                    <p className="text-[13px] text-gray-500 font-medium leading-normal mb-2">
                                                        {item.desc}
                                                    </p>
                                                    <a
                                                        href={item.isExternal ? `https://${item.link}` : `mailto:${item.link}`}
                                                        target={item.isExternal ? "_blank" : undefined}
                                                        rel={item.isExternal ? "noopener noreferrer" : undefined}
                                                        className={`inline-flex items-center text-xs font-extrabold ${item.color === "text-[#0D161C]" || item.color === "text-[#F59E0B]" ? 'text-[#6226FA]' : item.color} hover:opacity-80 transition-opacity gap-1`}
                                                    >
                                                        {item.link}
                                                        <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover/card:opacity-100 group-hover/card:translate-x-1 transition-all" />
                                                    </a>
                                                </div>
                                                <div className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 group-hover/card:h-2/3 ${item.accent} transition-all duration-500 rounded-r-full opacity-60`} />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>



                    {/* FAQ Section */}
                    <div className="mt-32 max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-[#0D161C] mb-4">Common Questions</h2>
                            <p className="text-gray-500 font-medium">Quick answers to frequently asked technical questions.</p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-x-12 gap-y-12">
                            {[
                                {
                                    q: "Does Broadsage support hybrid cloud sovereignty?",
                                    a: "Absolutely. Our infrastructure solutions are designed to run across on-prem, private cloud, and public air-gapped environments while maintaining full technical sovereignty."
                                },
                                {
                                    q: "Can we deploy private AI models on your platform?",
                                    a: "Yes. Our AI platforms are built for privacy first, allowing you to train and serve models within your own hardened infrastructure boundaries."
                                },
                                {
                                    q: "Are the developer tools fully open standard?",
                                    a: "We are committed to open standards. Every ecosystem tool we build is fully interoperable and free from proprietary lock-in, ensuring long-term technical freedom."
                                },
                                {
                                    q: "How does Broadsage ensure mission-critical resilience?",
                                    a: "We integrate AI-driven hardening at the core infrastructure layer, providing real-time resilience and automated security that evolves with your workload requirements."
                                }
                            ].map((faq, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    className="space-y-3"
                                >
                                    <h4 className="font-bold text-[#0D161C] flex items-center gap-2">
                                        <Plus className="w-3.5 h-3.5 text-[#6226FA]" />
                                        {faq.q}
                                    </h4>
                                    <p className="text-sm text-gray-400 leading-relaxed font-medium">
                                        {faq.a}
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                    </div>

                </Container>
            </main >
        </PageLayout >
    );
}
