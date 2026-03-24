import { ShieldCheck, Mail, Phone, MapPin, Github, Twitter, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-slate-900/50 border-t dark:border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <ShieldCheck className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              <span className="font-display font-bold text-xl tracking-tight">SmartPriority</span>
            </Link>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              Revolutionizing complaint management with intelligent prioritization and real-time tracking. Built for transparency and efficiency.
            </p>
          </div>

          <div>
            <h3 className="font-display font-bold text-slate-900 dark:text-white mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors">About Us</Link></li>
              <li><Link to="/features" className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors">Key Features</Link></li>
              <li><Link to="/how-it-works" className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors">How It Works</Link></li>
              <li><Link to="/dashboard" className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors">Admin Dashboard</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold text-slate-900 dark:text-white mb-6">Support</h3>
            <ul className="space-y-4">
              <li><Link to="/contact" className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors">Contact Support</Link></li>
              <li><Link to="/complaint" className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors">Submit a Ticket</Link></li>
              <li><a href="#" className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors">FAQ</a></li>
              <li><a href="#" className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold text-slate-900 dark:text-white mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-sm text-slate-600 dark:text-slate-400">
                <Mail className="w-4 h-4 text-blue-600" />
                <span>support@smartpriority.com</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-slate-600 dark:text-slate-400">
                <Phone className="w-4 h-4 text-blue-600" />
                <span>+91 6394837254</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-slate-600 dark:text-slate-400">
                <MapPin className="w-4 h-4 text-blue-600" />
                <span>Gorakhpur, Uttar Pradesh, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-slate-500 dark:text-slate-500 mb-4 md:mb-0">
            © 2026 SmartPriority Complaint Management System. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors"><Linkedin className="w-5 h-5" /></a>
            <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors"><Github className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
