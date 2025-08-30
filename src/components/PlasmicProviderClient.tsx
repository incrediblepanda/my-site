"use client";
import { ReactNode } from "react";
import { PlasmicRootProvider } from "@plasmicapp/loader-nextjs";
import { PLASMIC } from "../plasmic-init";

export default function PlasmicProviderClient({ children }: { children: ReactNode }) {
  return <PlasmicRootProvider loader={PLASMIC}>{children}</PlasmicRootProvider>;
}
