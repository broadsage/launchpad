"use client";

import { motion } from "framer-motion";
import { Github, ArrowRight, Shield, Zap, Layout, Globe, Eye, Sparkles, BarChart3, Database, ShieldCheck, Cpu, Server, Rocket } from "lucide-react";
import Link from "next/link";
import { PremiumButton } from "@repo/ui/premium-button";
import { Container, Section } from "@repo/ui/layout";
import { Navbar, NavGroup } from "@repo/ui/navigation";
import { VercelTriangle } from "@repo/ui/icons";
import { FeatureCard } from "@repo/ui/feature-card";
import { cn } from "@repo/ui/utils";

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
        ease: [0.16, 1, 0.3, 1], // Custom bouncy ease for snappy feel
      },
    },
  };

  const productGroups: NavGroup[] = [
    {
      label: "AI Cloud",
      items: [
        { title: "v0", description: "Build applications with AI", icon: <Sparkles className="w-4 h-4 text-gray-600" /> },
        { title: "AI SDK", description: "The AI Toolkit for TypeScript", icon: <Layout className="w-4 h-4 text-gray-600" /> },
        { title: "AI Gateway", description: "One endpoint, all your models", icon: <Cpu className="w-4 h-4 text-gray-600" /> },
        { title: "Vercel Agent", description: "An agent that knows your stack", icon: <Rocket className="w-4 h-4 text-gray-600" /> },
        { title: "Sandbox", description: "AI workflows in live environments", icon: <Globe className="w-4 h-4 text-gray-600" /> },
      ]
    },
    {
      label: "Core Platform",
      items: [
        { title: "CI/CD", description: "Helping teams ship 6x faster", icon: <Zap className="w-4 h-4 text-gray-600" /> },
        { title: "Content Delivery", description: "Fast, scalable, and reliable", icon: <Globe className="w-4 h-4 text-gray-600" /> },
        { title: "Fluid Compute", description: "Servers, in serverless form", icon: <Cpu className="w-4 h-4 text-gray-600" /> },
        { title: "Observability", description: "Trace every step", icon: <BarChart3 className="w-4 h-4 text-gray-600" /> },
      ]
    },
    {
      label: "Security",
      items: [
        { title: "Bot Management", description: "Scalable bot protection", icon: <ShieldCheck className="w-4 h-4 text-gray-600" /> },
        { title: "BotID", description: "Invisible CAPTCHA", icon: <Eye className="w-4 h-4 text-gray-600" /> },
        { title: "Platform Security", description: "DDoS Protection, Firewall", icon: <Shield className="w-4 h-4 text-gray-600" /> },
        { title: "Web Application Firewall", description: "Granular, custom protection", icon: <Layout className="w-4 h-4 text-gray-600" /> },
      ]
    }
  ];

  const resourceGroups: NavGroup[] = [
    {
      label: "Documentation",
      items: [
        { title: "Docs", description: "Learn how to use Launchpad.", icon: <Layout className="w-4 h-4 text-gray-600" /> },
        { title: "Guides", description: "Step-by-step tutorials.", icon: <ArrowRight className="w-4 h-4 text-gray-600" /> },
        { title: "API Reference", description: "Full technical docs.", icon: <Cpu className="w-4 h-4 text-gray-600" /> },
      ]
    },
    {
      label: "Community",
      items: [
        { title: "Blog", description: "Latest news and updates.", icon: <Globe className="w-4 h-4 text-gray-600" /> },
        { title: "Events", description: "Join our global meetups.", icon: <Zap className="w-4 h-4 text-gray-600" /> },
        { title: "Customers", description: "See who's building on us.", icon: <ShieldCheck className="w-4 h-4 text-gray-600" /> },
      ]
    },
    {
      label: "Support",
      items: [
        { title: "Help Center", description: "Get your issues resolved.", icon: <Shield className="w-4 h-4 text-gray-600" /> },
        { title: "Status", description: "Monitor platform health.", icon: <BarChart3 className="w-4 h-4 text-gray-600" /> },
        { title: "Contact", description: "Talk to our team.", icon: <Layout className="w-4 h-4 text-gray-600" /> },
      ]
    }
  ];

  const solutionGroups: NavGroup[] = [
    {
      label: "By Use Case",
      items: [
        { title: "E-commerce", description: "Fast, dynamic storefronts.", icon: <Zap className="w-4 h-4 text-gray-600" /> },
        { title: "AI Apps", description: "Deploy LLMs globally.", icon: <Sparkles className="w-4 h-4 text-gray-600" /> },
        { title: "SaaS", description: "Scale with confidence.", icon: <Layout className="w-4 h-4 text-gray-600" /> },
      ]
    },
    {
      label: "By Technology",
      items: [
        { title: "Next.js", description: "Optimized hosting.", icon: <Globe className="w-4 h-4 text-gray-600" /> },
        { title: "Strapi", description: "Headless CMS experts.", icon: <Database className="w-4 h-4 text-gray-600" /> },
        { title: "PostgreSQL", description: "Managed edge data.", icon: <Server className="w-4 h-4 text-gray-600" /> },
      ]
    }
  ];

  const navLinks = [
    { label: "Products", groups: productGroups, maxWidth: "max-w-[760px]", align: "left" as const },
    { label: "Solutions", groups: solutionGroups, maxWidth: "max-w-[520px]", columns: 2, align: "left" as const },
    { label: "Resources", groups: resourceGroups, maxWidth: "max-w-[760px]", align: "left" as const },
    { label: "Enterprise", href: "#" },
    { label: "Pricing", href: "#" },
  ];

  return (
    <div className="min-h-screen bg-white selection:bg-black selection:text-white">
      <Navbar
        logo={
          <Link href="/" className="flex items-center gap-2 mr-2">
            <VercelTriangle className="w-6 h-6" />
            <span className="text-xl font-bold tracking-tight">Vercel</span>
          </Link>
        }
        links={navLinks}
        rightContent={
          <>
            <Link href="#" className="text-[14px] font-medium text-gray-500 hover:text-black hidden sm:block transition-colors">Contact</Link>
            <Link href="#" className="text-[14px] font-medium text-gray-500 hover:text-black hidden sm:block transition-colors">Login</Link>
            <PremiumButton size="sm" className="h-[32px] px-4 text-[13px] font-semibold bg-black text-white rounded-md">Sign Up</PremiumButton>
          </>
        }
      />

      {/* Hero Section */}
      <main className="pt-32 pb-48 relative overflow-hidden bg-dot-pattern">
        {/* Radial Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-50/50 blur-[120px] rounded-full -z-10" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-purple-50/30 blur-[100px] rounded-full -z-10" />

        <Container className="relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center text-center max-w-5xl mx-auto"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs font-semibold text-blue-600 mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              Now v5.0 is live
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-[clamp(2.5rem,8vw,6rem)] font-black tracking-[-0.05em] leading-[0.9] text-black mb-8"
            >
              Front-end Infrastructure <br />
              <span className="text-gray-400">for Modern Teams.</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-gray-500 text-xl md:text-2xl max-w-3xl mb-12"
            >
              The platform for high-performance frontend teams. <br className="hidden md:block" />
              Develop, preview, and ship at the speed of light.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center gap-4"
            >
              <PremiumButton size="lg" className="h-12 px-8 min-w-[200px] gap-2">
                Start Deploying <ArrowRight className="w-4 h-4" />
              </PremiumButton>
              <PremiumButton variant="secondary" size="lg" className="h-12 px-8 min-w-[200px]">
                Book a Demo
              </PremiumButton>
            </motion.div>
          </motion.div>
        </Container>
      </main>

      {/* Social Proof */}
      <Section padding="sm" className="border-y border-gray-100">
        <Container>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-30 grayscale saturate-0 pointer-events-none">
            <span className="text-2xl font-black tracking-tighter">ADOBE</span>
            <span className="text-2xl font-black tracking-tighter">NINTENDO</span>
            <span className="text-2xl font-black tracking-tighter">LEGO</span>
            <span className="text-2xl font-black tracking-tighter">UBER</span>
            <span className="text-2xl font-black tracking-tighter">NYTIMES</span>
          </div>
        </Container>
      </Section>

      {/* Features Grid */}
      <Section padding="lg">
        <Container>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Shield className="w-5 h-5" />}
              title="Secure"
              description="Enterprise-grade security built into every layer of your application infrastructure."
            />
            <FeatureCard
              icon={<Zap className="w-5 h-5" />}
              title="Fast"
              description="Global edge network ensures your content is delivered with sub-millisecond latency."
            />
            <FeatureCard
              icon={<Layout className="w-5 h-5" />}
              title="Consistent"
              description="Standardized monorepo workflows that keep your team moving in sync."
            />
          </div>
        </Container>
      </Section>

      {/* Code / Visual Section */}
      <Section padding="lg" background="subtle" className="border-t border-gray-100">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black text-[10px] font-bold text-white uppercase tracking-wider mb-6">
                Developer First
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6">
                Develop locally, <br />
                preview globally.
              </h2>
              <p className="text-gray-500 text-lg mb-8 max-w-lg">
                Our Turborepo-powered environment allows you to build massive monorepos with instant local caching and cloud-syncing across your entire organization.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-sm font-medium">
                  <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center">
                    <ArrowRight className="w-3 h-3 text-white" />
                  </div>
                  Zero-config deployments for Next.js 15
                </li>
                <li className="flex items-center gap-3 text-sm font-medium">
                  <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center">
                    <ArrowRight className="w-3 h-3 text-white" />
                  </div>
                  Automated CI/CD for Strapi v5 backends
                </li>
              </ul>
            </div>

            <div className="bg-black rounded-2xl p-6 shadow-2xl relative group overflow-hidden">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="space-y-3 font-mono text-sm">
                <p className="text-gray-500"># Setting up your environment</p>
                <p className="text-blue-400">pnpm<span className="text-white"> install</span></p>
                <p className="text-blue-400">pnpm<span className="text-white"> run dev</span></p>
                <div className="pt-4 space-y-2">
                  <p className="text-green-400">✓<span className="text-white ml-2">Next.js 15 starting on port 3000</span></p>
                  <p className="text-green-400">✓<span className="text-white ml-2">Strapi v5 starting on port 1337</span></p>
                  <p className="text-green-400">✓<span className="text-white ml-2">PostgreSQL connected</span></p>
                </div>
                <div className="pt-6 border-t border-white/10 flex items-center justify-between text-[10px] text-gray-500 uppercase font-black uppercase tracking-widest leading-none">
                  <span>Deployment Status</span>
                  <span className="text-green-500 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    Production Ready
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Footer */}
      <footer className="py-20 border-t border-gray-100 bg-white">
        <Container size="xl">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            <div className="space-y-6 max-w-xs">
              <Link href="/" className="flex items-center gap-2">
                <VercelTriangle className="w-6 h-6" />
                <span className="text-xl font-bold tracking-tight">Vercel</span>
              </Link>
              <p className="text-sm text-gray-500 leading-relaxed">
                The high-performance monorepo boilerplate build for teams who ship at the speed of thought.
              </p>
              <div className="flex gap-4">
                <Link href="#" className="p-2 border border-gray-100 rounded-full hover:bg-gray-50 transition-colors">
                  <Github className="w-4 h-4 text-gray-600" />
                </Link>
                <Link href="#" className="p-2 border border-gray-100 rounded-full hover:bg-gray-50 transition-colors">
                  <Globe className="w-4 h-4 text-gray-600" />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 text-sm">
              <div className="space-y-4">
                <h4 className="font-bold">Product</h4>
                <ul className="space-y-3 text-gray-500">
                  <li><Link href="#" className="hover:text-black transition-colors">Infrastructure</Link></li>
                  <li><Link href="#" className="hover:text-black transition-colors">Analytics</Link></li>
                  <li><Link href="#" className="hover:text-black transition-colors">Previews</Link></li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-bold">Company</h4>
                <ul className="space-y-3 text-gray-500">
                  <li><Link href="#" className="hover:text-black transition-colors">About</Link></li>
                  <li><Link href="#" className="hover:text-black transition-colors">Careers</Link></li>
                  <li><Link href="#" className="hover:text-black transition-colors">Privacy</Link></li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-bold">Resources</h4>
                <ul className="space-y-3 text-gray-500">
                  <li><Link href="#" className="hover:text-black transition-colors">Docs</Link></li>
                  <li><Link href="#" className="hover:text-black transition-colors">Blog</Link></li>
                  <li><Link href="#" className="hover:text-black transition-colors">Community</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-20 pt-8 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
            <span>© 2026 Vercel Inc.</span>
            <span className="flex items-center gap-4">
              <Link href="#" className="hover:text-black transition-colors">All Services Operational</Link>
              <div className="w-2 h-2 rounded-full bg-green-500" />
            </span>
          </div>
        </Container>
      </footer>
    </div>
  );
}
