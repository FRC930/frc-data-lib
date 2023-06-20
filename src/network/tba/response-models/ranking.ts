export interface TBARanking {
    alliance: {
      backup: null;
      name: string;
      number: number;
      pick: number;
    };
    alliance_status_str: string;
    last_match_key: string;
    next_match_key: null | string;
    overall_status_str: string;
    playoff: {
      current_level_record: {
        losses: number;
        ties: number;
        wins: number;
      };
      level: string;
      playoff_average: null | number;
      record: {
        losses: number;
        ties: number;
        wins: number;
      };
      status: string;
    };
    playoff_status_str: string;
    qual: {
      num_teams: number;
      ranking: {
        dq: number;
        matches_played: number;
        qual_average: null | number;
        rank: number;
        record: {
          losses: number;
          ties: number;
          wins: number;
        };
        sort_orders: number[];
        team_key: string;
      };
      sort_order_info: {
        name: string;
        precision: number;
      }[];
      status: string;
    };
  }