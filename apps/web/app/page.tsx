"use client";

import { ComponentProps } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Zap, Database, ShieldCheck, Cpu, Server, Binary, Lock, Activity, Download, Hammer, PenTool, Ship, Globe, Trash, Plus, Layout, Users, BookOpen } from "lucide-react";
import Link from "next/link";
import { PremiumButton } from "@repo/ui/premium-button";
import { Container, Section } from "@repo/ui/layout";
import { PageLayout } from "@repo/ui/page-layout";
import { cn } from "@/lib/utils";

const SectionDivider = () => (
  <div className="relative h-px w-full bg-gray-100 z-20">
    <div className="absolute -top-[12px] -left-[12px] text-gray-300">
      <Plus size={24} strokeWidth={0.5} />
    </div>
    <div className="absolute -top-[12px] -right-[12px] text-gray-300">
      <Plus size={24} strokeWidth={0.5} />
    </div>
  </div>
);

export default function Home() {
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
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <PageLayout>
      {/* Hero Section */}
      <main className="pt-24 pb-20 relative overflow-hidden z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(circle_at_center,rgba(98,38,250,0.08)_0%,transparent_70%)] pointer-events-none" />

        <Container className="relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center text-center max-w-6xl mx-auto"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-200 shadow-sm mb-10 transition-transform hover:scale-105 cursor-default"
            >
              <div className="w-2 h-2 rounded-full bg-[#6226FA] animate-pulse shadow-[0_0_8px_rgba(98,38,250,0.5)]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-gray-500">Broadsage Enterprise Ecosystem v5.0</span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-[clamp(3rem,9vw,6.5rem)] font-bold tracking-[-0.05em] leading-[0.85] text-[#0D161C] mb-10"
            >
              The Foundation for the <br />
              <span className="text-gradient-vibrant">Intelligent Enterprise.</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-gray-500 text-xl md:text-2xl max-w-3xl mb-14 leading-relaxed font-medium"
            >
              We harden, support, and orchestrate the foundational technologies that power the modern cloud—from minimal Hardened OS to zero-vulnerability container images.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-6 mb-24">
              <PremiumButton variant="purple" className="h-16 px-12 bg-[#0D161C] hover:bg-[#1E293B] text-white font-bold rounded-full text-base transition-all transform hover:scale-[1.02] shadow-xl">
                Explore Product Suite <ArrowRight className="w-5 h-5 ml-2" />
              </PremiumButton>
              <button className="h-16 px-12 bg-white border border-gray-200 text-[#0D161C] font-bold rounded-full text-base hover:bg-gray-50 transition-all shadow-sm">
                Speak with an Architect
              </button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="w-full border-t border-gray-100 pt-16"
            >
              <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400 mb-10 text-center">Powering Mission-Critical Workloads Globally</div>
              <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
                {["KUBERNETES", "OPEN SOURCE", "AI NATIVE", "DEVSECOPS", "MULTI CLOUD"].map((item) => (
                  <span key={item} className="text-xs font-black tracking-widest text-[#0D161C]">{item}</span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </main>

      <SectionDivider />

      {/* Product Suite Section */}
      <Section padding="lg" className="bg-[#F8FAFC] py-40 relative overflow-hidden z-10">
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-200 shadow-sm mb-8"
            >
              <Layout className="w-3.5 h-3.5 text-[#6226FA]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">Service Categories</span>
            </motion.div>
            <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold tracking-[-0.05em] leading-[0.9] text-[#0D161C] mb-10">
              A Unified Portfolio for <br />
              <span className="text-gradient-vibrant">Every Layer of Tech.</span>
            </h2>
            <p className="text-gray-500 text-xl max-w-2xl mx-auto leading-relaxed font-medium">
              Broadsage eliminates the gap between community innovation and enterprise stability across the entire infrastructure stack.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Hardened Infrastructure",
                product: "Broadsage Hardened OS",
                desc: "Minimal, secure-by-default OS foundation for critical cloud-native workloads.",
                icon: <Server className="w-8 h-8 text-[#F59E0B]" />,
                tags: ["OS", "Minimal", "Hardened"]
              },
              {
                title: "Hardened Infrastructure",
                product: "Broadsage Hardened Containers",
                desc: "Golden container images with zero-vulnerability guarantees and minimal attack surface.",
                icon: <Database className="w-8 h-8 text-[#F59E0B]" />,
                tags: ["Containers", "Images", "Scanned"]
              },
              {
                title: "Hardened Infrastructure",
                product: "Broadsage Hardened VMs",
                desc: "Secure, high-performance virtual machine images for major cloud providers.",
                icon: <Binary className="w-8 h-8 text-[#F59E0B]" />,
                tags: ["VMs", "Cloud", "Hardened"]
              },
              {
                title: "Security",
                product: "Sentinel DevSecOps",
                desc: "Automated policy enforcement and continuous supply chain defense.",
                icon: <ShieldCheck className="w-8 h-8 text-[#6226FA]" />,
                tags: ["DevSecOps", "Compliance", "Audit"]
              }
            ].map((item) => (
              <motion.div
                key={item.product}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group p-8 bg-white rounded-[32px] border border-gray-100 hover:border-[#F59E0B]/20 transition-all hover:shadow-2xl hover:-translate-y-2"
              >
                <div className="w-16 h-16 rounded-[22px] bg-gray-50 flex items-center justify-center mb-8 group-hover:bg-[#F59E0B]/5 transition-colors">
                  {item.icon}
                </div>
                <div className="text-[9px] font-bold text-[#F59E0B] uppercase tracking-[0.2em] mb-2">{item.title}</div>
                <h3 className="text-xl font-bold text-[#0D161C] mb-4 tracking-tight leading-tight">{item.product}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 font-medium">{item.desc}</p>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-50">
                  {item.tags.map(tag => (
                    <span key={tag} className="text-[9px] font-bold px-2 py-1 rounded-md bg-gray-100 text-gray-500 uppercase tracking-widest">{tag}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      <SectionDivider />

      {/* The Strategic Bridge Section */}
      <Section padding="lg" className="bg-white py-40 relative overflow-hidden z-10">
        <Container>
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-8">
                <Globe className="w-3.5 h-3.5 text-blue-600" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600">The Strategic Bridge</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-[#0D161C] tracking-[-0.05em] leading-[0.9] mb-10">
                From Community to <br />
                <span className="text-gradient-vibrant">Global Scale.</span>
              </h2>
              <p className="text-xl text-gray-500 font-medium leading-relaxed mb-10">
                We believe in the power of the open-source community. Broadsage takes the fastest-moving innovations and applies the technical rigor required by global banks, healthcare networks, and government agencies.
              </p>

              <div className="space-y-6">
                {[
                  { title: "Upstream Stewardship", desc: "We contribute back to the projects we support, ensuring long-term health." },
                  { title: "Enterprise Hardening", desc: "No shells. No package managers. No attack surface. Secure by design." },
                  { title: "Lifecycle Management", desc: "24/7 patching and support for every layer of your infrastructure." }
                ].map((item, i) => (
                  <div key={item.title} className="flex gap-6 group">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#6226FA]/5 flex items-center justify-center text-[#6226FA] font-bold text-sm">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0D161C] mb-1">{item.title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative p-1 bg-gradient-to-br from-gray-200 to-transparent rounded-[48px]"
            >
              <div className="bg-[#0D161C] rounded-[46px] p-10 lg:p-16 relative overflow-hidden shadow-2xl">
                <div className="absolute inset-0 blueprint-grid opacity-10" />
                <div className="relative z-10">
                  <div className="text-[10px] font-bold text-[#6226FA] uppercase tracking-[0.4em] mb-12">System Integrity Architecture</div>

                  <div className="space-y-8">
                    {[
                      { label: "Community Upstream", status: "Verified", color: "bg-blue-500" },
                      { label: "Broadsage Hardening", status: "Active", color: "bg-purple-500" },
                      { label: "Sentinel Signature", status: "Signed", color: "bg-[#6226FA]" },
                      { label: "Enterprise Runtime", status: "Secure", color: "bg-green-500" },
                    ].map((item, idx) => (
                      <div key={item.label} className="relative">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-xs font-bold text-gray-400 tracking-widest uppercase">{item.label}</span>
                          <span className="text-[10px] font-bold text-white px-2 py-0.5 rounded-full bg-white/10 uppercase">{item.status}</span>
                        </div>
                        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            transition={{ duration: 1, delay: idx * 0.2 }}
                            className={`h-full ${item.color}`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-16 p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-[#6226FA]/20 flex items-center justify-center">
                        <ShieldCheck className="w-6 h-6 text-[#6226FA]" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white">FIPS 140-2 Validated</div>
                        <div className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Compliance Status: Operational</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>

      <SectionDivider />

      {/* Global Reliability / Support */}
      <Section padding="lg" className="bg-[#FAFAFB] py-40 relative overflow-hidden z-10">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-24">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0D161C] tracking-tight mb-8">Expert Support for Every Env.</h2>
            <p className="text-lg text-gray-500 font-medium leading-relaxed">
              We don't just provide software; we provide the expertise to run it at scale. Our engineering teams are available 24/7/365 to support your most complex deployments.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: "Production Support",
                desc: "15-minute response times for critical incidents with direct engineer access.",
                icon: <Zap className="w-6 h-6 text-orange-500" />
              },
              {
                title: "Advisory Services",
                desc: "Strategic guidance on architecture, cloud-native transitions, and AI scaling.",
                icon: <Users className="w-6 h-6 text-[#6226FA]" />
              },
              {
                title: "Certified Training",
                desc: "Upskill your internal teams on the Broadsage-hardened open source stack.",
                icon: <BookOpen className="w-6 h-6 text-blue-500" />
              }
            ].map(card => (
              <div key={card.title} className="p-10 rounded-[40px] bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
                <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0D161C] mb-4">{card.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-medium mb-8">{card.desc}</p>
                <Link href="/support" className="inline-flex items-center gap-2 text-sm font-bold text-[#6226FA] group/link">
                  Learn about Support <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <SectionDivider />

      {/* Final CTA */}
      <Section padding="lg" className="bg-white py-40 relative overflow-hidden z-10">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#0D161C] p-12 lg:p-32 rounded-[64px] relative overflow-hidden text-center shadow-[0_60px_120px_-30px_rgba(98,38,250,0.3)]"
          >
            <div className="absolute inset-0 blueprint-grid opacity-[0.05]" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(98,38,250,0.15)_0%,transparent_70%)]" />

            <div className="relative z-10 flex flex-col items-center">
              <h2 className="text-[clamp(2.5rem,8vw,6rem)] font-bold text-white uppercase leading-[0.8] mb-12 tracking-[-0.05em]">
                YOUR FUTURE IS <br />
                <span className="text-gradient-vibrant">OPEN & SECURE.</span>
              </h2>

              <p className="text-gray-400 text-xl md:text-2xl max-w-3xl mx-auto mb-16 leading-relaxed font-medium">
                Join the world's most innovative engineering teams building on the Broadsage Ecosystem.
              </p>

              <div className="flex flex-col sm:flex-row gap-8 w-full max-w-2xl mb-20">
                <PremiumButton variant="purple" className="flex-1 h-20 bg-[#6226FA] hover:bg-[#7D4DFF] text-white font-bold rounded-full text-lg shadow-[0_20px_40px_rgba(98,38,250,0.3)] transition-all transform hover:-translate-y-1">
                  Get Started with Broadsage
                </PremiumButton>
                <button className="flex-1 h-20 border-2 border-white/10 text-white font-bold rounded-full text-lg hover:bg-white/5 transition-all transform hover:-translate-y-1">
                  Contact Sales Team
                </button>
              </div>

              <div className="flex flex-wrap justify-center items-center gap-10 opacity-60">
                {["SOC 2 TYPE II", "HIPAA", "FEDRAMP READY", "PCI DSS", "ISO 27001"].map(item => (
                  <span key={item} className="text-[10px] font-bold uppercase tracking-[0.5em] text-white/50">{item}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </Container>
      </Section>

    </PageLayout >
  );
}
