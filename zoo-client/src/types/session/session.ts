interface Session {
  title: string;
  description: string;
  speaker: {
    name: string;
    info: string;
  };
}

export interface ISession {
  sessions: Session[];
}
