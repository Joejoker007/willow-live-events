import { Tv, Radio } from "lucide-react";

export function Header() {
  return (
    <header className="border-b border-border">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <Tv className="h-5 w-5 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-lg font-bold tracking-tight text-foreground">
              Willow
            </h1>
            <p className="text-xs text-muted-foreground">Live Events</p>
          </div>
        </div>
        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#matches"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Matches
          </a>
          <a
            href="#schedule"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Schedule
          </a>
          <a
            href="https://t.me/+rQTz5VL8CRpjNTZl"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Telegram
          </a>
        </nav>
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1.5 text-xs font-medium text-muted-foreground">
            <Radio className="h-3 w-3 text-primary" />
            Live
          </span>
        </div>
      </div>
    </header>
  );
}
