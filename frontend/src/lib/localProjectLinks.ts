/* CHANGE NOTE
Why: Show built-in PAD tools alongside Notion-backed projects
What changed: Added local project links for internal app pages such as the English tutor
Behaviour/Assumptions: These entries route directly to app pages instead of Notion project pages
Rollback: rm src/lib/localProjectLinks.ts
- mj
*/

export type LocalProjectLink = {
  id: string;
  title: string;
  href: string;
  thumbnailLabel: string;
};

export const localProjectLinks: LocalProjectLink[] = [
  {
    id: "english-tutor",
    title: "English Tutor",
    href: "/tutor",
    thumbnailLabel: "English Tutor",
  },
];
