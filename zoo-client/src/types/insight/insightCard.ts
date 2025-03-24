export interface IProfile {
  name: string;
  imageUrl: string;
  interest: string[];
  job: string;
}

export interface IContent {
  id: number;
  createdTime: string;
  memo: string;
  like: number;
  imageUrl: string;
}

export interface IInsight {
  profile: IProfile;
  content: IContent;
}

export interface IInsightList {
  [key: number]: IInsight;
}
