type TicketType = 'day1' | 'day2';

export interface UserTicket {
  hasDay1: boolean;
  hasDay2: boolean;
  registeredSessions: { [key in TicketType]?: string[] };
}
