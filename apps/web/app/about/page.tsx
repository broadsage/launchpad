"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Briefcase, MessageSquare, ShieldCheck, Globe, Cpu, Layers, Terminal, Users, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { PageLayout } from "@repo/ui/page-layout";
import { Container } from "@repo/ui/layout";
import { PremiumButton } from "@repo/ui/premium-button";

export default function AboutPage() {
    return (
        <PageLayout>
            <main className="relative pt-24 pb-32 bg-[#FAFAFB] overflow-hidden">
                {/* Atmospheric Background Elements */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute inset-0 opacity-[0.4] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px]" />
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2 }}
                        className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#6226FA]/5 rounded-full blur-[120px] animate-pulse"
                    />
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2, delay: 0.5 }}
                        className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-[#00C2FF]/5 rounded-full blur-[150px]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#FAFAFB] via-transparent to-[#FAFAFB]" />
                </div>

                <Container className="relative z-10">
                    {/* Hero Section of About Page */}
                    <div className="grid lg:grid-cols-12 gap-12 items-end mb-24">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="lg:col-span-8"
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 shadow-sm mb-8">
                                <div className="w-2 h-2 rounded-full bg-[#6226FA] animate-pulse" />
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">Our Corporate Vision</span>
                            </div>
                            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#0D161C] mb-8 leading-[1.1]">
                                The Open Source Standard for <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6226FA] to-[#00C2FF]">Progressive Enterprises.</span>
                            </h1>
                            <p className="text-xl text-gray-500 font-medium leading-relaxed max-w-2xl">
                                Broadsage is the bridge between community-driven innovation and the rigorous technical requirements of global banking, healthcare, and high-scale AI infrastructure.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="lg:col-span-4 flex lg:justify-end pb-4"
                        >
                            <div className="grid grid-cols-2 gap-8 border-l border-gray-100 pl-8">
                                <div>
                                    <div className="text-3xl font-bold text-[#0D161C]">12k+</div>
                                    <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">Upstream Contributions</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-[#0D161C]">24/7</div>
                                    <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">Mission Support</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Expertise Pillars Section */}
                    <div className="grid md:grid-cols-3 gap-8 mb-32">
                        {[
                            {
                                title: "Hardened Infrastructure",
                                desc: "Engineering the world's most secure minimal OS and image foundations for mission-critical cloud-native workloads.",
                                icon: Layers,
                                color: "text-amber-600",
                                bg: "bg-amber-50"
                            },
                            {
                                title: "Secure AI Foundations",
                                desc: "Building the hardened execution environments for private and resilient enterprise-grade AI deployment.",
                                icon: Cpu,
                                color: "text-blue-600",
                                bg: "bg-blue-50"
                            },
                            {
                                title: "Hardened DevSecOps",
                                desc: "Unified supply chain defense through zero-vulnerability container and VM image lifecycle management.",
                                icon: ShieldCheck,
                                color: "text-[#6226FA]",
                                bg: "bg-purple-50"
                            }
                        ].map((pillar, i) => (
                            <motion.div
                                key={pillar.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="p-8 rounded-[32px] bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all group"
                            >
                                <div className={`w-12 h-12 rounded-2xl ${pillar.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                    <pillar.icon className={`w-6 h-6 ${pillar.color}`} />
                                </div>
                                <h3 className="text-xl font-bold text-[#0D161C] mb-4">{pillar.title}</h3>
                                <p className="text-gray-500 font-medium text-sm leading-relaxed">{pillar.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Mission Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-[#0D161C] rounded-[32px] md:rounded-[48px] p-8 md:p-12 lg:p-16 relative overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] group mb-32"
                    >
                        <div className="absolute inset-0 blueprint-grid opacity-10" />
                        <div className="absolute top-0 right-0 w-96 h-96 bg-[#6226FA] blur-[150px] opacity-20 translate-x-1/2 -translate-y-1/2" />

                        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
                            <div className="lg:col-span-7">
                                <h2 className="text-3xl md:text-[44px] font-bold text-white mb-8 tracking-tight leading-tight">
                                    Powering the Global <br />
                                    Intellectual Economy.
                                </h2>
                                <p className="text-lg text-gray-400 mb-10 leading-relaxed font-medium">
                                    Broadsage is a global leader in <span className="text-[#6226FA] font-bold">Enterprise Open-Source Stewardship</span>. We engineer the bridge between community agility and the rigid performance requirements of global infrastructure.
                                </p>
                                <div className="flex flex-wrap gap-6">
                                    <Link href="/contact">
                                        <PremiumButton variant="purple" className="rounded-full px-10 h-14 bg-[#6226FA] hover:bg-[#7D4DFF] text-white font-bold transition-all shadow-xl">
                                            Partner with Us <ArrowRight className="w-5 h-5 ml-2" />
                                        </PremiumButton>
                                    </Link>
                                </div>
                            </div>

                            <div className="lg:col-span-5 grid gap-8">
                                {[
                                    { label: "Stability", value: "99.999%", desc: "Uptime for critical K8s nodes" },
                                    { label: "Security", value: "Zero", desc: "Unpatched vulnerabilities in Core OS" },
                                    { label: "Community", value: "40+", desc: "Open projects maintained" }
                                ].map(stat => (
                                    <div key={stat.label} className="flex items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/10">
                                        <div className="text-3xl font-bold text-white">{stat.value}</div>
                                        <div>
                                            <div className="text-xs font-bold text-[#6226FA] uppercase tracking-widest">{stat.label}</div>
                                            <div className="text-xs text-gray-500 font-medium">{stat.desc}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Core Values */}
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-20">
                            <h2 className="text-4xl font-bold text-[#0D161C] mb-4 tracking-tight">The DNA of Broadsage</h2>
                            <p className="text-gray-500 font-medium">We are guided by the principles of open innovation and enterprise rigor.</p>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
                            {[
                                { title: "Open Sovereignty", desc: "Total control over modern software supply chains through open standards.", icon: Globe },
                                { title: "Technical Rigor", desc: "Enterprise-grade hardening applied to the fastest-moving innovations.", icon: ShieldCheck },
                                { title: "Global Stewardship", desc: "Committed to the long-term health of the open-source ecosystem.", icon: Users }
                            ].map((principle) => (
                                <div key={principle.title} className="group">
                                    <div className="w-16 h-16 rounded-[24px] bg-white border border-gray-100 shadow-sm flex items-center justify-center mb-6 group-hover:bg-[#6226FA]/5 group-hover:border-[#6226FA]/20 transition-all">
                                        <principle.icon className="w-7 h-7 text-[#6226FA]" />
                                    </div>
                                    <h4 className="font-bold text-[#0D161C] mb-3 text-xl">{principle.title}</h4>
                                    <p className="text-sm text-gray-500 font-medium leading-relaxed">{principle.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </main>
        </PageLayout>
    );
}
