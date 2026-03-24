import { motion } from 'motion/react';
import { Target, Lightbulb, TrendingUp, CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6"
          >
            About the Project
          </motion.h1>
          <p className="text-slate-600 dark:text-slate-400 max-w-3xl mx-auto text-lg">
            SmartPriority is a Design Thinking initiative aimed at modernizing public and private complaint management systems through intelligent automation.
          </p>
        </div>

        {/* Problem Statement */}
        <section className="mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-xs font-bold uppercase tracking-wider mb-6">
                <Target className="w-4 h-4" /> The Challenge
              </div>
              <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-white mb-6">Problem Statement</h2>
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                Traditional complaint systems often suffer from a "first-come, first-served" approach, which fails to account for the severity of issues. A critical infrastructure failure might wait in the same queue as a minor aesthetic request, leading to dangerous delays and public dissatisfaction.
              </p>
              <div className="space-y-4">
                {[
                  "Inefficient resource allocation",
                  "High response latency for critical issues",
                  "Lack of automated categorization",
                  "Low transparency in resolution status"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-500" />
                    <span className="text-slate-700 dark:text-slate-300 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://picsum.photos/seed/problem/800/800" 
                  alt="Problem Visualization" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Motivation & Objectives */}
        <section className="mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://picsum.photos/seed/motivation/800/800" 
                  alt="Motivation Visualization" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-6">
                <Lightbulb className="w-4 h-4" /> The Vision
              </div>
              <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-white mb-6">Motivation & Objectives</h2>
              <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                Our motivation stems from the need for a more empathetic and responsive governance model. By applying Design Thinking, we focused on the human impact of unresolved complaints.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm">
                  <TrendingUp className="w-8 h-8 text-blue-600 mb-4" />
                  <h3 className="font-bold text-slate-900 dark:text-white mb-2">Efficiency</h3>
                  <p className="text-sm text-slate-500">Reduce average resolution time by 40% through smart routing.</p>
                </div>
                <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm">
                  <Shield className="w-8 h-8 text-purple-600 mb-4" />
                  <h3 className="font-bold text-slate-900 dark:text-white mb-2">Transparency</h3>
                  <p className="text-sm text-slate-500">Provide end-to-end visibility for every submitted ticket.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Infographic Style Section */}
        <section className="py-20 bg-blue-600 rounded-3xl text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-1/4" />
          <div className="relative z-10 px-8 md:px-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-12 text-center">Design Thinking Process</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
              {[
                { step: "01", label: "Empathize", desc: "Understanding user pain points" },
                { step: "02", label: "Define", desc: "Narrowing down the core problem" },
                { step: "03", label: "Ideate", desc: "Brainstorming smart solutions" },
                { step: "04", label: "Prototype", desc: "Building the SmartPriority UI" },
                { step: "05", label: "Test", desc: "Iterating based on feedback" }
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="text-4xl font-display font-black opacity-30 mb-2">{item.step}</div>
                  <div className="font-bold text-lg mb-2">{item.label}</div>
                  <p className="text-xs text-blue-100">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

import { Shield } from 'lucide-react';
