/* CHANGE NOTE
Why: Utility to generate proxy URLs for Notion thumbnails
What changed: Created helper function for consistent thumbnail URL generation
Behaviour/Assumptions: Returns proxy URL for Notion-hosted images, original URL otherwise
Rollback: Delete this file
— mj
*/

/**
 * Get a proxied thumbnail URL that won't expire
 * Uses the /api/notion-thumbnail endpoint for Notion-hosted images
 * 
 * @param pageId - The Notion page ID
 * @param originalUrl - The original thumbnail URL (may be expired)
 * @returns A proxy URL or the original URL for external images
 */
export function getThumbnailUrl(pageId: string, originalUrl?: string): string {
    if (!originalUrl) return '';

    // Only proxy Notion-hosted files (they have signed URLs that expire)
    // External URLs (like direct image links) don't need proxying
    if (originalUrl.includes('prod-files-secure.s3')) {
        return `/api/notion-thumbnail?pageId=${pageId}`;
    }

    return originalUrl;
}
