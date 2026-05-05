type DocumentMetaProps = {
  isMobile: boolean;
};

export function DocumentMeta({ isMobile }: DocumentMetaProps) {
  return (
    <div className="doc-meta">
      <div className="doc-meta__breadcrumbs">
        {!isMobile && (
          <>
            <span>Бібліотека</span>
            <span>&gt;</span>
            <span>МСВ</span>
            <span>&gt;</span>
          </>
        )}
        <span className="doc-meta__current">Закон №280/97-ВР</span>
      </div>
      <div className="doc-meta__chips">
        <span className="doc-chip doc-chip--gold">Закон</span>
        {!isMobile && <span className="doc-chip">1997</span>}
        <span className="doc-chip doc-chip--green">Чинний</span>
      </div>
    </div>
  );
}
