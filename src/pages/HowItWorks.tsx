import { motion } from 'motion/react';
import { UserPlus, Cpu, BarChart, Send, CheckCircle2 } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: <UserPlus className="w-8 h-8" />,
      title: "User Submits Complaint",
      desc: "Complainant fills out a simple form with details, category, and perceived urgency.",
      color: "blue"
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "System Analyzes Urgency",
      desc: "The Smart Priority Engine processes the submission, cross-referencing it with historical data and severity rules.",
      color: "purple"
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "Priority Assigned",
      desc: "A dynamic priority level (High, Medium, Low) is assigned, and the ticket is color-coded for visual clarity.",
      color: "orange"
    },
    {
      icon: <Send className="w-8 h-8" />,
      title: "Routed to Admin",
      desc: "The complaint is instantly routed to the relevant department's dashboard, with high-priority items at the top.",
      color: "green"
    },
    {
      icon: <CheckCircle2 className="w-8 h-8" />,
      title: "Resolution & Tracking",
      desc: "Admins update the status, and the user receives real-time notifications until the issue is resolved.",
      color: "cyan"
    }
  ];

  return (
    <div className="pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6"
          >
            How It Works
          </motion.h1>
          <p className="text-slate-600 dark:text-slate-400 max-w-3xl mx-auto text-lg">
            A seamless workflow designed for speed, accuracy, and transparency.
          </p>
        </div>

        {/* Timeline UI */}
        <div className="relative">
          {/* Vertical Line for Desktop */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800 hidden md:block -translate-x-1/2" />

          <div className="space-y-24">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Content */}
                <div className={`flex-1 text-center ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <h3 className="font-display font-bold text-2xl text-slate-900 dark:text-white mb-4">{step.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed max-w-md mx-auto md:mx-0 inline-block">
                    {step.desc}
                  </p>
                </div>

                {/* Icon Circle */}
                <div className="relative z-10 w-20 h-20 rounded-full bg-white dark:bg-slate-900 border-4 border-slate-100 dark:border-slate-800 flex items-center justify-center shadow-xl">
                  <div className={`text-${step.color}-600`}>
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center font-bold text-sm">
                    {idx + 1}
                  </div>
                </div>

                {/* Placeholder for spacing */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Flowchart UI Mockup */}
        <div className="mt-32">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-white">System Architecture</h2>
          </div>
          <div className="p-8 md:p-16 rounded-3xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="w-full md:w-48 p-6 rounded-2xl bg-white dark:bg-slate-800 shadow-sm text-center border border-slate-100 dark:border-slate-700">
                <p className="font-bold text-sm mb-1">Input Layer</p>
                <p className="text-xs text-slate-500">User Form Data</p>
              </div>
              <div className="w-12 h-12 flex items-center justify-center text-slate-300 rotate-90 md:rotate-0">
                <Send className="w-6 h-6" />
              </div>
              <div className="w-full md:w-64 p-8 rounded-2xl bg-blue-600 text-white shadow-xl text-center">
                <p className="font-bold mb-1">Priority Engine</p>
                <p className="text-xs text-blue-100">AI Analysis & Scoring</p>
              </div>
              <div className="w-12 h-12 flex items-center justify-center text-slate-300 rotate-90 md:rotate-0">
                <Send className="w-6 h-6" />
              </div>
              <div className="w-full md:w-48 p-6 rounded-2xl bg-white dark:bg-slate-800 shadow-sm text-center border border-slate-100 dark:border-slate-700">
                <p className="font-bold text-sm mb-1">Output Layer</p>
                <p className="text-xs text-slate-500">Admin Dashboard</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
