export interface FIRSTMatch {
  actualStartTime: string;
  tournamentLevel: string;
  postResultTime: string;
  description: string;
  matchNumber: number;
  scoreRedFinal: number;
  scoreRedFoul: number;
  scoreRedAuto: number;
  scoreBlueFinal: number;
  scoreBlueFoul: number;
  scoreBlueAuto: number;
  teams: {
    teamNumber: number;
    station: string;
    dq: boolean;
  };
}

export interface FIRSTMatchResponse {
  Matches: FIRSTMatch[];
}
