export default function KineticWords({ text, className = "", wordClassName = "" }) {
  return (
    <span className={`kinetic-words ${className}`}>
      {text.split(" ").map((word, index) => (
        <span
          key={`${word}-${index}`}
          className={`kinetic-word ${wordClassName}`}
          style={{ "--word-index": index }}
        >
          {word}
        </span>
      ))}
    </span>
  );
}
