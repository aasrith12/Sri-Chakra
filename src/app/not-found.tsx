import { LinkButton } from '@/components/ui/link-button';
export default function NotFound() {
  return (
    <div className="container section">
      <div className="empty-state">
        <p className="eyebrow justify-center mb-5">A little off course</p>
        <h1 className="text-6xl">Let’s find your centre.</h1>
        <p>This page could not be found. Explore our collection to continue.</p>
        <LinkButton href="/products">Explore Products</LinkButton>
      </div>
    </div>
  );
}
