import type { Metadata } from "next";
import { GuidesIndex } from "../guide-page";

const title = "Guides for International Property Buyers | ESIE";
const description =
  "Plain answers on buying property in Cape Town from abroad: the steps, non-resident mortgages, moving money, ownership structures and tax.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/guides" },
  openGraph: { title, description, url: "/guides", siteName: "ESIE Property Solutions", type: "website", locale: "en_GB", images: [{ url: "/images/wf2.jpg" }] },
};

export default function Page() {
  return <GuidesIndex />;
}
