import { ExternalLink, MapPin } from "lucide-react";
import type { Match } from "@/lib/types";

export function MatchCard({ match }: { match: Match }) {
  return (
    <div className="group rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/40">
      <div className="mb-4 flex items-start justify-between">
        <div className="flex-1">
          <h3 className="text-balance text-base font-semibold text-card-foreground">
            {match.title || "Upcoming Match"}
          </h3>
          {match.venue && (
            <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
              <MapPin className="h-3 w-3" />
              {match.venue}
            </p>
          )}
        </div>
        {match.status && (
          <span className="shrink-0 rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
            {match.status}
          </span>
        )}
      </div>

      {(match.team1 || match.team2) && (
        <div className="mb-4 flex items-center gap-4">
          <div className="flex-1">
            <p className="text-sm font-medium text-foreground">
              {match.team1 || "TBD"}
            </p>
            {match.score1 && (
              <p className="text-lg font-bold text-foreground">
                {match.score1}
              </p>
            )}
          </div>
          <span className="text-xs font-medium text-muted-foreground">vs</span>
          <div className="flex-1 text-right">
            <p className="text-sm font-medium text-foreground">
              {match.team2 || "TBD"}
            </p>
            {match.score2 && (
              <p className="text-lg font-bold text-foreground">
                {match.score2}
              </p>
            )}
          </div>
        </div>
      )}

      {match.date && (
        <p className="mb-3 text-xs text-muted-foreground">{match.date}</p>
      )}

      {match.stream_url && (
        <a
          href={match.stream_url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-md bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          Watch Live
          <ExternalLink className="h-3 w-3" />
        </a>
      )}
    </div>
  );
}
