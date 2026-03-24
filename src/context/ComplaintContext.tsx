import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface Complaint {
  id: string;
  user: string;
  category: string;
  priority: string;
  status: string;
  date: string;
  description: string;
}

interface ComplaintContextType {
  complaints: Complaint[];
  addComplaint: (complaint: Omit<Complaint, 'id' | 'date' | 'status'>) => void;
  updateStatus: (id: string, status: string) => void;
}

const ComplaintContext = createContext<ComplaintContextType | undefined>(undefined);

const initialComplaints: Complaint[] = [
  { id: 'SP-88291', user: 'Arjun Sharma', category: 'Infrastructure', priority: 'High', status: 'Pending', date: '2026-03-24', description: 'Large pothole on main road.' },
  { id: 'SP-88292', user: 'Priya Patel', category: 'Utilities', priority: 'Medium', status: 'In Progress', date: '2026-03-23', description: 'Water leakage in sector 4.' },
  { id: 'SP-88293', user: 'Rahul Verma', category: 'Sanitation', priority: 'Low', status: 'Resolved', date: '2026-03-22', description: 'Garbage collection missed.' },
];

export function ComplaintProvider({ children }: { children: ReactNode }) {
  const [complaints, setComplaints] = useState<Complaint[]>(() => {
    const saved = localStorage.getItem('sp_complaints');
    return saved ? JSON.parse(saved) : initialComplaints;
  });

  useEffect(() => {
    localStorage.setItem('sp_complaints', JSON.stringify(complaints));
  }, [complaints]);

  const addComplaint = (data: Omit<Complaint, 'id' | 'date' | 'status'>) => {
    const newComplaint: Complaint = {
      ...data,
      id: `SP-${Math.floor(10000 + Math.random() * 90000)}`,
      date: new Date().toISOString().split('T')[0],
      status: 'Pending'
    };
    setComplaints(prev => [newComplaint, ...prev]);
  };

  const updateStatus = (id: string, status: string) => {
    setComplaints(prev => prev.map(c => c.id === id ? { ...c, status } : c));
  };

  return (
    <ComplaintContext.Provider value={{ complaints, addComplaint, updateStatus }}>
      {children}
    </ComplaintContext.Provider>
  );
}

export function useComplaints() {
  const context = useContext(ComplaintContext);
  if (context === undefined) {
    throw new Error('useComplaints must be used within a ComplaintProvider');
  }
  return context;
}
