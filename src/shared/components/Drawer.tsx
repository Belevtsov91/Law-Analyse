import type { PropsWithChildren } from 'react';

type DrawerProps = PropsWithChildren<{
  open: boolean;
  side?: 'left' | 'right';
  width: number;
  onClose: () => void;
}>;

export function Drawer({
  open,
  side = 'left',
  width,
  onClose,
  children,
}: DrawerProps) {
  const style = {
    width,
    transform: open
      ? 'translateX(0)'
      : side === 'left'
        ? 'translateX(-100%)'
        : 'translateX(100%)',
  };

  return (
    <>
      <button className="drawer-overlay" data-open={open} onClick={onClose} />
      <aside className={`drawer-panel drawer-panel--${side}`} style={style}>
        {children}
      </aside>
    </>
  );
}
