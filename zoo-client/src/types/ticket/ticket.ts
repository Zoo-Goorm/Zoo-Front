export type UserTicket = {
  tickets: Record<string, boolean>;
  registeredSessions: Record<
    string,
    {
      timeRange: string;
      sessionId: number;
      sessionName: string;
      speakerName: string;
    }[]
  >;
};

export interface ITicket {
  tickets: Record<string, boolean>;
}

export interface IRegisteredSessions {
  registeredSessions: Record<
    string,
    {
      timeRange: string;
      sessionId: number;
      sessionName: string;
      speakerName: string;
    }[]
  >;
}
