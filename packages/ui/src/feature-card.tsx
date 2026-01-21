import React from "react";
import { cn } from "./utils";

interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    className?: string;
}

export function FeatureCard({ icon, title, description, className }: FeatureCardProps) {
    return (
        <div className={cn("p-8 border border-gray-100 rounded-2xl hover:border-[#0D161C] transition-colors group", className)}>
            <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-[#0D161C] group-hover:text-white transition-colors">
                {icon}
            </div>
            <h3 className="text-xl font-bold mb-3">{title}</h3>
            <p className="text-gray-500 leading-relaxed text-sm">
                {description}
            </p>
        </div>
    );
}
