"use client";
import { useEffect, useState } from "react";
import { PLASMIC } from "../plasmic-init";
import { PlasmicComponent } from "@plasmicapp/loader-nextjs";

export default function PlasmicPageClient({ path }: { path: string }) {
  const [data, setData] = useState<any>(null);
  const [name, setName] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    PLASMIC.fetchComponentData(path).then((d) => {
      if (!mounted) return;
      const n = d?.entryCompMetas?.[0]?.displayName ?? null;
      setData(d);
      setName(n);
    });
    return () => {
      mounted = false;
    };
  }, [path]);

  if (!data || !name) return null;
  return <PlasmicComponent component={name} plasmicData={data} />;
}