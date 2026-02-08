import { Tv } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 md:flex-row">
        <div className="flex items-center gap-2">
          <Tv className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium text-foreground">
            Willow Live Events
          </span>
        </div>
        <p className="text-xs text-muted-foreground">
          Data powered by Cricbuzz. Join our{" "}
          <a
            href="https://t.me/+rQTz5VL8CRpjNTZl"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary transition-opacity hover:opacity-80"
          >
            Telegram channel
          </a>{" "}
          for updates.
        </p>
      </div>
    </footer>
  );
}
