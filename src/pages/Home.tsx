import { motion } from 'motion/react';
import { ArrowRight, Zap, Shield, Clock, BarChart3, Users, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 blur-[100px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-blue-600 uppercase bg-blue-50 dark:bg-blue-900/20 dark:text-blue-400 rounded-full">
              Smart Priority Management
            </span>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-8 tracking-tight">
              Resolve Complaints <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Faster Than Ever
              </span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
              An intelligent complaint management system that automatically prioritizes issues based on urgency, category, and impact. Built with Design Thinking to put users first.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link
                to="/complaint"
                className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2"
              >
                Submit a Complaint <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/how-it-works"
                className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-bold rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-all"
              >
                Learn How It Works
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-20 relative mx-auto max-w-5xl"
          >
            <div className="aspect-video rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl">
               <img 
                src="https://picsum.photos/seed/dashboard/1200/675" 
                alt="Dashboard Preview" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
               />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden lg:block">
              <div className="glass p-6 rounded-2xl shadow-xl border border-white/20">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                    <Zap className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Response Time</p>
                    <p className="text-xl font-display font-bold text-slate-900 dark:text-white">45% Faster</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Why Choose SmartPriority?
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Our system is designed to eliminate bottlenecks and ensure that critical issues are addressed immediately.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-6 h-6 text-blue-600" />,
                title: "Smart Priority Engine",
                desc: "Automatically categorizes and ranks complaints based on urgency and impact using intelligent algorithms."
              },
              {
                icon: <Clock className="w-6 h-6 text-purple-600" />,
                title: "Real-time Tracking",
                desc: "Users can track the status of their complaints in real-time with transparent progress updates."
              },
              {
                icon: <Shield className="w-6 h-6 text-green-600" />,
                title: "Secure & Reliable",
                desc: "End-to-end encryption ensures that sensitive complaint data is protected at all times."
              },
              {
                icon: <BarChart3 className="w-6 h-6 text-orange-600" />,
                title: "Admin Dashboard",
                desc: "Comprehensive analytics for administrators to monitor trends and resolution performance."
              },
              {
                icon: <Users className="w-6 h-6 text-pink-600" />,
                title: "User-Centric Design",
                desc: "Built using Design Thinking principles to ensure a seamless experience for both users and admins."
              },
              {
                icon: <MessageSquare className="w-6 h-6 text-cyan-600" />,
                title: "Automated Notifications",
                desc: "Stay informed with instant alerts via email or SMS whenever there's an update on your case."
              }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 transition-all"
              >
                <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center shadow-sm mb-6">
                  {feature.icon}
                </div>
                <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white mb-3">{feature.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-8">
                The Problem with Traditional Systems
              </h2>
              <div className="space-y-6">
                {[
                  "Delayed responses due to manual sorting",
                  "Lack of clear prioritization for urgent issues",
                  "Poor transparency for the complainant",
                  "Inefficient routing to relevant departments"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="mt-1 w-5 h-5 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-red-600" />
                    </div>
                    <p className="text-slate-700 dark:text-slate-300 font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass p-8 md:p-12 rounded-3xl border-blue-200/50 dark:border-blue-800/50">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-8">
                Our Smart Solution
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                We've built a system that thinks. By analyzing the nature of the complaint and the context provided, our Smart Priority Engine ensures that a broken water main is treated with more urgency than a flickering street light, while still ensuring neither is forgotten.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold hover:gap-3 transition-all"
              >
                Read more about our mission <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Trusted by Citizens & Officials
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              See what people are saying about the impact of SmartPriority in their communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "The response time for our water main break was incredible. I could track the repair crew's progress in real-time.",
                author: "Sarah Jenkins",
                role: "Resident",
                avatar: "https://i.pravatar.cc/150?u=sarah"
              },
              {
                quote: "As an admin, the priority engine has saved us hours of manual sorting. We now focus on what's truly urgent.",
                author: "David Chen",
                role: "City Official",
                avatar: "https://i.pravatar.cc/150?u=david"
              },
              {
                quote: "Transparency was always an issue in our city. SmartPriority changed that completely. Every step is visible.",
                author: "Marcus Thorne",
                role: "Community Leader",
                avatar: "https://i.pravatar.cc/150?u=marcus"
              }
            ].map((testimonial, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img src={testimonial.avatar} alt={testimonial.author} className="w-12 h-12 rounded-full border-2 border-white dark:border-slate-700" referrerPolicy="no-referrer" />
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">{testimonial.author}</h4>
                    <p className="text-xs text-slate-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-400 italic leading-relaxed">"{testimonial.quote}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4">
            {[
              { q: "How does the system determine priority?", a: "Our AI-powered engine analyzes the category, keywords in your description, and historical urgency data to assign a priority score." },
              { q: "Can I edit my complaint after submission?", a: "To maintain the integrity of the prioritization, complaints cannot be edited once submitted. However, you can add comments or updates to your existing ticket." },
              { q: "Is my personal data secure?", a: "Yes, we use end-to-end encryption and follow strict data protection protocols to ensure your privacy." },
              { q: "What happens if my complaint is mis-prioritized?", a: "Administrators manually review all high and medium priority items to ensure the system's assessment is accurate." }
            ].map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                <h3 className="font-bold text-slate-900 dark:text-white mb-2">{item.q}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-3xl p-12 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <div className="absolute top-0 left-0 w-64 h-64 bg-white blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-white blur-3xl rounded-full translate-x-1/2 translate-y-1/2" />
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">Ready to improve your service?</h2>
            <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
              Join hundreds of organizations using SmartPriority to streamline their operations and boost user satisfaction.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/complaint"
                className="px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-all"
              >
                Get Started Now
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 bg-transparent border border-white/30 text-white font-bold rounded-xl hover:bg-white/10 transition-all"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
