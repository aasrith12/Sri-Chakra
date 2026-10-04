'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Copy, Download, ArrowUpRight } from 'lucide-react';
import { useQuote } from './quote-provider';
import { formatRequirement, buildWhatsAppUrl } from '@/lib/enquiry';
import { getBrand, products, variants } from '@/lib/catalog/repository';
import { BrandImage } from '@/components/ui/brand-image';
import { LinkButton } from '@/components/ui/link-button';
export function QuoteReview({ context = '' }: { context?: string }) {
  const { lines, ready, update, remove, storageError } = useQuote();
  const [notes, setNotes] = useState(context ? `Requirement for ${context}` : '');
  const [status, setStatus] = useState('');
  const text = formatRequirement(lines, notes);
  const phone = process.env.NEXT_PUBLIC_BUSINESS_WHATSAPP ?? '';
  const hasPhone = /^\d{10,15}$/.test(phone);
  const canPrepare = lines.length > 0 || notes.trim().length > 0;
  const whatsappUrl = canPrepare ? buildWhatsAppUrl(phone, text) : null;
  const download = () => {
    const url = URL.createObjectURL(new Blob([text], { type: 'text/plain;charset=utf-8' }));
    const a = document.createElement('a');
    a.href = url;
    a.download = 'sri-chakra-requirement.txt';
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    setStatus('Your requirement has been downloaded. It has not been sent.');
  };
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setStatus('Requirement copied. Ready to share with your representative.');
    } catch {
      setStatus('Copy is unavailable in this browser. Please download your requirement instead.');
    }
  };
  return (
    <div className="quote-layout">
      <div>
        {!ready ? (
          <p role="status">Loading your Quote List…</p>
        ) : lines.length ? (
          lines.map((line) => {
            const variant = variants.find((v) => v.id === line.variantId)!;
            const product = products.find((p) => p.id === variant.productId)!;
            return (
              <article className="quote-item" key={line.variantId}>
                <Link
                  href={`/products/${product.slug}`}
                  className="quote-item-image"
                  aria-label={`View ${product.name}`}
                >
                  <BrandImage
                    id={variant.assetId ?? product.assetId ?? ''}
                    className="contain"
                    sizes="80px"
                  />
                </Link>
                <div>
                  <p className="eyebrow">{getBrand(product.brandId).name}</p>
                  <h2>
                    <Link href={`/products/${product.slug}`}>{product.name}</Link>
                  </h2>
                  <p>
                    {Object.values(variant.options).join(' · ')}
                    {variant.manufacturerSku && ` / ${variant.manufacturerSku}`}
                  </p>
                  <div className="quantity-row">
                    <label>
                      Requested pieces
                      <input
                        aria-label={`Quantity for ${product.name}`}
                        type="number"
                        min={1}
                        max={10000}
                        step={1}
                        value={line.quantity}
                        onChange={(e) => {
                          const value = Number(e.target.value);
                          if (Number.isInteger(value) && value >= 1 && value <= 10000)
                            update(line.variantId, value);
                        }}
                      />
                    </label>
                    <button
                      className="remove-button"
                      aria-label={`Remove ${product.name}`}
                      onClick={() => remove(line.variantId)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </article>
            );
          })
        ) : (
          <div className="empty-state">
            <h2>A good place to start.</h2>
            <p>
              Add products to your Quote List, or describe a requirement in the space alongside.
            </p>
            <LinkButton href="/products">Explore Products</LinkButton>
          </div>
        )}
        {storageError && (
          <p className="small mt-5" role="status">
            Your browser cannot save this list between visits. Download it before leaving.
          </p>
        )}
        <p className="small muted mt-6">
          Quantities describe the pieces you need. Supply packs and minimum order quantities will be
          confirmed separately.
        </p>
      </div>
      <div className="quote-summary">
        <h2>Review Requirement</h2>
        <p>
          {lines.length} selected {lines.length === 1 ? 'product' : 'products'}. Add any other
          details that will help us understand what you need.
        </p>
        <label htmlFor="requirement-notes">Additional requirements</label>
        <textarea
          id="requirement-notes"
          placeholder="Your business, products or SKUs, preferred colours, quantities and timing…"
          maxLength={2000}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
        <div className="button-row">
          <button
            className="button button-primary"
            disabled={!canPrepare || !ready}
            onClick={download}
          >
            Download requirement
            <Download size={16} />
          </button>
          <button className="button button-outline" disabled={!canPrepare || !ready} onClick={copy}>
            Copy
            <Copy size={15} />
          </button>
        </div>
        {whatsappUrl ? (
          <a
            className="button button-text mt-4"
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
          >
            Continue on WhatsApp
            <ArrowUpRight size={15} />
          </a>
        ) : (
          <p className="small">
            {hasPhone
              ? 'Download your full list to share with our team.'
              : 'Online sending is not available yet. Download your requirement to share with your Sri Chakra representative.'}
          </p>
        )}
        <p className="quote-status" role="status">
          {status}
        </p>
      </div>
    </div>
  );
}
