"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Lightbulb, Mail, Rocket, Check } from "lucide-react";
import Link from "next/link";
import { Container } from "@repo/ui/layout";
import { Navbar, NavGroup } from "@repo/ui/navigation";
import { BroadsageLogo } from "@repo/ui/icons";
import { PremiumButton } from "@repo/ui/premium-button";
import { Footer } from "@repo/ui/footer";
import { Header } from "@repo/ui/header";

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
        <div className="min-h-screen bg-white">
            <Header />

            {/* Main Content - Split Layout */}
            <div className="pt-16 min-h-screen grid lg:grid-cols-2">
                {/* Left Column - Modern Hero Section */}
                <div className="bg-gradient-to-br from-[#0A0A0A] via-[#1a1a2e] to-[#16213e] text-white relative overflow-hidden">
                    {/* Animated Background Elements */}
                    <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-600/5 to-purple-600/5 rounded-full blur-3xl" />

                    {/* Grid Pattern Overlay */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

                    <div className="relative z-10 px-6 lg:px-16 py-16 lg:py-24 flex flex-col justify-center min-h-[600px] lg:min-h-screen">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="max-w-2xl"
                        >
                            {/* Badge */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 backdrop-blur-sm mb-8"
                            >
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
                                </span>
                                <span className="text-sm font-semibold text-blue-200">Developer Newsletter</span>
                            </motion.div>

                            {/* Main Heading */}
                            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-black tracking-tight mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent leading-tight">
                                Stay ahead of the curve
                            </h1>

                            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                                Join <span className="text-white font-bold">15,000+</span> developers getting the latest updates, tutorials, and insights delivered to their inbox.
                            </p>

                            {/* Stats Cards */}
                            <div className="grid grid-cols-3 gap-4 mb-12">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300"
                                >
                                    <div className="text-3xl font-black text-white mb-1">15K+</div>
                                    <div className="text-xs text-gray-400 uppercase tracking-wide">Subscribers</div>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300"
                                >
                                    <div className="text-3xl font-black text-white mb-1">2x</div>
                                    <div className="text-xs text-gray-400 uppercase tracking-wide">Per Month</div>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300"
                                >
                                    <div className="text-3xl font-black text-white mb-1">5min</div>
                                    <div className="text-xs text-gray-400 uppercase tracking-wide">Read Time</div>
                                </motion.div>
                            </div>

                            {/* Features List */}
                            <div className="space-y-6">
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.6 }}
                                    className="flex gap-4 group"
                                >
                                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/50 group-hover:shadow-blue-500/70 transition-all duration-300 group-hover:scale-110">
                                        <Lightbulb className="w-7 h-7 text-white" strokeWidth={2} />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold mb-2 text-white">Expert Insights</h3>
                                        <p className="text-gray-300 text-base leading-relaxed">
                                            Deep dives into AI, cloud infrastructure, and cutting-edge development practices.
                                        </p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.7 }}
                                    className="flex gap-4 group"
                                >
                                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/50 group-hover:shadow-purple-500/70 transition-all duration-300 group-hover:scale-110">
                                        <Rocket className="w-7 h-7 text-white" strokeWidth={2} />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold mb-2 text-white">Ship Faster</h3>
                                        <p className="text-gray-300 text-base leading-relaxed">
                                            Proven workflows, tools, and techniques to accelerate your development velocity.
                                        </p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.8 }}
                                    className="flex gap-4 group"
                                >
                                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-green-500/50 group-hover:shadow-green-500/70 transition-all duration-300 group-hover:scale-110">
                                        <Mail className="w-7 h-7 text-white" strokeWidth={2} />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold mb-2 text-white">Zero Spam</h3>
                                        <p className="text-gray-300 text-base leading-relaxed">
                                            Quality over quantity. Curated content delivered every two weeks. Unsubscribe anytime.
                                        </p>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Right Column - White Form Section */}
                <div className="bg-white">
                    <div className="px-6 lg:px-12 py-16 lg:py-24 flex flex-col justify-center min-h-[600px] lg:min-h-screen">
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
                                    <h2 className="text-2xl font-bold text-gray-900 mb-3">You're subscribed!</h2>
                                    <p className="text-gray-600 mb-8">
                                        Thank you for subscribing to our developer newsletter. You'll receive your first email soon.
                                    </p>
                                    <Link href="/" className="text-[#0969da] hover:underline font-medium">
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
                                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
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
                                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm bg-white"
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
                                                className="mt-1 w-4 h-4 border-gray-300 rounded focus:ring-blue-500"
                                            />
                                            <label htmlFor="privacy" className="text-sm text-gray-700">
                                                I agree to receive email communications from Broadsage and understand that I can unsubscribe at any time. For more information, please see our{" "}
                                                <Link href="#" className="text-[#0969da] hover:underline">
                                                    Privacy Statement
                                                </Link>
                                                .
                                            </label>
                                        </div>

                                        {/* Submit Button */}
                                        <button
                                            type="submit"
                                            disabled={isSubmitting || !agreed}
                                            className="w-full py-3 px-6 bg-[#1f2328] text-white font-semibold rounded-md hover:bg-[#2c3137] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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

            <Footer />
        </div>
    );
}
