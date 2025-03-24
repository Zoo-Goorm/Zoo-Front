export interface NoteListProps {
  id: number;
  memo: string;
  displayName: string;
  job: string;
  likeCount: number;
  commentCount: number;
  isPublic: boolean;
  isAnonymous: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface INoteList {
  noteList: NoteListProps[];
}

export interface INote {
  note: NoteListProps;
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
}

export interface InsightNoteListProps {
  hasNext: boolean;
  totalElements: number;
  totalPages: number;
  pageNumber: number;
  pageSize: number;
  content: InsightNoteProps[];
}
