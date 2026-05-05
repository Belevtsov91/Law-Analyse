import type { Dispatch, RefObject, SetStateAction } from 'react';
import { QUICK_PROMPTS } from '../data/chatData';
import type { ChatMessage } from '../types';

type AiPanelProps = {
  messages: ChatMessage[];
  typing: boolean;
  input: string;
  endRef: RefObject<HTMLDivElement | null>;
  setInput: Dispatch<SetStateAction<string>>;
  sendMessage: (text: string) => void;
};

export function AiPanel({
  messages,
  typing,
  input,
  endRef,
  setInput,
  sendMessage,
}: AiPanelProps) {
  return (
    <div className="ai-panel">
      <div className="ai-panel__head">
        <div>
          <div className="brand-title">AI Аналітик</div>
          <div className="brand-subtitle">law mode · simulated</div>
        </div>
        <div className="ai-status">Active</div>
      </div>
      <div className="quick-prompts">
        {QUICK_PROMPTS.map(([label, prompt]) => (
          <button key={label} className="prompt-chip" onClick={() => sendMessage(prompt)}>
            {label}
          </button>
        ))}
      </div>
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div key={index} className={`chat-group ${message.role === 'u' ? 'is-user' : ''}`}>
            <span className="chat-role">{message.role === 'a' ? 'Law Analyse AI' : 'Ви'}</span>
            <div className={`chat-bubble ${message.role === 'u' ? 'is-user' : ''}`} dangerouslySetInnerHTML={{ __html: message.text }} />
            {message.cite && <div className="chat-cite">{message.cite}</div>}
          </div>
        ))}
        {typing && <div className="typing-row"><span /><span /><span /></div>}
        <div ref={endRef} />
      </div>
      <div className="chat-composer">
        <textarea
          className="chat-textarea"
          rows={1}
          value={input}
          placeholder="Запитайте про закон..."
          onChange={(event) => setInput(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === 'Enter' && !event.shiftKey) {
              event.preventDefault();
              sendMessage(input);
            }
          }}
        />
        <button className="send-btn" disabled={!input.trim() || typing} onClick={() => sendMessage(input)}>Send</button>
      </div>
    </div>
  );
}
