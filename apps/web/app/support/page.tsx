"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    LifeBuoy,
    Clock,
    MessageSquare,
    HelpCircle,
    Shield,
    Zap,
    Globe,
    Mail,
    ExternalLink,
    ChevronRight,
    Search,
    BookOpen,
    AlertCircle
} from "lucide-react";
import { PageLayout } from "@repo/ui/page-layout";
import { Container, Section } from "@repo/ui/layout";
import { PremiumButton } from "@repo/ui/premium-button";
import Link from "next/link";

const SUPPORT_TIERS = [
    {
        name: "Community (OSS)",
        sev1: "Forum Only",
        sev2: "Forum Only",
        sev3: "Forum Only",
        sev4: "Forum Only",
        isEnterprise: false
    },
    {
        name: "Developer Standard",
        sev1: "Next Biz Day",
        sev2: "Next Biz Day",
        sev3: "2 Biz Days",
        sev4: "3 Biz Days",
        isEnterprise: false
    },
    {
        name: "Enterprise Multi-Cloud",
        sev1: "< 2 hrs",
        sev2: "< 4 hrs",
        sev3: "< 8 hrs",
        sev4: "< 12 hrs",
        isEnterprise: true
    },
    {
        name: "Enterprise Global (24/7)",
        sev1: "< 30 mins",
        sev2: "< 1 hr",
        sev3: "< 4 hrs",
        sev4: "< 8 hrs",
        isEnterprise: true
    }
];

const SECTIONS = [
    {
        id: "ecosystem",
        title: "Ecosystem Coverage",
        icon: Globe,
        content: "Broadsage Global Support covers the entire Broadsage Ecosystem including Kubernetes Service (BKS), AI/MLOps pipelines, Core OS, and Edge networking. We provide support for both upstream community integrations and our hardened binaries."
    },
    {
        id: "mission-critical",
        title: "Mission-Critical Aid",
        icon: Zap,
        content: "For Severity 1 incidents (system-wide outages), Enterprise Global customers have a direct line to our principal systems engineers and AI architects, ensuring immediate resolution path finding."
    },
    {
        id: "consultative",
        title: "Consultative Support",
        icon: MessageSquare,
        content: "Enterprise tiers include architectural advisory. Our team assists with migration strategies, security audits, and cloud-native maturity assessments to ensure long-term stability."
    }
];

