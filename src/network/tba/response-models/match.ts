export interface TBAMatch {
  actual_time: null | number;
  alliances: {
    blue: {
      dq_team_keys: string[];
      score: number;
      surrogate_team_keys: string[];
      team_keys: string[];
    };
    red: {
      dq_team_keys: string[];
      score: number;
      surrogate_team_keys: string[];
      team_keys: string[];
    };
  };
  comp_level: string;
  event_key: string;
  key: string;
  match_number: number;
  post_result_time: null | number;
  predicted_time: null | number;
  score_breakdown: null;
  set_number: number;
  time: number;
  videos: any[];
  winning_alliance: string;
}
