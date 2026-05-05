import { AI_REPLIES } from '../data/chatData';

export function resolveReply(text: string) {
  const value = text.toLowerCase();

  if (value.includes('резюм') || value.includes('огляд')) return AI_REPLIES.summary;
  if (value.includes('конфлікт') || value.includes('суперечн')) return AI_REPLIES.conflict;
  if (value.includes('просто') || value.includes('поясн')) return AI_REPLIES.explain;

  return AI_REPLIES.default;
}