export default function SupportPage() {
    return (
        <PageLayout>
            <main className="bg-[#FAFAFB]">
                {/* Hero Section */}
                <Section className="relative pt-32 pb-20 overflow-hidden border-b border-gray-100">
                    <div className="absolute inset-0 blueprint-grid opacity-[0.2]" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FAFAFB]/80 to-[#FAFAFB]" />

                    <Container className="relative z-10">
                        <div className="max-w-5xl">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 shadow-sm mb-6">
                                    <LifeBuoy className="w-3.5 h-3.5 text-[#6226FA]" />
                                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">Corporate Service Framework</span>
                                </div>
                                <h1 className="text-5xl md:text-8xl font-bold tracking-tight text-[#0D161C] mb-8 leading-[0.9]">
                                    Enterprise <br />
                                    <span className="text-gradient-vibrant">Reliability Gear.</span>
                                </h1>
                                <p className="text-xl text-gray-500 font-medium leading-relaxed mb-10 max-w-2xl">
                                    We support the technologies that power modern industry. From global clusters to edge intelligence, our support framework is engineered for the unexpected.
                                </p>

                                <div className="flex flex-wrap items-center gap-6 text-sm">
                                    <div className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-white border border-gray-100 shadow-sm">
                                        <Clock className="w-4 h-4 text-[#6226FA]" />
                                        <span className="font-bold text-gray-600 tracking-tight">Global SLA v5.0</span>
                                    </div>
                                    <div className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#0D161C] text-white shadow-xl">
                                        <Shield className="w-4 h-4 text-[#6226FA]" />
                                        <span className="font-bold tracking-tight">Active Mission Guard</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </Container>
                </Section>

                {/* Main Content Section */}
                <Section padding="lg">
                    <Container>
                        <div className="grid lg:grid-cols-12 gap-16 items-start">
                            {/* Sticky Sidebar */}
                            <motion.aside
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                                className="hidden lg:block lg:col-span-3 sticky top-32"
                            >
                                <div className="space-y-1">
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-6 px-4">Policy Navigation</p>
                                    <a href="#overview" className="group flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-bold text-[#6226FA] bg-white shadow-sm transition-all border border-gray-100">
                                        <Search className="w-4 h-4" />
                                        Overview
                                        <ChevronRight className="w-3 h-3 ml-auto" />
                                    </a>
                                    {SECTIONS.map((section) => (
                                        <a
                                            key={section.id}
                                            href={`#${section.id}`}
                                            className="group flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-bold text-gray-500 hover:text-[#6226FA] hover:bg-white hover:shadow-sm transition-all border border-transparent hover:border-gray-100"
                                        >
                                            <section.icon className="w-4 h-4 opacity-40 group-hover:opacity-100" />
                                            {section.title}
                                            <ChevronRight className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                                        </a>
                                    ))}
                                    <a href="#sla-table" className="group flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-bold text-gray-500 hover:text-[#6226FA] hover:bg-white hover:shadow-sm transition-all border border-transparent hover:border-gray-100">
                                        <BookOpen className="w-4 h-4 opacity-40 group-hover:opacity-100" />
                                        SLA Response Times
                                        <ChevronRight className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                                    </a>
                                </div>

                                <div className="mt-12 p-8 rounded-[32px] bg-[#0D161C] text-white relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#6226FA]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <h4 className="font-bold mb-3 relative z-10">Premium Support?</h4>
                                    <p className="text-xs text-gray-400 leading-relaxed mb-6 font-medium relative z-10">
                                        Upgrade to Platinum for 30-minute response times and a dedicated Customer Success Manager.
                                    </p>
                                    <Link href="/contact" className="inline-flex items-center gap-2 text-xs font-bold text-[#6226FA] hover:text-white transition-colors relative z-10">
                                        Contact Sales <ExternalLink className="w-3 h-3" />
                                    </Link>
                                </div>
                            </motion.aside>

                            {/* Main Content Area */}
                            <div className="lg:col-span-9 space-y-24">
                                <section id="overview" className="scroll-mt-32">
                                    <h2 className="text-4xl font-bold text-[#0D161C] mb-8 tracking-tight">Support Overview</h2>
                                    <div className="prose prose-gray max-w-none">
                                        <p className="text-lg text-gray-500 leading-relaxed font-normal mb-6">
                                            Broadsage is committed to providing world-class technical support to ensure your success on our platform. Our support team consists of experienced systems engineers and AI specialists who understand the critical nature of your infrastructure.
                                        </p>
                                        <p className="text-lg text-gray-500 leading-relaxed font-normal">
                                            This policy outlines the target response times, support channels, and scope of assistance available under different subscription plans.
                                        </p>
                                    </div>
                                </section>

                                {SECTIONS.map((section, i) => (
                                    <motion.section
                                        key={section.id}
                                        id={section.id}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        className="scroll-mt-32"
                                    >
                                        <div className="flex items-start gap-8">
                                            <div className="hidden md:flex flex-col items-center">
                                                <div className="w-14 h-14 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center justify-center mb-6 text-[#6226FA]">
                                                    <section.icon className="w-7 h-7" />
                                                </div>
                                                <div className="w-px h-full bg-gradient-to-b from-gray-200 via-gray-100 to-transparent" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-center gap-4 mb-6">
                                                    <span className="text-[#6226FA] font-mono font-bold text-sm tracking-tighter opacity-30">PROTOCOL 0{i + 1}</span>
                                                    <h3 className="text-3xl font-bold text-[#0D161C] tracking-tight">{section.title}</h3>
                                                </div>
                                                <p className="text-lg text-gray-500 leading-relaxed font-normal">
                                                    {section.content}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.section>
                                ))}

                                {/* SLA Response Table Section */}
                                <section id="sla-table" className="scroll-mt-32">
                                    <div className="flex items-center gap-4 mb-10">
                                        <div className="w-10 h-10 rounded-xl bg-[#6226FA]/10 flex items-center justify-center">
                                            <Clock className="w-5 h-5 text-[#6226FA]" />
                                        </div>
                                        <h3 className="text-3xl font-bold text-[#0D161C] tracking-tight">SLA Target Response Times</h3>
                                    </div>

                                    <div className="overflow-hidden rounded-[32px] border border-gray-100 bg-white shadow-xl shadow-gray-200/50">
                                        <div className="overflow-x-auto">
                                            <table className="w-full text-left border-collapse">
                                                <thead>
                                                    <tr className="bg-[#0D161C] text-white">
                                                        <th className="px-8 py-6 text-sm font-bold uppercase tracking-widest border-b border-white/10">Subscription Plan</th>
                                                        <th className="px-8 py-6 text-sm font-bold uppercase tracking-widest border-b border-white/10">Sev 1 (Critical)</th>
                                                        <th className="px-8 py-6 text-sm font-bold uppercase tracking-widest border-b border-white/10">Sev 2 (High)</th>
                                                        <th className="px-8 py-6 text-sm font-bold uppercase tracking-widest border-b border-white/10">Sev 3 (Normal)</th>
                                                        <th className="px-8 py-6 text-sm font-bold uppercase tracking-widest border-b border-white/10">Sev 4 (Low)</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-50">
                                                    {SUPPORT_TIERS.map((tier) => (
                                                        <tr key={tier.name} className="hover:bg-gray-50/50 transition-colors">
                                                            <td className="px-8 py-6 font-bold text-[#0D161C]">{tier.name}</td>
                                                            <td className="px-8 py-6 text-sm text-gray-500 font-medium">{tier.sev1}</td>
                                                            <td className="px-8 py-6 text-sm text-gray-500 font-medium">{tier.sev2}</td>
                                                            <td className="px-8 py-6 text-sm text-gray-500 font-medium">{tier.sev3}</td>
                                                            <td className="px-8 py-6 text-sm text-gray-500 font-medium">{tier.sev4}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <p className="mt-6 text-xs text-gray-400 font-medium">
                                        * Business Hours are defined as 9:00 AM to 6:00 PM EST, Monday through Friday, excluding public holidays.
                                    </p>
                                </section>

                                {/* Contact Card */}
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
                                                <span className="text-[10px] font-bold uppercase tracking-widest">Global Operations</span>
                                            </div>
                                            <h3 className="text-3xl font-bold mb-6 tracking-tight">Ready to assist.</h3>
                                            <p className="text-gray-400 text-lg leading-relaxed mb-8 font-medium">
                                                Questions about our support framework or need specialized assistance? Our team is standing by to help you scale your sovereign AI infrastructure.
                                            </p>
                                            <div className="flex items-center gap-8">
                                                <div className="flex flex-col">
                                                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#6226FA] mb-1">Status</span>
                                                    <span className="text-sm font-bold flex items-center gap-2">
                                                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                                        All Systems Operational
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="md:col-span-2 space-y-4">
                                            <div className="p-6 rounded-[32px] bg-white/5 border border-white/10 backdrop-blur-sm">
                                                <div className="w-10 h-10 rounded-xl bg-[#6226FA] flex items-center justify-center mb-4 shadow-lg shadow-purple-600/40">
                                                    <Mail className="w-5 h-5 text-white" />
                                                </div>
                                                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Support Inquiries</p>
                                                <a href="mailto:support@broadsage.com" className="text-lg font-bold hover:text-[#6226FA] transition-colors">support@broadsage.com</a>
                                            </div>
                                        </div>
                                    </div>
                                </motion.section>
                            </div>
                        </div>
                    </Container>
                </Section>

                {/* Bottom CTA */}
                <Section background="subtle" padding="lg" className="border-t border-gray-100 relative overflow-hidden">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,#6226FA05_0%,transparent_70%)]" />
                    <Container>
                        <div className="max-w-4xl mx-auto text-center relative z-10">
                            <h2 className="text-4xl font-bold text-[#0D161C] mb-6 tracking-tight">Experience Premium Support</h2>
                            <p className="text-gray-500 text-lg font-medium mb-10 max-w-xl mx-auto">
                                Large-scale enterprises require dedicated attention. Discover how Broadsage Platinum can accelerate your delivery.
                            </p>
                            <Link href="/contact">
                                <PremiumButton variant="purple" className="rounded-full px-12 h-16 bg-[#6226FA] hover:bg-[#7D4DFF] text-white font-bold transition-all shadow-2xl shadow-purple-600/30 text-lg">
                                    Upgrade to Enterprise
                                </PremiumButton>
                            </Link>
                        </div>
                    </Container>
                </Section>
            </main>
        </PageLayout>
    );
}
