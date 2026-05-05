import type { MobileTab } from '../types';

type BottomNavProps = {
  current: MobileTab;
  onOpenNav: () => void;
  onShowDoc: () => void;
  onOpenAi: () => void;
};

export function BottomNav({ current, onOpenNav, onShowDoc, onOpenAi }: BottomNavProps) {
  const items = [
    { id: 'nav', label: 'Зміст', onClick: onOpenNav },
    { id: 'doc', label: 'Стаття', onClick: onShowDoc },
    { id: 'ai', label: 'AI', onClick: onOpenAi },
  ] as const;

  return (
    <nav className="bottom-nav">
      {items.map((item) => (
        <button
          key={item.id}
          className={`bottom-nav__button ${current === item.id ? 'is-active' : ''}`}
          onClick={item.onClick}
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
}
