import { EsiePage, esieMetadata } from "../esie-page";

export const metadata = esieMetadata("contact");

export default function Page() {
  return <EsiePage view="contact" />;
}
