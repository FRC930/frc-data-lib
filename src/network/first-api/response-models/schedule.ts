export interface FIRSTScheduledMatch {
  field: string;
  tournamentLevel: string;
  description: string;
  startTime: string;
  matchNumber: number;
  teams: {
    teamNumber: number;
    station: string;
    surrogate: boolean;
  };
}

export interface FIRSTScheduledMatchResponse {
  Schedule: FIRSTScheduledMatch[];
}
