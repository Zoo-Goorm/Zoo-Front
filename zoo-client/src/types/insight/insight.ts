import { ProfileProps } from './insightProfile';

export interface InsightHeaderProps {
  title: string;
  description: string;
}
export interface ILike {
  likeCount: number;
  isLiked: boolean;
}

export interface InsightDetailedProps {
  id: number;
  name: string;
  shortDescription: string;
  keywords: string[];
  memo: string;
  profile: ProfileProps;
  likeCount: number;
  isLiked: boolean;
}
export interface IInsightDetailed {
  InsightDetailed: InsightDetailedProps;
  closeModal: () => void;
}
