import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type UserRole = 'customer' | 'admin' | null;

interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  dob?: string;
  gender?: string;
  aadhar?: string;
  mobile?: string;
  city?: string;
  country?: string;
  fullAddress?: string;
  state?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => { success: boolean; message?: string };
  logout: () => void;
  signup: (userData: any) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    const saved = localStorage.getItem('sp_user');
    return saved ? JSON.parse(saved) : null;
  });

  const login = (email: string, password: string) => {
    // Pre-defined Admin
    if (email === 'admin@smartpriority' && password === 'mmmut') {
      const adminUser: User = {
        id: 'admin-001',
        name: 'Admin',
        email: 'admin@smartpriority',
        role: 'admin'
      };
      setUser(adminUser);
      localStorage.setItem('sp_user', JSON.stringify(adminUser));
      return { success: true };
    }

    // Pre-defined Customers
    const preDefinedCustomers = [
      { email: 'naitik@gmail.com', password: 'naitik@123', name: 'Naitik' },
      { email: 'vipendra@gmail.com', password: 'vipendra@123', name: 'Vipendra' }
    ];

    const preDefined = preDefinedCustomers.find(u => u.email === email && u.password === password);
    if (preDefined) {
      const customerUser: User = {
        id: `customer-${preDefined.name.toLowerCase()}`,
        name: preDefined.name,
        email: preDefined.email,
        role: 'customer'
      };
      setUser(customerUser);
      localStorage.setItem('sp_user', JSON.stringify(customerUser));
      return { success: true };
    }

    // Check if user exists in local storage (simulated)
    const savedUsers = JSON.parse(localStorage.getItem('sp_registered_users') || '[]');
    const existingUser = savedUsers.find((u: any) => u.email === email && u.password === password);

    if (existingUser) {
      setUser(existingUser);
      localStorage.setItem('sp_user', JSON.stringify(existingUser));
      return { success: true };
    }
    
    return { success: false, message: 'Invalid email or password' };
  };

  const signup = (userData: any) => {
    const newUser = { 
      id: Math.random().toString(36).substr(2, 9), 
      name: userData.fullName, 
      ...userData,
      role: 'customer' as UserRole 
    };
    
    // Save to registered users list (simulated database)
    const savedUsers = JSON.parse(localStorage.getItem('sp_registered_users') || '[]');
    localStorage.setItem('sp_registered_users', JSON.stringify([...savedUsers, newUser]));
    
    setUser(newUser);
    localStorage.setItem('sp_user', JSON.stringify(newUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('sp_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, signup }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
