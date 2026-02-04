import React from "react";
import Link from "next/link";
import { Sparkles, Layout, Cpu, Rocket, Globe, Zap, BarChart3, ShieldCheck, Eye, Shield, ArrowRight, Database, Server, Binary, Package, Lock, Activity, BookOpen, LifeBuoy, Users, Layers } from "lucide-react";
import { Navbar, NavGroup } from "./navigation";
import { BroadsageLogo } from "./icons";
import { PremiumButton } from "./premium-button";

export function UtilityBar() {
    return (
        <div className="flex items-center justify-end gap-6 h-10 px-6 bg-[#0b1117] relative overflow-hidden border-b border-white/[0.03]">
            {/* Ambient background effects to match footer */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(98,38,250,0.08)_0%,transparent_50%)] pointer-events-none" />
            <div className="absolute inset-0 blueprint-grid opacity-[0.03] pointer-events-none" />

            <Link href="/contact" className="relative z-10 flex items-center gap-1.5 text-[12px] font-medium text-slate-300 hover:text-white transition-colors">
                <Users className="w-3.5 h-3.5 text-slate-400" />
                <span>Contact</span>
            </Link>
            <Link href="/newsletter" className="relative z-10 flex items-center gap-1.5 text-[12px] font-medium text-slate-300 hover:text-white transition-colors">
                <Rocket className="w-3.5 h-3.5 text-slate-400" />
                <span>Newsletter</span>
            </Link>
            <Link href="/docs" className="relative z-10 flex items-center gap-1.5 text-[12px] font-medium text-slate-300 hover:text-white transition-colors">
                <BookOpen className="w-3.5 h-3.5 text-slate-400" />
                <span>Documentation</span>
            </Link>
            <div className="h-3 w-px bg-white/10 mx-1 relative z-10" />
            <Link href="/support" className="relative z-10 flex items-center gap-1.5 text-[12px] font-medium text-slate-300 hover:text-white transition-colors">
                <LifeBuoy className="w-3.5 h-3.5 text-slate-400" />
                <span>Support</span>
            </Link>
            <Link href="#" className="relative z-10 flex items-center gap-1.5 text-[12px] font-bold text-white hover:text-purple-300 transition-colors">
                <span>Sign In</span>
            </Link>
        </div>
    );
}

export function Header() {
    const productGroups: NavGroup[] = [
        {
            label: "Hardened Infrastructure",
            items: [
                { title: "Broadsage Hardened OS", description: "The definitive secure OS foundation.", icon: <Cpu className="w-4 h-4 text-amber-600" />, href: "/products/broadsage-hardened-os" },
                { title: "Broadsage Hardened Containers", description: "Zero-vulnerability golden images.", icon: <Package className="w-4 h-4 text-amber-600" />, href: "/products/broadsage-hardened-containers" },
                { title: "Broadsage Hardened VMs", description: "Production-ready secure virtual instances.", icon: <Database className="w-4 h-4 text-amber-600" />, href: "/products/broadsage-hardened-vms" },
            ]
        },
        {
            label: "Platform Series",
            items: [
                { title: "Sentinel DevSecOps", description: "Supply chain defense.", icon: <ShieldCheck className="w-4 h-4 text-[#6226FA]" />, href: "/products/sentinel-devsecops" },
                { title: "Secure Inference", description: "Private model deployment.", icon: <Rocket className="w-4 h-4 text-[#0D9488]" />, href: "/products/secure-inference" },
            ]
        },
    ];

    const resourceGroups: NavGroup[] = [
        {
            label: "Development",
            items: [
                { title: "Documentation", description: "Full technical references.", icon: <Layout className="w-4 h-4 text-gray-600" />, href: "/docs" },
                { title: "Open Source Standards", description: "Our contributions to common good.", icon: <Package className="w-4 h-4 text-gray-600" /> },
                { title: "Training & Certs", description: "Master the Broadsage stack.", icon: <BookOpen className="w-4 h-4 text-gray-600" /> },
            ]
        },
        {
            label: "Corporate",
            items: [
                { title: "About Broadsage", description: "Our vision for the future.", icon: <Sparkles className="w-4 h-4 text-gray-600" />, href: "/about" },
                { title: "Enterprise Support", description: "24/7 mission-critical aid.", icon: <LifeBuoy className="w-4 h-4 text-gray-600" />, href: "/support" },
                { title: "Global Partners", description: "Our ecosystem of trust.", icon: <Users className="w-4 h-4 text-gray-600" /> },
            ]
        }
    ];

    const solutionGroups: NavGroup[] = [
        {
            label: "By Industry",
            items: [
                { title: "Financial Services", description: "Banking-grade security layers.", icon: <Shield className="w-4 h-4 text-gray-600" /> },
                { title: "Healthcare", description: "HIPAA-compliant AI stacks.", icon: <Activity className="w-4 h-4 text-gray-600" /> },
                { title: "Public Sector", description: "FedRAMP ready infrastructure.", icon: <Globe className="w-4 h-4 text-gray-600" /> },
            ]
        },
        {
            label: "By Use Case",
            items: [
                { title: "AI/ML Integration", description: "Scale private intelligence.", icon: <Sparkles className="w-4 h-4 text-gray-600" /> },
                { title: "Hybrid Cloud", description: "Unify on-prem and edge.", icon: <Layers className="w-4 h-4 text-gray-600" /> },
                { title: "DevSecOps Transformation", description: "Automate global security.", icon: <Lock className="w-4 h-4 text-gray-600" /> },
            ]
        }
    ];

    const navLinks = [
        { label: "Products", groups: productGroups, maxWidth: "max-width-[640px]", columns: 2, align: "left" as const },
        { label: "Solutions", groups: solutionGroups, maxWidth: "max-w-[640px]", columns: 2, align: "left" as const },
        { label: "Resources", groups: resourceGroups, maxWidth: "max-w-[550px]", columns: 2, align: "left" as const },
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
            utilityBar={<UtilityBar />}
            rightContent={
                <>
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
