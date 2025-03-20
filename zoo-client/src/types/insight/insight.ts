import { ProfileProps } from './insightProfile';

export interface InsightHeaderProps {
  title: string;
  description: string;
}

export interface IReplyItemProps {
  id: string;
  name: string;
  time: string;
  edited: boolean;
  role: string;
  content: string;
}

export interface InsightDetailedProps {
  id: number;
  title: string;
  description: string;
  keywords: string[];
  content: string;
  profile: ProfileProps;
}
export interface IInsightDetailed {
  InsightDetailed: InsightDetailedProps;
}
