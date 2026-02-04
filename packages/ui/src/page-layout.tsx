import React from "react";
import { Header, UtilityBar } from "./header";
import { Footer } from "./footer";
import { cn } from "./utils";

export interface PageLayoutProps {
    children: React.ReactNode;
    showHeader?: boolean;
    showFooter?: boolean;
    className?: string;
    themeColor?: string; // Optional hex or rgba color for the theme
}

export function PageLayout({
    children,
    showHeader = true,
    showFooter = true,
    className = "",
    themeColor = "98,38,250" // Default Broadsage Purple
}: PageLayoutProps) {
    return (
        <div
            className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 font-sans text-[#0D161C] overflow-x-hidden relative"
        >
            <style dangerouslySetInnerHTML={{
                __html: `
                ::selection {
                    background-color: rgb(${themeColor}) !important;
                    color: white !important;
                }
            ` }} />
            {/* Ambient background effects - uses dynamic themeColor */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: `radial-gradient(circle_at_top_right, rgba(${themeColor}, 0.05) 0%, transparent 50%)` }}
            />
            <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: `radial-gradient(circle_at_bottom_left, rgba(${themeColor}, 0.03) 0%, transparent 50%)` }}
            />

            {/* Fixed Main Header group */}
            {showHeader && <Header />}

            <div className={`max-w-7xl mx-auto bg-white border-x border-gray-200/60 relative shadow-[0_0_60px_-15px_rgba(0,0,0,0.1)] overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/50 before:to-transparent before:pointer-events-none ${showHeader ? "pt-[104px]" : ""}`}>
                {/* Persistent Blueprint Grid Background */}
                <div className="absolute inset-0 blueprint-grid pointer-events-none opacity-30 z-0" />

                {/* Main Page Content Area */}
                <div className={`relative z-10 ${className}`}>
                    {children}
                </div>

                {/* Optional Footer */}
                {showFooter && (
                    <div className="relative z-20">
                        <Footer />
                    </div>
                )}
            </div>
        </div>
    );
}

/**
 * SectionDivider - Blueprint grid intersection marker
 */
function SectionDivider() {
    return (
        <div className="relative h-px w-full bg-gray-100 z-20">
            <div className="absolute -top-[12px] -left-[12px] text-gray-300">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
                    <line x1="12" y1="0" x2="12" y2="24" />
                    <line x1="0" y1="12" x2="24" y2="12" />
                </svg>
            </div>
            <div className="absolute -top-[12px] -right-[12px] text-gray-300">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
                    <line x1="12" y1="0" x2="12" y2="24" />
                    <line x1="0" y1="12" x2="24" y2="12" />
                </svg>
            </div>
        </div>
    );
}
