/* CHANGE NOTE
Why: Update Footer with translations
What changed: Made Footer a client component, used translations
Behaviour/Assumptions: Footer text translates based on language context
Rollback: Revert to previous version
— mj
*/

"use client";

import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="border-t border-gray-100 mt-auto">
            <div className="max-w-5xl mx-auto px-6 py-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="text-sm text-gray-500">
                        © {new Date().getFullYear()} PAD. {t.footer}
                    </div>
                    <div className="flex items-center gap-4">
                        <a
                            href="mailto:padcollective@gmail.com"
                            className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                        >
                            padcollective@gmail.com
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
