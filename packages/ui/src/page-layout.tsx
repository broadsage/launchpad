import React from "react";
import { Header } from "./header";
import { Footer } from "./footer";
import { cn } from "./utils";

interface PageLayoutProps {
    children: React.ReactNode;
    showHeader?: boolean;
    showFooter?: boolean;
    className?: string;
}

/**
 * PageLayout - Reusable blueprint grid layout wrapper
 * 
 * This component provides the consistent "floating blueprint" design across all pages:
 * - 1280px centered white column with vertical borders
 * - Docker-inspired #F9FAFB background
 * - Blueprint grid pattern
 * - Automatic Header/Footer integration
 * 
 * Usage:
 * ```tsx
 * <PageLayout>
 *   <YourPageContent />
 * </PageLayout>
 * ```
 */
export function PageLayout({
    children,
    showHeader = true,
    showFooter = true,
    className = ""
}: PageLayoutProps) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 selection:bg-[#6226FA] selection:text-white font-sans text-[#0D161C] overflow-x-hidden relative">
            {/* Ambient background effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(98,38,250,0.03)_0%,transparent_50%)] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(98,38,250,0.02)_0%,transparent_50%)] pointer-events-none" />

            {/* Fixed Header - Outside Container */}
            {showHeader && <Header />}

            <div className={`max-w-7xl mx-auto bg-white/95 backdrop-blur-sm border-x border-gray-200/60 relative shadow-[0_0_60px_-15px_rgba(0,0,0,0.1)] before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/50 before:to-transparent before:pointer-events-none ${showHeader ? "pt-16" : ""}`}>
                {/* Persistent Blueprint Grid Background */}
                <div className="absolute inset-0 blueprint-grid pointer-events-none opacity-30 z-0" />

                {/* Section Divider after header space */}
                {showHeader && <SectionDivider />}

                {/* Page Content */}
                <div className={`relative z-10 ${className}`}>
                    {children}
                </div>

                {/* Optional Footer */}
                {showFooter && (
                    <>
                        <SectionDivider />
                        <Footer />
                    </>
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
