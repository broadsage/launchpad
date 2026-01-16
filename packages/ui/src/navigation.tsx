"use client";

import React, { useState, useEffect } from "react";
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
}

export function Navbar({ logo, links, rightContent }: NavigationProps) {
    const [activeMenu, setActiveMenu] = useState<string | null>(null);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300",
                isScrolled
                    ? "bg-white/80 backdrop-blur-md border-b border-gray-100 py-0"
                    : "bg-transparent border-b border-transparent py-2"
            )}
            onMouseLeave={() => setActiveMenu(null)}
        >
            <Container size="xl" className="flex items-center justify-between h-16 relative">
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2 mr-2">
                        {logo}
                    </div>

                    <div className="hidden lg:flex items-center gap-1">
                        {links.map((link) => (
                            <div key={link.label} className="h-full flex items-center">
                                {link.groups ? (
                                    <button
                                        onMouseEnter={() => setActiveMenu(link.label)}
                                        className={cn(
                                            "flex items-center gap-1 px-3 py-1.5 rounded-full text-[14px] font-medium transition-colors duration-200",
                                            activeMenu === link.label ? "bg-gray-100 text-black" : "text-gray-500 hover:bg-gray-50 hover:text-black"
                                        )}
                                    >
                                        {link.label}
                                        <ChevronDown className={cn("w-3 h-3 transition-transform duration-200", activeMenu === link.label && "rotate-180")} />
                                    </button>
                                ) : (
                                    <Link
                                        href={link.href || "#"}
                                        className="px-3 py-1.5 rounded-full text-[14px] font-medium text-gray-500 hover:bg-gray-50 hover:text-black transition-colors"
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
                            initial={{ opacity: 0, scale: 0.98, y: -4 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.98, y: -4 }}
                            transition={{ duration: 0.1, ease: "easeOut" }}
                            className={cn(
                                "absolute bg-white border border-gray-100 rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.1)] p-4 z-[60]",
                                isScrolled ? "top-[56px]" : "top-[64px]",
                                links.find(l => l.label === activeMenu)?.maxWidth || "w-full max-w-[760px]",
                                links.find(l => l.label === activeMenu)?.align === "center" ? "left-1/2 -translate-x-1/2" :
                                    links.find(l => l.label === activeMenu)?.align === "right" ? "right-0" : "left-0"
                            )}
                        >
                            <div className={cn(
                                "grid gap-x-4",
                                links.find(l => l.label === activeMenu)?.columns === 2 ? "grid-cols-2" : "grid-cols-3"
                            )}>
                                {links.find(l => l.label === activeMenu)?.groups?.map((group) => (
                                    <div key={group.label} className="space-y-2">
                                        <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider px-2">
                                            {group.label}
                                        </div>
                                        <div className="space-y-0 text-nowrap">
                                            {group.items.map((item) => (
                                                <Link
                                                    key={item.title}
                                                    href={item.href || "#"}
                                                    className="group flex items-start gap-2.5 py-1.5 px-2 rounded-md hover:bg-gray-50 transition-all duration-150"
                                                >
                                                    {item.icon && (
                                                        <div className="mt-0.5 flex-shrink-0 w-7 h-7 rounded bg-white border border-gray-100 flex items-center justify-center shadow-sm group-hover:border-gray-200 transition-colors">
                                                            {item.icon}
                                                        </div>
                                                    )}
                                                    <div className="min-w-0">
                                                        <div className="text-[13px] font-semibold text-black leading-tight group-hover:text-[#5E17EB] transition-colors">{item.title}</div>
                                                        {item.description && (
                                                            <div className="text-[11px] text-gray-500 mt-0.5 line-clamp-1 opacity-80">{item.description}</div>
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
        </nav>
    );
}
