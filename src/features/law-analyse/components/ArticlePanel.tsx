import { ARTICLE } from '../data/lawData';

type ArticlePanelProps = {
  isMobile: boolean;
  highlightMode: boolean;
  activePart: string | null;
  onToggleHighlight: () => void;
  onPickPart: (id: string | null) => void;
  onOpenAi: (prompt?: string) => void;
};

export function ArticlePanel({
  isMobile,
  highlightMode,
  activePart,
  onToggleHighlight,
  onPickPart,
  onOpenAi,
}: ArticlePanelProps) {
  return (
    <div className="article-panel">
      <section className="summary-card">
        <p className="section-kicker">AI Резюме статті</p>
        <p>Стаття закріплює право участі в МСВ та потребує уточнення антидискримінаційної норми.</p>
      </section>
      <section className="conflict-banner">
        <strong>Нормативний конфлікт</strong>
        <p>{ARTICLE.conflictNote}</p>
      </section>
      <p className="section-kicker">Розділ I</p>
      <h1 className="article-title">{ARTICLE.title}</h1>
      <div className="article-toolbar">
        <button className={highlightMode ? 'toolbar-btn is-active' : 'toolbar-btn'} onClick={onToggleHighlight}>Підсвітка</button>
        <button className="toolbar-btn">Закладка</button>
        <button className="toolbar-btn">Нотатка</button>
        <button className="toolbar-btn" onClick={() => onOpenAi('Поясни статтю 3 простими словами')}>AI-аналіз</button>
        <button className="toolbar-btn">Поділитись</button>
      </div>
      {ARTICLE.parts.map((part, index) => {
        const lit = highlightMode || activePart === part.id;
        return (
          <button
            key={part.id}
            className={`article-part ${lit ? 'is-lit' : ''}`}
            onClick={() => onPickPart(activePart === part.id ? null : part.id)}
          >
            <span className="article-part__meta">Частина {index + 1} · {part.id}</span>
            <span dangerouslySetInnerHTML={{ __html: part.text }} />
            {part.conflict && <span className="part-note">Перелік захищених ознак може бути неповним.</span>}
          </button>
        );
      })}
      <footer className="article-footer">
        Стаття 3 із 79 · Розділ I · Закон №280/97-ВР
      </footer>
    </div>
  );
}
