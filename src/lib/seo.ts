import { siteConfig } from "./site";

export const defaultSEO = {
  title: siteConfig.title,
  description: siteConfig.description,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
};

export function generatePageSEO(title: string, description: string) {
  return {
    title: `${title} | ${siteConfig.name}`,
    description,
    openGraph: {
      ...defaultSEO.openGraph,
      title: `${title} | ${siteConfig.name}`,
      description,
    },
    twitter: {
      ...defaultSEO.twitter,
      title: `${title} | ${siteConfig.name}`,
      description,
    },
  };
}
