import PageContainer from "../components/PageContainer";

export default function Page() {
  return (
    <PageContainer>
      <section className="mt-10 max-w-2xl animate-fade-in">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute bottom-2 left-[47px] top-2 w-px bg-zinc-200 dark:bg-zinc-800" />

          <div className="space-y-12">
            {/* 2026 */}
            <div className="relative grid grid-cols-[64px_1fr] gap-6">
              <div className="text-sm font-medium text-zinc-400">2026</div>

              <div className="relative">
                <span className="absolute -left-[27px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-white bg-zinc-900 dark:border-zinc-950 dark:bg-zinc-100" />

                <h3 className="font-medium text-zinc-900 dark:text-zinc-100">
                  Loblaws Technology &amp; Analytics
                </h3>

                <p className="mt-1 text-sm leading-6 text-zinc-500 dark:text-zinc-400">
                  Product Engineer
                </p>

                <p className="mt-1 text-sm leading-6 text-zinc-500 dark:text-zinc-400">
                  Building full-stack products and internal tools, from product
                  discovery and UX through to scalable web applications and
                  APIs.
                </p>
              </div>
            </div>

            {/* 2021 */}
            <div className="relative grid grid-cols-[64px_1fr] gap-6">
              <div className="text-sm font-medium text-zinc-400">2021</div>

              <div className="relative">
                <span className="absolute -left-[27px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-white bg-zinc-400 dark:border-zinc-950" />

                <h3 className="font-medium text-zinc-900 dark:text-zinc-100">
                  Loblaws Technology
                </h3>

                <p className="mt-1 text-sm leading-6 text-zinc-500 dark:text-zinc-400">
                  Full-Stack Engineer
                </p>

                <p className="mt-1 text-sm leading-6 text-zinc-500 dark:text-zinc-400">
                  Developed data-driven applications and services, working
                  across the frontend, backend, databases, and cloud
                  infrastructure.
                </p>
              </div>
            </div>

            {/* 2019 */}
            <div className="relative grid grid-cols-[64px_1fr] gap-6">
              <div className="text-sm font-medium text-zinc-400">2019</div>

              <div className="relative">
                <span className="absolute -left-[27px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-white bg-zinc-400 dark:border-zinc-950" />

                <h3 className="font-medium text-zinc-900 dark:text-zinc-100">
                  Loblaws Data, Insights and Analytics
                </h3>

                <p className="mt-1 text-sm leading-6 text-zinc-500 dark:text-zinc-400">
                  Data Scientist
                </p>

                <p className="mt-1 text-sm leading-6 text-zinc-500 dark:text-zinc-400">
                  Used data, statistical analysis, and experimentation to
                  uncover insights and support better business and product
                  decisions.
                </p>
              </div>
            </div>

            {/* 2018 */}
            <div className="relative grid grid-cols-[64px_1fr] gap-6">
              <div className="text-sm font-medium text-zinc-400">2018</div>

              <div className="relative">
                <span className="absolute -left-[27px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-white bg-zinc-400 dark:border-zinc-950" />

                <h3 className="font-medium text-zinc-900 dark:text-zinc-100">
                  Signate
                </h3>

                <p className="mt-1 text-sm leading-6 text-zinc-500 dark:text-zinc-400">
                  Python Developer · CLI &amp; Open Source · Data Scientist
                </p>

                <p className="mt-1 text-sm leading-6 text-zinc-500 dark:text-zinc-400">
                  Built Python-based tools and CLI applications, contributed to
                  open-source projects, and applied data analysis, statistics,
                  and experimentation to develop practical solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageContainer>
  );
}
