/* CHANGE NOTE
Why: Update Contact page with i18n translations (English default)
What changed: Made page a client component, using translations from context
Behaviour/Assumptions: Text switches based on language context
Rollback: Revert to previous version
— mj
*/

"use client";

import { useLanguage } from '@/context/LanguageContext';

export default function ContactPage() {
    const { t } = useLanguage();

    return (
        <div className="min-h-screen px-6 py-16">
            <div className="max-w-xl mx-auto text-center">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    {t.contactTitle}
                </h1>
                <p className="text-gray-600 mb-8">
                    {t.contactDesc}
                </p>

                <div className="space-y-4">
                    <a
                        href="mailto:contact@pineatdawn.me"
                        className="block p-6 rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300"
                    >
                        <div className="text-lg font-medium text-gray-900 mb-1">Email</div>
                        <div className="text-gray-600">contact@pineatdawn.me</div>
                    </a>

                    <a
                        href="https://github.com/pineatdawn"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-6 rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300"
                    >
                        <div className="text-lg font-medium text-gray-900 mb-1">GitHub</div>
                        <div className="text-gray-600">github.com/pineatdawn</div>
                    </a>
                </div>
            </div>
        </div>
    );
}
