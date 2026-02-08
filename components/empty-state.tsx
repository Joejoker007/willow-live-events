import { CalendarOff } from "lucide-react";

export function EmptyState({ lastUpdated }: { lastUpdated: string }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-border px-6 py-20 text-center">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-secondary">
        <CalendarOff className="h-6 w-6 text-muted-foreground" />
      </div>
      <h3 className="mb-2 text-lg font-semibold text-foreground">
        No Live Matches
      </h3>
      <p className="max-w-md text-sm text-muted-foreground">
        There are no live matches at the moment. Check back soon for upcoming
        cricket events and live scores.
      </p>
      <p className="mt-4 text-xs text-muted-foreground">
        Last updated: {lastUpdated}
      </p>
    </div>
  );
}
