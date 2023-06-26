import axios, { AxiosInstance } from "axios";
import { TBAMatch } from "./response-models/match";
import { TBARanking } from "./response-models/ranking";
import { TBATeam } from "./response-models/team";
import { TBAEvent } from "./response-models/event";

export class TBAProvider {
    private api: AxiosInstance;
    constructor(apiKey: string) {
        this.api = axios.create({
            baseURL: 'https://www.thebluealliance.com/api/v3',
            headers: {
                'X-TBA-Auth-Key': apiKey
            }
        });
    }

    /* TEAM */
  allTeams = async (year: string, pageNum: string): Promise<TBATeam[]> => (await this.api.get<TBATeam[]>(`/teams/${year}/${pageNum}`)).data;
  getTeam = async (team: string): Promise<TBATeam> => (await this.api.get<TBATeam>(`/team/${team}`)).data;
  getTeamsForEvent = async (event: string): Promise<TBATeam[]> => (await this.api.get<TBATeam[]>(`/event/${event}/teams/simple`)).data;

  /* MATCHES */
  matchesForTeamAtEvent = async (team: string, eventCode: string): Promise<TBAMatch[]> =>
    (await this.api.get<TBAMatch[]>(`/team/${team}/event/${eventCode}/matches`)).data;
  matchesForEvent = async (eventCode: string): Promise<TBAMatch[]> => (await this.api.get<TBAMatch[]>(`/event/${eventCode}/matches`)).data;

  rankingForTeamAtEvent = async (team: string, eventCode: string): Promise<TBARanking> =>
    (await this.api.get<TBARanking>(`/team/${team}/event/${eventCode}/status`)).data;
  rankingsForEvent = async (eventCode: string, year: string): Promise<TBARanking[]> => (await this.api.get<TBARanking[]>(`/${year}/rankings/${eventCode}`)).data;

  getEvent = async(event: string): Promise<TBAEvent> => (await this.api.get<TBAEvent>(`/event/${event}`)).data;
}