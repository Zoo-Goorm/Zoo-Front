export interface NoteListProps {
  id: number;
  sessionId: number;
  memo: string;
  name: string;
  time: string;
  edited: boolean;
  role: string;
  likeCount: number;
  isPublic: boolean;
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
  displayName: string;
  memo: string;
  isPublic: boolean;
  isAnonymous: false;
  job: string;
  createdAt: string;
  updatedAt: string;
  likeCount: number;
  commentCount: number;
}

export interface InsightNoteListProps {
  hasNext: boolean;
  totalElements: number;
  totalPages: number;
  pageNumber: number;
  pageSize: number;
  content: InsightNoteProps[];
}
