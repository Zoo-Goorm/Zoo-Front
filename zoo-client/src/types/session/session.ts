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
  speakerImage: string;
  speakerName: string;
}

export interface TimeSlot {
  timeRange: string;
  sessions: Session[];
}

export interface ISessions {
  [date: string]: TimeSlot[];
}
export interface SelectSession {
  id: number;
  time: string;
  name: string;
  shortDescription: string;
  speakerName: string;
}
