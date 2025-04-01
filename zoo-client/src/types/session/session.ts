export interface SessionBase {
  id: number;
  name: string;
  shortDescription: string;
  speakerName: string;
}

export interface Session extends SessionBase {
  keywords: string[];
  speakerImageUrl?: string | null;
  maxCapacity: number;
  participantCount: number;
  startTime: string;
  endTime: string;
  timeRange?: string;
  location: string;
  status: string;
  speakerImage?: string;
  speaker?: {
    name: string;
    info: string;
  };
}

export interface TimeSlot {
  timeRange: string;
  sessions: Session[];
}

export interface ISessions {
  [date: string]: TimeSlot[];
}

export interface SelectSession extends SessionBase {
  time: string;
}

export interface SessionId {
  sessionName: string;
  keywords: string[];
  longDescription: string;
  careers: string[];
  maxCapacity: number;
  participantCount: number;
  location: string;
  imageUrl: string;
  speakerName: string;
}

export interface ISessionId {
  currentSession: SessionId;
}
