export interface TBAEvent {
    address: string;
    city: string;
    country: string;
    district: null;
    division_keys: string[];
    end_date: string;
    event_code: string;
    event_type: number;
    event_type_string: string;
    first_event_code: string;
    first_event_id: null;
    gmaps_place_id: string;
    gmaps_url: string;
    key: string;
    lat: number;
    lng: number;
    location_name: string;
    name: string;
    parent_event_key: null;
    playoff_type: number;
    playoff_type_string: string;
    postal_code: string;
    short_name: string;
    start_date: string;
    state_prov: string;
    timezone: string;
    webcasts: {
      channel: string;
      type: string;
    }[];
    website: string;
    week: number;
    year: number;
  }