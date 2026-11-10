import { EsiePage, esieMetadata } from "../esie-page";

export const metadata = esieMetadata("faq");

export default function Page() {
  return <EsiePage view="faq" />;
}
