import { EsiePage, esieMetadata } from "../esie-page";

export const metadata = esieMetadata("about");

export default function Page() {
  return <EsiePage view="about" />;
}
