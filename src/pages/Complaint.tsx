import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle2, AlertCircle, Info } from 'lucide-react';
import { useComplaints } from '../context/ComplaintContext';
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

export default function Complaint() {
  const { addComplaint } = useComplaints();
  const { user } = useAuth();
  
  const [formData, setFormData] = useState({
    category: '',
    urgency: '',
    description: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Protect route
  if (!user) {
    return <Navigate to="/login" />;
  }

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.category) newErrors.category = "Please select a category";
    if (!formData.urgency) newErrors.urgency = "Please select an urgency level";
    if (!formData.description) newErrors.description = "Description is required";
    else if (formData.description.length < 10) newErrors.description = "Please provide more detail";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        addComplaint({
          user: user.name,
          category: formData.category,
          priority: formData.urgency.charAt(0).toUpperCase() + formData.urgency.slice(1),
          description: formData.description
        });
        
        setIsSubmitting(false);
        setIsSuccess(true);
        setFormData({ category: '', urgency: '', description: '' });
      }, 1500);
    }
  };

  return (
    <div className="pt-24 pb-24 min-h-screen bg-slate-50 dark:bg-slate-950">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl font-bold text-slate-900 dark:text-white mb-4">Submit a Complaint</h1>
          <p className="text-slate-600 dark:text-slate-400">
            Tell us what's wrong. Our smart system will prioritize your request immediately.
          </p>
        </div>

        <AnimatePresence mode="wait">
          {isSuccess ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white dark:bg-slate-900 p-12 rounded-3xl shadow-xl text-center border border-green-100 dark:border-green-900/30"
            >
              <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle2 className="w-10 h-10 text-green-600" />
              </div>
              <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-white mb-4">Submission Successful!</h2>
              <p className="text-slate-600 dark:text-slate-400 mb-8">
                Your complaint has been received and assigned a tracking ID: <span className="font-mono font-bold text-blue-600">#SP-{Math.floor(10000 + Math.random() * 90000)}</span>. 
                We'll notify you as soon as an official is assigned.
              </p>
              <button
                onClick={() => setIsSuccess(false)}
                className="px-8 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all"
              >
                Submit Another Complaint
              </button>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              onSubmit={handleSubmit}
              className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-800"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Submitting As</label>
                  <p className="text-slate-900 dark:text-white font-bold">{user.name}</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Email Address</label>
                  <p className="text-slate-900 dark:text-white font-bold">{user.email}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Complaint Category</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border ${errors.category ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'} focus:ring-2 focus:ring-blue-500 outline-none transition-all appearance-none`}
                  >
                    <option value="">Select Category</option>
                    <option value="infrastructure">Infrastructure</option>
                    <option value="utilities">Utilities (Water/Power)</option>
                    <option value="sanitation">Sanitation</option>
                    <option value="safety">Public Safety</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.category && <p className="mt-1 text-xs text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.category}</p>}
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Urgency Level (Your Assessment)</label>
                  <select
                    value={formData.urgency}
                    onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border ${errors.urgency ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'} focus:ring-2 focus:ring-blue-500 outline-none transition-all appearance-none`}
                  >
                    <option value="">Select Urgency</option>
                    <option value="low">Low - Minor inconvenience</option>
                    <option value="medium">Medium - Affecting daily life</option>
                    <option value="high">High - Immediate danger/Emergency</option>
                  </select>
                  {errors.urgency && <p className="mt-1 text-xs text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.urgency}</p>}
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={5}
                  className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border ${errors.description ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'} focus:ring-2 focus:ring-blue-500 outline-none transition-all`}
                  placeholder="Please describe the issue in detail..."
                />
                {errors.description && <p className="mt-1 text-xs text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.description}</p>}
              </div>

              <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/50 mb-8 flex items-start gap-3">
                <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-blue-800 dark:text-blue-300 leading-relaxed">
                  Our Smart Priority Engine will analyze your description to verify urgency. Providing clear, factual details helps the system prioritize your case correctly.
                </p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Analyzing & Submitting...
                  </>
                ) : (
                  <>
                    Submit Complaint <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
