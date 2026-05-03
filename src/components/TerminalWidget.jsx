import { useEffect, useState } from "react";

const terminalLines = [
  "Building APIs...",
  "Optimizing PostgreSQL queries...",
  "Training problem solving mode...",
  "Shipping clean React UI...",
  "Deploying portfolio...",
];

export default function TerminalWidget() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % terminalLines.length);
    }, 1800);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="terminal-widget" aria-label="Developer terminal status">
      <div className="terminal-widget__bar">
        <span />
        <span />
        <span />
      </div>
      <p>
        <span>$</span> {terminalLines[index]}
      </p>
    </div>
  );
}
