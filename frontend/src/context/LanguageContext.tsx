/* CHANGE NOTE
Why: Create i18n context for language switching
What changed: New LanguageContext with English/Korean translations
Behaviour/Assumptions: Client-side only, persists in localStorage
Rollback: Delete this file and remove provider from layout
— mj
*/

"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Language = "en" | "ko";

type Translations = {
    // Navigation
    about: string;
    projects: string;
    notes: string;
    contact: string;

    // Homepage
    heroTitle: string;
    heroSubtitle: string;
    viewProjects: string;
    aboutTeam: string;
    featuredProjects: string;
    viewAllProjects: string;
    meetTheTeam: string;
    guestbook: string;
    guestbookDesc: string;
    viewGuestbook: string;

    // About
    aboutTitle: string;
    aboutDesc: string;
    aboutStory: string;
    teamMembers: string;

    // Projects
    projectsTitle: string;
    projectsDesc: string;
    noProjects: string;
    backToProjects: string;
    contributors: string;
    tryDemo: string;
    liveDemo: string;

    // Member pages
    developer: string;

    // Contact
    contactTitle: string;
    contactDesc: string;

    // Notes/Guestbook
    guestbookTitle: string;
    guestbookSubtitle: string;
    leaveMessage: string;
    allMessages: string;
    noMessages: string;

    // Common
    footer: string;
};

const translations: Record<Language, Translations> = {
    en: {
        // Navigation
        about: "About",
        projects: "Projects",
        notes: "Notes",
        contact: "Contact",

        // Homepage
        heroTitle: "PAD",
        heroSubtitle: "Pine at Dawn",
        viewProjects: "View Projects",
        aboutTeam: "About Us",
        featuredProjects: "Featured Projects",
        viewAllProjects: "View all projects →",
        meetTheTeam: "Meet the team",
        guestbook: "Guestbook",
        guestbookDesc: "Thanks for visiting! Leave us a message.",
        viewGuestbook: "View Guestbook",

        // About
        aboutTitle: "About PAD",
        aboutDesc: "Pine at Dawn",
        aboutStory: "",
        teamMembers: "Team Members",

        // Projects
        projectsTitle: "Projects",
        projectsDesc: "Projects built together by the PAD team.",
        noProjects: "No projects yet.",
        backToProjects: "← Back to Projects",
        contributors: "Contributors",
        tryDemo: "Try Demo",
        liveDemo: "Live Demo",

        // Member pages
        developer: "Developer",

        // Contact
        contactTitle: "Contact",
        contactDesc: "Want to get in touch with PAD? Reach out through the methods below.",

        // Notes/Guestbook
        guestbookTitle: "Notes",
        guestbookSubtitle: "Thanks for visiting! Leave us a message.",
        leaveMessage: "Leave a Message",
        allMessages: "All Messages",
        noMessages: "No messages yet. Be the first to leave one!",

        // Common
        footer: "All rights reserved.",
    },
    ko: {
        // Navigation
        about: "소개",
        projects: "프로젝트",
        notes: "방명록",
        contact: "연락처",

        // Homepage
        heroTitle: "PAD",
        heroSubtitle: "Pine at Dawn",
        viewProjects: "프로젝트 보기",
        aboutTeam: "팀 소개",
        featuredProjects: "주요 프로젝트",
        viewAllProjects: "모든 프로젝트 보기 →",
        meetTheTeam: "팀 멤버",
        guestbook: "방명록",
        guestbookDesc: "방문해주셔서 감사합니다! 메시지를 남겨주세요.",
        viewGuestbook: "방명록 보기",

        // About
        aboutTitle: "PAD 소개",
        aboutDesc: "Pine at Dawn",
        aboutStory: "",
        teamMembers: "팀 멤버",

        // Projects
        projectsTitle: "프로젝트",
        projectsDesc: "PAD 팀이 함께 만든 프로젝트들입니다.",
        noProjects: "아직 등록된 프로젝트가 없습니다.",
        backToProjects: "← 프로젝트 목록",
        contributors: "기여자",
        tryDemo: "체험하기",
        liveDemo: "라이브 데모",

        // Member pages
        developer: "개발자",

        // Contact
        contactTitle: "연락처",
        contactDesc: "PAD 팀에 연락하고 싶으시다면 아래 방법으로 연락해주세요.",

        // Notes/Guestbook
        guestbookTitle: "Notes",
        guestbookSubtitle: "방문해주셔서 감사합니다! 메시지를 남겨주세요.",
        leaveMessage: "메시지 남기기",
        allMessages: "모든 메시지",
        noMessages: "아직 남겨진 메시지가 없습니다. 첫 번째 메시지를 남겨보세요!",

        // Common
        footer: "All rights reserved.",
    },
};

type LanguageContextType = {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: Translations;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguageState] = useState<Language>("en");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem("pad-language") as Language;
        if (saved && (saved === "en" || saved === "ko")) {
            setLanguageState(saved);
        }
        setMounted(true);
    }, []);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem("pad-language", lang);
    };

    // Prevent hydration mismatch
    if (!mounted) {
        return <>{children}</>;
    }

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        // Return default English translations if not in provider
        return { language: "en" as Language, setLanguage: () => { }, t: translations.en };
    }
    return context;
}
