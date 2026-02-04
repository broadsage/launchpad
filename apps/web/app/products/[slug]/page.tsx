import React from "react";
import { PRODUCTS, ProductData } from "@repo/ui";
import ProductClient from "./product-client";
import { notFound } from "next/navigation";

export default async function ProductPage({
    params
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params;
    const product = (PRODUCTS as ProductData[]).find((p: ProductData) => p.slug === slug);

    if (!product) {
        // Fallback to notFound or first product if desired
        // For AWS-like experience, we should show the requested product or 404
        return notFound();
    }

    return <ProductClient product={product} />;
}
