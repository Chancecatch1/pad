/* CHANGE NOTE
Why: Create language toggle button component
What changed: New LanguageToggle component for header
Behaviour/Assumptions: Toggles between EN/KO, client component
Rollback: Delete this file
— mj
*/

"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function LanguageToggle() {
    const { language, setLanguage } = useLanguage();

    return (
        <button
            onClick={() => setLanguage(language === "en" ? "ko" : "en")}
            className="px-2 py-1 text-xs font-medium rounded border border-gray-300 hover:border-gray-400 transition-colors bg-white/50"
            aria-label="Toggle language"
        >
            {language === "en" ? "한국어" : "EN"}
        </button>
    );
}
