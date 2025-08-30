import { notFound } from "next/navigation";
import { PLASMIC } from "../../plasmic-init";
import { PlasmicComponent } from "@plasmicapp/loader-nextjs";

export default async function PlasmicCatchall({ params }: { params?: { slug?: string[] } }) {
  const slug = "/" + (params?.slug ? params.slug.join("/") : "");
  const plasmicData = await PLASMIC.fetchComponentData(slug);
  if (!plasmicData || plasmicData.entryCompMetas.length === 0) {
    notFound();
  }
  const pageComponent = plasmicData.entryCompMetas[0].displayName;
  return <PlasmicComponent component={pageComponent} plasmicData={plasmicData} />;
}
