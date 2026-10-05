"use client";

import { useState } from "react";
import NavLinks from "@/components/NavLinks";

export default function Home() {
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [topic, setTopic] = useState("");

  return (
    <div className="relative flex flex-1 flex-col items-center bg-white font-sans">
      <div className="absolute top-6 right-6">
        <NavLinks />
      </div>
      <main className="flex w-full max-w-2xl flex-1 flex-col gap-10 px-6 py-16 sm:px-8">
        {/* Header */}
        <header className="flex flex-col gap-3 text-center">
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-950">
            YouTube Feedback Analyzer
          </h1>
          <p className="text-base leading-7 text-zinc-600">
            Paste a public YouTube video url and a topic you want to analyze.
            See how often it comes up in the comments and how people feel
            about it.
          </p>
        </header>

        {/* Form */}
        <form
          className="flex flex-col gap-5 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="flex flex-col gap-2">
            <label
              htmlFor="youtube-url"
              className="text-sm font-medium text-zinc-800"
            >
              YouTube Video URL
            </label>
            <input
              id="youtube-url"
              type="url"
              placeholder="https://www.youtube.com/watch?v=..."
              value={youtubeUrl}
              onChange={(e) => setYoutubeUrl(e.target.value)}
              className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm text-zinc-950 placeholder:text-zinc-400 outline-none focus:border-zinc-500 focus:ring-2 focus:ring-zinc-200"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="topic"
              className="text-sm font-medium text-zinc-800"
            >
              Topic
            </label>
            <input
              id="topic"
              type="text"
              placeholder="e.g. tutorial interest, battery life, instruction clarity"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm text-zinc-950 placeholder:text-zinc-400 outline-none focus:border-zinc-500 focus:ring-2 focus:ring-zinc-200"
            />
          </div>

          <button
            type="submit"
            className="mt-2 flex h-11 w-full items-center justify-center rounded-full bg-zinc-900 px-5 text-sm font-medium text-white transition-colors hover:bg-zinc-700"
          >
            Analyze
          </button>
        </form>

        {/* Results placeholder */}
        <section
          aria-label="Results"
          className="flex min-h-[220px] flex-1 flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-zinc-300 bg-white p-8 text-center"
        >
          <p className="text-sm font-medium text-zinc-500">
            No results yet
          </p>
          <p className="max-w-sm text-sm text-zinc-400">
            Submit a video URL and a topic above to see the related-comment
            count, sentiment breakdown, and representative comments here.
          </p>
        </section>
      </main>
    </div>
  );
}
