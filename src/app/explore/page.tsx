import { EsiePage, esieMetadata } from "../esie-page";

export const metadata = esieMetadata("explore");

export default function Page() {
  return <EsiePage view="explore" />;
}
