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
