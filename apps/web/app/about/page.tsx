"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Briefcase, MessageSquare } from "lucide-react";
import Link from "next/link";
import { PageLayout } from "@repo/ui/page-layout";
import { Container } from "@repo/ui/layout";
import { PremiumButton } from "@repo/ui/premium-button";

export default function AboutPage() {
    return (
        <PageLayout>
            <main className="pt-24 pb-32">
                <Container>
                    {/* Hero Section of About Page */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl mb-24"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 shadow-sm mb-8">
                            <div className="w-2 h-2 rounded-full bg-[#6226FA] animate-pulse" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">About Broadsage</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#0D161C] mb-8">
                            We are building the <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6226FA] to-[#00C2FF]">Secure Core.</span>
                        </h1>
                        <p className="text-xl text-gray-500 font-medium leading-relaxed max-w-2xl">
                            Broadsage was founded with a single mission: to provide developers with the most secure, resilient, and transparent software supply chain tools on the planet.
                        </p>
                    </motion.div>

                    {/* Nice to meet you Card - Faithfully following Directus Design */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="bg-[#F0ECFF] rounded-[32px] md:rounded-[48px] p-8 md:p-12 lg:p-16 relative overflow-hidden shadow-[0_32px_64px_-16px_rgba(98,38,250,0.1)] group border border-purple-100"
                    >
                        {/* Ambient background animated blobs */}
                        <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-300/30 rounded-full blur-[100px] pointer-events-none group-hover:scale-110 transition-transform duration-1000" />
                        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-200/20 rounded-full blur-[80px] pointer-events-none" />

                        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start relative z-10">
                            {/* Left Section: Main Message & Actions (Span 6) */}
                            <div className="lg:col-span-6">
                                <h2 className="text-3xl md:text-[36px] font-bold text-[#0E1C2F] mb-6 tracking-tight leading-tight">
                                    Nice to meet you
                                </h2>
                                <p className="text-base md:text-[18px] text-[#0E1C2F]/70 mb-10 leading-relaxed font-medium">
                                    Broadsage is an open-source powerhouse focused on the intersection of <span className="text-[#6226FA] font-semibold">Security, AI, and Software Development</span>. We specialize in building resilient Infrastructure as Code (IaC) solutions and AI-driven security tools that fortify the modern development lifecycle. Chat with us to learn more!
                                </p>
                                <div className="flex flex-col sm:flex-row flex-wrap gap-4">
                                    <Link href="/contact">
                                        <PremiumButton variant="purple" className="rounded-full px-8 h-12 bg-[#6226FA] hover:bg-[#7D4DFF] text-white font-bold text-sm shadow-lg shadow-purple-600/20 transition-all flex items-center justify-center gap-2 group/btn">
                                            Contact the team <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                        </PremiumButton>
                                    </Link>
                                    <button className="rounded-full px-8 h-12 bg-white/60 backdrop-blur-md border border-purple-200 hover:border-purple-300 text-[#0E1C2F] font-bold text-sm shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2 group/btn2">
                                        Recent news <ArrowRight className="w-4 h-4 group-hover/btn2:translate-x-1 transition-transform opacity-60" />
                                    </button>
                                </div>
                            </div>

                            {/* Right Section: Careers & Community side-by-side (Span 6) */}
                            <div className="lg:col-span-6 grid sm:grid-cols-2 gap-8 lg:gap-12 lg:pt-2">
                                <div className="space-y-4">
                                    <div className="w-10 h-10 bg-white/60 backdrop-blur-sm rounded-xl shadow-sm flex items-center justify-center mb-6">
                                        <Briefcase className="w-5 h-5 text-[#6226FA]" />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#0E1C2F] leading-tight tracking-tight">Careers</h3>
                                    <p className="text-sm text-[#0E1C2F]/60 leading-relaxed font-medium">
                                        Help us architect the future of AI-driven security and automated IaC. We&apos;re looking for engineers who want to build high-stakes, secure-by-default infrastructure.
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    <div className="w-10 h-10 bg-white/60 backdrop-blur-sm rounded-xl shadow-sm flex items-center justify-center mb-6">
                                        <MessageSquare className="w-5 h-5 text-[#6226FA]" />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#0E1C2F] leading-tight tracking-tight">Community</h3>
                                    <p className="text-sm text-[#0E1C2F]/60 leading-relaxed font-medium">
                                        Connect with a global collective of security researchers, AI pioneers, and DevOps architects building the next generation of resilient software.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </Container>
            </main>
        </PageLayout>
    );
}
