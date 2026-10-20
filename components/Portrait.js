export default function Portrait({ compact = false, priority = false }) {
  return (
    <figure
      className={compact ? "ws-portrait ws-portrait-compact" : "ws-portrait"}
    >
      <div className="ws-portrait-image">
        <img
          src="/tadeusz-kwoka.webp"
          alt="Tadeusz Kwoka — twórca Webspanner"
          width={720}
          height={690}
          sizes={
            compact
              ? "(max-width:760px) 160px, 220px"
              : "(max-width:760px) 100vw, 420px"
          }
          loading={priority ? "eager" : "lazy"} fetchPriority={priority ? "high" : "auto"} decoding="async"
        />
      </div>
      <figcaption>
        <strong>Tadeusz Kwoka</strong>
        <span>Twórca Webspanner · bezpośrednia współpraca</span>
      </figcaption>
    </figure>
  );
}
