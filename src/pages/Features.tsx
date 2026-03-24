import { motion } from 'motion/react';
import { Zap, Clock, Shield, BarChart3, Bell, Smartphone, Search, Filter } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      title: "Smart Priority Engine",
      desc: "Our core algorithm analyzes keywords, categories, and user-defined urgency to assign a dynamic priority score (1-10) to every complaint.",
      color: "blue"
    },
    {
      icon: <Clock className="w-8 h-8 text-purple-600" />,
      title: "Real-time Tracking",
      desc: "Watch your complaint move through the system. From 'Submitted' to 'In Review' to 'Resolved', you're never in the dark.",
      color: "purple"
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-green-600" />,
      title: "Admin Dashboard",
      desc: "A powerful interface for administrators to view heatmaps of complaints, track department performance, and manage high-priority cases.",
      color: "green"
    },
    {
      icon: <Bell className="w-8 h-8 text-orange-600" />,
      title: "Intelligent Notifications",
      desc: "Receive automated updates via email, SMS, or push notifications. The system alerts relevant officials immediately for high-priority issues.",
      color: "orange"
    },
    {
      icon: <Smartphone className="w-8 h-8 text-pink-600" />,
      title: "Mobile-First Interface",
      desc: "Submit complaints on the go. Our responsive design ensures a seamless experience on any device, from smartphones to desktops.",
      color: "pink"
    },
    {
      icon: <Search className="w-8 h-8 text-cyan-600" />,
      title: "Advanced Search",
      desc: "Easily find past complaints or search for similar issues in your area to avoid duplicate submissions and see existing resolutions.",
      color: "cyan"
    },
    {
      icon: <Filter className="w-8 h-8 text-yellow-600" />,
      title: "Dynamic Filtering",
      desc: "Admins can filter complaints by category, priority, location, or date to focus on what matters most at any given moment.",
      color: "yellow"
    },
    {
      icon: <Shield className="w-8 h-8 text-indigo-600" />,
      title: "Data Privacy",
      desc: "We use industry-standard encryption to protect your personal information and the details of your complaints.",
      color: "indigo"
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
            Powerful Features
          </motion.h1>
          <p className="text-slate-600 dark:text-slate-400 max-w-3xl mx-auto text-lg">
            Explore the innovative tools that make SmartPriority the most efficient complaint management solution available today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-16 h-16 rounded-2xl bg-${feature.color}-50 dark:bg-${feature.color}-900/20 flex items-center justify-center mb-8 group-hover:rotate-6 transition-transform`}>
                {feature.icon}
              </div>
              <h3 className="font-display font-bold text-2xl text-slate-900 dark:text-white mb-4">{feature.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Interactive Element Placeholder */}
        <div className="mt-32 p-12 rounded-3xl bg-slate-900 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500 via-transparent to-transparent" />
          </div>
          <div className="relative z-10">
            <h2 className="font-display text-3xl font-bold mb-6">Experience the Priority Engine</h2>
            <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
              Our system doesn't just list complaints; it understands them. By using natural language processing, we identify the severity of the situation automatically.
            </p>
            <div className="flex justify-center gap-4">
              <div className="px-6 py-3 rounded-full bg-red-500/20 border border-red-500/50 text-red-400 text-sm font-bold">Emergency: High Priority</div>
              <div className="px-6 py-3 rounded-full bg-yellow-500/20 border border-yellow-500/50 text-yellow-400 text-sm font-bold">Maintenance: Medium Priority</div>
              <div className="px-6 py-3 rounded-full bg-green-500/20 border border-green-500/50 text-green-400 text-sm font-bold">General: Low Priority</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
