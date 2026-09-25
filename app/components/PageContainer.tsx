export default function PageContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="mx-auto w-full max-w-2xl px-4 sm:px-0">{children}</main>
  );
}
