/* CHANGE NOTE
Why: TeamVoid minimal style - no boxes, just text
What changed: Removed all border/rounded/bg styles for clean text display
Behaviour/Assumptions: Simple text link with hover effect
Rollback: Revert to previous version with card styling
— mj
*/

import Link from 'next/link';
import { PortfolioProject } from '@/data/portfolio';

interface PortfolioProjectCardProps {
    project: PortfolioProject;
}

export default function PortfolioProjectCard({ project }: PortfolioProjectCardProps) {
    return (
        <Link 
            href={`/members/mj/portfolio/${project.slug}`}
            className="block hover:opacity-60 transition-opacity"
        >
            <div className="mb-1">
                <span className="text-xs text-gray-400 mr-2">{project.date}</span>
                {project.featured && <span className="text-xs text-gray-400">Featured</span>}
            </div>
            <h3 className="font-bold text-black">{project.title}</h3>
            <p className="text-gray-600 text-sm">{project.description}</p>
        </Link>
    );
}
