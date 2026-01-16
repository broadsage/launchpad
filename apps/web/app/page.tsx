"use client";

import { motion } from "framer-motion";
import { Github, ArrowRight, Shield, Zap, Layout, Globe, Eye, Sparkles, BarChart3, Database, ShieldCheck, Cpu, Server, Rocket } from "lucide-react";
import Link from "next/link";
import { PremiumButton } from "@repo/ui/premium-button";
import { Container, Section } from "@repo/ui/layout";
import { Navbar, NavGroup } from "@repo/ui/navigation";
import { BroadsageLogo } from "@repo/ui/icons";
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
        { title: "Broadsage Agent", description: "An agent that knows your stack", icon: <Rocket className="w-4 h-4 text-gray-600" /> },
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
        { title: "Docs", description: "Learn how to use Launchpad.", icon: <Layout className="w-4 h-4 text-gray-600" />, href: "/docs" },
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
    { label: "Resources", groups: resourceGroups, maxWidth: "max-w-[760px]", align: "left" as const },
    { label: "Solutions", groups: solutionGroups, maxWidth: "max-w-[520px]", columns: 2, align: "left" as const },
    { label: "Enterprise", href: "#" },
    { label: "Pricing", href: "#" },
  ];

  return (
    <div className="min-h-screen bg-white selection:bg-black selection:text-white">
      <Navbar
        logo={
          <Link href="/" className="flex items-center gap-3 mr-2">
            <BroadsageLogo className="h-10" />
            <span className="text-2xl font-bold tracking-tight text-[#0A0A0A]">Broadsage</span>
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
              BROADSAGE STACK v5.0
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black text-[10px] font-bold text-white uppercase tracking-[0.2em] mb-6">
                BROADSAGE CORE
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

      {/* Footer - GitHub Style */}
      <footer className="border-t border-gray-200 bg-gray-50">
        <Container size="xl">
          {/* Main Footer Content */}
          <div className="py-16">
            <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
              {/* Column 1: Platform */}
              <div className="space-y-4">
                <h3 className="text-xs font-semibold text-gray-900 uppercase tracking-wider">Platform</h3>
                <ul className="space-y-3">
                  <li><Link href="#" className="text-sm text-gray-600 hover:text-[#5E17EB] transition-colors">Features</Link></li>
                  <li><Link href="#" className="text-sm text-gray-600 hover:text-[#5E17EB] transition-colors">Security</Link></li>
                  <li><Link href="#" className="text-sm text-gray-600 hover:text-[#5E17EB] transition-colors">Enterprise</Link></li>
                  <li><Link href="#" className="text-sm text-gray-600 hover:text-[#5E17EB] transition-colors">Pricing</Link></li>
                  <li><Link href="#" className="text-sm text-gray-600 hover:text-[#5E17EB] transition-colors">Roadmap</Link></li>
                </ul>
              </div>

              {/* Column 2: Product */}
              <div className="space-y-4">
                <h3 className="text-xs font-semibold text-gray-900 uppercase tracking-wider">Product</h3>
                <ul className="space-y-3">
                  <li><Link href="#" className="text-sm text-gray-600 hover:text-[#5E17EB] transition-colors">Infrastructure</Link></li>
                  <li><Link href="#" className="text-sm text-gray-600 hover:text-[#5E17EB] transition-colors">CI/CD</Link></li>
                  <li><Link href="#" className="text-sm text-gray-600 hover:text-[#5E17EB] transition-colors">Analytics</Link></li>
                  <li><Link href="#" className="text-sm text-gray-600 hover:text-[#5E17EB] transition-colors">Previews</Link></li>
                  <li><Link href="#" className="text-sm text-gray-600 hover:text-[#5E17EB] transition-colors">Monitoring</Link></li>
                </ul>
              </div>

              {/* Column 3: Support */}
              <div className="space-y-4">
                <h3 className="text-xs font-semibold text-gray-900 uppercase tracking-wider">Support</h3>
                <ul className="space-y-3">
                  <li><Link href="#" className="text-sm text-gray-600 hover:text-[#5E17EB] transition-colors">Docs</Link></li>
                  <li><Link href="#" className="text-sm text-gray-600 hover:text-[#5E17EB] transition-colors">Community</Link></li>
                  <li><Link href="#" className="text-sm text-gray-600 hover:text-[#5E17EB] transition-colors">Contact</Link></li>
                  <li><Link href="#" className="text-sm text-gray-600 hover:text-[#5E17EB] transition-colors">Status</Link></li>
                  <li><Link href="#" className="text-sm text-gray-600 hover:text-[#5E17EB] transition-colors">API</Link></li>
                </ul>
              </div>

              {/* Column 4: Company */}
              <div className="space-y-4">
                <h3 className="text-xs font-semibold text-gray-900 uppercase tracking-wider">Company</h3>
                <ul className="space-y-3">
                  <li><Link href="#" className="text-sm text-gray-600 hover:text-[#5E17EB] transition-colors">About</Link></li>
                  <li><Link href="#" className="text-sm text-gray-600 hover:text-[#5E17EB] transition-colors">Blog</Link></li>
                  <li><Link href="#" className="text-sm text-gray-600 hover:text-[#5E17EB] transition-colors">Careers</Link></li>
                  <li><Link href="#" className="text-sm text-gray-600 hover:text-[#5E17EB] transition-colors">Press</Link></li>
                  <li><Link href="#" className="text-sm text-gray-600 hover:text-[#5E17EB] transition-colors">Partners</Link></li>
                </ul>
              </div>

              {/* Column 5: Resources */}
              <div className="space-y-4">
                <h3 className="text-xs font-semibold text-gray-900 uppercase tracking-wider">Resources</h3>
                <ul className="space-y-3">
                  <li><Link href="#" className="text-sm text-gray-600 hover:text-[#5E17EB] transition-colors">Guides</Link></li>
                  <li><Link href="#" className="text-sm text-gray-600 hover:text-[#5E17EB] transition-colors">Templates</Link></li>
                  <li><Link href="#" className="text-sm text-gray-600 hover:text-[#5E17EB] transition-colors">Changelog</Link></li>
                  <li><Link href="#" className="text-sm text-gray-600 hover:text-[#5E17EB] transition-colors">Open Source</Link></li>
                  <li><Link href="#" className="text-sm text-gray-600 hover:text-[#5E17EB] transition-colors">Education</Link></li>
                </ul>
              </div>

              {/* Column 6: Newsletter */}
              <div className="space-y-4 col-span-2 md:col-span-1">
                <h3 className="text-xs font-semibold text-gray-900 uppercase tracking-wider">Subscribe</h3>
                <p className="text-sm text-gray-600">Get the latest updates and news.</p>
                <div className="flex flex-col gap-2">
                  <input
                    type="email"
                    placeholder="Email address"
                    className="px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button className="px-3 py-2 text-sm font-medium text-white bg-black rounded-md hover:bg-gray-800 transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="py-8 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Logo and Copyright */}
              <div className="flex items-center gap-4">
                <Link href="/" className="flex items-center gap-2">
                  <BroadsageLogo className="h-8" />
                  <span className="text-lg font-bold text-gray-900 uppercase">BROADSAGE</span>
                </Link>
                <span className="text-sm text-gray-500">© 2026 Broadsage, Inc.</span>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                <Link href="#" className="text-gray-500 hover:text-gray-900 transition-colors" aria-label="GitHub">
                  <Github className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-gray-500 hover:text-gray-900 transition-colors" aria-label="Twitter">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                </Link>
                <Link href="#" className="text-gray-500 hover:text-gray-900 transition-colors" aria-label="LinkedIn">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                </Link>
              </div>

              {/* Legal Links */}
              <div className="flex items-center gap-6 text-sm text-gray-500">
                <Link href="#" className="hover:text-gray-900 transition-colors">Terms</Link>
                <Link href="#" className="hover:text-gray-900 transition-colors">Privacy</Link>
                <Link href="#" className="hover:text-gray-900 transition-colors">Security</Link>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <Link href="#" className="hover:text-gray-900 transition-colors">Status</Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
}
