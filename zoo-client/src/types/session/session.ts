import { Speaker } from '../speaker/speaker';

export interface Session {
  id: number;
  name: string;
  keywords: string[];
  shortDescription: string;
  speakerImageUrl?: string | null;
  maxCapacity: number;
  participantCount: number;
  startTime: string;
  endTime: string;
  timeRange?: string;
  location: string;
  status: string;
  speaker: Speaker;
}

export interface TimeSlot {
  timeRange: string;
  sessions: Session[];
}

export interface ISessions {
  [date: string]: TimeSlot[];
}
