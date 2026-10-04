import { BrandImage } from '@/components/ui/brand-image';
import { Eyebrow, LinkButton } from '@/components/ui/link-button';
export function OceanFeature() {
  return (
    <section className="flagship-section" id="ocean" aria-labelledby="ocean-heading">
      <div className="container flagship-grid">
        <div className="flagship-copy">
          <div className="flagship-identity">
            <span>Sri Chakra Agencies</span>
            <span aria-hidden="true">×</span>
            <div className="official-logo">
              <BrandImage id="ocean-identity" className="contain" sizes="140px" />
            </div>
          </div>
          <Eyebrow>Ocean Glass · Authorized Distribution</Eyebrow>
          <h2 id="ocean-heading">
            The Only Authorized
            <br />
            Ocean Glass Distributor
            <br />
            <span>in Hyderabad & Telangana.</span>
          </h2>
          <p>
            The glassware you choose. The source you can trust. Explore Ocean with the product
            knowledge and personal attention of Sri Chakra Agencies.
          </p>
          <div className="button-row">
            <LinkButton href="/brands/ocean" variant="light">
              Explore Ocean
            </LinkButton>
            <LinkButton href="/catalogues#ocean" variant="text">
              View Catalogue
            </LinkButton>
          </div>
        </div>
        <div className="flagship-products">
          <div className="flagship-product flagship-tall">
            <BrandImage id="ocean-gin" className="contain" sizes="30vw" />
          </div>
          <div className="flagship-product flagship-short">
            <BrandImage id="ocean-cocktail" className="contain" sizes="25vw" />
          </div>
          <span>CONNEXION COLLECTION</span>
        </div>
      </div>
    </section>
  );
}
