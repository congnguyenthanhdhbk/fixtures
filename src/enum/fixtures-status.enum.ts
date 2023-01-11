/**
 * The enum is declare all available fixtures status
 */
export enum FixturesStatusEnum {
  TBD = 'TBD', // Time To Be Define (Scheduled): Scheduled but date and time are not known
  NS = 'NS', // Not Started (Scheduled)
  FH = '1H', // First Half, Kick Off (In Play): First half in play
  HT = 'HT', // Halftime (In Play): Finished in the regular time
  SH = '2H', // Second Half, 2nd Half Started (In Play): Second half in play
  ET = 'ET', // Extra Time	(In Play):	Extra time in play
  BT = 'BT', // Break Time	(In Play):	Break during extra time
  PIP = 'P', // Penalty In Progress	(In Play):	Penaly played after extra time
  SUSP = 'SUSP', // Match Suspended	(In Play):	Suspended by referee's decision, may be rescheduled another day
  INT = 'INT', // Match Interrupted	(In Play):	Interrupted by referee's decision, should resume in a few minutes
  FT = 'FT', // Match Finished	(Finished):	Finished in the regular time
  AET = 'AET', // Match Finished After Extra Time	(Finished):	Finished after extra time without going to the penalty shootout
  PEN = 'PEN', // Match Finished After Penalty	(Finished):	Finished after the penalty shootout
  PST = 'PST', // Match Postponed	(Postponed):	Postponed to another day, once the new date and time is known the status will change to Not Started
  CANC = 'CANC', // Match Cancelled	(Cancelled):	Cancelled, match will not be played
  ABD = 'ABD', // Match Abandoned	(Abandoned):	Abandoned for various reasons (Bad Weather, Safety, Floodlights, Playing Staff Or Referees), Can be rescheduled or not, it depends on the competition
  AWD = 'AWD', // Technical Loss	(Not Played)
  WO = 'WO', // WalkOver	(Not Played):	Victory by forfeit or absence of competitor
  LIVE = 'LIVE', // n Progress	(In Play):	Used in very rare cases. It indicates a fixture in progress but the data indicating the half-time or elapsed time are not available
}
