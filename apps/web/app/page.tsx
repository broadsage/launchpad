"use client";

import { ComponentProps } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Zap, Database, ShieldCheck, Cpu, Server, Binary, Lock, Activity, Download, Hammer, PenTool, Ship, Globe, Trash, Plus } from "lucide-react";
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
      <main className="pt-20 pb-24 relative overflow-hidden z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(circle_at_center,rgba(98,38,250,0.05)_0%,transparent_70%)] pointer-events-none" />

        <Container className="relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center text-center max-w-5xl mx-auto"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 shadow-sm mb-12"
            >
              <div className="w-2 h-2 rounded-full bg-[#6226FA] animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">Supply Chain Defense v4.2</span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-[clamp(3rem,10vw,6rem)] font-bold tracking-[-0.05em] leading-[0.9] text-[#000000] mb-10"
            >
              Secure by <span className="text-gradient-vibrant">Definition.</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-gray-500 text-xl md:text-2xl max-w-2xl mb-12 leading-relaxed font-medium"
            >
              Eliminate the attack surface of your container infrastructure. Broadsage provides verified, hardened, and signed artifacts for high-stakes production environments.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-6 mb-20">
              <PremiumButton variant="purple" className="h-14 px-10 bg-[#000] hover:bg-[#171717] text-white font-bold rounded-full text-sm transition-all transform hover:scale-[1.02]">
                Deploy Secure Images <ArrowRight className="w-4 h-4 ml-2" />
              </PremiumButton>
              <button className="h-14 px-10 bg-white border border-gray-200 text-[#000] font-bold rounded-full text-sm hover:bg-gray-50 transition-all">
                Contact Sales
              </button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center gap-4 border-t border-gray-100 pt-12 w-full max-w-md"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-100 shadow-sm" />
                ))}
              </div>
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Trusted by 2,000+ security teams</div>
            </motion.div>
          </motion.div>
        </Container>
      </main>

      <SectionDivider />

      {/* Binary Contrast Section */}
      <Section padding="lg" className="bg-white py-40 relative overflow-hidden z-10">
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-200 shadow-sm mb-8"
            >
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">Audit Analysis: Attack Surface</span>
            </motion.div>
            <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold tracking-[-0.05em] leading-[0.9] text-[#000] mb-10">
              Complexity is the <br />
              <span className="text-gradient-vibrant">Ultimate Risk.</span>
            </h2>
            <p className="text-gray-500 text-xl max-w-2xl mx-auto leading-relaxed font-medium">
              Traditional container images are cluttered with shells, package managers, and legacy utilities—providing a massive, unnecessary playground for zero-day exploits.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* The Bloated Reality */}
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="bg-white p-10 lg:p-12 rounded-[32px] border border-gray-100 shadow-sm relative group overflow-hidden"
            >
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-10">
                  <div>
                    <span className="text-[10px] font-bold text-red-500 uppercase tracking-[0.2em] mb-2 block">Standard OCI Distribution</span>
                    <h3 className="text-3xl font-bold text-[#000000] tracking-[-0.04em]">The Bloated Reality</h3>
                  </div>
                  <div className="p-3 bg-red-50 rounded-2xl">
                    <Trash className="w-6 h-6 text-red-500" />
                  </div>
                </div>

                <div className="space-y-6 mb-10">
                  {[
                    { title: "Binary Size", value: "842MB", detail: "Shells, package managers, logic bombs" },
                    { title: "Active CVEs", value: "142", detail: "Critical vulnerabilities in base layers" },
                    { title: "Remediation", value: "Manual", detail: "Requires upstream patches" },
                  ].map((item) => (
                    <div key={item.title} className="flex flex-col gap-2">
                      <div className="flex justify-between items-end">
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-tight">{item.title}</span>
                        <span className="text-lg font-bold text-red-500">{item.value}</span>
                      </div>
                      <div className="w-full h-1.5 bg-gray-50 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                          className="h-full bg-red-500/20"
                        />
                      </div>
                      <span className="text-[10px] text-gray-400 font-medium uppercase">{item.detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* The Hardened Reality */}
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-[#000000] p-10 lg:p-12 rounded-[32px] relative group overflow-hidden shadow-2xl"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(98,38,250,0.15)_0%,transparent_50%)]" />
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-10">
                  <div>
                    <span className="text-[10px] font-bold text-[#6226FA] uppercase tracking-[0.2em] mb-2 block">Broadsage Runtime Engine</span>
                    <h3 className="text-3xl font-bold text-white tracking-[-0.04em]">The Hardened Core</h3>
                  </div>
                  <div className="p-3 bg-[#6226FA] rounded-2xl">
                    <ShieldCheck className="w-6 h-6 text-white" />
                  </div>
                </div>

                <div className="space-y-6 mb-10">
                  {[
                    { title: "Binary Precision", value: "12MB", detail: "Distroless, single static binary" },
                    { title: "Active Risks", value: "0", detail: "Surgically stripped attack surface" },
                    { title: "Remediation", value: "Auto", detail: "Continuous registry rotation" },
                  ].map((item) => (
                    <div key={item.title} className="flex flex-col gap-2">
                      <div className="flex justify-between items-end">
                        <span className="text-xs font-bold text-gray-500 uppercase tracking-tight">{item.title}</span>
                        <span className="text-lg font-bold text-[#6226FA]">{item.value}</span>
                      </div>
                      <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                          className="h-full bg-[#6226FA]"
                        />
                      </div>
                      <span className="text-[10px] text-gray-500 font-medium uppercase">{item.detail}</span>
                    </div>
                  ))}
                </div>

                <div className="p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
                  <div className="text-[9px] font-bold text-[#6226FA] uppercase tracking-[0.2em] mb-4">Security Verification</div>
                  <div className="flex flex-wrap gap-2">
                    {["Sigstore Verified", "FIPS 140-2 Validated", "SBOM Attested"].map(tag => (
                      <span key={tag} className="text-[8px] font-bold text-[#6226FA] border border-[#6226FA]/30 px-2 py-1 uppercase rounded-full">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>

      <SectionDivider />

      {/* Why Broadsage */}
      <Section padding="lg" className="bg-white py-40 relative overflow-hidden z-10">
        <Container>
          <div className="flex items-center gap-4 mb-8">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#6226FA]">Why Broadsage?</span>
            <div className="w-1.5 h-1.5 rounded-full bg-[#6226FA]" />
          </div>

          <div className="grid lg:grid-cols-12 gap-20 items-end mb-24">
            <div className="lg:col-span-8">
              <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-bold text-[#000] tracking-[-0.05em] leading-[0.9] mb-12">
                Distribution for a <br />
                <span className="text-gradient-vibrant">Zero-Trust World.</span>
              </h2>
              <p className="text-gray-500 text-xl font-medium max-w-2xl leading-relaxed">
                Broadsage isn&apos;t just a registry. It&apos;s an <span className="text-[#000] font-bold">automated defense layer</span> that eliminates vulnerabilities before they reach your production environment.
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-end">
              <PremiumButton variant="purple" className="rounded-full px-10 h-14 bg-[#000] hover:bg-[#171717] text-white font-bold text-sm flex items-center gap-3 transition-all">
                Secure Supply Chain <ArrowRight className="w-4 h-4" />
              </PremiumButton>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Attack Surface Elimination",
                desc: "We don't just patch vulnerabilities; we remove the components that cause them. 90% less code means 90% less risk.",
                icon: <ShieldCheck className="w-8 h-8 text-[#6226FA]" />
              },
              {
                title: "Cryptographic Sovereignty",
                desc: "Every bit is signed and verified. Own your supply chain with immutable proof of integrity for every runtime.",
                icon: <Lock className="w-8 h-8 text-[#6226FA]" />
              },
              {
                title: "The End of Patching",
                desc: "Automated lifecycle management. When a new CVE drops, we rotate your images before the threat is active.",
                icon: <Zap className="w-8 h-8 text-[#6226FA]" />
              },
              {
                title: "Audit-Ready by Design",
                desc: "Turn compliance from a quarterly hurdle into a continuous status. SOC2 and HIPAA readiness baked in.",
                icon: <Activity className="w-8 h-8 text-[#6226FA]" />
              }
            ].map((item) => (
              <div
                key={item.title}
                className="p-8 bg-white rounded-[24px] border border-gray-200 hover:border-[#6226FA]/30 transition-all hover:shadow-xl group flex flex-col items-start gap-6"
              >
                <div className="w-16 h-16 rounded-[20px] bg-gray-50 flex items-center justify-center group-hover:bg-[#6226FA]/5 transition-colors">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#000] mb-3 tracking-tight">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <SectionDivider />

      {/* Automated Integrity */}
      <Section padding="lg" className="bg-white py-40 relative overflow-hidden z-10">
        <Container>
          <div className="grid lg:grid-cols-12 gap-20 items-start">
            <div className="lg:col-span-4 lg:sticky lg:top-32">
              <div className="flex items-center gap-4 mb-8">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#6226FA]">Automated Integrity</span>
                <div className="w-1.5 h-1.5 rounded-full bg-[#6226FA]" />
              </div>
              <h2 className="text-4xl font-bold text-[#000] tracking-[-0.05em] leading-[0.9] mb-8">
                THE CONTINUOUS <br />
                <span className="text-gradient-vibrant">DEFENSE LOOP.</span>
              </h2>
              <p className="text-gray-500 text-lg font-medium leading-relaxed mb-10">
                From source ingestion to production runtime, every binary is stripped, verified, and signed with absolute cryptographic proof.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {["FedRAMP", "SOC 2 TYPE II", "HIPAA", "PCI DSS"].map(text => (
                  <div key={text} className="flex items-center gap-2 border border-gray-200 p-4 rounded-2xl bg-white shadow-sm">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                    <span className="text-[9px] font-bold uppercase tracking-widest leading-none text-[#000]">{text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-8 grid md:grid-cols-2 gap-6">
              {[
                { title: "Ingestion & Analysis", desc: "Upstream source analysis and CVE mapping.", icon: <Download className="w-5 h-5" /> },
                { title: "Surface Hardening", desc: "Surgical removal of shells and package managers.", icon: <Hammer className="w-5 h-5" /> },
                { title: "Sigstore Signing", desc: "Cryptographic softare identity for every bit.", icon: <PenTool className="w-5 h-5" /> },
                { title: "Zero-Trust Delivery", desc: "Transmission of verified, signed SBOM reports.", icon: <Ship className="w-5 h-5" /> },
                { title: "Runtime Enforcement", desc: "Kyverno & OPA integration for secure pulls.", icon: <Lock className="w-5 h-5" /> },
                { title: "Continuous Scan", desc: "Automated rotation for newly dropped vulnerabilities.", icon: <Activity className="w-5 h-5" /> },
              ].map((step, idx) => (
                <div key={step.title} className="p-8 border border-gray-200 rounded-[28px] bg-white relative group hover:border-[#6226FA]/30 transition-all hover:shadow-lg">
                  <div className="absolute top-6 right-8 font-mono text-[9px] text-gray-300 font-bold tracking-widest">PHASE 0{idx + 1}</div>
                  <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-[#6226FA] mb-8 group-hover:bg-[#6226FA] group-hover:text-white transition-all">
                    {step.icon}
                  </div>
                  <h3 className="text-base font-bold text-[#000] tracking-tight mb-3">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed font-normal">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <SectionDivider />

      {/* Final CTA */}
      <Section padding="lg" className="bg-white py-40 relative overflow-hidden z-10">
        <Container>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-[#0D161C] p-12 lg:p-24 rounded-[48px] relative overflow-hidden text-center shadow-[0_40px_100px_-20px_rgba(98,38,250,0.3)]"
          >
            {/* Background Effects */}
            <div className="absolute inset-0 blueprint-grid opacity-10" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#6226FA]/10 to-transparent" />
            <div className="absolute -top-[50%] -left-[20%] w-[140%] h-[200%] bg-[radial-gradient(circle_at_center,rgba(98,38,250,0.08)_0%,transparent_50%)]" />

            <div className="relative z-10 flex flex-col items-center">
              <div className="flex items-center gap-4 mb-10">
                <motion.div
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2 h-2 rounded-full bg-[#6226FA] shadow-[0_0_10px_#6226FA]"
                />
                <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-gray-400">Final System Integrity Verified</span>
                <motion.div
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  className="w-2 h-2 rounded-full bg-[#6226FA] shadow-[0_0_10px_#6226FA]"
                />
              </div>

              <h2 className="text-[clamp(2.5rem,8vw,5.5rem)] font-bold text-white uppercase leading-[0.8] mb-12 tracking-[-0.05em]">
                SHIP WITHOUT <br />
                <span className="text-[#6226FA] text-gradient-vibrant">COMPROMISE.</span>
              </h2>

              <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-16 leading-relaxed font-medium">
                Join the world's most security-conscious engineering teams. Deploy hardened, signed, and verified artifacts in minutes.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 w-full max-w-xl mb-16">
                <PremiumButton variant="purple" className="flex-1 h-16 bg-[#6226FA] hover:bg-[#7D4DFF] text-white font-bold rounded-full text-sm shadow-[0_10px_30px_rgba(98,38,250,0.4)] transition-all transform hover:-translate-y-1">
                  Start Hardening Now
                </PremiumButton>
                <button className="flex-1 h-16 border border-white/20 text-white font-bold rounded-full text-sm hover:bg-white/5 transition-all transform hover:-translate-y-1">
                  Contact Sales
                </button>
              </div>

              <div className="flex flex-wrap justify-center items-center gap-10 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                {["FedRAMP", "SOC2 TYPE II", "HIPAA", "FIPS 140-2"].map(item => (
                  <span key={item} className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/50">{item}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </Container>
      </Section>
    </PageLayout>
  );
}
