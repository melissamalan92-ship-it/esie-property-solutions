import { EsiePage, esieMetadata } from "../esie-page";

export const metadata = esieMetadata("services");

export default function Page() {
  return <EsiePage view="services" />;
}
