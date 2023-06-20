export interface StatboticsEvent {
    key: string;
    year: number;
    name: string;
    time: number;
    state: string;
    country: string;
    district: string;
    start_date: string;
    end_date: string;
    type: number;
    week: number;
    offseason: boolean;
    video: string;
    status: string;
    qual_matches: number;
    epa_max: number;
    epa_top8: number;
    epa_top24: number;
    epa_mean: number;
    epa_sd: number;
    epa_acc: number;
    epa_mse: number;
    rp_1_acc: number;
    rp_1_mse: number;
    rp_2_acc: number;
    rp_2_mse: number;
  }