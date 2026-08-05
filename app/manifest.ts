import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "AIGO OS",
    short_name: "AIGO OS",
    description: "The AI Governance Operating System for the Enterprise.",
    start_url: "/",
    display: "standalone",
    background_color: "#f5f7fa",
    theme_color: "#0b1f33",
  };
}
