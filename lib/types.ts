export interface WillowData {
  name: string;
  telegram: string;
  "last update time": string;
  matches: Match[];
}

export interface Match {
  match_id?: string;
  title?: string;
  status?: string;
  venue?: string;
  date?: string;
  team1?: string;
  team2?: string;
  score1?: string;
  score2?: string;
  stream_url?: string;
  [key: string]: unknown;
}
