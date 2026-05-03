import { useEffect, useState } from "react";

export default function InteractionLayer() {
  const [progress, setProgress] = useState(0);
  const [ripples, setRipples] = useState([]);

  useEffect(() => {
    const root = document.documentElement;

    const handleMouseMove = (event) => {
      root.style.setProperty("--cursor-x", `${event.clientX}px`);
      root.style.setProperty("--cursor-y", `${event.clientY}px`);

      const magnetic = event.target.closest(".magnetic");
      document.querySelectorAll(".magnetic.is-magnetic").forEach((node) => {
        if (node !== magnetic) {
          node.classList.remove("is-magnetic");
          node.style.removeProperty("--magnet-x");
          node.style.removeProperty("--magnet-y");
        }
      });

      if (magnetic) {
        const rect = magnetic.getBoundingClientRect();
        const x = event.clientX - rect.left - rect.width / 2;
        const y = event.clientY - rect.top - rect.height / 2;
        magnetic.classList.add("is-magnetic");
        magnetic.style.setProperty("--magnet-x", `${x * 0.22}px`);
        magnetic.style.setProperty("--magnet-y", `${y * 0.22}px`);
      }

      const tilt = event.target.closest(".tilt-3d");
      if (tilt) {
        const rect = tilt.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        tilt.style.setProperty("--tilt-x", `${(-y * 10).toFixed(2)}deg`);
        tilt.style.setProperty("--tilt-y", `${(x * 12).toFixed(2)}deg`);
        tilt.style.setProperty("--tilt-lift", "-9px");
      }
    };

    const handleMouseOut = (event) => {
      const magnetic = event.target.closest(".magnetic");
      if (magnetic && !magnetic.contains(event.relatedTarget)) {
        magnetic.classList.remove("is-magnetic");
        magnetic.style.removeProperty("--magnet-x");
        magnetic.style.removeProperty("--magnet-y");
      }

      const tilt = event.target.closest(".tilt-3d");
      if (tilt && !tilt.contains(event.relatedTarget)) {
        tilt.style.removeProperty("--tilt-x");
        tilt.style.removeProperty("--tilt-y");
        tilt.style.removeProperty("--tilt-lift");
      }
    };

    const handleClick = (event) => {
      const target = event.target.closest("a, button");
      if (!target) return;

      const id = `${Date.now()}-${Math.random()}`;
      const label = target.getAttribute("aria-label") || target.textContent?.trim() || "run";
      setRipples((current) => [
        ...current.slice(-4),
        {
          id,
          x: event.clientX,
          y: event.clientY,
          label: `> ${label.slice(0, 18)}`,
        },
      ]);

      window.setTimeout(() => {
        setRipples((current) => current.filter((ripple) => ripple.id !== id));
      }, 900);
    };

    const handleScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? Math.min(100, (window.scrollY / scrollable) * 100) : 0);
    };

    handleScroll();
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseOut);
    window.addEventListener("click", handleClick);
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseOut);
      window.removeEventListener("click", handleClick);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="cursor-spotlight" aria-hidden="true" />
      <div className="scroll-progress" aria-hidden="true">
        <span style={{ transform: `scaleX(${progress / 100})` }} />
      </div>
      <div className="click-ripple-layer" aria-hidden="true">
        {ripples.map((ripple) => (
          <span
            key={ripple.id}
            className="click-ripple"
            style={{ left: ripple.x, top: ripple.y }}
          >
            {ripple.label}
          </span>
        ))}
      </div>
    </>
  );
}
