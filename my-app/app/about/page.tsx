import NavLinks from "@/components/NavLinks";

export default function About() {
  return (
    <div className="relative flex flex-1 flex-col items-center bg-white font-sans">
      <div className="absolute top-6 right-6">
        <NavLinks />
      </div>
      <main className="flex w-full max-w-2xl flex-1 flex-col gap-4 px-6 py-16 sm:px-8">
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-950">
          How it works:
        </h1>
        <p className="text-base leading-7 text-zinc-600">
          More information about the YouTube Feedback Analyzer is coming
          soon.
        </p>
      </main>
    </div>
  );
}
