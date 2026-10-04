export function ChakraMark({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 80 80" fill="none" aria-hidden="true">
      <circle cx="40" cy="40" r="35" stroke="currentColor" strokeWidth=".8" />
      <path
        d="M40 8 69 59H11L40 8ZM40 72 11 21H69L40 72ZM40 23 56 51H24L40 23ZM40 57 24 29H56L40 57Z"
        stroke="currentColor"
        strokeWidth="1"
      />
      <circle cx="40" cy="40" r="2" fill="currentColor" />
    </svg>
  );
}
export function Identity() {
  return (
    <span className="identity">
      <ChakraMark />
      <span>
        <span className="identity-name">Sri Chakra</span>
        <span className="identity-sub">A G E N C I E S</span>
      </span>
    </span>
  );
}
