import React from "react";
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
