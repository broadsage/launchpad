import React from "react";
import { cn } from "./utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    size?: "sm" | "md" | "lg" | "xl" | "full";
}

export const Container = ({ children, className, size = "xl", ...props }: ContainerProps) => {
    const sizes = {
        sm: "max-w-screen-sm",
        md: "max-w-screen-md",
        lg: "max-w-screen-lg",
        xl: "max-w-7xl",
        full: "max-w-full",
    };

    return (
        <div className={cn("mx-auto px-6 lg:px-8", sizes[size], className)} {...props}>
            {children}
        </div>
    );
};

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    padding?: "none" | "sm" | "md" | "lg" | "xl";
    background?: "white" | "black" | "subtle" | "dark";
}

export const Section = ({
    children,
    className,
    padding = "md",
    background = "white",
    ...props
}: SectionProps) => {
    const paddings = {
        none: "py-0",
        sm: "py-12",
        md: "py-20",
        lg: "py-32",
        xl: "py-48",
    };

    const backgrounds = {
        white: "bg-white",
        black: "bg-black text-white",
        subtle: "bg-[#FAFAFA]",
        dark: "bg-[#111111] text-white",
    };

    return (
        <section className={cn(paddings[padding], backgrounds[background], className)} {...props}>
            {children}
        </section>
    );
};
