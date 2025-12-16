/* CHANGE NOTE
Why: Update Header with language toggle and translated nav items
What changed: Made Header a client component, added LanguageToggle, used translations
Behaviour/Assumptions: Navigation items translate based on language context
Rollback: Revert to previous version
— mj
*/

"use client";

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import LanguageToggle from '@/components/LanguageToggle';

export default function Header() {
    const { t } = useLanguage();

    const navItems = [
        { href: '/about', label: t.about },
        { href: '/projects', label: t.projects },
        { href: '/notes', label: t.notes },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
            <nav className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
                <Link
                    href="/"
                    className="font-medium text-lg text-gray-900 hover:text-gray-600 transition-colors"
                >
                    PAD
                </Link>
                <div className="flex items-center gap-6">
                    <ul className="flex items-center gap-6">
                        {navItems.map((item) => (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <LanguageToggle />
                </div>
            </nav>
        </header>
    );
}
