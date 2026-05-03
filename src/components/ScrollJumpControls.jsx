export default function ScrollJumpControls() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" });
  };

  return (
    <div className="scroll-jump-controls" aria-label="Page scroll controls">
      <button type="button" className="magnetic" onClick={scrollToTop} aria-label="Scroll to top">
        ↑
      </button>
      <button type="button" className="magnetic" onClick={scrollToBottom} aria-label="Scroll to bottom">
        ↓
      </button>
    </div>
  );
}
