import { useCallback, useEffect, useRef, useState } from 'react';
import { INITIAL_MESSAGES } from '../data/chatData';
import type { ChatMessage } from '../types';
import { resolveReply } from '../utils/resolveReply';

export function useChat() {
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const endRef = useRef<HTMLDivElement | null>(null);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, typing]);

  useEffect(() => () => {
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
  }, []);

  const sendMessage = useCallback((rawText: string) => {
    const text = rawText.trim();
    if (!text) return;
    setMessages((items) => [...items, { role: 'u', text, cite: null }]);
    setInput('');
    setTyping(true);
    timeoutRef.current = window.setTimeout(() => {
      setTyping(false);
      setMessages((items) => [...items, { role: 'a', ...resolveReply(text) }]);
    }, 1600);
  }, []);

  return { messages, input, setInput, typing, endRef, sendMessage };
}
