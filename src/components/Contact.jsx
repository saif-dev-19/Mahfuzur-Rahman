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
    <section id="contact" className="bg-night/82 section-pad">
      <div className="container-shell">
        <SectionTitle title={data.title}>{data.description}</SectionTitle>

        <ScrollReveal
          as="form"
          onSubmit={handleSubmit}
          className="mx-auto mt-12 flex max-w-5xl flex-col items-center gap-10"
        >
          <div className="rounded-br-[32px] rounded-tl-[32px] border-2 border-brand px-8 py-4 text-center">
            <h3 className="font-mono text-2xl font-medium capitalize text-brand md:text-3xl">Send me a message</h3>
          </div>

          <div className="grid w-full gap-8 md:grid-cols-2 md:gap-16">
            <Field
              label="Your name *"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
            <Field
              label="Your email *"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              type="email"
            />
            <div className="md:col-span-2">
              <Field
                label="Your message *"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Enter your needs"
                textarea
              />
            </div>
          </div>

          <button type="submit" className="motion-card inline-flex items-center gap-4 rounded-full bg-brand px-8 py-4 font-ubuntu text-xl capitalize text-ink transition duration-300 hover:-translate-y-1 hover:bg-mint">
            Send Message <span>✈</span>
          </button>
        </ScrollReveal>
      </div>
    </section>
  );
}

function Field({ label, name, value, onChange, placeholder, type = "text", textarea = false }) {
  const fieldClass = "w-full border-0 border-b border-white/70 bg-transparent px-0 py-3 font-ubuntu text-white outline-none placeholder:text-white/70 transition focus:border-brand focus:shadow-[0_10px_24px_rgba(18,247,214,0.08)]";

  return (
    <label className="block">
      <span className="font-ubuntu text-brand">{label}</span>
      {textarea ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          rows="3"
          placeholder={placeholder}
          className={`${fieldClass} resize-none`}
          required
        />
      ) : (
        <input
          name={name}
          value={value}
          onChange={onChange}
          type={type}
          placeholder={placeholder}
          className={fieldClass}
          required
        />
      )}
    </label>
  );
}
