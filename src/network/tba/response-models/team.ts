export interface TBATeam {
    key: string;
    team_number: number;
    nickname: string;
    name: string;
    school_name: string;
    city: string;
    state_prov: string;
    country: string;
    address: string | null;
    postal_code: string;
    gmaps_place_id: string | null;
    gmaps_url: string | null;
    lat: number | null;
    lng: number | null;
    location_name: string | null;
    website: string;
    rookie_year: number;
    motto: string | null;
    home_championship: Record<string, unknown> | null;
  }