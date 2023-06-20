import axios from 'axios';
import { StatboticsTeam } from './response-models/team';
import { StatboticsMatch } from './response-models/match';
import { StatboticsTeamEventData } from './response-models/teamEvent';
import { StatboticsEvent } from './response-models/event';

/* TEAMS */
const getAllTeams = async (): Promise<StatboticsTeam[]> => {
  return (await axios.get<StatboticsTeam[]>(`https://api.statbotics.io/v2/teams}`)).data;
};

const getTeam = async (team: string): Promise<StatboticsTeam> => {
  return (await axios.get<StatboticsTeam>(`https://api.statbotics.io/v2/team/${team}`)).data;
};

/* MATCHES */
const getMatch = async (key: string): Promise<StatboticsMatch> => {
  return (await axios.get<StatboticsMatch>(`https://api.statbotics.io/v2/matches/${key}`)).data;
};

const getMatchesForEvent = async (event: string): Promise<StatboticsMatch[]> => {
  return (await axios.get<StatboticsMatch[]>(`https://api.statbotics.io/v2/matches/event/${event}`)).data;
};

const getMatchesForTeamAtEvent = async (team: string, event: string): Promise<StatboticsMatch[]> => {
  return (await axios.get<StatboticsMatch[]>(`https://api.statbotics.io/v2/matches/team/${team}/event/${event}`)).data;
};

const getMatchesForTeamInYear = async (team: string, year: string): Promise<StatboticsMatch[]> => {
  return (await axios.get<StatboticsMatch[]>(`https://api.statbotics.io/v2/matches/team/${team}/year/${year}`)).data;
};

/* TEAM EVENTS */
const getTeamEventsForTeam = async (team: string): Promise<StatboticsTeamEventData[]> => {
  return (await axios.get<StatboticsTeamEventData[]>(`https://api.statbotics.io/v2/team_events/${team}`)).data;
};

const getTeamEventsForEvent = async (event: string): Promise<StatboticsTeamEventData[]> => {
  return (await axios.get<StatboticsTeamEventData[]>(`https://api.statbotics.io/v2/team_events/event/${event}`)).data;
};

const getTeamEventForTeamAtEvent = async (team: string, event: string): Promise<StatboticsTeamEventData> => {
  return (await axios.get<StatboticsTeamEventData>(`https://api.statbotics.io/v2/team_event/${team}/${event}`)).data;
};

const getTeamEventsForTeamInYear = async (team: string, year: string): Promise<StatboticsTeamEventData[]> => {
  return (await axios.get<StatboticsTeamEventData[]>(`https://api.statbotics.io/v2/team_events/team/${team}/year/${year}`)).data;
};

/* EVENTS */
const getEvent = async (event: string): Promise<StatboticsEvent> => {
  return (await axios.get<StatboticsEvent>(`https://api.statbotics.io/v2/event/${event}`)).data;
};

const getEventsForYear = async (year: string): Promise<StatboticsEvent[]> => {
  return (await axios.get<StatboticsEvent[]>(`https://api.statbotics.io/v2/events/year/${year}`)).data;
};

export class StatboticsProvider {
  /* TEAM */
  allTeams = getAllTeams;
  getTeam = getTeam;

  /* MATCHES */
  getMatch = getMatch;
  matchesForTeamInYear = getMatchesForTeamInYear;
  matchesForTeamAtEvent = getMatchesForTeamAtEvent;
  matchesForEvent = getMatchesForEvent;

  /* TEAM EVENTS */
  statsForTeam = getTeamEventsForTeam;
  statsForTeamAtEvent = getTeamEventForTeamAtEvent;
  statsForTeamInYear = getTeamEventsForTeamInYear;
  statsForEvent = getTeamEventsForEvent;

  /* EVENT */
  getEvent = getEvent;
  eventsForYear = getEventsForYear;
}
