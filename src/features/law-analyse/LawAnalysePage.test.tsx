import { act, fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { AI_REPLIES } from './data/chatData';
import { LawAnalysePage } from './LawAnalysePage';
import { LAW } from './data/lawData';

afterEach(() => {
  vi.useRealTimers();
});

describe('LawAnalysePage', () => {
  it('renders desktop shell with initial content', () => {
    render(<LawAnalysePage />);
    expect(screen.getByText('Law Analyse')).toBeInTheDocument();
    expect(screen.getByText(LAW.title)).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  it('opens a collapsed section in the navigation tree', async () => {
    render(<LawAnalysePage />);
    const user = userEvent.setup();
    expect(screen.queryByText(LAW.sections[1].articles[0].label)).not.toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: new RegExp(LAW.sections[1].label) }));
    expect(screen.getByText(LAW.sections[1].articles[0].label)).toBeInTheDocument();
  });

  it('sends a chat prompt from the article toolbar', async () => {
    vi.useFakeTimers();
    render(<LawAnalysePage />);
    fireEvent.click(screen.getByRole('button', { name: 'AI-аналіз' }));
    expect(screen.getByText('Поясни статтю 3 простими словами')).toBeInTheDocument();
    await act(async () => {
      await vi.advanceTimersByTimeAsync(1600);
    });
    expect(screen.getByText(AI_REPLIES.explain.cite!)).toBeInTheDocument();
  });

  it('switches to mobile preview and shows bottom navigation', async () => {
    render(<LawAnalysePage />);
    const user = userEvent.setup();
    await user.click(screen.getByRole('button', { name: /Mobile/i }));
    expect(screen.getByRole('button', { name: 'Зміст' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Стаття' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'AI' })).toBeInTheDocument();
  });
});
