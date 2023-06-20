export interface FIRSTRanking {
  rank: number;
  teamNumber: number;
  sortOrder1: number;
  sortOrder2: number;
  sortOrder3: number;
  sortOrder4: number;
  sortOrder5: number;
  sortOrder6: number;
  wins: number;
  losses: number;
  ties: number;
  qualAverage: number;
  dq: number;
  matchesPlayed: number;
}

export interface FIRSTRankingResponse {
  Rankings: FIRSTRanking[];
}
