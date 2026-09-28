import GitHubRepos from "./components/GithubRepos";
import PageContainer from "./components/PageContainer";
import Image from "next/image";

export default function HomePage() {
  return (
    <PageContainer>
      <section className="mt-10 max-w-2xl">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
          <div>
            <h1 className="max-w-2xl text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
              Claudio
            </h1>

            <p className="mt-3 max-w-xl text-base leading-7 text-zinc-600 dark:text-zinc-400 sm:text-lg sm:leading-8">
              /ˈklaʊ.di.əʊ/
            </p>
          </div>

          <Image
            src="/profile.svg"
            alt="Claudio"
            width={120}
            height={120}
            className="h-24 w-24 sm:h-28 sm:w-28"
            priority
          />
        </div>

        <section className="mt-8 max-w-xl animate-fade-in text-[15px] leading-7 text-zinc-700 dark:text-zinc-300">
          <p className="mb-6">
            I grew up in Toronto, Canada, studied Math and Philosophy at the
            University of Toronto, and now work in software and product
            development.
          </p>

          <p className="mb-3">I’m broadly interested in:</p>

          <ul className="list-disc space-y-1 pl-5">
            <li>building thoughtful software</li>
            <li>experimenting with tools and workflows</li>
            <li>backpacking and long-distance hiking</li>
          </ul>
        </section>
        <div className="mt-16 sm:mt-20">
          <GitHubRepos />
        </div>
      </section>
    </PageContainer>
  );
}
