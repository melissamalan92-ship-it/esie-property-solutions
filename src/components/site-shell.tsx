// Shared page chrome: header, mobile menu, floating buttons, page curtain and footer.
// Class names and ids are what public/esie.js and esie.css hook into, so keep them stable.
// Plain <a> links on purpose: public/esie.js handles page changes (with the curtain transition).
/* eslint-disable @next/next/no-html-link-for-pages */

const pages = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/explore", label: "Explore Cape Town" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

const cta = "Request a call";
const email = "info@esiepropertysolutions.com";

export function FloatingActions() {
  return (
    <>
      <button
        type="button"
        className="fab-top"
        id="fabTop"
        aria-label="Back to top"
      >
        <svg viewBox="0 0 14 28" aria-hidden="true">
          <path d="M7 27V1.5M1.5 7 7 1.5 12.5 7" />
        </svg>
      </button>
      <div className="fab" id="fab">
        <a href="/contact" className="fab-call" id="fabCall" aria-label={cta}>
          <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4.5 6.5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7.5a2 2 0 0 1-2 2H10l-4.2 3.3c-.4.3-.8 0-.8-.4V16h0a2 2 0 0 1-.5-1.3z" />
            <path d="M8.5 9.3h7M8.5 12.2h4.5" />
          </svg>
          <span className="lbl">{cta}</span>
          <span className="dot" aria-hidden="true"></span>
        </a>
      </div>
    </>
  );
}

export function Curtain() {
  return (
    <div className="curtain" aria-hidden="true">
      <span className="logo">ESIE</span>
    </div>
  );
}

export function Header() {
  return (
    <>
      <header className="hdr" id="hdr">
        <nav className="wrap nav" aria-label="Main">
          <a href="/" className="logo" aria-label="ESIE Property Solutions, home">
            ESIE Property Solutions
          </a>
          <ul>
            {pages.map((p) => (
              <li key={p.href}>
                <a href={p.href}>{p.label}</a>
              </li>
            ))}
            <li className="cta-li">
              <a href="/contact" className="btn fill">
                {cta}
              </a>
            </li>
          </ul>
          <div className="cta-r">
            <a href="/contact" className="btn fill">
              {cta} <span className="ar">↗</span>
            </a>
          </div>
          <button
            className="burger"
            id="burger"
            aria-expanded="false"
            aria-controls="mmenu"
            aria-label="Open menu"
          >
            <span></span>
            <span></span>
          </button>
        </nav>
      </header>
      <div className="mmenu" id="mmenu">
        {pages.map((p) => (
          <a key={p.href} className="big" href={p.href}>
            {p.label}
          </a>
        ))}
        <div className="meta">
          <span>Cape Town, South Africa</span>
          <span>{cta}</span>
        </div>
      </div>
    </>
  );
}

export function Footer() {
  return (
    <footer>
      <div className="fcta">
        <div className="fimg">
          {/* Placeholder photo; moves to next/image when the real photos arrive. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/vinepool.jpg"
            data-img="vinepool"
            alt="Sun loungers beside a pool overlooking vineyards in the Cape Winelands"
            loading="lazy"
          />
        </div>
        <div className="ftxt">
          <h2>Let&apos;s find your place in South Africa</h2>
          <p>
            Email us to arrange a short introductory call. We&apos;ll give you a
            clear picture of the process, then a personalised quote.
          </p>
          <a href="/contact" className="btn lt">
            {cta} <span className="ar">→</span>
          </a>
        </div>
      </div>
      <div className="wrap">
        <div className="ft">
          <div>
            <span className="logo" style={{ display: "block" }}>
              ESIE
            </span>
            <p>
              Helping international buyers purchase property in South Africa.
              Based in Cape Town.
            </p>
          </div>
          <div>
            <h4>Pages</h4>
            <ul>
              {pages.map((p) => (
                <li key={p.href}>
                  <a href={p.href}>{p.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <p>
              <a href={`mailto:${email}`}>{email}</a>
            </p>
            <p style={{ marginTop: 8 }}>Cape Town, South Africa</p>
          </div>
        </div>
        <div className="legal">
          <p>
            ESIE coordinates access to professional partners. Regulated
            financial, legal, tax, conveyancing and other specialist services
            must be provided by appropriately authorised professionals.
          </p>
          <p>
            © 2026 ESIE Property Solutions · Cape Town ·{" "}
            <a href="/privacy">Privacy policy</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
