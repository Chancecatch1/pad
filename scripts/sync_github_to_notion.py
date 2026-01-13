#!/usr/bin/env python3
"""
GitHub → Notion Portfolio Sync Script

This script fetches GitHub repository information and syncs it to the
"Mj's Portfolio" Notion database.

Usage:
    conda activate pad
    python scripts/sync_github_to_notion.py

Requirements:
    pip install requests python-dotenv
"""

import os
import requests
from datetime import datetime
from pathlib import Path
from dotenv import load_dotenv

# Load environment variables from .env.local
env_path = Path(__file__).parent.parent / ".env.local"
load_dotenv(env_path)

# Configuration
GITHUB_USERNAME = "Chancecatch1"
NOTION_DATABASE_ID = "18b7d9f73313803e841ad9257848b01f"
NOTION_API_KEY = os.getenv("NOTION_API_KEY")

# Repos to skip (forks, test repos, etc.)
SKIP_REPOS = [
    "demo_actions",
    "gitact",
    "ibm_assignment",
]


def get_github_repos(username: str) -> list[dict]:
    """Fetch all public repos from GitHub API."""
    url = f"https://api.github.com/users/{username}/repos"
    params = {
        "type": "owner",
        "sort": "updated",
        "per_page": 100,
    }
    
    response = requests.get(url, params=params)
    response.raise_for_status()
    
    repos = response.json()
    print(f"✓ Fetched {len(repos)} repos from GitHub")
    return repos


def get_existing_notion_pages(database_id: str) -> dict[str, str]:
    """Get existing pages in Notion DB, mapped by Git URL to page ID."""
    headers = {
        "Authorization": f"Bearer {NOTION_API_KEY}",
        "Content-Type": "application/json",
        "Notion-Version": "2022-06-28",
    }
    
    url = f"https://api.notion.com/v1/databases/{database_id}/query"
    response = requests.post(url, headers=headers, json={})
    response.raise_for_status()
    
    pages = response.json().get("results", [])
    
    # Map Git URL to page ID
    git_to_page_id = {}
    for page in pages:
        git_prop = page.get("properties", {}).get("Git", {}).get("rich_text", [])
        if git_prop:
            git_url = git_prop[0].get("plain_text", "")
            if git_url:
                git_to_page_id[git_url] = page["id"]
    
    print(f"✓ Found {len(git_to_page_id)} existing pages in Notion")
    return git_to_page_id


def create_notion_page(database_id: str, repo: dict) -> dict:
    """Create a new page in Notion DB from GitHub repo data."""
    headers = {
        "Authorization": f"Bearer {NOTION_API_KEY}",
        "Content-Type": "application/json",
        "Notion-Version": "2022-06-28",
    }
    
    # Extract repo info
    name = repo["name"]
    description = repo.get("description") or f"GitHub project: {name}"
    git_url = repo["html_url"]
    language = repo.get("language") or ""
    created_at = repo.get("created_at", "")[:10]  # YYYY-MM-DD
    
    # Generate slug from repo name
    slug = name.lower().replace("_", "-").replace(" ", "-")
    
    # Build tags from language and topics
    tags = []
    if language:
        tags.append({"name": language})
    for topic in repo.get("topics", []):
        tags.append({"name": topic})
    
    # Determine location based on date (Calgary after 2023)
    where = "Calgary" if created_at >= "2023-08" else "Seoul"
    
    # Build page properties
    properties = {
        "Name": {
            "title": [{"text": {"content": name}}]
        },
        "slug": {
            "rich_text": [{"text": {"content": slug}}]
        },
        "Description": {
            "rich_text": [{"text": {"content": description[:2000]}}]  # Notion limit
        },
        "Git": {
            "rich_text": [{"text": {"content": git_url, "link": {"url": git_url}}}]
        },
        "When": {
            "date": {"start": created_at} if created_at else None
        },
        "Where": {
            "select": {"name": where}
        },
        "show": {
            "checkbox": False  # Default to not showing, user can enable
        },
    }
    
    # Note: Tag property requires pre-existing options in Notion DB
    # Users should manually add tags in Notion after sync
    
    url = "https://api.notion.com/v1/pages"
    payload = {
        "parent": {"database_id": database_id},
        "properties": properties,
    }
    
    response = requests.post(url, headers=headers, json=payload)
    
    if response.status_code == 200:
        print(f"  ✓ Created: {name}")
        return response.json()
    else:
        print(f"  ✗ Failed to create {name}: {response.text[:100]}")
        return None


def update_notion_page(page_id: str, repo: dict) -> dict:
    """Update an existing Notion page with latest GitHub data."""
    headers = {
        "Authorization": f"Bearer {NOTION_API_KEY}",
        "Content-Type": "application/json",
        "Notion-Version": "2022-06-28",
    }
    
    # Only update description if it changed
    description = repo.get("description") or f"GitHub project: {repo['name']}"
    
    properties = {
        "Description": {
            "rich_text": [{"text": {"content": description[:2000]}}]
        },
    }
    
    url = f"https://api.notion.com/v1/pages/{page_id}"
    payload = {"properties": properties}
    
    response = requests.patch(url, headers=headers, json=payload)
    
    if response.status_code == 200:
        print(f"  ↻ Updated: {repo['name']}")
        return response.json()
    else:
        print(f"  ✗ Failed to update {repo['name']}: {response.text[:100]}")
        return None


def sync_github_to_notion():
    """Main sync function."""
    print("\n🔄 GitHub → Notion Sync")
    print("=" * 50)
    
    if not NOTION_API_KEY:
        print("❌ Error: NOTION_API_KEY not found in environment")
        print("   Add it to your .env.local file")
        return
    
    # Fetch GitHub repos
    repos = get_github_repos(GITHUB_USERNAME)
    
    # Get existing Notion pages
    existing_pages = get_existing_notion_pages(NOTION_DATABASE_ID)
    
    # Sync each repo
    created = 0
    updated = 0
    skipped = 0
    
    print("\n📝 Syncing repos...")
    for repo in repos:
        name = repo["name"]
        git_url = repo["html_url"]
        
        # Skip certain repos
        if name in SKIP_REPOS:
            print(f"  ⊘ Skipped: {name}")
            skipped += 1
            continue
        
        # Check if already exists
        if git_url in existing_pages:
            # Update existing page
            update_notion_page(existing_pages[git_url], repo)
            updated += 1
        else:
            # Create new page
            create_notion_page(NOTION_DATABASE_ID, repo)
            created += 1
    
    print("\n" + "=" * 50)
    print(f"✅ Sync complete!")
    print(f"   Created: {created}")
    print(f"   Updated: {updated}")
    print(f"   Skipped: {skipped}")
    print(f"\n📌 Next: Go to Notion and set 'show' checkbox for projects you want on the website")


if __name__ == "__main__":
    sync_github_to_notion()
