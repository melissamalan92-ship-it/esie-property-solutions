import { EsiePage, esieMetadata } from "./esie-page";

export const metadata = esieMetadata("home");

export default function Page() {
  return <EsiePage view="home" />;
}
