import type { MetadataRoute } from "next";
import { getAllInsightsMeta } from "@/lib/insights";

const siteUrl = "https://princeperspect.in";

const staticRoutes = [
  { path: "/", changeFrequency: "monthly", priority: 1 },
  { path: "/about", changeFrequency: "monthly", priority: 0.8 },
  { path: "/experience", changeFrequency: "monthly", priority: 0.8 },
  { path: "/for-recruiters", changeFrequency: "monthly", priority: 0.8 },
  { path: "/insights", changeFrequency: "weekly", priority: 0.9 },
  { path: "/write", changeFrequency: "monthly", priority: 0.6 },
  { path: "/write/success", changeFrequency: "yearly", priority: 0.3 },
] as const;

function absoluteUrl(path: string) {
  return new URL(path, siteUrl).toString();
}

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = staticRoutes.map((route) => ({
    url: absoluteUrl(route.path),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const insightRoutes = getAllInsightsMeta().map((insight) => ({
    url: absoluteUrl(`/insights/${insight.slug}`),
    lastModified: new Date(insight.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...routes, ...insightRoutes];
}
