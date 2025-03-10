import { Speaker } from '../speaker/speaker';

export interface Session {
  id: number;
  title: string;
  keyword: string[];
  description: string;
  percentage: number;
  location: string;
  speaker: Speaker;
}

export interface ISession {
  sessions: Session[];
}
