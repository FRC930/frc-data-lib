export interface FIRSTTeam {
  schoolName: string;
  website: string;
  homeCMP: string;
  teamNumber: number;
  nameFull: string;
  nameShort: string;
  city: string;
  stateProv: string;
  country: string;
  rookieYear: number;
  robotName: string;
  districtCode: string | null;
}

export interface FIRSTTeamResponse {
  teams: FIRSTTeam[];
}
