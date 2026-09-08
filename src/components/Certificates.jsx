import { useRef, useState } from "react";
import { fallbackPortfolio } from "../api/portfolioApi.js";
import SectionTitle from "./SectionTitle.jsx";
import ScrollReveal from "./ScrollReveal.jsx";

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
    <section id="certificates" className="bg-night section-pad">
      <div className="container-shell">
        <SectionTitle title={data.title}>{data.description}</SectionTitle>

        {/* Scroll Controls */}
        <div className="mt-8 flex items-center justify-end gap-3 md:mt-10">
          <button
            type="button"
            onClick={() => scrollCertificates(-1)}
            className="magnetic grid h-10 w-10 place-items-center rounded-xl border border-white/15 bg-surface text-xl text-slate-200 transition hover:border-brand hover:text-brand"
            aria-label="Previous certificates"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => scrollCertificates(1)}
            className="magnetic grid h-10 w-10 place-items-center rounded-xl border border-white/15 bg-surface text-xl text-slate-200 transition hover:border-brand hover:text-brand"
            aria-label="Next certificates"
          >
            →
          </button>
        </div>

        {/* Certificate Card List */}
        <div
          ref={scrollerRef}
          className="project-scroll mt-6 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-8 pt-2"
          aria-label="Certificate list"
        >
          {data.items.map((certificate, index) => (
            <ScrollReveal
              as="article"
              key={`${certificate.name}-${certificate.credentialId || "certificate"}-${index}`}
              delay={index * 80}
              variant="lift"
              className="card-clean flex w-[85vw] shrink-0 snap-start flex-col overflow-hidden sm:w-[320px] md:w-[calc((100%_-_48px)/3)] xl:w-[calc((100%_-_72px)/4)]"
            >
              {/* Image banner */}
              <div className="relative overflow-hidden bg-surface aspect-[16/10] border-b border-white/10 p-3 flex items-center justify-center">
                <img
                  src={certificate.image}
                  alt={`${certificate.name} certificate`}
                  className="max-h-full w-auto object-contain rounded-lg"
                />
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="rounded-md bg-brand/10 border border-brand/25 px-2.5 py-0.5 font-mono text-xs font-semibold text-brand">
                    {certificate.period}
                  </span>
                  <span className="font-mono text-xs text-brand font-medium">✓ Verified</span>
                </div>

                <h3 className="font-ubuntu text-lg font-bold leading-snug text-white">
                  {certificate.name}
                </h3>
                <p className="mt-1 font-mono text-xs text-mint font-medium">
                  {certificate.issuer}
                </p>

                {/* Tags */}
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {certificate.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-white/[0.05] border border-white/10 px-2 py-0.5 font-mono text-[11px] text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action button */}
                <div className="mt-auto pt-5">
                  <button
                    type="button"
                    onClick={() => setSelectedCertificate(certificate)}
                    className="magnetic w-full rounded-xl bg-brand/10 border border-brand/35 px-4 py-2 text-center font-ubuntu text-xs font-semibold text-brand transition hover:bg-brand hover:text-night"
                  >
                    View Credential
                  </button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Details Modal */}
      {selectedCertificate && (
        <CertificateDetails
          certificate={selectedCertificate}
          onClose={() => setSelectedCertificate(null)}
        />
      )}
    </section>
  );
}

function CertificateDetails({ certificate, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-night/85 p-4 backdrop-blur-md">
      <article className="relative max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-white/15 bg-surface shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-white/10 bg-surface/95 px-6 py-4 backdrop-blur">
          <h3 className="font-ubuntu text-xl font-bold text-white">Credential Details</h3>
          <button
            type="button"
            onClick={onClose}
            className="magnetic grid h-9 w-9 place-items-center rounded-lg border border-white/15 text-xl text-slate-300 transition hover:border-brand hover:text-brand"
            aria-label="Close certificate details"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="grid place-items-center bg-night p-4 rounded-xl border border-white/10">
            <img
              src={certificate.image}
              alt={`${certificate.name} certificate`}
              className="max-h-64 w-auto object-contain rounded-lg"
            />
          </div>

          <div>
            <h4 className="font-ubuntu text-2xl sm:text-3xl font-bold text-white">
              {certificate.name}
            </h4>
            <p className="mt-1 font-mono text-sm text-brand font-medium">
              Issued by {certificate.issuer}
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <InfoBox label="Issued By" value={certificate.issuer} />
            <InfoBox label="Issue Date" value={certificate.issueDate || certificate.period} />
            <div className="sm:col-span-2">
              <InfoBox label="Credential ID" value={certificate.credentialId} />
            </div>
          </div>

          <p className="font-ubuntu text-base leading-relaxed text-slate-200">
            {certificate.description}
          </p>

          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-brand font-semibold mb-3">
              Skills Covered:
            </p>
            <div className="flex flex-wrap gap-2">
              {certificate.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-white/[0.06] border border-white/10 px-3 py-1 font-mono text-xs text-slate-200 font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-2">
            <a
              href={certificate.verifyUrl || "#"}
              target={certificate.verifyUrl && certificate.verifyUrl !== "#" ? "_blank" : undefined}
              rel={certificate.verifyUrl && certificate.verifyUrl !== "#" ? "noreferrer" : undefined}
              className="magnetic inline-flex rounded-xl bg-brand px-6 py-3 font-ubuntu text-sm font-semibold text-night transition hover:bg-mint"
            >
              Verify Credential ↗
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}

function InfoBox({ label, value }) {
  return (
    <div className="rounded-xl bg-night/80 border border-white/10 p-4">
      <p className="font-mono text-xs uppercase tracking-wider text-slate-400 font-medium">{label}</p>
      <p className="mt-1 font-mono text-sm font-semibold text-white">{value}</p>
    </div>
  );
}
