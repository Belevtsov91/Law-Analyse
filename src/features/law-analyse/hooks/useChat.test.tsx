import { act, renderHook } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { INITIAL_MESSAGES } from '../data/chatData';
import { useChat } from './useChat';

describe('useChat', () => {
  it('starts with initial assistant message', () => {
    const { result } = renderHook(() => useChat());
    expect(result.current.messages).toEqual(INITIAL_MESSAGES);
  });

  it('ignores empty messages', () => {
    const { result } = renderHook(() => useChat());
    act(() => result.current.sendMessage('   '));
    expect(result.current.messages).toHaveLength(1);
    expect(result.current.typing).toBe(false);
  });

  it('adds user and assistant messages after timeout', () => {
    vi.useFakeTimers();
    const { result } = renderHook(() => useChat());
    act(() => result.current.sendMessage('Поясни статтю 3 простими словами'));
    expect(result.current.messages).toHaveLength(2);
    expect(result.current.typing).toBe(true);
    act(() => vi.advanceTimersByTime(1600));
    expect(result.current.typing).toBe(false);
    expect(result.current.messages).toHaveLength(3);
    expect(result.current.messages[1].role).toBe('u');
    expect(result.current.messages[2].role).toBe('a');
    vi.useRealTimers();
  });
});
