export interface ProfileProps {
  name: string;
  email: string;
  interestCategory: string[];
  linkUrls: string[];
}
export interface InfoListProps {
  name: string;
  email: string;
}
export interface IProfile {
  profile: ProfileProps;
}

export interface ISocial {
  linkUrls: string[];
}
