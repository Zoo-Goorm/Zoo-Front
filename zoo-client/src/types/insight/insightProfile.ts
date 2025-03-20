export interface ProfileProps {
  name: string;
  email: string;
  keywords: string[];
  social: SocialProps;
}
export interface InfoListProps {
  name: string;
  email: string;
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

export interface ISocial {
  social: SocialProps;
}
