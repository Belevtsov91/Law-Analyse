import { describe, expect, it } from 'vitest';
import { AI_REPLIES } from '../data/chatData';
import { resolveReply } from './resolveReply';

describe('resolveReply', () => {
  it('returns summary reply for summary prompts', () => {
    expect(resolveReply('Дай резюме закону')).toEqual(AI_REPLIES.summary);
  });

  it('returns conflict reply for conflict prompts', () => {
    expect(resolveReply('Покажи конфлікти між статтями')).toEqual(AI_REPLIES.conflict);
  });

  it('returns explain reply for explain prompts', () => {
    expect(resolveReply('Поясни статтю 3 простими словами')).toEqual(AI_REPLIES.explain);
  });

  it('falls back to default reply', () => {
    expect(resolveReply('Що тут важливо знати?')).toEqual(AI_REPLIES.default);
  });
});
