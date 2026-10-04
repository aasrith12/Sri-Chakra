import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
export function LinkButton({
  href,
  children,
  variant = 'primary',
  className = '',
}: {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'light' | 'text';
  className?: string;
}) {
  return (
    <Link href={href} className={`button button-${variant} ${className}`}>
      {children}
      <ArrowUpRight size={17} aria-hidden="true" />
    </Link>
  );
}
export function Eyebrow({ children, number }: { children: React.ReactNode; number?: string }) {
  return (
    <p className="eyebrow">
      {number && <span className="section-number">{number}</span>}
      {children}
    </p>
  );
}
