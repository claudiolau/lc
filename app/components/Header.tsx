"use client";

import Link from "next/link";
import { useEffect } from "react";
import { CoffeeIcon } from "./BrandIcon";

export default function Header() {
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.toggle("dark");

    localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  return (
    <header>
      <nav className="mx-auto flex w-full max-w-2xl items-center justify-between pb-8 pt-8 sm:pb-16">
        <div className="ml-[0.6rem] flex items-center gap-1">
          <Link
            href="/"
            className="px-2 py-1 text-sm text-zinc-600 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-white sm:px-3 sm:py-2"
          >
            about
          </Link>

          <Link
            href="/writing"
            className="px-2 py-1 text-sm text-zinc-600 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-white sm:px-3 sm:py-2"
          >
            writing
          </Link>
        </div>

        <button
          type="button"
          onClick={toggleTheme}
          aria-label="Toggle dark mode"
          className="cursor-pointer rounded-md transition-opacity hover:opacity-70"
        >
          <CoffeeIcon size={26} className="text-black dark:text-white" />
        </button>
      </nav>
    </header>
  );
}
