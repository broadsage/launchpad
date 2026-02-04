"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { cn } from "./utils";
import { Container } from "./layout";

export interface NavItemType {
    title: string;
    href?: string;
    description?: string;
    icon?: React.ReactNode;
}

export interface NavGroup {
    label: string;
    items: NavItemType[];
}

export interface NavigationProps {
    logo: React.ReactNode;
    links: {
        label: string;
        href?: string;
        groups?: NavGroup[];
        columns?: number;
        maxWidth?: string;
        align?: "left" | "center" | "right";
    }[];
    rightContent?: React.ReactNode;
    utilityBar?: React.ReactNode;
}

export function Navbar({ logo, links, rightContent, utilityBar }: NavigationProps) {
    const [activeMenu, setActiveMenu] = useState<string | null>(null);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Use a stable threshold
            setIsScrolled(window.scrollY > 40);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className="fixed top-0 left-0 right-0 z-50 pointer-events-none"
            onMouseLeave={() => setActiveMenu(null)}
        >
            <div className="max-w-7xl mx-auto relative group/nav cursor-default pointer-events-auto shadow-2xl shadow-black/5">
                {/* 1. Utility Top Bar (Black Header) - Constant height to prevent jumping */}
                <div className="h-10 w-full overflow-hidden bg-[#0b1117] border-x border-[#0b1117]">
                    {utilityBar}
                </div>

                {/* 2. Main Navigation - LOCKED height (h-16) to ensure zero layout shift */}
                <div className={cn(
                    "border-x border-b transition-all duration-300 ease-in-out h-16 will-change-[background-color,box-shadow]",
                    isScrolled
                        ? "bg-white shadow-[0_8px_30px_rgb(0,0,0,0.08)] border-slate-200/60"
                        : "bg-white border-slate-200/40 shadow-none"
                )}>
                    <Container size="xl" className="flex items-center justify-between h-full relative">
                        <div className="flex items-center gap-6">
                            <div className="flex items-center gap-2 mr-2 group">
                                {logo}
                            </div>

                            <div className="hidden lg:flex items-center gap-1">
                                {links.map((link) => (
                                    <div key={link.label} className="h-full flex items-center">
                                        {link.groups ? (
                                            <button
                                                onMouseEnter={() => setActiveMenu(link.label)}
                                                className={cn(
                                                    "flex items-center gap-1 px-4 py-2 rounded-full text-[14px] font-semibold transition-all duration-300 tracking-tight",
                                                    activeMenu === link.label
                                                        ? "bg-gradient-to-br from-[#6226FA]/10 to-[#6226FA]/5 text-[#6226FA] shadow-sm"
                                                        : "text-slate-600 hover:bg-slate-50 hover:text-[#0D161C]"
                                                )}
                                            >
                                                {link.label}
                                                <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-300", activeMenu === link.label && "rotate-180")} />
                                            </button>
                                        ) : (
                                            <Link
                                                href={link.href || "#"}
                                                className="px-4 py-2 rounded-full text-[14px] font-semibold text-slate-600 hover:bg-slate-50 hover:text-[#0D161C] transition-all duration-300 tracking-tight"
                                            >
                                                {link.label}
                                            </Link>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            {rightContent}
                        </div>

                        <AnimatePresence>
                            {activeMenu && links.find(l => l.label === activeMenu)?.groups && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.96, y: -8 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.96, y: -8 }}
                                    transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                                    className={cn(
                                        "absolute bg-white border border-slate-200/80 rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] p-4 z-[100] top-[64px]",
                                        links.find(l => l.label === activeMenu)?.maxWidth || "w-full max-w-[760px]",
                                        links.find(l => l.label === activeMenu)?.align === "center" ? "left-1/2 -translate-x-1/2" :
                                            links.find(l => l.label === activeMenu)?.align === "right" ? "right-0" : "left-0"
                                    )}
                                >
                                    <div className={cn(
                                        "grid gap-x-5",
                                        links.find(l => l.label === activeMenu)?.columns === 4 ? "grid-cols-4" :
                                            links.find(l => l.label === activeMenu)?.columns === 3 ? "grid-cols-3" :
                                                links.find(l => l.label === activeMenu)?.columns === 2 ? "grid-cols-2" : "grid-cols-1"
                                    )}>
                                        {links.find(l => l.label === activeMenu)?.groups?.map((group) => (
                                            <div key={group.label} className="space-y-1.5">
                                                <div className="text-[10px] font-bold text-[#6226FA] uppercase tracking-[0.15em] px-2">
                                                    {group.label}
                                                </div>
                                                <div className="space-y-0">
                                                    {group.items.map((item) => (
                                                        <Link
                                                            key={item.title}
                                                            href={item.href || "#"}
                                                            className="group flex items-start gap-3 py-1.5 px-2 rounded-xl hover:bg-gradient-to-br hover:from-[#6226FA]/5 hover:to-transparent transition-all duration-200"
                                                        >
                                                            {item.icon && (
                                                                <div className="mt-0.5 flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-slate-50 to-slate-100/50 border border-slate-200/60 flex items-center justify-center shadow-sm group-hover:border-[#6226FA]/30 group-hover:shadow-md transition-all duration-200">
                                                                    {item.icon}
                                                                </div>
                                                            )}
                                                            <div className="min-w-0 flex-1">
                                                                <div className="text-[13px] font-bold text-[#0D161C] leading-tight group-hover:text-[#6226FA] transition-colors duration-200">{item.title}</div>
                                                                {item.description && (
                                                                    <div className="text-[11px] text-slate-500 whitespace-nowrap overflow-hidden text-ellipsis mt-0.5 leading-relaxed">{item.description}</div>
                                                                )}
                                                            </div>
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </Container>
                </div>
            </div>
        </nav>
    );
}
