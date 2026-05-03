import SectionTitle from "./SectionTitle.jsx";
import { blogs } from "../data/portfolio.js";

export default function Blogs() {
  return (
    <section id="blogs" className="bg-ink section-pad">
      <div className="container-shell">
        <SectionTitle title="Blogs">My thoughts on technology and business, welcome to subscribe</SectionTitle>

        <div className="mx-auto mt-20 max-w-5xl">
          {blogs.map((blog) => (
            <article key={blog.title} className="border-y border-white/25 py-8">
              <div className="grid gap-8 md:grid-cols-[240px_1fr] md:items-center">
                <img src={blog.image} alt="" className="aspect-square w-full rounded-sm object-cover md:w-60" />
                <div>
                  <h3 className="font-ubuntu text-2xl leading-tight text-brand md:text-3xl">{blog.title}</h3>
                  <p className="mt-5 font-ubuntu text-base leading-7 text-white/85">{blog.excerpt}</p>
                  <a href="#" className="mt-4 inline-flex border-b border-brand font-ubuntu text-brand">
                    Read More &gt;&gt;
                  </a>
                  <div className="mt-7 flex flex-wrap gap-5 font-ubuntu text-sm capitalize text-white">
                    <span className="rounded-full bg-steel px-3 py-1">{blog.label}</span>
                    <span>
                      <strong>Text</strong> {blog.author}
                    </span>
                    <span>
                      <strong>Date</strong> {blog.date}
                    </span>
                    <span>
                      <strong>Read</strong> {blog.duration}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-6">
          <button className="rounded-full bg-brand px-8 py-4 font-ubuntu text-xl capitalize text-ink transition hover:bg-mint">View More</button>
          <button className="rounded-full border-2 border-brand bg-ink px-8 py-4 font-ubuntu text-xl capitalize text-white transition hover:bg-brand hover:text-ink">Subscribe</button>
        </div>
      </div>
    </section>
  );
}
