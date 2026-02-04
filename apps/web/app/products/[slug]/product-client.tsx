"use client";

import React from "react";
import { motion } from "framer-motion";
import { PageLayout, Container, Section, PremiumButton, ProductData } from "@repo/ui";
import { ArrowRight, Globe, Shield, Zap } from "lucide-react";

interface ProductClientProps {
    product: ProductData;
}

export default function ProductClient({ product }: ProductClientProps) {
    const theme = product.theme;

    return (
        <PageLayout themeColor={theme.rgb}>
            <main>
                {/* Hero Section - Maximum Impact AWS Multi-Color */}
                <Section className="relative pt-32 pb-24 overflow-hidden border-b border-gray-100 bg-white">
                    {/* Saturated Multi-Color Blobs */}
                    <div
                        className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] opacity-[0.4] blur-[110px] pointer-events-none rounded-full"
                        style={{ background: `radial-gradient(circle, rgb(${theme.palette[0]}) 0%, transparent 75%)`, mixBlendMode: 'multiply' }}
                    />
                    <div
                        className="absolute top-[15%] left-[-10%] w-[500px] h-[500px] opacity-[0.35] blur-[100px] pointer-events-none rounded-full"
                        style={{ background: `radial-gradient(circle, rgb(${theme.palette[1]}) 0%, transparent 75%)`, mixBlendMode: 'multiply' }}
                    />
                    <div
                        className="absolute bottom-[-15%] right-[20%] w-[550px] h-[550px] opacity-[0.25] blur-[130px] pointer-events-none rounded-full"
                        style={{ background: `radial-gradient(circle, rgb(${theme.palette[2] || theme.palette[0]}) 0%, transparent 75%)`, mixBlendMode: 'multiply' }}
                    />

                    <Container className="relative z-10">
                        <div className="max-w-4xl">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 backdrop-blur-xl border border-gray-200 shadow-md mb-8 transition-transform hover:scale-105 cursor-default">
                                    <span className="w-2.5 h-2.5 rounded-full animate-pulse" style={{ backgroundColor: theme.primary, boxShadow: `0 0 10px rgb(${theme.rgb})` }} />
                                    <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-gray-600">{product.category} Series Infrastructure</span>
                                </div>

                                <h1 className="text-6xl md:text-8xl font-black tracking-tight text-[#0D161C] mb-8 leading-[0.85]">
                                    {product.title.split(' ')[0]} <br />
                                    <span className="bg-clip-text text-transparent" style={{ backgroundImage: `linear-gradient(to bottom right, ${theme.primary}, ${theme.accent})` }}>
                                        {product.title.split(' ').slice(1).join(' ')}
                                    </span>
                                </h1>

                                <p className="text-xl md:text-2xl text-gray-600 font-medium leading-relaxed mb-12 max-w-2xl">
                                    {product.description} Built for extreme reliability and the most ambitious global scaling requirements.
                                </p>

                                <div className="flex flex-col sm:flex-row items-center gap-6">
                                    <PremiumButton
                                        className="h-16 px-12 rounded-full text-lg shadow-2xl transition-all hover:-translate-y-1 hover:brightness-110"
                                        style={{ backgroundColor: theme.primary, borderColor: theme.primary }}
                                    >
                                        Deploy {product.title.split(' ')[0]} <ArrowRight className="w-5 h-5 ml-2" />
                                    </PremiumButton>
                                    <button className="h-16 px-10 bg-white/60 backdrop-blur-md border border-gray-200 rounded-full font-bold text-gray-700 hover:bg-white transition-all shadow-sm hover:shadow-md">
                                        Technical Specs
                                    </button>
                                </div>
                            </motion.div>
                        </div>
                    </Container>
                </Section>

                {/* Features Grid */}
                <Section className="py-24 bg-white/50 relative border-t border-gray-100">
                    <Container>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                { title: "High Performance", desc: "Optimized for extreme throughput and low latency at any scale.", icon: <Zap /> },
                                { title: "Secure by Design", desc: "Built with a zero-trust foundation and automated compliance.", icon: <Shield /> },
                                { title: "Global Reach", desc: "Deploy across multi-cloud and edge environments seamlessly.", icon: <Globe /> },
                            ].map((feature, idx) => (
                                <motion.div
                                    key={feature.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="p-8 rounded-[32px] bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all"
                                >
                                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6" style={{ backgroundColor: `rgba(${theme.rgb}, 0.1)`, color: theme.primary }}>
                                        {React.cloneElement(feature.icon as React.ReactElement<any>, { size: 24 })}
                                    </div>
                                    <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </Container>
                </Section>
            </main>
        </PageLayout>
    );
}
