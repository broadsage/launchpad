"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Lock, Eye, Database, Share2, UserCheck, Clock, FileText, ChevronRight, Mail, Globe, HardDrive, Cpu } from "lucide-react";
import { PageLayout } from "@repo/ui/page-layout";
import { Container, Section } from "@repo/ui/layout";
import { PremiumButton } from "@repo/ui/premium-button";
import Link from "next/link";

const SECTIONS = [
    {
        id: "data-collection",
        title: "Data Collection & Origin",
        icon: Database,
        content: "Broadsage collects minimal telemetry required for infrastructure stability and security. This includes deployment logs, account credentials, and API usage metrics. We never collect the content of your private repositories or internal application data without explicit cryptographic authorization."
    },
    {
        id: "ai-privacy",
        title: "AI & Intelligence Privacy",
        icon: Cpu,
        content: "Our AI-native platforms are engineered with a 'Zero-Knowledge' default. Your model weights, training data, and inference prompts are isolated at the hardware level. Broadsage does not contribute your private intelligence assets to global models unless you opt-in via a signed Enterprise Data Agreement."
    },
    {
        id: "sovereignty",
        title: "Technical Sovereignty",
        icon: HardDrive,
        content: "You retain full ownership of your data layers. We provide the tools for you to manage your own encryption keys (BYOK) and data residency. In the event of account termination, our 'Secure Purge' protocol ensures that all mission-critical data is cryptographically erased across all regions."
    },
    {
        id: "third-party",
        title: "Third-Party & Sub-processors",
        icon: Share2,
        content: "We limit the use of third-party processors to essential delivery services (e.g., global CDNs, cloud providers). All sub-processors are vetted for SOC2 Type II compliance and are bound by strict Data Processing Agreements (DPA) that mirror our commitment to sovereignty."
    },
    {
        id: "rights",
        title: "User Rights & Governance",
        icon: UserCheck,
        content: "Broadsage aligns with global privacy standards including GDPR, CCPA, and HIPAA. You have the right to export your data, request deletion, and audit our security controls. Our transparency portal provides real-time access to our infrastructure compliance reports."
    }
];

export default function PrivacyPage() {
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
                                    <Shield className="w-3.5 h-3.5 text-[#6226FA]" />
                                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">Protocol & Governance</span>
                                </div>
                                <h1 className="text-5xl md:text-8xl font-bold tracking-tight text-[#0D161C] mb-8 leading-[0.9]">
                                    Data <br />
                                    <span className="text-gradient-vibrant">Sovereignty.</span>
                                </h1>
                                <p className="text-xl text-gray-500 font-medium leading-relaxed mb-10 max-w-2xl">
                                    Our Zero-Knowledge architecture ensures that you retain absolute control over your intelligence assets. Privacy is not a policy—it is our primary engineering requirement.
                                </p>

                                <div className="flex flex-wrap items-center gap-6 text-sm">
                                    <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-gray-100 shadow-sm">
                                        <Clock className="w-4 h-4 text-gray-400" />
                                        <span className="font-bold text-gray-600">Effective: Jan 2026</span>
                                    </div>
                                    <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#00C2FF]/5 border border-[#00C2FF]/10 shadow-sm">
                                        <Lock className="w-4 h-4 text-[#00C2FF]" />
                                        <span className="font-bold text-[#00C2FF]">Encrypted Infrastructure</span>
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
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-6 px-4">Privacy Layers</p>
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

                                <div className="mt-12 p-6 rounded-3xl bg-slate-900 text-white relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#6226FA]/20 blur-3xl rounded-full" />
                                    <h4 className="font-bold mb-2 relative z-10">Data Sovereignty</h4>
                                    <p className="text-xs text-slate-400 leading-relaxed mb-6 font-medium relative z-10">
                                        Learn how we protect your enterprise data with hardware-level isolation.
                                    </p>
                                    <PremiumButton variant="purple" size="sm" className="w-full h-10 rounded-xl text-[10px] uppercase font-bold tracking-widest">
                                        Security Whitepaper
                                    </PremiumButton>
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
                                                    <span className="text-[#6226FA] font-mono font-bold text-sm tracking-tighter opacity-40">PROTOCOL 0{i + 1}</span>
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
                                    className="p-10 md:p-16 rounded-[48px] bg-white border border-gray-100 shadow-2xl shadow-gray-200/50 relative overflow-hidden"
                                >
                                    <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#00C2FF_1px,transparent_1px)] [background-size:24px_24px]" />

                                    <div className="relative z-10 grid md:grid-cols-5 gap-12 items-center">
                                        <div className="md:col-span-3">
                                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-6">
                                                <Globe className="w-3.5 h-3.5 text-[#00C2FF]" />
                                                <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600">Compliance Portfolio</span>
                                            </div>
                                            <h3 className="text-3xl font-bold mb-6 tracking-tight text-[#0D161C]">Data Privacy Officer</h3>
                                            <p className="text-gray-500 text-lg leading-relaxed mb-8 font-medium">
                                                We have a dedicated DPO overseeing our data sovereignty protocols. For specific inquiries regarding GDPR data portability or deletion requests, please contact our privacy desk.
                                            </p>
                                            <div className="flex flex-wrap gap-4">
                                                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-50 text-xs font-bold text-gray-500">
                                                    <Lock className="w-3 h-3" /> SOC2 TYPE II
                                                </div>
                                                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-50 text-xs font-bold text-gray-500">
                                                    <Shield className="w-3 h-3" /> GDPR COMPLIANT
                                                </div>
                                                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-50 text-xs font-bold text-gray-500">
                                                    <Eye className="w-3 h-3" /> PRIVACY SHIELD 2.0
                                                </div>
                                            </div>
                                        </div>
                                        <div className="md:col-span-2 space-y-4">
                                            <div className="p-6 rounded-[32px] bg-slate-900 border border-slate-800 shadow-xl">
                                                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#6226FA] to-[#00C2FF] flex items-center justify-center mb-4 shadow-lg shadow-purple-600/20">
                                                    <Mail className="w-5 h-5 text-white" />
                                                </div>
                                                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Privacy Desk</p>
                                                <a href="mailto:privacy@broadsage.com" className="text-lg font-bold text-white hover:text-[#00C2FF] transition-colors">privacy@broadsage.com</a>
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
                            <h2 className="text-3xl font-bold text-[#0D161C] mb-6">Transparency is our standard.</h2>
                            <p className="text-gray-500 font-medium mb-10 max-w-xl mx-auto">
                                Read our full security documentation to understand how we encrypt and protect your mission-critical infrastructure.
                            </p>
                            <Link href="/contact">
                                <PremiumButton variant="purple" className="rounded-full px-10 h-14 bg-[#0D161C] hover:bg-[#1A2632] text-white font-bold transition-all shadow-xl shadow-gray-900/10">
                                    Request Security Audit
                                </PremiumButton>
                            </Link>
                        </div>
                    </Container>
                </Section>
            </main>
        </PageLayout>
    );
}
