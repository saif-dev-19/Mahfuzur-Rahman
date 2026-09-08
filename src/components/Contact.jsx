import { useState } from "react";
import { fallbackPortfolio } from "../api/portfolioApi.js";
import SectionTitle from "./SectionTitle.jsx";
import ScrollReveal from "./ScrollReveal.jsx";

export default function Contact({ data = fallbackPortfolio.contact }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );

    window.location.href = `mailto:${data.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="bg-ink section-pad">
      <div className="container-shell">
        <SectionTitle title={data.title}>{data.description}</SectionTitle>

        <ScrollReveal
          as="div"
          className="mx-auto mt-12 max-w-2xl"
          delay={100}
        >
          <div className="card-clean p-6 sm:p-10 border border-white/10">
            <div className="mb-8">
              <span className="font-mono text-xs uppercase tracking-wider text-brand font-semibold">
                Get In Touch
              </span>
              <h3 className="mt-1 font-ubuntu text-2xl sm:text-3xl font-bold text-white">
                Send me a message
              </h3>
              <p className="mt-2 font-ubuntu text-sm sm:text-base text-slate-300">
                Have a question, project proposal, or just want to say hi? Fill out the form below.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <Field
                  label="Your Name *"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="e.g. John Doe"
                />
                <Field
                  label="Your Email *"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="e.g. john@example.com"
                  type="email"
                />
              </div>

              <div>
                <Field
                  label="Your Message *"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or inquiry..."
                  textarea
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="font-mono text-xs text-slate-400">
                  Direct:{" "}
                  <a
                    href={`mailto:${data.email}`}
                    className="text-brand hover:underline font-medium"
                  >
                    {data.email}
                  </a>
                </p>

                <button
                  type="submit"
                  className="magnetic w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-7 py-3 font-ubuntu text-sm font-semibold text-night shadow-[0_0_20px_rgba(18,247,214,0.3)] transition hover:bg-mint hover:shadow-[0_0_30px_rgba(18,247,214,0.5)]"
                >
                  <span>Send Message</span>
                  <span aria-hidden="true" className="text-base">✉</span>
                </button>
              </div>
            </form>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function Field({ label, name, value, onChange, placeholder, type = "text", textarea = false }) {
  const inputClass =
    "w-full rounded-xl border border-white/10 bg-night/80 px-4 py-3 font-ubuntu text-sm text-white placeholder:text-slate-400 outline-none transition focus:border-brand focus:ring-1 focus:ring-brand/40";

  return (
    <label className="block">
      <span className="font-mono text-xs uppercase tracking-wider text-brand font-semibold mb-2 block">
        {label}
      </span>
      {textarea ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          rows="4"
          placeholder={placeholder}
          className={`${inputClass} resize-none`}
          required
        />
      ) : (
        <input
          name={name}
          value={value}
          onChange={onChange}
          type={type}
          placeholder={placeholder}
          className={inputClass}
          required
        />
      )}
    </label>
  );
}
