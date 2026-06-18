export interface Writing {
  kind: 'Essay' | 'Idea' | 'Note';
  date: string;
  title: string;
  dek?: string;
  read?: string;
  body?: string[];
}

export const WRITING: Writing[] = [];
