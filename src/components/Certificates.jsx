import { useRef, useState } from "react";
import { fallbackPortfolio } from "../api/portfolioApi.js";
import SectionTitle from "./SectionTitle.jsx";

export default function Certificates({ data = fallbackPortfolio.certificates }) {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const scrollerRef = useRef(null);

  const scrollCertificates = (direction) => {
    if (!scrollerRef.current) return;

    const firstCard = scrollerRef.current.querySelector("article");
    const cardWidth = firstCard?.offsetWidth || 360;
    scrollerRef.current.scrollBy({
      left: direction * (cardWidth + 24),
      behavior: "smooth",
    });
  };

  return (
    <section id="certificates" className="bg-ink/78 section-pad">
      <div className="container-shell">
        <SectionTitle title={data.title}>{data.description}</SectionTitle>

        <div className="mt-10 flex items-center justify-end gap-3 md:mt-12">
          <button
            type="button"
            onClick={() => scrollCertificates(-1)}
            className="grid h-11 w-11 place-items-center rounded-full bg-night text-2xl text-brand transition hover:bg-steel md:h-12 md:w-12"
            aria-label="Previous certificates"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={() => scrollCertificates(1)}
            className="grid h-11 w-11 place-items-center rounded-full bg-night text-2xl text-brand transition hover:bg-steel md:h-12 md:w-12"
            aria-label="Next certificates"
          >
            ›
          </button>
        </div>

        <div
          ref={scrollerRef}
          className="project-scroll mt-8 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6"
          aria-label="Certificate list"
        >
          {data.items.map((certificate, index) => (
            <article key={`${certificate.name}-${certificate.credentialId || "certificate"}-${index}`} className="w-[82vw] shrink-0 snap-start overflow-hidden rounded-br-[24px] rounded-tl-[24px] border border-white/10 bg-night transition hover:border-brand/70 hover:shadow-glow sm:w-[320px] md:w-[calc((100%_-_48px)/3)] xl:w-[calc((100%_-_72px)/4)]">
              <div className="bg-ink p-3">
                <img src={certificate.image} alt={`${certificate.name} certificate`} className="aspect-[16/9] w-full rounded-lg object-cover" />
              </div>

              <div className="p-5">
              <div className="flex items-start justify-between gap-4">
                <span className="rounded-full bg-brand px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-ink">
                  {certificate.period}
                </span>
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-brand text-brand">✓</span>
              </div>

              <h3 className="mt-5 font-ubuntu text-xl leading-tight text-white md:text-2xl">{certificate.name}</h3>
              <p className="mt-3 font-mono text-sm text-mint">{certificate.issuer}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {certificate.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-steel px-3 py-1 font-mono text-xs text-white">
                    {tag}
                  </span>
                ))}
              </div>

              <button
                type="button"
                onClick={() => setSelectedCertificate(certificate)}
                className="mt-5 rounded-full bg-brand px-5 py-2.5 font-ubuntu text-sm capitalize text-ink transition hover:bg-mint"
              >
                Details
              </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selectedCertificate && (
        <CertificateDetails certificate={selectedCertificate} onClose={() => setSelectedCertificate(null)} />
      )}
    </section>
  );
}

function CertificateDetails({ certificate, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-night/85 px-4 py-8 backdrop-blur-sm">
      <article className="max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-2xl border border-brand/40 bg-[#17191d] shadow-glow">
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-white/10 bg-ink px-5 py-4 md:px-7">
          <h3 className="font-ubuntu text-2xl font-medium text-white md:text-3xl">Certificate Details</h3>
          <button
            type="button"
            onClick={onClose}
            className="grid h-11 w-11 place-items-center rounded-lg bg-steel text-3xl leading-none text-brand transition hover:bg-brand hover:text-ink"
            aria-label="Close certificate details"
          >
            ×
          </button>
        </div>

        <div className="p-5 md:p-7">
          <img src={certificate.image} alt={`${certificate.name} certificate`} className="w-full rounded-xl border border-white/10 object-cover" />

          <h4 className="mt-8 font-ubuntu text-3xl font-medium leading-tight text-white md:text-4xl">
            {certificate.name}
          </h4>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <InfoBox label="Issued By" value={certificate.issuer} icon="▣" />
            <InfoBox label="Issue Date" value={certificate.issueDate || certificate.period} icon="□" />
            <div className="md:col-span-2">
              <InfoBox label="Credential ID" value={certificate.credentialId} icon="#" />
            </div>
          </div>

          <p className="mt-6 font-ubuntu text-lg leading-8 text-white/75">{certificate.description}</p>

          <div className="mt-6">
            <p className="font-ubuntu text-lg font-medium text-brand">Skills Covered:</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {certificate.tags.map((tag) => (
                <span key={tag} className="rounded-lg border border-brand/40 bg-steel px-4 py-2 font-mono text-sm text-brand">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <a
            href={certificate.verifyUrl || "#"}
            target={certificate.verifyUrl && certificate.verifyUrl !== "#" ? "_blank" : undefined}
            rel={certificate.verifyUrl && certificate.verifyUrl !== "#" ? "noreferrer" : undefined}
            className="mt-8 inline-flex rounded-lg bg-brand px-7 py-4 font-ubuntu text-base font-medium text-ink transition hover:bg-mint"
          >
            Verify Certificate
          </a>
        </div>
      </article>
    </div>
  );
}

function InfoBox({ label, value, icon }) {
  return (
    <div className="rounded-lg bg-black/40 p-4">
      <div className="flex items-center gap-3">
        <span className="text-brand">{icon}</span>
        <div>
          <p className="font-ubuntu text-sm text-white/60">{label}</p>
          <p className="mt-1 font-mono text-base font-medium text-white">{value}</p>
        </div>
      </div>
    </div>
  );
}
