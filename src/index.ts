import { StatboticsProvider } from "./network/statbotics/statbotics";
import { StatboticsTeam } from "./network/statbotics/response-models/team";
import { StatboticsMatch } from "./network/statbotics/response-models/match";
import { StatboticsEvent } from "./network/statbotics/response-models/event";
import { StatboticsTeamEventData } from "./network/statbotics/response-models/teamEvent";
import { FIRSTProvider } from "./network/first-api/firstapi";
import { FIRSTMatch } from "./network/first-api/response-models/match";
import { FIRSTRanking } from "./network/first-api/response-models/ranking";
import { FIRSTScheduledMatch } from "./network/first-api/response-models/schedule";
import { FIRSTTeam } from "./network/first-api/response-models/team";
import { TBAMatch } from "./network/tba/response-models/match";
import { TBARanking } from "./network/tba/response-models/ranking";
import { TBATeam } from "./network/tba/response-models/team";
import { TBAProvider } from "./network/tba/tba";

export {
  StatboticsProvider,
  StatboticsTeam,
  StatboticsEvent,
  StatboticsMatch,
  StatboticsTeamEventData,
  FIRSTProvider,
  FIRSTMatch,
  FIRSTScheduledMatch,
  FIRSTTeam,
  FIRSTRanking,
  TBAProvider,
  TBATeam,
  TBAMatch,
  TBARanking,
};
