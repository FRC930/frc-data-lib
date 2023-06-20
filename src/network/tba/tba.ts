import axios, { AxiosInstance } from "axios";

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
  allTeams = async (year: string, pageNum: string): Promise<FIRSTTeam[]> => (await this.api.get<FIRSTTeamResponse>(`/teams/${year}/${pageNum}`)).data;
  getTeam = async (team: string): Promise<FIRSTTeam> => (await this.api.get<FIRSTTeamResponse>(`/team/${team}`)).data;
  getTeamsForEvent = async (event: string): Promise<FIRSTTeam[]> => (await this.api.get<FIRSTTeamResponse>(`/event/${event}/teams/simple`)).data;

  /* MATCHES */
  matchesForTeamAtEvent = async (team: string, eventCode: string): Promise<FIRSTMatch[]> =>
    (await this.api.get<FIRSTMatchResponse>(`/team/${team}/event/${eventCode}/matches`)).data;
  matchesForEvent = async (eventCode: string): Promise<FIRSTMatch[]> => (await this.api.get<FIRSTMatchResponse>(`/event/${eventCode}/matches`)).data;

  rankingsForTeamAtEvent = async (team: string, eventCode: string): Promise<FIRSTRanking[]> =>
    (await this.api.get<FIRSTRankingResponse>(`/team/${team}/event/${eventCode}/status`)).data;
  rankingsForEvent = async (eventCode: string, year: string): Promise<FIRSTRanking[]> => (await this.api.get<FIRSTRankingResponse>(`/${year}/rankings/${eventCode}`)).data;
}