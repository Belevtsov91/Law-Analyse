import { useEffect, useState } from 'react';
import { VIEWPORTS } from '../../../shared/constants/viewports';
import type { MobileTab, ViewportId } from '../types';

export function useLawAnalyse() {
  const [viewportId, setViewportId] = useState<ViewportId>('desktop');
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    I: true,
    II: false,
    III: false,
  });
  const [activeArticle, setActiveArticle] = useState('3');
  const [highlightMode, setHighlightMode] = useState(false);
  const [activePart, setActivePart] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [aiOpen, setAiOpen] = useState(true);
  const [mobileTab, setMobileTab] = useState<MobileTab>('doc');
  const [navDrawer, setNavDrawer] = useState(false);
  const [aiDrawer, setAiDrawer] = useState(false);

  useEffect(() => {
    setNavDrawer(false);
    setAiDrawer(false);
    setMobileTab('doc');
  }, [viewportId]);

  const viewport = VIEWPORTS.find((item) => item.id === viewportId) ?? VIEWPORTS[0];
  const isDesktop = viewportId === 'desktop';
  const isTablet = viewportId === 'tablet';
  const isMobile = viewportId === 'mobile';

  return {
    viewport,
    viewportId,
    openSections,
    activeArticle,
    highlightMode,
    activePart,
    sidebarOpen,
    aiOpen,
    mobileTab,
    navDrawer,
    aiDrawer,
    isDesktop,
    isTablet,
    isMobile,
    setViewportId,
    setOpenSections,
    setActiveArticle,
    setHighlightMode,
    setActivePart,
    setSidebarOpen,
    setAiOpen,
    setMobileTab,
    setNavDrawer,
    setAiDrawer,
  };
}
