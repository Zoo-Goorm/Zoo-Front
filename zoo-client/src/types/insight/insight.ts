import { ProfileProps } from './insightProfile';

export interface InsightHeaderProps {
  title: string;
  description: string;
}

export interface InsightDetailedProps {
  id: number;
  name: string;
  shortDescription: string;
  keywords: string[];
  memo: string;
  profile: ProfileProps;
  likeCount: number;
}
export interface IInsightDetailed {
  InsightDetailed: InsightDetailedProps;
}

export interface ILikeCount {
  likeCount: number;
}
