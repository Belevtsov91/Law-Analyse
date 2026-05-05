import { VIEWPORTS } from '../../../shared/constants/viewports';
import type { ViewportId } from '../types';

type ViewportBarProps = {
  current: ViewportId;
  onChange: (id: ViewportId) => void;
};

export function ViewportBar({ current, onChange }: ViewportBarProps) {
  const active = VIEWPORTS.find((item) => item.id === current) ?? VIEWPORTS[0];

  return (
    <div className="viewport-bar">
      <div className="viewport-bar__options">
        {VIEWPORTS.map((item) => (
          <button
            key={item.id}
            className={`viewport-option ${current === item.id ? 'is-active' : ''}`}
            onClick={() => onChange(item.id)}
          >
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </div>
      <p className="viewport-bar__note">{active.width}px · preview mode</p>
    </div>
  );
}
