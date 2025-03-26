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
  isLiked: boolean;
  sessionId: number;
  sessionName: string;

  displayName: IProfile['name'];
  job: IProfile['job'];
  imageUrl: IProfile['imageUrl'];
  interestCategory: IProfile['interest'];
}

export interface ICommonPageData<T> {
  hasNext: boolean;
  totalElements: number;
  pageNumber: number;
  totalPages: number;
  pageSize: number;
  content: T[];
}

export type TInsights = ICommonPageData<IInsightContent>;

export type IOnboardingInsights = Omit<
  IInsightContent,
  | 'isPublic'
  | 'isAnonymous'
  | 'createdAt'
  | 'updatedAt'
  | 'sessionId'
  | 'sessionName'
  | 'isLiked'
>;
