import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Shield, LayoutGrid, LogIn, UserPlus } from 'lucide-react';

const Sidebar: React.FC = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  const itemClass = (active: boolean) =>
    `flex items-center gap-3 px-4 py-2 rounded-md transition-colors ${
      active
        ? 'bg-gradient-to-r from-purple-600 to-teal-500 text-white'
        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
    }`;

  return (
    <aside className="w-64 hidden md:block bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-r border-gray-200 dark:border-gray-700 min-h-screen p-4">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-teal-500 rounded-lg flex items-center justify-center">
          <Shield className="w-5 h-5 text-white" />
        </div>
        <span className="font-semibold bg-gradient-to-r from-purple-600 to-teal-500 bg-clip-text text-transparent">Auth Dashboard</span>
      </div>
      <nav className="space-y-2">
        <Link to="/dashboard" className={itemClass(isActive('/dashboard'))}>
          <LayoutGrid className="w-4 h-4" />
          <span>Dashboard</span>
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;


