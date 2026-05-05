import { LAW } from '../data/lawData';

type NavTreeProps = {
  openSections: Record<string, boolean>;
  activeArticle: string;
  onToggleSection: (id: string) => void;
  onPickArticle: (id: string) => void;
};

export function NavTree({
  openSections,
  activeArticle,
  onToggleSection,
  onPickArticle,
}: NavTreeProps) {
  return (
    <div className="nav-tree">
      {LAW.sections.map((section) => (
        <section key={section.id} className="nav-section">
          <button className="nav-section__header" onClick={() => onToggleSection(section.id)}>
            <span className={`nav-arrow ${openSections[section.id] ? 'is-open' : ''}`}>▶</span>
            <span className="nav-section__num">{section.num}</span>
            <span>{section.label}</span>
          </button>
          {openSections[section.id] &&
            section.articles.map((article) => (
              <button
                key={article.id}
                className={`nav-article ${activeArticle === article.id ? 'is-active' : ''}`}
                onClick={() => onPickArticle(article.id)}
              >
                <span className="nav-article__dot" />
                <span className="nav-article__num">{article.num}</span>
                <span>{article.label}</span>
                {article.conflict && <span className="nav-conflict">●</span>}
              </button>
            ))}
        </section>
      ))}
    </div>
  );
}
