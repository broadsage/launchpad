"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Clock, FileText, ChevronRight, Mail, ExternalLink, Scale, Lock, Globe, Info } from "lucide-react";
import { PageLayout } from "@repo/ui/page-layout";
import { Container, Section } from "@repo/ui/layout";
import { PremiumButton } from "@repo/ui/premium-button";
import Link from "next/link";

const SECTIONS = [
    {
        id: "acceptance",
        title: "Acceptance of Terms",
        icon: Scale,
        content: "By accessing or using the Broadsage platform, infrastructure services, and AI-native ecosystems, you agree to be bound by these Terms of Service. If you are entering into these terms on behalf of an enterprise or organization, you represent that you have the authority to bind that entity to these terms."
    },
    {
        id: "usage",
        title: "Sovereign Usage & License",
        icon: Lock,
        content: "Broadsage grants you a limited, non-exclusive, non-transferable license to access our mission-critical infrastructure tools. You are responsible for maintaining technical sovereignty over your deployments. Any use of the platform for illegal activities, or in a manner that bypasses our core hardening protocols, is strictly prohibited."
    },
    {
        id: "opensource",
        title: "Open Source & Standards",
        icon: Globe,
        content: "Many components of the Broadsage ecosystem are governed by open-source licenses. In the event of a conflict between these terms and an open-source license, the open-source license shall prevail for those specific components. We are committed to maintaining open standards and zero proprietary lock-in."
    },
    {
        id: "ai-terms",
        title: "AI & Intelligence Services",
        icon: Shield,
        content: "Our AI-native platforms are designed for privacy-first operations. You retain full ownership of your training data and model weights. Broadsage does not use your private data to train global models without explicit, cryptographically-signed consent."
    },
    {
        id: "liability",
        title: "Enterprise Liability & Warranty",
        icon: Info,
        content: "While we engineer for mission-critical resilience, all services are provided 'as is' and 'as available'. We do not warrant that service will be uninterrupted. Our liability is limited to the fees paid for the service in the twelve months preceding any claim, or as defined in your specific Master Service Agreement (MSA)."
    }
];

