import PageContainer from "./components/PageContainer";

export default function HomePage() {
  return (
    <PageContainer>
      <section className="py-12 sm:py-16 lg:py-20">
        <h1 className="max-w-2xl text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
          Claudio
        </h1>

        <p className="mt-5 max-w-xl text-base leading-7 text-zinc-600 dark:text-zinc-400 sm:text-lg sm:leading-8">
          /ˈklaʊ.di.əʊ/
        </p>
        <section className="max-w-xl text-[15px] leading-7 text-zinc-700">
          <p className="mb-6">
            I grew up in Toronto, Canada, studied Math and Philosophy at the
            University of Toronto, and now work in software and product
            development.
          </p>

          <p className="mb-3">I’m broadly interested in:</p>

          <ul className="list-disc space-y-1 pl-5">
            <li>building thoughtful software</li>
            <li>travel and exploring new places</li>
            <li>experimenting with tools and workflows</li>
            <li>product design and the details of everyday experiences</li>
            <li>backpacking and long-distance hiking</li>
          </ul>
        </section>
      </section>
    </PageContainer>
  );
}
