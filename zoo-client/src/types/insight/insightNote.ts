export interface INoteList {
  noteList: InsightNoteProps[];
}

export interface INote {
  note: InsightNoteProps;
}

export interface InsightNoteProps {
  id: number;
  memo: string;
  isPublic: boolean;
  isAnonymous: boolean;
  createdAt: string;
  updatedAt: string;
  likeCount: number;
  commentCount: number;
  displayName: string;
  job: string;
  isLiked: boolean;
  hasSpeakerComment: boolean;
}

export interface InsightNoteListProps {
  hasNext: boolean;
  totalElements: number;
  totalPages: number;
  pageNumber: number;
  pageSize: number;
  content: InsightNoteProps[];
}
