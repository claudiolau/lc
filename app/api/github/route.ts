import { NextRequest, NextResponse } from "next/server";
type GitHubRepo = {
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  language: string | null;
  updated_at: string;
};
export async function GET(request: NextRequest) {
  const username = request.nextUrl.searchParams.get("username");

  if (!username) {
    return NextResponse.json({ error: "Missing username" }, { status: 400 });
  }

  try {
    const response = await fetch(
      `https://api.github.com/users/${encodeURIComponent(username)}/repos?sort=updated&per_page=100`,
      {
        headers: {
          Accept: "application/vnd.github+json",
          "X-GitHub-Api-Version": "2022-11-28",
        },
        next: {
          revalidate: 3600,
        },
      },
    );

    if (!response.ok) {
      return NextResponse.json(
        { error: "GitHub user not found" },
        { status: response.status },
      );
    }

    const repos: GitHubRepo[] = await response.json();

    const links = repos.map((repo) => ({
      name: repo.name,
      description: repo.description,
      url: repo.html_url,
      stars: repo.stargazers_count,
      language: repo.language,
      updatedAt: repo.updated_at,
    }));
    return NextResponse.json(links);
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch GitHub repositories" },
      { status: 500 },
    );
  }
}
