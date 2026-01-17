import React from "react";
import Image from "next/image";
import { cn } from "./utils";

export function VercelTriangle({ className }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 76 65"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={cn("fill-black", className)}
        >
            <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" />
        </svg>
    );
}

export function BroadsageLogo({ className }: { className?: string }) {
    return (
        <Image
            src="/broadsage-dark.png"
            alt="Broadsage Logo"
            width={40}
            height={40}
            className={cn("w-auto", className)}
            priority
        />
    );
}
