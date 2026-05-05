import { Drawer } from '../../shared/components/Drawer';
import { LAW } from './data/lawData';
import { useChat } from './hooks/useChat';
import { useLawAnalyse } from './hooks/useLawAnalyse';
import { AiPanel } from './components/AiPanel';
import { ArticlePanel } from './components/ArticlePanel';
import { BottomNav } from './components/BottomNav';
import { DocumentMeta } from './components/DocumentMeta';
import { NavTree } from './components/NavTree';
import { TopBar } from './components/TopBar';
import { ViewportBar } from './components/ViewportBar';

export function LawAnalysePage() {
  const ui = useLawAnalyse();
  const chat = useChat();
  const toggleSection = (id: string) => ui.setOpenSections((items) => ({ ...items, [id]: !items[id] }));
  const pickArticle = (id: string) => { ui.setActiveArticle(id); ui.setNavDrawer(false); ui.setMobileTab('doc'); };
  const showDocument = () => { ui.setMobileTab('doc'); ui.setNavDrawer(false); ui.setAiDrawer(false); };
  const openNav = () => { ui.setMobileTab('nav'); ui.setNavDrawer(true); };
  const openAi = (prompt?: string) => { if (prompt) chat.sendMessage(prompt); ui.setAiOpen(true); ui.setAiDrawer(true); ui.setMobileTab('ai'); };

  return (
    <main className="law-shell">
      <ViewportBar current={ui.viewportId} onChange={ui.setViewportId} />
      <section className="device-frame" style={{ width: ui.viewport.width, height: ui.viewport.height }}>
        <TopBar isDesktop={ui.isDesktop} isTablet={ui.isTablet} isMobile={ui.isMobile} onOpenNav={openNav} />
        <DocumentMeta isMobile={ui.isMobile} />
        <div className="workspace">
          {ui.isDesktop && <button className="edge-toggle" onClick={() => ui.setSidebarOpen(!ui.sidebarOpen)}>{ui.sidebarOpen ? '<' : '>'}</button>}
          {ui.isDesktop && <aside className="desktop-panel" style={{ width: ui.sidebarOpen ? 252 : 0 }}><div className="panel-head"><p className="section-kicker">Структура документа</p><h2>{LAW.title}</h2></div><NavTree openSections={ui.openSections} activeArticle={ui.activeArticle} onToggleSection={toggleSection} onPickArticle={pickArticle} /></aside>}
          <section className="content-pane"><ArticlePanel isMobile={ui.isMobile} highlightMode={ui.highlightMode} activePart={ui.activePart} onToggleHighlight={() => ui.setHighlightMode(!ui.highlightMode)} onPickPart={ui.setActivePart} onOpenAi={openAi} /></section>
          {ui.isDesktop && <button className="edge-toggle edge-toggle--right" onClick={() => ui.setAiOpen(!ui.aiOpen)}>{ui.aiOpen ? '>' : '<'}</button>}
          {ui.isDesktop && <aside className="desktop-panel desktop-panel--ai" style={{ width: ui.aiOpen ? 330 : 0 }}><AiPanel messages={chat.messages} typing={chat.typing} input={chat.input} endRef={chat.endRef} setInput={chat.setInput} sendMessage={chat.sendMessage} /></aside>}
          {!ui.isDesktop && <Drawer open={ui.navDrawer} width={Math.min(300, ui.viewport.width * 0.86)} onClose={() => ui.setNavDrawer(false)}><div className="drawer-head"><div><p className="section-kicker">Структура документа</p><h2>{LAW.title}</h2></div><button className="chrome-square" onClick={() => ui.setNavDrawer(false)}>x</button></div><NavTree openSections={ui.openSections} activeArticle={ui.activeArticle} onToggleSection={toggleSection} onPickArticle={pickArticle} /></Drawer>}
          {!ui.isDesktop && <Drawer open={ui.aiDrawer} side="right" width={Math.min(330, ui.viewport.width * 0.94)} onClose={() => ui.setAiDrawer(false)}><AiPanel messages={chat.messages} typing={chat.typing} input={chat.input} endRef={chat.endRef} setInput={chat.setInput} sendMessage={chat.sendMessage} /></Drawer>}
        </div>
        {!ui.isDesktop && <BottomNav current={ui.mobileTab} onOpenNav={openNav} onShowDoc={showDocument} onOpenAi={() => openAi()} />}
      </section>
      <p className="app-hint">LAW ANALYSE · UI PROTOTYPE · PREVIEW MODES</p>
    </main>
  );
}
