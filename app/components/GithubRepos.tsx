"use client";

import { useEffect, useState } from "react";

type GitHubRepo = {
  name: string;
  description: string | null;
  url: string;
  stars: number;
  language: string | null;
  updatedAt: string;
};

export default function GitHubRepos() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getRepos() {
      try {
        const response = await fetch("/api/github?username=claudiolau");

        if (!response.ok) {
          throw new Error("Failed to fetch GitHub repos");
        }

        const data: GitHubRepo[] = await response.json();

        setRepos(data);
        console.log("GitHub repos:", data);
      } catch (error) {
        console.error("GitHub error:", error);
      } finally {
        setLoading(false);
      }
    }

    getRepos();
  }, []);

  if (loading) {
    return (
      <section className="mt-12">
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Loading projects...
        </p>
      </section>
    );
  }

  return (
    <section className="mt-12">
      <div className="mb-5">
        <h2 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-white">
          Projects
        </h2>

        <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
          A selection of things I&apos;ve been building.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {repos.map((repo) => (
          <a
            key={repo.name}
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-xl border border-zinc-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-700"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-medium text-zinc-900 group-hover:text-zinc-600 dark:text-zinc-100 dark:group-hover:text-zinc-300">
                {repo.name}
              </h3>

              <span className="text-xs text-zinc-400">★ {repo.stars}</span>
            </div>

            <p className="mt-2 line-clamp-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              {repo.description || "No description available."}
            </p>

            <div className="mt-4 flex items-center gap-3 text-xs text-zinc-500 dark:text-zinc-500">
              {repo.language && (
                <span className="rounded-full bg-zinc-100 px-2.5 py-1 dark:bg-zinc-900">
                  {repo.language}
                </span>
              )}

              <span className="ml-auto group-hover:text-zinc-900 dark:group-hover:text-zinc-100">
                View on GitHub →
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
