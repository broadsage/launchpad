"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Lightbulb, Mail, Rocket, Check } from "lucide-react";
import Link from "next/link";
import { PageLayout } from "@repo/ui/page-layout";

export default function NewsletterPage() {
    const [email, setEmail] = useState("");
    const [country, setCountry] = useState("");
    const [agreed, setAgreed] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSuccess(true);
    };

    return (
        <PageLayout>
            {/* Main Content - Split Layout */}
            <div className="grid lg:grid-cols-2 min-h-[calc(100vh-64px)]">
                {/* Left Column - Modern Hero Section */}
                <div className="bg-gradient-to-br from-[#0D161C] via-[#1a1a2e] to-[#16213e] text-white relative">
                    {/* Animated Background Elements */}
                    <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-600/5 to-purple-600/5 rounded-full blur-3xl" />

                    {/* Grid Pattern Overlay */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

                    <div className="relative z-10 px-6 lg:px-16 py-16 lg:py-24 flex flex-col justify-center min-h-[600px]">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            {/* Badge */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-8"
                            >
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6226FA] opacity-75" />
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#6226FA]" />
                                </span>
                                <span className="text-xs font-bold uppercase tracking-widest text-white">Mission-Critical Briefing</span>
                            </motion.div>

                            {/* Main Heading */}
                            <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-8 leading-[0.9]">
                                Intelligence for the <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6226FA] to-blue-400">Modern Enterprise.</span>
                            </h1>

                            <p className="text-lg text-gray-400 mb-12 leading-relaxed max-w-xl">
                                Join <span className="text-white font-bold">15,000+</span> technology leaders receiving curated insights on Kubernetes orchestration, AI-native platforms, and open-source stewardship.
                            </p>

                            {/* Stats Cards */}
                            <div className="grid grid-cols-2 gap-4 mb-12">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
                                >
                                    <div className="text-4xl font-black text-white mb-1 tracking-tighter">12K+</div>
                                    <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Global Architects</div>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
                                >
                                    <div className="text-4xl font-black text-white mb-1 tracking-tighter">Bi-Weekly</div>
                                    <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Technical Cadence</div>
                                </motion.div>
                            </div>

                            {/* Features List */}
                            <div className="space-y-8">
                                <div className="flex gap-5 group">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#6226FA]/20 border border-[#6226FA]/30 flex items-center justify-center group-hover:bg-[#6226FA] transition-all">
                                        <Lightbulb className="w-6 h-6 text-[#6226FA] group-hover:text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white mb-1">Architectural Patterns</h3>
                                        <p className="text-sm text-gray-500 leading-relaxed">Proven blueprints for scaling hybrid clouds and AI workloads.</p>
                                    </div>
                                </div>
                                <div className="flex gap-5 group">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center group-hover:bg-blue-500 transition-all">
                                        <Rocket className="w-6 h-6 text-blue-500 group-hover:text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white mb-1">Ecosystem Updates</h3>
                                        <p className="text-sm text-gray-400 leading-relaxed">Stay updated on upstream contributions and new open standards.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Right Column - White Form Section */}
                <div className="bg-white">
                    <div className="px-6 lg:px-12 py-16 lg:py-24 flex flex-col justify-center min-h-[600px]">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="max-w-md mx-auto w-full"
                        >
                            {isSuccess ? (
                                <div className="text-center py-12">
                                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <Check className="w-8 h-8 text-green-600" />
                                    </div>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-3">You&apos;re subscribed!</h2>
                                    <p className="text-gray-600 mb-8">
                                        Thank you for subscribing to our developer newsletter. You&apos;ll receive your first email soon.
                                    </p>
                                    <Link href="/" className="text-[#6226FA] hover:underline font-medium">
                                        Return to homepage
                                    </Link>
                                </div>
                            ) : (
                                <>
                                    <p className="text-xs text-gray-500 mb-6">
                                        All fields marked with an asterisk (*) are required.
                                    </p>

                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        {/* Email Input */}
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                                                Work email *
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                required
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6226FA] focus:border-transparent text-sm"
                                                placeholder="you@company.com"
                                            />
                                        </div>

                                        {/* Country Select */}
                                        <div>
                                            <label htmlFor="country" className="block text-sm font-semibold text-gray-900 mb-2">
                                                Country *
                                            </label>
                                            <select
                                                id="country"
                                                required
                                                value={country}
                                                onChange={(e) => setCountry(e.target.value)}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6226FA] focus:border-transparent text-sm bg-white"
                                            >
                                                <option value="">Select your country</option>
                                                <option value="US">United States</option>
                                                <option value="GB">United Kingdom</option>
                                                <option value="CA">Canada</option>
                                                <option value="AU">Australia</option>
                                                <option value="DE">Germany</option>
                                                <option value="FR">France</option>
                                                <option value="IN">India</option>
                                                <option value="JP">Japan</option>
                                                <option value="SG">Singapore</option>
                                                <option value="NL">Netherlands</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>

                                        {/* Privacy Checkbox */}
                                        <div className="flex items-start gap-3">
                                            <input
                                                type="checkbox"
                                                id="privacy"
                                                required
                                                checked={agreed}
                                                onChange={(e) => setAgreed(e.target.checked)}
                                                className="mt-1 w-4 h-4 border-gray-300 rounded focus:ring-[#6226FA]"
                                            />
                                            <label htmlFor="privacy" className="text-sm text-gray-700">
                                                I agree to receive email communications from Broadsage and understand that I can unsubscribe at any time. For more information, please see our{" "}
                                                <Link href="#" className="text-[#6226FA] hover:underline">
                                                    Privacy Statement
                                                </Link>
                                                .
                                            </label>
                                        </div>

                                        {/* Submit Button */}
                                        <button
                                            type="submit"
                                            disabled={isSubmitting || !agreed}
                                            className="w-full py-3 px-6 bg-[#0D161C] text-white font-semibold rounded-md hover:bg-[#1a2b38] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            {isSubmitting ? "Subscribing..." : "Subscribe"}
                                        </button>
                                    </form>
                                </>
                            )}
                        </motion.div>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
}
