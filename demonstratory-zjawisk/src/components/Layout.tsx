import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun, Home, BookOpen, Activity, TrendingDown, Target, Maximize } from 'lucide-react';

export default function Layout({ children }: { children: React.ReactNode }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const isDark = localStorage.getItem('darkMode') === 'true';
        setIsDarkMode(isDark);
        if (isDark) document.documentElement.classList.add('dark');
    }, []);

    const toggleDarkMode = () => {
        const newMode = !isDarkMode;
        setIsDarkMode(newMode);
        localStorage.setItem('darkMode', String(newMode));
        if (newMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };

    const closeSidebar = () => setIsSidebarOpen(false);

    const navItems = [
        { path: '/', label: 'Strona Główna', icon: <Home size={20} /> },
        { path: '/chapter1', label: '1. Koncentracja Miary', icon: <BookOpen size={20} /> },
        { path: '/chapter2', label: '2. Załamanie Algorytmów', icon: <Activity size={20} /> },
        { path: '/integral', label: 'Lab: Całki i Praca', icon: <TrendingDown size={20} /> },
        { path: '/gradient', label: 'Lab: Gradient Descent 1D', icon: <TrendingDown size={20} /> },
        { path: '/gradient2d', label: 'Lab: Gradient Descent 2D', icon: <TrendingDown size={20} /> },
        { path: '/kmeans', label: 'Lab: K-Means', icon: <Target size={20} /> },
        { path: '/linear', label: 'Lab: Przekształcenia', icon: <Maximize size={20} /> },
    ];

    return (
        <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-200 flex">
            {/* Mobile Header */}
            <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 z-50 flex items-center justify-between px-4">
                <span className="font-bold text-lg">Demonstratory</span>
                <button onClick={() => setIsSidebarOpen(true)} className="p-2">
                    <Menu size={24} />
                </button>
            </div>

            {/* Sidebar Overlay */}
            {isSidebarOpen && (
                <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={closeSidebar} />
            )}

            {/* Sidebar */}
            <div className={`fixed inset-y-0 left-0 w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 z-50 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:shrink-0 flex flex-col ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="h-16 flex items-center justify-between px-4 border-b border-gray-200 dark:border-gray-800">
                    <span className="font-bold text-lg">Menu</span>
                    <button onClick={closeSidebar} className="lg:hidden p-2">
                        <X size={24} />
                    </button>
                </div>
                <nav className="flex-1 overflow-y-auto py-4">
                    <ul className="space-y-1 px-2">
                        {navItems.map(item => {
                            const isActive = location.pathname === item.path;
                            return (
                                <li key={item.path}>
                                    <Link 
                                        to={item.path} 
                                        onClick={closeSidebar}
                                        className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${isActive ? 'bg-blue-50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 font-medium' : 'hover:bg-gray-100 dark:hover:bg-gray-800'}`}
                                    >
                                        {item.icon}
                                        {item.label}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
                <div className="p-4 border-t border-gray-200 dark:border-gray-800">
                    <button 
                        onClick={toggleDarkMode}
                        className="flex items-center gap-3 w-full px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                        {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                        {isDarkMode ? 'Tryb Jasny' : 'Tryb Ciemny'}
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col min-w-0 pt-16 lg:pt-0 h-screen overflow-y-auto">
                <main className="flex-1">
                    {children}
                </main>
            </div>
        </div>
    );
}
