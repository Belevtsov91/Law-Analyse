import { act, renderHook } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { useLawAnalyse } from './useLawAnalyse';

describe('useLawAnalyse', () => {
  it('starts in desktop mode', () => {
    const { result } = renderHook(() => useLawAnalyse());
    expect(result.current.viewportId).toBe('desktop');
    expect(result.current.isDesktop).toBe(true);
  });

  it('resets drawers and tab when viewport changes', () => {
    const { result } = renderHook(() => useLawAnalyse());
    act(() => {
      result.current.setNavDrawer(true);
      result.current.setAiDrawer(true);
      result.current.setMobileTab('ai');
    });
    act(() => result.current.setViewportId('mobile'));
    expect(result.current.navDrawer).toBe(false);
    expect(result.current.aiDrawer).toBe(false);
    expect(result.current.mobileTab).toBe('doc');
    expect(result.current.isMobile).toBe(true);
  });
});
