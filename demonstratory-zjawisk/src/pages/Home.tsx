import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ChevronRight } from 'lucide-react';

export default function Home() {
    return (
        <div className="min-h-full bg-white dark:bg-gray-950 p-8 font-sans text-gray-800 dark:text-gray-100">
            <div className="max-w-4xl mx-auto space-y-8">
                <header className="text-center space-y-4 py-12">
                    <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                        Demonstratory Interesujących Zjawisk
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Zbiór interaktywnych wizualizacji i eksperymentów myślowych, które pomagają zrozumieć skomplikowane koncepcje matematyczne i fizyczne.
                    </p>
                </header>

                <div className="grid gap-6 mt-12">
                    <Link 
                        to="/chapter1" 
                        className="group flex items-center justify-between p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 hover:shadow-md hover:border-blue-300 dark:hover:border-blue-700 transition-all"
                    >
                        <div className="flex items-center gap-6">
                            <div className="w-16 h-16 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                <BookOpen size={32} />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                    Rozdział 1: Paradoks Kostkowego Arbuza
                                </h2>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Zrozum przekleństwo wymiarowości. Zobacz, jak w wielowymiarowej hiperkostce cała objętość skupia się w jej "skórce", a odległości między punktami stają się niemal identyczne.
                                </p>
                            </div>
                        </div>
                        <ChevronRight className="text-gray-400 dark:text-gray-600 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors shrink-0" size={32} />
                    </Link>

                    <Link 
                        to="/chapter2" 
                        className="group flex items-center justify-between p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 hover:shadow-md hover:border-purple-300 dark:hover:border-purple-700 transition-all"
                    >
                        <div className="flex items-center gap-6">
                            <div className="w-16 h-16 rounded-xl bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                                <BookOpen size={32} />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                                    Rozdział 2: Załamanie Algorytmów
                                </h2>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Zobacz, jak wysokie wymiary psują modele uczenia maszynowego (Zjawisko Hughesa) i spowalniają inteligentne struktury danych (KD-Tree).
                                </p>
                            </div>
                        </div>
                        <ChevronRight className="text-gray-400 dark:text-gray-600 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors shrink-0" size={32} />
                    </Link>

                    <Link 
                        to="/integral" 
                        className="group flex items-center justify-between p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 hover:shadow-md hover:border-indigo-300 dark:hover:border-indigo-700 transition-all"
                    >
                        <div className="flex items-center gap-6">
                            <div className="w-16 h-16 rounded-xl bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                                <BookOpen size={32} />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                    Laboratorium Całek: Praca i Energia
                                </h2>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Zrozum koncepcję całki oznaczonej poprzez interaktywne rozciąganie sprężyny. Zobacz różnice między aproksymacją a dokładnym wynikiem.
                                </p>
                            </div>
                        </div>
                        <ChevronRight className="text-gray-400 dark:text-gray-600 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors shrink-0" size={32} />
                    </Link>

                    <Link 
                        to="/gradient" 
                        className="group flex items-center justify-between p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 hover:shadow-md hover:border-red-300 dark:hover:border-red-700 transition-all"
                    >
                        <div className="flex items-center gap-6">
                            <div className="w-16 h-16 rounded-xl bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 flex items-center justify-center shrink-0 group-hover:bg-red-600 group-hover:text-white transition-colors">
                                <BookOpen size={32} />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                                    Spadek wzdłuż gradientu
                                </h2>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Zbadaj stabilność algorytmu Gradient Descent. Zobacz, jak współczynnik uczenia (Learning Rate) wpływa na zbieżność lub rozbieżność modelu.
                                </p>
                            </div>
                        </div>
                        <ChevronRight className="text-gray-400 dark:text-gray-600 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors shrink-0" size={32} />
                    </Link>

                    <Link 
                        to="/kmeans" 
                        className="group flex items-center justify-between p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 hover:shadow-md hover:border-teal-300 dark:hover:border-teal-700 transition-all"
                    >
                        <div className="flex items-center gap-6">
                            <div className="w-16 h-16 rounded-xl bg-teal-50 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 flex items-center justify-center shrink-0 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                                <BookOpen size={32} />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                                    Algorytm K-Means
                                </h2>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Interaktywne grupowanie danych. Dodawaj punkty i obserwuj krok po kroku, jak algorytm K-Średnich znajduje optymalne centra klastrów.
                                </p>
                            </div>
                        </div>
                        <ChevronRight className="text-gray-400 dark:text-gray-600 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors shrink-0" size={32} />
                    </Link>

                    <Link 
                        to="/linear" 
                        className="group flex items-center justify-between p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 hover:shadow-md hover:border-amber-300 dark:hover:border-amber-700 transition-all"
                    >
                        <div className="flex items-center gap-6">
                            <div className="w-16 h-16 rounded-xl bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                                <BookOpen size={32} />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                                    Przekształcenia Liniowe
                                </h2>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Zrozum algebrę liniową wizualnie. Zmieniaj wartości macierzy 2x2 i obserwuj, jak transformują one przestrzeń i wektory bazowe.
                                </p>
                            </div>
                        </div>
                        <ChevronRight className="text-gray-400 dark:text-gray-600 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors shrink-0" size={32} />
                    </Link>
                </div>
            </div>
        </div>
    );
}
