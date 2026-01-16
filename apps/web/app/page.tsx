"use client";

import React from "react";
import { motion } from "framer-motion";
import { Rocket, Shield, Zap, Globe, Github, ArrowRight } from "lucide-react";
import Link from "next/link";
import { PremiumButton } from "@repo/ui/premium-button";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white selection:bg-purple-500/30">
      {/* Background Glows */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/20 blur-[120px] rounded-full" />
      </div>

      {/* Navigation */}
      <nav className="relative z-50 flex items-center justify-between px-8 py-6 max-w-7xl mx-auto backdrop-blur-md bg-black/10 sticky top-0 border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-tr from-purple-600 to-blue-500 rounded-lg flex items-center justify-center">
            <Rocket className="w-5 h-5" />
          </div>
          <span className="text-xl font-bold tracking-tight">Launchpad</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          <Link href="#" className="hover:text-white transition-colors">Documentation</Link>
          <Link href="#" className="hover:text-white transition-colors">Components</Link>
          <Link href="#" className="hover:text-white transition-colors">CMS</Link>
          <Link href="#" className="hover:text-white transition-colors">Pricing</Link>
        </div>
        <div className="flex items-center gap-4">
          <Link href="https://github.com" className="p-2 hover:bg-white/5 rounded-full transition-colors">
            <Github className="w-5 h-5" />
          </Link>
          <PremiumButton variant="primary" size="sm" className="bg-white text-black hover:bg-gray-200">
            Get Started
          </PremiumButton>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 max-w-7xl mx-auto px-8 pt-20 pb-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-purple-400 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            Now supporting Strapi v5 & Next.js 15
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-8xl font-bold tracking-tight mb-8 bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent leading-[1.1]"
          >
            Build faster with <br />
            <span className="text-white">Premium Infrastructure.</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-xl max-w-2xl mx-auto mb-12"
          >
            The ultimate monorepo boilerplate featuring Next.js, Strapi, and Turborepo.
            Engineered for high-performance teams who demand excellence.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <PremiumButton size="lg" className="group">
              <span className="flex items-center gap-2">
                Start Building Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </PremiumButton>
            <PremiumButton variant="secondary" size="lg">
              View Showcase
            </PremiumButton>
          </motion.div>
        </motion.div>

        {/* Features Grid */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mt-32"
        >
          <FeatureCard
            icon={<Shield className="w-6 h-6 text-blue-400" />}
            title="Secure by Design"
            description="Hardened infrastructure with zero-vulnerability Docker images and automated security scanning."
          />
          <FeatureCard
            icon={<Zap className="w-6 h-6 text-yellow-400" />}
            title="Blazing Fast"
            description="Powered by Turborepo and Next.js 15 with Turbopack for near-instant builds and HMR."
          />
          <FeatureCard
            icon={<Globe className="w-6 h-6 text-green-400" />}
            title="Global Scale"
            description="Edge-ready deployment architecture that scales automatically with your global user base."
          />
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 py-12 bg-black/20">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2 opacity-50">
            <Rocket className="w-5 h-5" />
            <span className="font-bold">Launchpad</span>
          </div>
          <div className="text-gray-500 text-sm">
            © 2026 Launchpad Inc. All rights reserved.
          </div>
          <div className="flex gap-6 text-gray-500 text-sm">
            <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <motion.div
      variants={{
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
      }}
      className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all group"
    >
      <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}
