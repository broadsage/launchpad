import React from "react";
import Link from "next/link";
import { Sparkles, Layout, Cpu, Rocket, Globe, Zap, BarChart3, ShieldCheck, Eye, Shield, ArrowRight, Database, Server } from "lucide-react";
import { Navbar, NavGroup } from "./navigation";
import { BroadsageLogo } from "./icons";
import { PremiumButton } from "./premium-button";

export function Header() {
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
    );
}
