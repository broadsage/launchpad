export interface ProductTheme {
    primary: string;       // main brand color (hex)
    accent: string;        // accent color (hex)
    rgb: string;           // rgb values for primary color (r, g, b)
    palette: string[];     // Array of RGB strings for multi-color effects ["r,g,b", "r,g,b"]
    gradient: string;      // tailwind gradient classes
}

export interface ProductData {
    slug: string;
    title: string;
    category: 'Hardened Infrastructure' | 'Security' | 'Intelligence';
    description: string;
    theme: ProductTheme;
}

export const PRODUCT_THEMES: Record<ProductData['category'], ProductTheme> = {
    'Hardened Infrastructure': {
        primary: '#F59E0B', // Amber/Gold for "Hardened"
        accent: '#FBBF24',
        rgb: '245, 158, 11',
        palette: ['245, 158, 11', '234, 88, 12', '251, 191, 36'], // Amber extremes
        gradient: 'from-amber-600 to-orange-500'
    },
    'Security': {
        primary: '#6226FA', // Broadsage Purple
        accent: '#7D4DFF',
        rgb: '98, 38, 250',
        palette: ['98, 38, 250', '219, 39, 119', '79, 70, 229'], // Purple, Pink, Indigo
        gradient: 'from-[#6226FA] to-pink-500'
    },
    'Intelligence': {
        primary: '#0D9488', // Teal
        accent: '#14B8A6',
        rgb: '13, 148, 136',
        palette: ['13, 148, 136', '59, 130, 246', '16, 185, 129'], // Teal, Blue, Emerald
        gradient: 'from-teal-500 to-blue-500'
    }
};

export const PRODUCTS: ProductData[] = [
    // Hardened Infrastructure Series (Core Focus)
    {
        slug: 'broadsage-hardened-os',
        title: 'Broadsage Hardened OS',
        category: 'Hardened Infrastructure',
        description: 'The definitive minimal and secure operating system foundation, engineered for high-stake cloud-native workloads.',
        theme: PRODUCT_THEMES['Hardened Infrastructure']
    },
    {
        slug: 'broadsage-hardened-containers',
        title: 'Broadsage Hardened Containers',
        category: 'Hardened Infrastructure',
        description: 'Golden container images with minimal attack surfaces, scanned and verified for zero-vulnerability production use.',
        theme: PRODUCT_THEMES['Hardened Infrastructure']
    },
    {
        slug: 'broadsage-hardened-vms',
        title: 'Broadsage Hardened VMs',
        category: 'Hardened Infrastructure',
        description: 'Secure-by-default virtual machine images optimized for major cloud providers and highly regulated environments.',
        theme: PRODUCT_THEMES['Hardened Infrastructure']
    },
    // Security Series
    {
        slug: 'sentinel-devsecops',
        title: 'Sentinel DevSecOps',
        category: 'Security',
        description: 'Continuous supply chain defense and automated policy enforcement for hardened artifacts.',
        theme: PRODUCT_THEMES.Security
    },
    // Intelligence Series
    {
        slug: 'secure-inference',
        title: 'Secure Inference',
        category: 'Intelligence',
        description: 'Private and secure inference delivery for enterprise-grade AI models on hardened infrastructure.',
        theme: PRODUCT_THEMES.Intelligence
    }
];
