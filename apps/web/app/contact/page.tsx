"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, MessageSquare, Globe, Plus, CheckCircle2, Eye, Lock, ShieldCheck, Zap, Github } from "lucide-react";
import { PageLayout } from "@repo/ui/page-layout";
import { Container, Section } from "@repo/ui/layout";
import { PremiumButton } from "@repo/ui/premium-button";

export default function ContactPage() {
    const [submitted, setSubmitted] = React.useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
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
            <main className="pt-24 pb-16">
                <Container>
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
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">Contact Us</span>
                        </motion.div>
                        <motion.h1
                            variants={itemVariants}
                            className="text-5xl md:text-7xl font-bold tracking-tight text-[#0D161C] mb-6"
                        >
                            Get in touch with <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6226FA] to-[#00C2FF]">our team today.</span>
                        </motion.h1>
                        <motion.p
                            variants={itemVariants}
                            className="text-xl text-gray-500 font-medium leading-relaxed"
                        >
                            Whether you have questions about our hardened images, want to discuss custom security solutions, or need technical support, we're here to help.
                        </motion.p>
                    </motion.div>

                    <div className="grid lg:grid-cols-12 gap-12 items-start mb-0">
                        {/* Contact Form Card */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="lg:col-span-7 bg-white rounded-[32px] p-8 md:p-12 shadow-[0_32px_64px_-16px_rgba(98,38,250,0.08)] border border-gray-100 relative overflow-hidden group"
                        >
                            {/* Decorative background element */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-50 rounded-full blur-3xl opacity-50 -mr-32 -mt-32 pointer-events-none transition-transform duration-1000 group-hover:scale-110" />

                            {submitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-12"
                                >
                                    <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8">
                                        <CheckCircle2 className="w-10 h-10 text-green-500" />
                                    </div>
                                    <h2 className="text-3xl font-bold text-[#0D161C] mb-4">Message Received!</h2>
                                    <p className="text-gray-500 mb-8 max-w-sm mx-auto">
                                        Thank you for reaching out. A member of the Broadsage team will get back to you within 24 hours.
                                    </p>
                                    <PremiumButton
                                        variant="purple"
                                        onClick={() => setSubmitted(false)}
                                        className="h-12 px-8"
                                    >
                                        Send another message
                                    </PremiumButton>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="first-name" className="text-xs font-bold uppercase tracking-wider text-gray-400 ml-1">First Name</label>
                                        <input
                                            id="first-name"
                                            type="text"
                                            required
                                            placeholder="Jane"
                                            className="w-full h-12 px-4 rounded-xl bg-gray-50 border border-gray-100 focus:border-[#6226FA] focus:ring-2 focus:ring-[#6226FA]/10 outline-none transition-all placeholder:text-gray-300 font-medium"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="last-name" className="text-xs font-bold uppercase tracking-wider text-gray-400 ml-1">Last Name</label>
                                        <input
                                            id="last-name"
                                            type="text"
                                            required
                                            placeholder="Smith"
                                            className="w-full h-12 px-4 rounded-xl bg-gray-50 border border-gray-100 focus:border-[#6226FA] focus:ring-2 focus:ring-[#6226FA]/10 outline-none transition-all placeholder:text-gray-300 font-medium"
                                        />
                                    </div>
                                    <div className="md:col-span-2 space-y-2">
                                        <label htmlFor="work-email" className="text-xs font-bold uppercase tracking-wider text-gray-400 ml-1">Work Email</label>
                                        <input
                                            id="work-email"
                                            type="email"
                                            required
                                            placeholder="jane@company.com"
                                            className="w-full h-12 px-4 rounded-xl bg-gray-50 border border-gray-100 focus:border-[#6226FA] focus:ring-2 focus:ring-[#6226FA]/10 outline-none transition-all placeholder:text-gray-300 font-medium"
                                        />
                                    </div>
                                    <div className="md:col-span-2 space-y-2">
                                        <label htmlFor="reason" className="text-xs font-bold uppercase tracking-wider text-gray-400 ml-1">Reason for contacting</label>
                                        <select
                                            id="reason"
                                            required
                                            defaultValue=""
                                            className="w-full h-12 px-4 rounded-xl bg-gray-50 border border-gray-100 focus:border-[#6226FA] focus:ring-2 focus:ring-[#6226FA]/10 outline-none transition-all font-medium appearance-none cursor-pointer"
                                        >
                                            <option value="" disabled>Select an option</option>
                                            <option value="sales">Licensing & Pricing (Sales)</option>
                                            <option value="support">Technical Support</option>
                                            <option value="partner">Partner Program</option>
                                            <option value="feature">Feature Request</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                    <div className="md:col-span-2 space-y-2">
                                        <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-gray-400 ml-1">Message</label>
                                        <textarea
                                            id="message"
                                            required
                                            rows={4}
                                            placeholder="Tell us how we can help..."
                                            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:border-[#6226FA] focus:ring-2 focus:ring-[#6226FA]/10 outline-none transition-all placeholder:text-gray-300 font-medium resize-none"
                                        />
                                    </div>
                                    <div className="md:col-span-2 pt-4">
                                        <PremiumButton variant="purple" type="submit" className="w-full h-14 text-sm font-bold tracking-tight rounded-2xl group/btn">
                                            Send Message <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                                        </PremiumButton>
                                    </div>
                                    <p className="md:col-span-2 text-center text-[10px] text-gray-400 font-medium">
                                        By submitting this form, you agree to our <a href="#" className="underline hover:text-[#6226FA]">Privacy Policy</a>.
                                    </p>
                                </form>
                            )}
                        </motion.div>

                        {/* Contact Info & Sidebar */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            className="lg:col-span-5 flex flex-col"
                        >
                            <div className="mb-8">
                                <h3 className="text-2xl font-bold text-[#0D161C] tracking-tight mb-4">Prefer direct contact?</h3>
                                <p className="text-gray-500 font-medium">Reach out through our specialized channels for faster response times.</p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 flex-1">
                                {[
                                    {
                                        title: "Customer Support",
                                        desc: "Direct assistance with technical implementation, architectural guidance, or image documentation from our core team.",
                                        link: "support@broadsage.io",
                                        icon: MessageSquare
                                    },
                                    {
                                        title: "Security Research",
                                        desc: "Priority reporting for vulnerability concerns. Direct access to our security researchers and bug bounty programs.",
                                        link: "security@broadsage.io",
                                        icon: Globe
                                    },
                                    {
                                        title: "Open Source",
                                        desc: "Contribute to our distroless core, participate in community discussions, or build tools on the Broadsage platform.",
                                        link: "github.com/broadsage",
                                        icon: Github,
                                        isExternal: true
                                    },
                                    {
                                        title: "General Inquiries",
                                        desc: "Reach out for strategic partnership opportunities, press inquiries, or general questions about our mission.",
                                        link: "hello@broadsage.io",
                                        icon: Mail
                                    }
                                ].map((item) => (
                                    <div key={item.title} className="flex flex-col justify-between p-5 rounded-3xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-all group">
                                        <div>
                                            <div className="w-9 h-9 shrink-0 rounded-xl bg-purple-50 flex items-center justify-center group-hover:bg-[#6226FA] transition-colors mb-4">
                                                <item.icon className="w-4 h-4 text-[#6226FA] group-hover:text-white transition-colors" />
                                            </div>
                                            <h4 className="font-bold text-[#0D161C] text-[14px] mb-1.5">{item.title}</h4>
                                            <p className="text-[10px] text-gray-400 font-medium leading-relaxed line-clamp-3">
                                                {item.desc}
                                            </p>
                                        </div>
                                        <div className="mt-4 pt-4 border-t border-gray-50">
                                            <a
                                                href={item.isExternal ? `https://${item.link}` : `mailto:${item.link}`}
                                                target={item.isExternal ? "_blank" : undefined}
                                                rel={item.isExternal ? "noopener noreferrer" : undefined}
                                                className="text-[12px] font-bold text-[#6226FA] hover:underline flex items-center gap-1"
                                            >
                                                Reach out <ArrowRight className="w-3 h-3 ml-1" />
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Enterprise Inquiries - Premium Banner Alignment */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-16 p-8 md:p-12 rounded-[40px] bg-[#0D161C] text-white relative overflow-hidden group border border-white/5"
                    >
                        <div className="absolute inset-0 blueprint-grid opacity-10 pointer-events-none" />
                        <div className="absolute top-0 right-0 w-96 h-96 bg-[#6226FA]/20 rounded-full blur-[100px] -mr-48 -mt-48 animate-pulse" />

                        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
                            <div className="max-w-2xl text-center lg:text-left">
                                <h3 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
                                    Enterprise-Grade Security <br className="hidden md:block" />
                                    <span className="text-[#6226FA]">at Global Scale.</span>
                                </h3>
                                <p className="text-gray-400 text-lg font-medium leading-relaxed">
                                    Deploy Broadsage across your entire organization with dedicated support, custom hardening pipelines, and priority vulnerability patching.
                                </p>
                            </div>
                            <div className="shrink-0 w-full lg:w-auto">
                                <PremiumButton variant="purple" className="w-full lg:w-auto h-16 px-10 text-lg bg-white text-[#0D161C] hover:bg-gray-100 shadow-xl shadow-[#6226FA]/20 transition-all active:scale-95 font-bold">
                                    Schedule an Audit
                                </PremiumButton>
                            </div>
                        </div>
                    </motion.div>

                    {/* Technical Sovereignty Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mt-32 p-12 lg:p-20 rounded-[48px] bg-[#FAFAFA] border border-gray-100 overflow-hidden relative"
                    >
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(98,38,250,0.03)_0%,transparent_50%)] pointer-events-none" />

                        <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
                            <div>
                                <h2 className="text-4xl font-bold text-[#0D161C] tracking-tight mb-6">
                                    Built for High-Stakes <br />
                                    <span className="text-[#6226FA]">Technical Sovereignty.</span>
                                </h2>
                                <p className="text-lg text-gray-500 font-medium leading-relaxed mb-8">
                                    Broadsage provides the cryptographic proof and hardened core required for mission-critical software and AI workloads. We give teams absolute control over their supply chain, eliminating upstream risks at the source.
                                </p>
                                <div className="space-y-4">
                                    {[
                                        "Immutable Software Supply Chain Operations",
                                        "Cryptographical Proof of Integrity for all Artifacts",
                                        "Automated Hardening for AI & GPU Runtimes",
                                        "Enterprise-Grade Compliance & Governance"
                                    ].map(item => (
                                        <div key={item} className="flex items-center gap-3">
                                            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#6226FA]/10 flex items-center justify-center">
                                                <CheckCircle2 className="w-3.5 h-3.5 text-[#6226FA]" />
                                            </div>
                                            <span className="font-bold text-[#0D161C] text-sm">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { title: "Absolute Transparency", icon: <Eye className="w-5 h-5" />, desc: "Complete SBOM visibility." },
                                    { title: "Root-of-Trust", icon: <Lock className="w-5 h-5" />, desc: "Sigstore-backed signing." },
                                    { title: "Zero-Surface", icon: <ShieldCheck className="w-5 h-5" />, desc: "99% less attack surface." },
                                    { title: "Hardened Pipeline", icon: <Zap className="w-5 h-5" />, desc: "Automated core builds." }
                                ].map((pillar) => (
                                    <div key={pillar.title} className="p-6 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all group">
                                        <div className="w-10 h-10 rounded-xl bg-purple-50 text-[#6226FA] flex items-center justify-center mb-4 group-hover:bg-[#6226FA] group-hover:text-white transition-all">
                                            {pillar.icon}
                                        </div>
                                        <h4 className="font-bold text-[#0D161C] text-sm mb-1">{pillar.title}</h4>
                                        <p className="text-[11px] text-gray-400 font-medium">{pillar.desc}</p>
                                    </div>
                                ))}
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
                                    q: "How fast can we migrate to Broadsage?",
                                    a: "Most teams can replace their base images with Broadsage hardened versions in under 30 minutes by updating their Dockerfile FROM statements."
                                },
                                {
                                    q: "Do you support self-hosted registries?",
                                    a: "Yes. Broadsage images can be mirrored to any private registry including Artifactory, Harbor, and AWS ECR."
                                },
                                {
                                    q: "What is your vulnerability response time?",
                                    a: "We rotate our entire catalog within 12 hours of a critical CVE being released, often before public scanners even detect it."
                                },
                                {
                                    q: "Can we get custom hardening policies?",
                                    a: "Absolutely. Our Enterprise tier allows you to define custom 'Distroless' profiles tailored to your specific application needs."
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
            </main>
        </PageLayout >
    );
}
