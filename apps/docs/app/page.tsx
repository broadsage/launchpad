import Image from "next/image";
import { Button } from "@repo/ui/button";
import { ArrowRight, BookOpen, Terminal, ShieldCheck, Binary, Package, Shield, Lock } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white bg-grid-pattern selection:bg-[#6226FA] selection:text-white font-sans text-[#0D161C]">
      <main className="max-w-6xl mx-auto pt-24 pb-32 px-6">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#6226FA] text-[10px] font-mono font-bold text-[#6226FA] mb-12 pixel-border">
            Docs System V2 :: Hardened Reference
          </div>

          <h1 className="text-5xl md:text-7xl font-black tracking-[-0.03em] uppercase mb-8">
            The Secure <span className="text-[#6226FA]">Library.</span>
          </h1>

          <p className="text-gray-500 text-xl max-w-2xl mb-16 font-medium leading-relaxed">
            Everything you need to secure your modern software supply chain. <br />
            Standardize on zero-CVE images and cryptographically verified builds.
          </p>

          <div className="grid md:grid-cols-2 gap-8 w-full max-w-4xl">
            <a href="/docs/guide" className="group p-8 bg-white border border-gray-100 hover:border-[#6226FA] transition-all text-left relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 shadow-none">
                <ShieldCheck size={120} />
              </div>
              <div className="w-12 h-12 bg-gray-50 flex items-center justify-center mb-6 border border-gray-100 group-hover:bg-[#6226FA] group-hover:text-white transition-colors">
                <Binary size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 uppercase tracking-tight">Hardening Guide</h3>
              <p className="text-gray-500 text-sm mb-6">Learn how to migrate from standard distributions to Broadsage hardened images in minutes.</p>
              <div className="flex items-center gap-2 text-[#6226FA] font-mono text-xs font-bold uppercase tracking-wider">
                Start Hardening <ArrowRight size={14} />
              </div>
            </a>

            <a href="/docs/api" className="group p-8 bg-white border border-gray-100 hover:border-[#6226FA] transition-all text-left relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 shadow-none">
                <Lock size={120} />
              </div>
              <div className="w-12 h-12 bg-gray-50 flex items-center justify-center mb-6 border border-gray-100 group-hover:bg-[#6226FA] group-hover:text-white transition-colors">
                <Package size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 uppercase tracking-tight">Catalog API</h3>
              <p className="text-gray-500 text-sm mb-6">Programmatically access SBOMs, signatures, and vulnerability reports for the entire catalog.</p>
              <div className="flex items-center gap-2 text-[#6226FA] font-mono text-xs font-bold uppercase tracking-wider">
                View API <ArrowRight size={14} />
              </div>
            </a>
          </div>

          <div className="mt-20 w-full max-w-4xl bg-[#0D161C] p-1 shadow-[10px_10px_0px_0px_rgba(98,38,250,1)]">
            <div className="bg-white p-8 flex flex-col md:flex-row items-center justify-between gap-8 border border-gray-100">
              <div className="flex items-center gap-4 text-left">
                <div className="w-12 h-12 bg-purple-50 text-[#6226FA] flex items-center justify-center rounded-none border border-purple-100">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-tight">FedRAMP Compliance</h4>
                  <p className="text-gray-500 text-sm">Our documentation includes a mapped guide for FedRAMP High control standards.</p>
                </div>
              </div>
              <Button appName="docs" className="h-12 px-8 rounded-none font-mono uppercase bg-[#0D161C] text-white hover:bg-[#1a2b38]">
                Download Auditor's Guide
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
