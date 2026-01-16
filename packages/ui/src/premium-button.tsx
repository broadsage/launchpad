"use client";

import React from "react";

interface PremiumButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline";
    size?: "sm" | "md" | "lg";
}

export const PremiumButton = ({
    children,
    className = "",
    variant = "primary",
    size = "md",
    ...props
}: PremiumButtonProps) => {
    const baseStyles = "inline-flex items-center justify-center rounded-xl font-bold transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
        primary: "bg-purple-600 text-white hover:bg-purple-700 focus:ring-purple-500",
        secondary: "bg-white/5 text-white hover:bg-white/10 border border-white/10",
        outline: "bg-transparent border-2 border-purple-500/50 text-white hover:border-purple-500",
    };

    const sizes = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};
