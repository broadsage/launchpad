import React from "react";
import Link from "next/link";
import { Sparkles, Layout, Cpu, Rocket, Globe, Zap, BarChart3, ShieldCheck, Eye, Shield, ArrowRight, Database, Server, Binary, Package, Lock, Activity } from "lucide-react";
import { Navbar, NavGroup } from "./navigation";
import { BroadsageLogo } from "./icons";
import { PremiumButton } from "./premium-button";

export function Header() {
    const productGroups: NavGroup[] = [
        {
            label: "Hardened Images",
            items: [
                { title: "Language Runtimes", description: "Node.js, Python, Go, Java runtimes", icon: <Binary className="w-4 h-4 text-gray-600" /> },
                { title: "Database Images", description: "Postgres, MySQL, Redis hardened", icon: <Database className="w-4 h-4 text-gray-600" /> },
                { title: "Base OS", description: "Wolfi, Alpine, Debian minimal bases", icon: <Cpu className="w-4 h-4 text-gray-600" /> },
                { title: "Enterprise Catalog", description: "9000+ curated secure images", icon: <Package className="w-4 h-4 text-gray-600" /> },
            ]
        },
        {
            label: "Supply Chain",
            items: [
                { title: "SBOMs", description: "Full visibility into every bit", icon: <Eye className="w-4 h-4 text-gray-600" /> },
                { title: "Image Signing", description: "Sigstore-backed trust models", icon: <ShieldCheck className="w-4 h-4 text-gray-600" /> },
                { title: "Vulnerability Scanning", description: "Zero-day protection and alerts", icon: <BarChart3 className="w-4 h-4 text-gray-600" /> },
                { title: "Attestations", description: "Cryptographically verified builds", icon: <Lock className="w-4 h-4 text-gray-600" /> },
            ]
        },
        {
            label: "Governance",
            items: [
                { title: "Compliance Hub", description: "FedRAMP, SOC2, HIPAA readiness", icon: <Shield className="w-4 h-4 text-gray-600" /> },
                { title: "Policy Enforcement", description: "OPA and Kyverno integration", icon: <Layout className="w-4 h-4 text-gray-600" /> },
                { title: "Audit Logging", description: "Comprehensive supply chain trails", icon: <Activity className="w-4 h-4 text-gray-600" /> },
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
                { title: "About Us", description: "Our mission and team.", icon: <Sparkles className="w-4 h-4 text-gray-600" />, href: "/about" },
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
        <Navbar
            logo={
                <Link href="/" className="flex items-center gap-3 mr-2 group/logo">
                    <div className="transition-transform duration-300 group-hover/logo:scale-105">
                        <BroadsageLogo className="h-10" />
                    </div>
                    <span className="text-2xl font-bold tracking-tight text-[#0D161C] transition-colors duration-300 group-hover/logo:text-[#6226FA]">Broadsage</span>
                </Link>
            }
            links={navLinks}
            rightContent={
                <>
                    <Link
                        href="#"
                        className="text-[14px] font-semibold text-slate-600 hover:text-[#6226FA] hidden sm:block transition-all duration-300 tracking-tight"
                    >
                        Contact
                    </Link>
                    <Link
                        href="#"
                        className="text-[14px] font-semibold text-slate-600 hover:text-[#6226FA] hidden sm:block transition-all duration-300 tracking-tight"
                    >
                        Login
                    </Link>
                    <PremiumButton
                        size="sm"
                        className="h-[36px] px-5 text-[13px] font-bold bg-gradient-to-br from-[#6226FA] to-[#5018D9] hover:from-[#7D4DFF] hover:to-[#6226FA] text-white rounded-full shadow-[0_4px_14px_rgba(98,38,250,0.25)] hover:shadow-[0_6px_20px_rgba(98,38,250,0.35)] transition-all duration-300 transform hover:-translate-y-0.5"
                    >
                        Sign Up
                    </PremiumButton>
                </>
            }
        />
    );
}
