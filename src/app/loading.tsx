export default function Loading() {
  return (
    <div className="pt-32 px-8">
      <div className="mx-auto max-w-7xl animate-pulse space-y-6">
        <div className="h-10 w-48 bg-ink/10 dark:bg-white/10" />
        <div className="h-[50vh] bg-ink/10 dark:bg-white/10" />
      </div>
    </div>
  );
}
