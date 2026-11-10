import { EsieScript, esieMetadata } from "../esie-page";

export const metadata = esieMetadata("privacy");

const email = "info@esiepropertysolutions.com";

/** Details still to be confirmed by ESIE, highlighted so they cannot be missed. */
function Fill({ children }: { children: string }) {
  return <mark className="ph-fill">{`[${children}]`}</mark>;
}

function Mail() {
  return <a href={`mailto:${email}`}>{email}</a>;
}

export default function Page() {
  return (
    <>
      <section className="view active" data-view="privacy">
        <section className="sec pv">
          <div className="wrap">
            <h1>Privacy policy</h1>
            <p className="pv-date">
              Last updated <Fill>date of publishing</Fill>
            </p>
            <p className="lede">
              This policy explains how ESIE Property Solutions (“ESIE”, “we”)
              collects and uses your personal information when you visit
              esiepropertysolutions.com or contact us. We follow South
              Africa’s Protection of Personal Information Act (POPIA) and, for
              people in the United Kingdom and the European Union, the UK GDPR
              and EU GDPR.
            </p>
            <div className="pv-body">
              <h2>Who we are</h2>
              <p>
                ESIE Property Solutions is{" "}
                <Fill>registered company name and registration number</Fill>,
                based at <Fill>business address</Fill>, Cape Town, South Africa.
                You can reach us at <Mail />.
              </p>
              <p>
                Our Information Officer is <Fill>name</Fill>, who you can
                contact at the same address about anything in this policy.
              </p>

              <h2>What we collect</h2>
              <ul>
                <li>
                  The details you send through our enquiry form or by email:
                  your name, email address and anything you include in your
                  message, such as your plans or circumstances.
                </li>
                <li>
                  Information you choose to share during your introductory call
                  and while we coordinate the services you ask for.
                </li>
                <li>
                  Basic technical information our hosting provider records
                  automatically when you visit, such as your IP address, browser
                  type and the pages requested. This is used only to run the
                  site securely.
                </li>
              </ul>
              <p>We do not use advertising or analytics cookies.</p>

              <h2>How we use it</h2>
              <ul>
                <li>To reply to your enquiry and arrange your introductory call.</li>
                <li>To prepare your quote and coordinate the services you choose.</li>
                <li>To keep the records the law requires.</li>
              </ul>
              <p>
                We do not sell your information or use it for unrelated
                marketing. For people in the UK and EU, we rely on your consent
                when you send an enquiry, on steps you ask us to take before an
                agreement, and on our legal obligations.
              </p>

              <h2>Sharing with our professional partners</h2>
              <p>
                We share your details with partners such as{" "}
                <Fill>
                  {
                    "confirm: estate agents, attorneys, conveyancers, financial and tax specialists"
                  }
                </Fill>{" "}
                only when it is needed for a service you have asked for, and we
                tell you before we do. Each partner is responsible for handling
                your information under its own legal obligations.
              </p>

              <h2>Service providers and international transfers</h2>
              <p>
                We use trusted providers to run this website and our email:
                Netlify, for website hosting and our enquiry form, and Google,
                for email and the fonts on this site. These providers may store
                or process information outside South Africa and outside your own
                country. We only use providers that protect personal information
                with appropriate safeguards, such as standard contractual
                clauses.
              </p>

              <h2>How long we keep it</h2>
              <p>
                Enquiries that do not lead to further work are deleted after{" "}
                <Fill>for example 12 months</Fill>. Records of services we
                coordinate are kept for <Fill>for example 5 years</Fill> after
                the work ends, where South African law requires it.
              </p>

              <h2>Your rights</h2>
              <p>
                You can ask us to show you the information we hold about you,
                correct it or delete it. You can also object to how we use it,
                or withdraw your consent at any time. If you are in the UK or
                EU, you can also ask us to restrict how we use it or to send you
                a copy in a portable format. Email <Mail /> and we will reply
                within <Fill>for example 30 days</Fill>.
              </p>
              <p>
                If you are unhappy with how we have handled your information,
                you can complain to the{" "}
                <a href="https://inforegulator.org.za" rel="noopener">
                  Information Regulator
                </a>{" "}
                in South Africa, the{" "}
                <a href="https://ico.org.uk" rel="noopener">
                  Information Commissioner’s Office
                </a>{" "}
                in the UK, or the data protection authority in your EU country.
              </p>

              <h2>Security</h2>
              <p>
                We take reasonable technical and organisational measures to
                protect your information. No method of sending information over
                the internet is completely secure, so please avoid sending
                identity documents or bank details by email unless we ask for
                them.
              </p>

              <h2>Children</h2>
              <p>
                Our services are for adults. We do not knowingly collect
                information from anyone under 18.
              </p>

              <h2>Changes to this policy</h2>
              <p>
                If we change this policy, we will update this page and the date
                at the top.
              </p>
            </div>
          </div>
        </section>
      </section>
      <EsieScript />
    </>
  );
}
