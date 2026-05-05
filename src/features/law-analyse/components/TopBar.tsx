type TopBarProps = {
  isDesktop: boolean;
  isTablet: boolean;
  isMobile: boolean;
  onOpenNav: () => void;
};

export function TopBar({ isDesktop, isTablet, isMobile, onOpenNav }: TopBarProps) {
  return (
    <header className="topbar">
      {!isDesktop && (
        <button className="chrome-square" onClick={onOpenNav}>
          ≡
        </button>
      )}
      <div className="topbar__brand">
        <div className="brand-mark">LA</div>
        <div>
          <div className="brand-title">Law Analyse</div>
          {!isMobile && <div className="brand-subtitle">Legal Intelligence</div>}
        </div>
      </div>
      {!isMobile && (
        <label className="topbar__search" style={{ maxWidth: isTablet ? 240 : 380 }}>
          <span>Search</span>
          <input placeholder="Пошук по документу..." />
        </label>
      )}
      <div className="topbar__actions">
        {isDesktop && (
          <>
            <button className="chrome-btn">Бібліотека</button>
            <button className="chrome-btn">Завантажити</button>
          </>
        )}
        <button className="chrome-btn chrome-btn--primary">Порівняти</button>
        <div className="avatar-badge">VB</div>
      </div>
    </header>
  );
}
