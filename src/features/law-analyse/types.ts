export type MobileTab = 'nav' | 'doc' | 'ai';
export type Role = 'a' | 'u';
export type ViewportId = 'desktop' | 'tablet' | 'mobile';

export interface ArticleLink {
  id: string;
  num: string;
  label: string;
  conflict: boolean;
}

export interface Section {
  id: string;
  num: string;
  label: string;
  articles: ArticleLink[];
}

export interface LawData {
  title: string;
  sections: Section[];
}

export interface ArticlePart {
  id: string;
  conflict: boolean;
  text: string;
}

export interface ArticleData {
  title: string;
  conflictNote: string;
  parts: ArticlePart[];
}

export interface ChatMessage {
  role: Role;
  text: string;
  cite: string | null;
}

export interface Viewport {
  id: ViewportId;
  label: string;
  icon: string;
  width: number;
  height: number;
}