export default function TermsPage() {
    return (
        <PageLayout>
            <main className="bg-[#FAFAFB]">
                {/* Hero Section */}
                <Section className="relative pt-32 pb-20 overflow-hidden border-b border-gray-100">
                    <div className="absolute inset-0 blueprint-grid opacity-[0.4]" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FAFAFB]/50 to-[#FAFAFB]" />

                    <Container className="relative z-10">
                        <div className="max-w-3xl">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 shadow-sm mb-6">
                                    <Scale className="w-3.5 h-3.5 text-[#6226FA]" />
                                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">Service Authority</span>
                                </div>
                                <h1 className="text-5xl md:text-8xl font-bold tracking-tight text-[#0D161C] mb-8 leading-[0.9]">
                                    Enterprise <br />
                                    <span className="text-gradient-vibrant">Trust Framework.</span>
                                </h1>
                                <p className="text-xl text-gray-500 font-medium leading-relaxed mb-10 max-w-2xl">
                                    Our legal infrastructure is designed to provide global enterprises with the certainty and technical authority required for a multi-cloud, AI-native future.
                                </p>

                                <div className="flex flex-wrap items-center gap-6 text-sm">
                                    <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-gray-100 shadow-sm">
                                        <Clock className="w-4 h-4 text-gray-400" />
                                        <span className="font-bold text-gray-600">Updated: Jan 2026</span>
                                    </div>
                                    <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#6226FA]/5 border border-[#6226FA]/10 shadow-sm">
                                        <Shield className="w-4 h-4 text-[#6226FA]" />
                                        <span className="font-bold text-[#6226FA]">v2.4 Enterprise</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </Container>
                </Section>

                <Section padding="lg">
                    <Container>
                        <div className="grid lg:grid-cols-12 gap-16 items-start">
                            {/* Sticky Sidebar Navigation */}
                            <motion.aside
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                                className="hidden lg:block lg:col-span-3 sticky top-32"
                            >
                                <div className="space-y-1">
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-6 px-4">Sections</p>
                                    {SECTIONS.map((section) => (
                                        <a
                                            key={section.id}
                                            href={`#${section.id}`}
                                            className="group flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-bold text-gray-500 hover:text-[#6226FA] hover:bg-white hover:shadow-sm transition-all"
                                        >
                                            <section.icon className="w-4 h-4 opacity-40 group-hover:opacity-100" />
                                            {section.title}
                                            <ChevronRight className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                                        </a>
                                    ))}
                                </div>

                                <div className="mt-12 p-6 rounded-3xl bg-gradient-to-br from-[#6226FA] to-[#9B62FF] text-white">
                                    <h4 className="font-bold mb-2">Need help?</h4>
                                    <p className="text-xs text-white/80 leading-relaxed mb-6 font-medium">
                                        For enterprise MSA inquiries or custom legal requirements.
                                    </p>
                                    <Link href="/contact" className="inline-flex items-center gap-2 text-xs font-bold hover:underline group">
                                        Contact Legal Team <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                                    </Link>
                                </div>
                            </motion.aside>

                            {/* Main Content Area */}
                            <div className="lg:col-span-9 space-y-24">
                                {SECTIONS.map((section, i) => (
                                    <motion.section
                                        key={section.id}
                                        id={section.id}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        className="scroll-mt-32"
                                    >
                                        <div className="flex items-start gap-6">
                                            <div className="hidden md:flex flex-col items-center">
                                                <div className="w-12 h-12 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center justify-center mb-4">
                                                    <section.icon className="w-6 h-6 text-[#6226FA]" />
                                                </div>
                                                <div className="w-px h-full bg-gradient-to-b from-gray-200 to-transparent" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-center gap-3 mb-6">
                                                    <span className="text-[#6226FA] font-mono font-bold text-sm tracking-tighter opacity-40">0{i + 1}</span>
                                                    <h2 className="text-3xl font-bold text-[#0D161C] tracking-tight">{section.title}</h2>
                                                </div>
                                                <p className="text-lg text-gray-500 leading-relaxed font-normal">
                                                    {section.content}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.section>
                                ))}

                                {/* Governance Card */}
                                <motion.section
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    className="p-10 md:p-16 rounded-[48px] bg-[#0D161C] text-white relative overflow-hidden"
                                >
                                    <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" />
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#6226FA] blur-[120px] opacity-20 translate-x-1/2 -translate-y-1/2" />

                                    <div className="relative z-10 grid md:grid-cols-5 gap-12 items-center">
                                        <div className="md:col-span-3">
                                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-6">
                                                <Globe className="w-3.5 h-3.5 text-[#6226FA]" />
                                                <span className="text-[10px] font-bold uppercase tracking-widest">Global Governance</span>
                                            </div>
                                            <h3 className="text-3xl font-bold mb-6 tracking-tight">Governing Law</h3>
                                            <p className="text-gray-400 text-lg leading-relaxed mb-8 font-medium">
                                                These Terms are governed by the laws of the Jurisdiction of Delaware, excluding its conflict of law principles. Any arbitration will be held in a secure, digital environment or a physical location mutually agreed upon for mission-critical confidentiality.
                                            </p>
                                        </div>
                                        <div className="md:col-span-2 space-y-4">
                                            <div className="p-6 rounded-[32px] bg-white/5 border border-white/10 backdrop-blur-sm">
                                                <div className="w-10 h-10 rounded-xl bg-[#6226FA] flex items-center justify-center mb-4 shadow-lg shadow-purple-600/40">
                                                    <Mail className="w-5 h-5 text-white" />
                                                </div>
                                                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Legal Inquiries</p>
                                                <a href="mailto:legal@broadsage.com" className="text-lg font-bold hover:text-[#6226FA] transition-colors">legal@broadsage.com</a>
                                            </div>
                                        </div>
                                    </div>
                                </motion.section>
                            </div>
                        </div>
                    </Container>
                </Section>

                {/* Bottom CTA */}
                <Section background="subtle" padding="lg" className="border-t border-gray-100">
                    <Container>
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-3xl font-bold text-[#0D161C] mb-6">Still have legal questions?</h2>
                            <p className="text-gray-500 font-medium mb-10 max-w-xl mx-auto">
                                Our legal team is available to discuss enterprise compliance, data processing agreements (DPA), and custom sovereign requirements.
                            </p>
                            <Link href="/contact">
                                <PremiumButton variant="purple" className="rounded-full px-10 h-14 bg-[#6226FA] hover:bg-[#7D4DFF] text-white font-bold transition-all shadow-xl shadow-purple-600/20">
                                    Contact Support
                                </PremiumButton>
                            </Link>
                        </div>
                    </Container>
                </Section>
            </main>
        </PageLayout>
    );
}

