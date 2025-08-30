import PlasmicPageClient from "../../components/PlasmicPageClient";

export default function Catchall({ params }: { params?: { slug?: string[] } }) {
  const path = "/" + (params?.slug ? params.slug.join("/") : "");
  return <PlasmicPageClient path={path} />;
}
