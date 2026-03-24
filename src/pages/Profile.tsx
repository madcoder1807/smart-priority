import { motion } from 'motion/react';
import { useAuth } from '../context/AuthContext';
import { User, Mail, Phone, Calendar, MapPin, CreditCard, Shield, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Profile() {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="pt-32 pb-24 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Please login to view your profile</h2>
          <Link to="/login" className="text-blue-600 font-bold hover:underline">Go to Login</Link>
        </div>
      </div>
    );
  }

  const profileData = [
    { label: 'Full Name', value: user.name, icon: User },
    { label: 'Email Address', value: user.email, icon: Mail },
    { label: 'Mobile Number', value: user.mobile ? `+91 ${user.mobile}` : 'Not provided', icon: Phone },
    { label: 'Date of Birth', value: user.dob || 'Not provided', icon: Calendar },
    { label: 'Gender', value: user.gender || 'Not provided', icon: Shield },
    { label: 'Aadhar Number', value: user.aadhar || 'Not provided', icon: CreditCard },
    { label: 'Location', value: `${user.city || ''}, ${user.state || ''}, ${user.country || ''}`, icon: MapPin },
    { label: 'Full Address', value: user.fullAddress || 'Not provided', icon: MapPin },
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-slate-50 dark:bg-slate-950">
      <div className="max-w-4xl mx-auto px-4">
        <Link to="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-800 overflow-hidden"
        >
          <div className="bg-blue-600 h-32 relative">
            <div className="absolute -bottom-12 left-8">
              <div className="w-24 h-24 rounded-2xl bg-white dark:bg-slate-800 p-2 shadow-lg">
                <div className="w-full h-full rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center">
                  <User className="w-12 h-12 text-blue-600" />
                </div>
              </div>
            </div>
          </div>

          <div className="pt-16 p-8">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-slate-900 dark:text-white">{user.name}</h1>
              <p className="text-slate-500 capitalize">{user.role} Account</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {profileData.map((item, index) => (
                <div key={index} className="flex gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                  <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-800 flex items-center justify-center shadow-sm">
                    <item.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">{item.label}</p>
                    <p className="text-slate-900 dark:text-white font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 rounded-2xl bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/30">
              <div className="flex items-start gap-4">
                <Shield className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h4 className="font-bold text-blue-900 dark:text-blue-300 mb-1">Account Security</h4>
                  <p className="text-sm text-blue-700 dark:text-blue-400">
                    Your account is protected by industry-standard encryption. Your Aadhar and personal details are only used for verification purposes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
