export interface IProfile {
  name: string;
  imageUrl: string | null;
  interest: string[];
  job: string;
}

export interface IInsightContent {
  id: number;
  memo: string;
  isPublic: boolean;
  isAnonymous: boolean;

  createdAt: string;
  updatedAt: string;

  likeCount: number;
  commentCount: number;

  displayName: IProfile['name'];
  job: IProfile['job'];
  imageUrl: IProfile['imageUrl'];
  interestCategory: IProfile['interest'];
}
