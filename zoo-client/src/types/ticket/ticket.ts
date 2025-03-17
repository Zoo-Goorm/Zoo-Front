export type UserTicket = {
  tickets: Record<string, boolean>;
  registeredSessions: Record<
    string,
    { timeRange: string; sessionId: number }[]
  >;
};
