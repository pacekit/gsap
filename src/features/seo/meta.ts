import { seoConfig } from "./config";

export interface HeadMetaProps {
    title?: string;
    description?: string;
    image?: string;
    links?: any[];
}

const getAbsolutePath = (path: string) => {
    if (path.startsWith("http")) return path;
    const cleanPath = path.startsWith("/") ? path : `/${path}`;
    return `${seoConfig.url}${cleanPath}`;
};

export const getHeadMeta = (props: HeadMetaProps = {}) => {
    const url = seoConfig.url;
    const title = props.title ? `${props.title} | ${seoConfig.defaultTitle}` : seoConfig.title;
    const description = props.description ?? seoConfig.description;
    const image = getAbsolutePath(props.image ?? seoConfig.image);
    const siteName = seoConfig.siteName;
    const faviconIco = seoConfig.faviconIco;
    const favicon32 = seoConfig.favicon32;
    const favicon48 = seoConfig.favicon48;
    const favicon96 = seoConfig.favicon96;
    const favicon144 = seoConfig.favicon144;
    const favicon180 = seoConfig.favicon180;
    const favicon512 = seoConfig.favicon512;
    const keywords = seoConfig.keywords;
    const siteNameTwitter = seoConfig.siteNameTwitter;

    return {
        meta: [
            { charSet: "utf-8" },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1",
            },
            { title },
            { name: "description", content: description },
            { name: "keywords", content: keywords.join(", ") },
            { name: "author", content: seoConfig.author },
            { name: "creator", content: seoConfig.author },
            { name: "publisher", content: seoConfig.publisher },
            { name: "application-name", content: siteName },
            { name: "category", content: "technology" },
            { name: "classification", content: "SaaS Boilerplate" },
            // Open Graph
            { property: "og:type", content: "website" },
            { property: "og:locale", content: "en_US" },
            { property: "og:title", content: title },
            { property: "og:description", content: description },
            { property: "og:image", content: image },
            { property: "og:image:alt", content: title },
            { property: "og:url", content: url },
            { property: "og:site_name", content: siteName },
            // Twitter
            { name: "twitter:card", content: "summary_large_image" },
            { name: "twitter:title", content: title },
            { name: "twitter:description", content: description },
            { name: "twitter:site", content: siteNameTwitter },
            { name: "twitter:creator", content: siteNameTwitter },
            { name: "twitter:image", content: image },
            { name: "twitter:image:alt", content: title },
            // Other
            { name: "format-detection", content: "telephone=no, address=no, email=no" },
            {
                name: "theme-color",
                content: "#ffffff",
                media: "(prefers-color-scheme: light)",
            },
            {
                name: "theme-color",
                content: "#090909",
                media: "(prefers-color-scheme: dark)",
            },
        ],
        links: [
            { rel: "author", href: seoConfig.authorUrl },
            { rel: "canonical", href: url },
            { rel: "icon", href: faviconIco, sizes: "any" },
            { rel: "icon", type: "image/png", sizes: "32x32", href: favicon32 },
            { rel: "icon", type: "image/png", sizes: "48x48", href: favicon48 },
            { rel: "icon", type: "image/png", sizes: "96x96", href: favicon96 },
            { rel: "icon", type: "image/png", sizes: "144x144", href: favicon144 },
            { rel: "icon", type: "image/png", sizes: "512x512", href: favicon512 },
            { rel: "apple-touch-icon", type: "image/png", sizes: "180x180", href: favicon180 },
            ...(props.links ?? []),
        ],
    };
};
