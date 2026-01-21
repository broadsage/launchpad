"use client";

import React from "react";
import { cn } from "./utils";

interface PremiumButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost" | "purple";
    size?: "sm" | "md" | "lg";
}

export const PremiumButton = ({
    children,
    className,
    variant = "primary",
    size = "md",
    ...props
}: PremiumButtonProps) => {
    const baseStyles = "inline-flex items-center justify-center rounded-full font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";

    const variants = {
        primary: "bg-[#0D161C] text-white hover:bg-[#1a2b38] dark:bg-white dark:text-[#0D161C] dark:hover:bg-[#eee]",
        secondary: "bg-white text-black border border-gray-200 hover:bg-gray-50 shadow-sm",
        outline: "bg-transparent border border-black text-black hover:bg-black/5 dark:border-white dark:text-white dark:hover:bg-white/5",
        ghost: "bg-transparent hover:bg-black/5 text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white dark:hover:bg-white/5",
        purple: "bg-[#6226FA] text-white hover:bg-[#5219e5] shadow-lg shadow-purple-500/20",
    };

    const sizes = {
        sm: "px-4 py-1.5 text-sm",
        md: "px-6 py-2.5 text-base",
        lg: "px-8 py-3.5 text-lg",
    };

    return (
        <button
            className={cn(baseStyles, variants[variant], sizes[size], className)}
            {...props}
        >
            {children}
        </button>
    );
};
