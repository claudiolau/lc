import Link from "next/link";
import PageContainer from "./PageContainer";

export default function Footer() {
  const columns = [
    {
      title: "Connect",
      links: [
        { label: "GitHub", href: "https://github.com/claudiolau" },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/claudiolau/" },
      ],
    },
  ];

  return (
    <footer className="mt-auto border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
      <PageContainer>
        <div className="grid grid-cols-1 gap-8 py-10 sm:grid-cols-3">
          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="mb-4 text-sm font-semibold text-zinc-900 dark:text-white">
                {column.title}
              </h3>

              <nav className="flex flex-col gap-3">
                {column.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-zinc-500 transition-colors hover:text-zinc-900 dark:hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          ))}
        </div>

        <div className="border-t border-zinc-200 py-6 dark:border-zinc-800"></div>
      </PageContainer>
    </footer>
  );
}
