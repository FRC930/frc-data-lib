import axios from 'axios';
import { FIRSTTeam, FIRSTTeamResponse } from './response-models/team';
import { FIRSTMatch, FIRSTMatchResponse } from './response-models/match';
import { FIRSTScheduledMatch, FIRSTScheduledMatchResponse } from './response-models/schedule';
import { FIRSTRanking, FIRSTRankingResponse } from './response-models/ranking';

export type FIRSTTournamentLevel = 'None' | 'Practice' | 'Qualification' | 'Playoff';

export class FIRSTProvider {
  private api;
  private year;

  constructor(username: string, apikey: string, year: string) {
    const base64encodedApiKey = btoa(`${username}:${apikey}`);
    this.api = axios.create({
      baseURL: 'https://frc-api.firstinspires.org/v3.0',
      headers: {
        Authorization: `Basic ${base64encodedApiKey}`,
      },
    });

    this.year = year;
  }

  /* TEAM */
  allTeams = async (): Promise<FIRSTTeam[]> => (await this.api.get<FIRSTTeamResponse>(`/${this.year}/teams`)).data.teams;
  getTeam = async (team: string): Promise<FIRSTTeam> => (await this.api.get<FIRSTTeamResponse>(`/${this.year}/teams?teamNumber=${team}`)).data.teams[0];
  getTeamsForEvent = async (event: string): Promise<FIRSTTeam[]> => (await this.api.get<FIRSTTeamResponse>(`/${this.year}/teams?eventCode=${event}`)).data.teams;

  /* MATCHES */
  matchesForTeamAtEvent = async (team: string, eventCode: string): Promise<FIRSTMatch[]> =>
    (await this.api.get<FIRSTMatchResponse>(`/${this.year}/matches/${eventCode}?teamNumber=${team}`)).data.Matches;
  matchesForEvent = async (eventCode: string): Promise<FIRSTMatch[]> => (await this.api.get<FIRSTMatchResponse>(`/${this.year}/matches/${eventCode}`)).data.Matches;

  /* Schedule */
  scheduleForTeamAtEvent = async (team: string, eventCode: string, start: number = 0, end: number = Number.MAX_VALUE): Promise<FIRSTScheduledMatch[]> =>
    (await this.api.get<FIRSTScheduledMatchResponse>(`/${this.year}/schedule/${eventCode}?teamNumber=${team}&start=${start}&end=${end}`)).data.Schedule;
  scheduleForEvent = async (eventCode: string, tournamentLevel: FIRSTTournamentLevel, start: number = 0, end: number = Number.MAX_VALUE): Promise<FIRSTScheduledMatch[]> =>
    (await this.api.get<FIRSTScheduledMatchResponse>(`/${this.year}/schedule/${eventCode}?tournamentLevel=${tournamentLevel}&start=${start}&end=${end}`)).data.Schedule;

  rankingsForTeamAtEvent = async (team: string, eventCode: string): Promise<FIRSTRanking[]> =>
    (await this.api.get<FIRSTRankingResponse>(`/${this.year}/rankings/${eventCode}?teamNumber=${team}`)).data.Rankings;
  rankingsForEvent = async (eventCode: string): Promise<FIRSTRanking[]> => (await this.api.get<FIRSTRankingResponse>(`/${this.year}/rankings/${eventCode}`)).data.Rankings;
}
