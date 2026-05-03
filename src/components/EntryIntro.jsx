import { fallbackPortfolio } from "../api/portfolioApi.js";

export default function EntryIntro({ data = fallbackPortfolio.hero, onEnter, isLeaving = false }) {
  const firstName = data.name?.split(" ")[0] || data.headlineName || "Mahfuz";

  return (
    <section className={`entry-intro ${isLeaving ? "entry-intro--leaving" : ""}`} aria-label="Portfolio entry">
      <div className="entry-grid" aria-hidden="true" />
      <div className="entry-orbit" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      <div className="entry-console">
        <div className="entry-console__bar">
          <span />
          <span />
          <span />
        </div>
        <div className="entry-console__lines" aria-hidden="true">
          <p>boot.portfolio()</p>
          <p>loading interface</p>
          <p>syncing projects</p>
          <p>ready</p>
        </div>
      </div>

      <div className="entry-content">
        <p className="entry-kicker">&lt;developer portfolio /&gt;</p>
        <h1>
          <span>{firstName}</span>
          <span>Rahman</span>
        </h1>
        <p className="entry-role">{data.role}</p>

        <button type="button" className="entry-button" onClick={onEnter}>
          Enter Portfolio
          <span aria-hidden="true">→</span>
        </button>
      </div>

      <div className="entry-loader" aria-hidden="true">
        <span />
      </div>
    </section>
  );
}
