"use client";

import Link from "next/link";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { CoffeeIcon } from "./BrandIcon";

export default function Header() {
  const pathname = usePathname();

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

  const linkClass = (href: string) =>
    `px-2 py-1 text-sm transition-colors sm:px-3 sm:py-2 ${
      pathname === href
        ? "font-medium text-black dark:text-white"
        : "text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white"
    }`;

  return (
    <header>
      <nav className="mx-auto flex w-full max-w-2xl items-center justify-between px-4 pb-6 pt-6 sm:px-6 sm:pb-8 sm:pt-8">
        <div className="flex items-center gap-1">
          <Link href="/" className={linkClass("/")}>
            about
          </Link>

          <Link href="/writing" className={linkClass("/writing")}>
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
