import React from "react";
import Link from "next/link";
import { Container } from "./layout";
import { BroadsageLogo } from "./icons";
import { PremiumButton } from "./premium-button";

// Reusable Footer Section Component - Eliminates code duplication
interface FooterSectionProps {
    title: string;
    links: { label: string; href: string }[];
}

function FooterSection({ title, links }: FooterSectionProps) {
    return (
        <div className="space-y-4">
            <h3 className="text-[11px] font-bold text-purple-300 uppercase tracking-wider">
                {title}
            </h3>
            <ul className="space-y-2">
                {links.map((link) => (
                    <li key={link.label}>
                        <Link
                            href={link.href}
                            className="text-[13px] text-slate-300 hover:text-purple-300 hover:underline decoration-purple-300/50 transition-all"
                        >
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export function Footer() {
    // Footer navigation data - centralized for easy maintenance
    const footerSections = [
        {
            title: "Products",
            links: [
                { label: "Hardened OS", href: "/products/broadsage-hardened-os" },
                { label: "Hardened Containers", href: "/products/broadsage-hardened-containers" },
                { label: "Hardened VMs", href: "/products/broadsage-hardened-vms" },
                { label: "Infrastructure Hub", href: "#" },
            ],
        },
        {
            title: "Features",
            links: [
                { label: "Security & Compliance", href: "#" },
                { label: "Performance Ops", href: "#" },
                { label: "Supply Chain", href: "#" },
                { label: "Orchestration", href: "#" },
            ],
        },
        {
            title: "Developers",
            links: [
                { label: "Documentation", href: "/docs" },
                { label: "API Reference", href: "#" },
                { label: "Technical Guides", href: "#" },
                { label: "System Status", href: "#" },
            ],
        },
        {
            title: "Company",
            links: [
                { label: "About Broadsage", href: "/about" },
                { label: "Vision", href: "/about" },
                { label: "Support", href: "/support" },
                { label: "Contact Sales", href: "/contact" },
            ],
        },
    ];

    const legalLinks = [
        { label: "Terms", href: "/terms" },
        { label: "Privacy", href: "/privacy" },
        { label: "Support Terms", href: "/support" },
        { label: "Sitemap", href: "#" },
        { label: "Status", href: "#" },
    ];

    return (
        <footer className="bg-[#0b1117] relative overflow-hidden rounded-t-[60px] border-t border-white/[0.03] shadow-[0_-30px_60px_-15px_rgba(0,0,0,0.5)]">
            {/* Top-edge ambient highlight for the curve */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/30 to-transparent z-20" />

            {/* Ambient purple glow effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(98,38,250,0.08)_0%,transparent_50%)] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(98,38,250,0.06)_0%,transparent_50%)] pointer-events-none" />
            <div className="absolute inset-0 blueprint-grid opacity-[0.03] pointer-events-none" />

            {/* Main Footer Content */}
            <Container size="xl">
                <div className="pt-10 pb-8 lg:pt-14 lg:pb-10 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
                        {/* Left Section: Logo + Newsletter */}
                        <div className="lg:col-span-4 space-y-4">
                            <Link href="/" className="flex items-center gap-3 group">
                                <BroadsageLogo className="h-8 text-slate-50" />
                                <span className="text-xl font-bold text-slate-50 group-hover:text-purple-300 transition-colors">
                                    Broadsage
                                </span>
                            </Link>

                            <div className="space-y-2">
                                <h3 className="text-base font-semibold text-slate-50">
                                    Subscribe to our developer newsletter
                                </h3>
                                <p className="text-sm text-slate-300 leading-relaxed">
                                    Get tips, technical guides, and best practices. Twice a month. Right in your inbox.
                                </p>
                                <Link href="/newsletter">
                                    <PremiumButton
                                        variant="secondary"
                                        size="sm"
                                        className="mt-2 h-9 px-4 text-sm font-medium bg-purple-600 border-purple-600 text-white hover:bg-purple-700 hover:border-purple-700 uppercase tracking-widest text-[10px] shadow-lg shadow-purple-600/20 transition-all duration-300"
                                    >
                                        Subscribe
                                    </PremiumButton>
                                </Link>
                            </div>
                        </div>

                        {/* Right Section: Link Columns - Using reusable component */}
                        <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
                            {footerSections.map((section) => (
                                <FooterSection
                                    key={section.title}
                                    title={section.title}
                                    links={section.links}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </Container>

            {/* Bottom Bar */}
            <div className="border-t border-white/10 bg-black/30 backdrop-blur-sm relative z-10">
                <Container size="xl">
                    <div className="py-4">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                            {/* Copyright + Legal Links */}
                            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-[11px] font-medium text-slate-400 uppercase tracking-wider">
                                <span>© 2026 Broadsage, Inc.</span>
                                {legalLinks.map((link) => (
                                    <Link
                                        key={link.label}
                                        href={link.href}
                                        className="hover:text-purple-400 hover:underline decoration-purple-400/50 transition-all"
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </div>

                            {/* Social Icons */}
                            <div className="flex items-center gap-5">
                                <Link href="#" className="text-slate-400 hover:text-purple-400 transition-all duration-300" aria-label="LinkedIn">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                    </svg>
                                </Link>
                                <Link href="#" className="text-slate-400 hover:text-purple-400 transition-all duration-300" aria-label="GitHub">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                    </svg>
                                </Link>
                                <Link href="#" className="text-slate-400 hover:text-purple-400 transition-all duration-300" aria-label="Docker">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M13.983 11.072h2.119c.102 0 .186.084.186.186v2.119c0 .102-.084.186-.186.186h-2.119a.186.186 0 01-.186-.186v-2.119c0-.102.084-.186.186-.186zM11.221 11.072h2.119c.102 0 .186.084.186.186v2.119c0 .102-.084.186-.186.186h-2.119a.186.186 0 01-.186-.186v-2.119c0-.102.084-.186.186-.186zM11.221 8.306h2.119c.102 0 .186.084.186.186v2.119c0 .102-.084.186-.186.186h-2.119a.186.186 0 01-.186-.186V8.492c0-.102.084-.186.186-.186zM8.455 11.072h2.119c.102 0 .186.084.186.186v2.119c0 .102-.084.186-.186.186H8.455a.186.186 0 01-.186-.186v-2.119c0-.102.084-.186.186-.186zM8.455 8.306h2.119c.102 0 .186.084.186.186v2.119c0 .102-.084.186-.186.186H8.455a.186.186 0 01-.186-.186V8.492c0-.102.084-.186.186-.186zM8.455 5.54h2.119c.102 0 .186.084.186.186v2.119c0 .102-.084.186-.186.186H8.455a.186.186 0 01-.186-.186V5.726c0-.102.084-.186.186-.186zM5.688 11.072h2.119c.102 0 .186.084.186.186v2.119c0 .102-.084.186-.186.186H5.688a.186.186 0 01-.186-.186v-2.119c0-.102.084-.186.186-.186zM5.688 8.306h2.119c.102 0 .186.084.186.186v2.119c0 .102-.084.186-.186.186H5.688a.186.186 0 01-.186-.186V8.492c0-.102.084-.186.186-.186zM2.923 11.072h2.119c.102 0 .186.084.186.186v2.119c0 .102-.084.186-.186.186H2.923a.186.186 0 01-.186-.186v-2.119c0-.102.084-.186.186-.186zM24 13.014c-.035-.119-.114-.222-.224-.298-.445-.308-1.571-.341-2.228-.344h-.103c-.221 0-.402.18-.402.403V15.5c0 .351-.122.684-.343.938-.553.633-1.638.647-2.313.647H1.365c-.179 0-.353.07-.48.196L.198 17.5c-.126.126-.197.298-.198.477.01 1.764.912 3.033 2.682 3.774 1.83.766 4.39 1.099 6.27 1.099h3.702c4.08 0 7.37-2.618 9.248-6.191C22.641 15.348 23.328 14.399 24 13.51V13.014z" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </footer>
    );
}
