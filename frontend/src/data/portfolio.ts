/* CHANGE NOTE
Why: Portfolio project data based on GitHub repo analysis
What changed: Created comprehensive project data for MJ portfolio
Behaviour/Assumptions: Data manually curated from repo analysis
Rollback: Delete this file
— mj
*/

import { MemberId } from '@/types';

export interface PortfolioProject {
    slug: string;
    title: string;
    description: string;
    longDescription: string;
    thumbnail?: string;
    techStack: string[];
    languages: string[];
    contributors: MemberId[];
    links: {
        github?: string;
        live?: string;
        demo?: string;
    };
    category: 'research' | 'ml' | 'web' | 'automation' | 'study';
    featured: boolean;
    date: string;
    highlights: string[];
}

export const portfolioProjects: PortfolioProject[] = [
    // Research Projects
    {
        slug: 'interface-ar',
        title: 'InterFACE AR - CPR Training Platform',
        description: 'Mixed Reality CPR training simulation with AI agent assistance',
        longDescription: `A cutting-edge Mixed Reality application for CPR training that provides real-time feedback and AI-powered guidance. This research project investigates how different AI agent modalities affect collaboration in AR-based CPR simulation.

Key achievements:
- Developed AR application using Unity and C# for HoloLens 2
- Integrated real-time pose detection for CPR quality assessment
- Implemented multiple AI agent modalities for collaborative learning
- Published research on AI-human collaboration in medical training`,
        techStack: ['Unity', 'C#', 'HoloLens 2', 'MRTK', 'Azure'],
        languages: ['C#'],
        contributors: ['mj'],
        links: {
            github: 'https://github.com/Chancecatch1/InterFACE_AR',
        },
        category: 'research',
        featured: true,
        date: '2024-2025',
        highlights: [
            'HoloLens 2 Mixed Reality Development',
            'Real-time pose detection',
            'AI agent integration',
            'Medical simulation research',
        ],
    },
    {
        slug: 'interface-web',
        title: 'InterFACE Web - Research Dashboard',
        description: 'Web dashboard for CPR simulation research data analysis',
        longDescription: `Companion web application for the InterFACE AR research project. Provides data visualization, session management, and research analytics for CPR training sessions.

Features:
- Real-time data synchronization with AR application
- Session replay and analysis tools
- Performance metrics dashboard
- Research data export capabilities`,
        techStack: ['C#', '.NET', 'Web API'],
        languages: ['C#'],
        contributors: ['mj'],
        links: {
            github: 'https://github.com/Chancecatch1/InterFACE_Web',
        },
        category: 'research',
        featured: true,
        date: '2024-2025',
        highlights: [
            'Research data visualization',
            'Real-time synchronization',
            'Performance analytics',
        ],
    },
    {
        slug: 'avatar',
        title: 'AI Avatar Voice Chat',
        description: 'Unity 6 + OpenAI powered AI avatar with voice interaction',
        longDescription: `An interactive AI avatar application built with Unity 6 that enables natural voice conversations using OpenAI's GPT models. Combines 3D avatar animation with real-time speech synthesis and recognition.

Features:
- Real-time voice chat with AI
- Lip-sync animation
- Natural language processing
- Customizable avatar appearance`,
        techStack: ['Unity 6', 'C#', 'OpenAI API', 'Speech Recognition'],
        languages: ['C#'],
        contributors: ['mj'],
        links: {
            github: 'https://github.com/Chancecatch1/avatar',
        },
        category: 'ml',
        featured: true,
        date: '2024',
        highlights: [
            'OpenAI GPT integration',
            'Voice synthesis',
            'Real-time avatar animation',
        ],
    },
    // ML/AI Projects
    {
        slug: 'aiffel-quest',
        title: 'AIFFEL ML Studies',
        description: 'Machine learning exploration projects from AIFFEL bootcamp',
        longDescription: `Collection of machine learning projects and studies completed during the AIFFEL AI bootcamp. Covers various ML topics including computer vision, NLP, and deep learning fundamentals.

Topics covered:
- Image classification and object detection
- Natural language processing
- Generative models
- Reinforcement learning basics`,
        techStack: ['Python', 'TensorFlow', 'PyTorch', 'Jupyter'],
        languages: ['Python', 'Jupyter Notebook'],
        contributors: ['mj'],
        links: {
            github: 'https://github.com/Chancecatch1/aiffel_quest_mj',
        },
        category: 'study',
        featured: false,
        date: '2023-2024',
        highlights: [
            'Deep learning fundamentals',
            'Computer vision projects',
            'NLP experiments',
        ],
    },
    {
        slug: 'aiot-sesac',
        title: 'AIoT - Smart Agriculture',
        description: 'AI and IoT integrated smart farming solutions',
        longDescription: `AIoT (AI + IoT) project developed during SeSac program. Combines artificial intelligence with Internet of Things devices for smart agriculture applications.

Features:
- Sensor data collection and analysis
- AI-powered plant health monitoring
- Automated irrigation system
- Real-time dashboard`,
        techStack: ['Python', 'IoT', 'TensorFlow', 'Raspberry Pi'],
        languages: ['Python', 'Jupyter Notebook'],
        contributors: ['mj'],
        links: {
            github: 'https://github.com/Chancecatch1/aiot_sesac',
        },
        category: 'ml',
        featured: false,
        date: '2023',
        highlights: [
            'IoT sensor integration',
            'AI plant monitoring',
            'Automated cultivation',
        ],
    },
    {
        slug: 'converea',
        title: 'Converea - AI Plant Cultivation',
        description: 'Automatic plant cultivation system with AI',
        longDescription: `An intelligent plant cultivation system that uses AI to optimize growing conditions. Monitors environmental factors and automatically adjusts water, light, and nutrients.`,
        techStack: ['Python', 'AI', 'IoT', 'Sensors'],
        languages: ['Python'],
        contributors: ['mj'],
        links: {
            github: 'https://github.com/Chancecatch1/converea_sesac',
        },
        category: 'ml',
        featured: false,
        date: '2023',
        highlights: [
            'AI-powered cultivation',
            'Environmental monitoring',
            'Automated plant care',
        ],
    },
    // Web Projects
    {
        slug: 'yesshow',
        title: 'Yesshow - Ticket Prediction',
        description: 'Predicts cancellation ticket availability using KOPIS data',
        longDescription: `A web service that predicts how many cancellation tickets will become available on the day of a performance. Uses machine learning on KOPIS (Korea Performing Arts Box Office Information System) data to help users get tickets for sold-out shows.

Features:
- Historical ticket data analysis
- ML-based prediction model
- Real-time availability alerts
- Performance search and filtering`,
        techStack: ['Python', 'ML', 'Web', 'KOPIS API'],
        languages: ['Python', 'JavaScript'],
        contributors: ['mj'],
        links: {
            github: 'https://github.com/Chancecatch1/yesshow',
        },
        category: 'web',
        featured: true,
        date: '2023',
        highlights: [
            'Ticket availability prediction',
            'Machine learning model',
            'KOPIS API integration',
        ],
    },
    {
        slug: 'mjjun',
        title: 'Personal Portfolio (Svelte)',
        description: 'Personal portfolio website built with SvelteKit',
        longDescription: `Personal portfolio website built using SvelteKit and modern web technologies. Showcases projects, skills, and professional experience.`,
        techStack: ['SvelteKit', 'TypeScript', 'CSS'],
        languages: ['Svelte', 'TypeScript'],
        contributors: ['mj'],
        links: {
            github: 'https://github.com/Chancecatch1/mjjun',
        },
        category: 'web',
        featured: false,
        date: '2024',
        highlights: [
            'SvelteKit framework',
            'Modern web design',
            'Responsive layout',
        ],
    },
    // Automation Projects
    {
        slug: 'sdc',
        title: 'SDC Booking Automation',
        description: 'Automated booking program for SDC facilities',
        longDescription: `Automated booking program that helps secure reservations at SDC facilities. Uses web automation to monitor availability and complete bookings automatically.`,
        techStack: ['Python', 'Selenium', 'Web Automation'],
        languages: ['Python'],
        contributors: ['mj'],
        links: {
            github: 'https://github.com/Chancecatch1/sdc',
        },
        category: 'automation',
        featured: false,
        date: '2023',
        highlights: [
            'Web automation',
            'Booking system integration',
            'Scheduled tasks',
        ],
    },
    {
        slug: 'summarizing',
        title: 'Text Summarization Tool',
        description: 'AI-powered text summarization application',
        longDescription: `A Python application that uses AI to automatically summarize long texts and documents. Useful for quickly extracting key information from articles, papers, and reports.`,
        techStack: ['Python', 'NLP', 'Transformers'],
        languages: ['Python'],
        contributors: ['mj'],
        links: {
            github: 'https://github.com/Chancecatch1/summarizing',
        },
        category: 'ml',
        featured: false,
        date: '2023',
        highlights: [
            'NLP text processing',
            'Summarization algorithms',
            'Document analysis',
        ],
    },
    {
        slug: 'temp',
        title: 'Deep Learning Project Template',
        description: 'Template for escaping Jupyter Notebook to production code',
        longDescription: `A project template designed to help data scientists transition from Jupyter Notebooks to production-ready Python code. Provides structure and best practices for organizing ML projects.`,
        techStack: ['Python', 'Deep Learning', 'Project Structure'],
        languages: ['Python'],
        contributors: ['mj'],
        links: {
            github: 'https://github.com/Chancecatch1/temp',
        },
        category: 'study',
        featured: false,
        date: '2023',
        highlights: [
            'Production code structure',
            'ML project organization',
            'Best practices guide',
        ],
    },
    {
        slug: 'ensf619',
        title: 'ENSF 619 - Graduate Studies',
        description: 'Graduate coursework in software engineering',
        longDescription: `Coursework and projects from ENSF 619 graduate studies at the University of Calgary. Covers advanced software engineering topics and research methodologies.`,
        techStack: ['Python', 'Research', 'Software Engineering'],
        languages: ['Python', 'Jupyter Notebook'],
        contributors: ['mj'],
        links: {
            github: 'https://github.com/Chancecatch1/ensf619',
        },
        category: 'study',
        featured: false,
        date: '2025',
        highlights: [
            'Graduate research',
            'Advanced SE topics',
            'Academic projects',
        ],
    },
];

// Helper functions
export const getFeaturedPortfolioProjects = (): PortfolioProject[] =>
    portfolioProjects.filter((p) => p.featured);

export const getPortfolioProjectBySlug = (slug: string): PortfolioProject | undefined =>
    portfolioProjects.find((p) => p.slug === slug);

export const getPortfolioProjectsByCategory = (category: PortfolioProject['category']): PortfolioProject[] =>
    portfolioProjects.filter((p) => p.category === category);
