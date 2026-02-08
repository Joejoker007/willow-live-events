import { promises as fs } from "fs";
import path from "path";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { MatchCard } from "@/components/match-card";
import { EmptyState } from "@/components/empty-state";
import type { WillowData } from "@/lib/types";
import { Radio, Send } from "lucide-react";

async function getWillowData(): Promise<WillowData> {
  const filePath = path.join(process.cwd(), "willow.json");
  const raw = await fs.readFile(filePath, "utf-8");
  return JSON.parse(raw);
}

export default async function Home() {
  const data = await getWillowData();
  const matches = data.matches ?? [];
  const lastUpdated = data["last update time"] ?? "Unknown";

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-2">
                <span className="flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  <Radio className="h-3 w-3" />
                  Cricbuzz Live Data
                </span>
              </div>
              <h2 className="max-w-2xl text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                Live Cricket Matches & Scores
              </h2>
              <p className="max-w-xl text-pretty text-base text-muted-foreground md:text-lg">
                {data.name}. Stay updated with real-time scores, match
                schedules, and live streaming links.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={data.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                >
                  <Send className="h-4 w-4" />
                  Join Telegram
                </a>
                <span className="rounded-lg border border-border bg-secondary px-5 py-2.5 text-sm font-medium text-muted-foreground">
                  Updated: {lastUpdated}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Matches Section */}
        <section id="matches" className="mx-auto max-w-7xl px-6 py-12">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold text-foreground">
                {matches.length > 0 ? "Live Matches" : "Match Schedule"}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {matches.length > 0
                  ? `${matches.length} match${matches.length > 1 ? "es" : ""} currently available`
                  : "No matches scheduled right now"}
              </p>
            </div>
          </div>

          {matches.length > 0 ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {matches.map((match, index) => (
                <MatchCard
                  key={match.match_id ?? index}
                  match={match}
                />
              ))}
            </div>
          ) : (
            <EmptyState lastUpdated={lastUpdated} />
          )}
        </section>

        {/* Info Cards */}
        <section className="border-t border-border">
          <div className="mx-auto grid max-w-7xl gap-px bg-border sm:grid-cols-3">
            <div className="bg-background px-6 py-10">
              <p className="text-3xl font-bold text-foreground">Real-Time</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Live score updates
              </p>
            </div>
            <div className="bg-background px-6 py-10">
              <p className="text-3xl font-bold text-foreground">Cricbuzz</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Powered by trusted data
              </p>
            </div>
            <div className="bg-background px-6 py-10">
              <p className="text-3xl font-bold text-foreground">Streaming</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Direct match links
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
