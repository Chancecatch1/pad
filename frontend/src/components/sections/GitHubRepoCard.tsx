/* CHANGE NOTE
Why: Display GitHub repository as a card in portfolio
What changed: Created GitHubRepoCard component
Behaviour/Assumptions: Shows repo name, description, language, stars, and links
Rollback: Delete this file
— mj
*/

import { GitHubRepo } from '@/types';

// Language color mapping (subset of popular languages)
const languageColors: Record<string, string> = {
    TypeScript: '#3178c6',
    JavaScript: '#f1e05a',
    Python: '#3572A5',
    Java: '#b07219',
    'C++': '#f34b7d',
    C: '#555555',
    Go: '#00ADD8',
    Rust: '#dea584',
    Swift: '#ffac45',
    Kotlin: '#A97BFF',
    Ruby: '#701516',
    PHP: '#4F5D95',
    HTML: '#e34c26',
    CSS: '#563d7c',
    Shell: '#89e051',
    Jupyter: '#DA5B0B',
};

interface GitHubRepoCardProps {
    repo: GitHubRepo;
}

export default function GitHubRepoCard({ repo }: GitHubRepoCardProps) {
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const now = new Date();
        const diffMs = now.getTime() - date.getTime();
        const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

        if (diffDays === 0) return 'today';
        if (diffDays === 1) return 'yesterday';
        if (diffDays < 30) return `${diffDays} days ago`;
        if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
        return `${Math.floor(diffDays / 365)} years ago`;
    };

    const languageColor = repo.language ? languageColors[repo.language] || '#858585' : null;

    return (
        <div className="rounded-xl border border-gray-200 bg-white p-4 hover:border-gray-300 transition-colors">
            <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="font-bold text-gray-900 text-base truncate flex items-center gap-2">
                    <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-600 transition-colors"
                    >
                        {repo.name}
                    </a>
                    {repo.isPrivate && (
                        <span className="text-xs px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full">
                            Private
                        </span>
                    )}
                </h3>
            </div>

            {repo.description && (
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                    {repo.description}
                </p>
            )}

            <div className="flex items-center gap-4 text-xs text-gray-500 flex-wrap">
                {repo.language && (
                    <span className="flex items-center gap-1">
                        <span
                            className="w-3 h-3 rounded-full"
                            style={{ backgroundColor: languageColor || '#858585' }}
                        />
                        {repo.language}
                    </span>
                )}

                {repo.stargazers_count > 0 && (
                    <span className="flex items-center gap-1">
                        ⭐ {repo.stargazers_count}
                    </span>
                )}

                <span>Updated {formatDate(repo.pushed_at)}</span>
            </div>

            {/* Topics */}
            {repo.topics && repo.topics.length > 0 && (
                <div className="flex flex-wrap gap-1 mt-3">
                    {repo.topics.slice(0, 4).map((topic) => (
                        <span
                            key={topic}
                            className="text-xs px-2 py-0.5 bg-blue-50 text-blue-700 rounded-full"
                        >
                            {topic}
                        </span>
                    ))}
                    {repo.topics.length > 4 && (
                        <span className="text-xs text-gray-400">
                            +{repo.topics.length - 4}
                        </span>
                    )}
                </div>
            )}

            {/* Demo link if homepage exists */}
            {repo.homepage && (
                <div className="mt-3 pt-3 border-t border-gray-100">
                    <a
                        href={repo.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-600 hover:text-blue-800 transition-colors"
                    >
                        🔗 Live Demo
                    </a>
                </div>
            )}
        </div>
    );
}
