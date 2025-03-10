import { IBadgeList } from '../badge/Badge';
import { ISpeakerList } from '../speaker/speaker';

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

export interface ISessionContainerProps extends IBadgeList, ISpeakerList {
  sessionTitle: string;
  sessionBody: string;
}
