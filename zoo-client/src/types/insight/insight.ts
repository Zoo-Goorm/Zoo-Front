export interface InfoListProps {
  name: string;
  email: string;
}

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

export interface ProfileProps {
  name: string;
  email: string;
  keywords: string[];
  social: Record<string, string>;
}
export interface IProfile {
  profile: ProfileProps;
}

export interface SocialProps {
  linkedin: string;
  github: string;
  instagram: string;
  notion: string;
  threads: string;
}
