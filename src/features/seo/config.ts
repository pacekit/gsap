export const seoConfig = {
    url: "https://gsap.pacekit.dev",
    title: "Interactive animations shaping every experience | PaceKit GSAP",
    defaultTitle: "PaceKit GSAP",
    siteName: "PaceKit GSAP",
    description:
        "Animated GSAP components crafted for smooth interaction and rich detail. Copy, customise, and create without the extra setup.",
    siteNameTwitter: "@pacekit_",
    author: "PaceKit",
    authorUrl: "https://pacekit.dev",
    publisher: "Pacekit",
    keywords: [
        "Pace Kit",
        "React GSAP",
        "Tailwind CSS Components",
        "Dashboard UI",
        "GSAP Animations",
        "TypeScript UI Library",
    ],
    logoIcon: "/images/brand/logo-icon.png",
    image: "/images/brand/og/default.jpg",
    faviconIco: "/images/brand/favicon.ico",
    favicon32: "/images/brand/favicon-32.png",
    favicon48: "/images/brand/favicon-48.png",
    favicon96: "/images/brand/favicon-96.png",
    favicon144: "/images/brand/favicon-144.png",
    favicon180: "/images/brand/favicon-180.png",
    favicon512: "/images/brand/favicon-512.png",
};

export const getCombinedSchema = () => {
    const parentBaseUrl = "https://pacekit.dev";
    const baseUrl = "https://gsap.pacekit.dev";

    const author = {
        "@id": `${parentBaseUrl}/#person`,
        "@type": "Person",
        name: "Den",
        url: "https://www.withden.dev",
    };

    const organization = {
        "@id": `${parentBaseUrl}/#organization`,
        "@type": "Organization",
        name: "PaceKit",
        url: parentBaseUrl,
        logo: `${parentBaseUrl}/images/brand/logo-icon.png`,
    };

    const website = {
        "@type": "CollectionPage",
        "@id": `${baseUrl}/#webpage`,
        url: baseUrl,
        name: "PaceKit GSAP - Animations Components",
        description: "Animated GSAP components crafted for smooth interaction and rich detail.",
        isPartOf: { "@id": `${parentBaseUrl}/#website` },
        publisher: { "@id": `${parentBaseUrl}/#organization` },
    };

    const app = {
        "@type": "SoftwareSourceCode",
        "@id": `${baseUrl}/#library`,
        name: "PaceKit GSAP",
        description: "Animated GSAP components crafted for smooth interaction and rich detail.",
        runtimePlatform: "React",
        programmingLanguage: "TypeScript",
        codeRepository: "https://github.com/pacekit",
        author: { "@id": `${parentBaseUrl}/#person` },
        publisher: { "@id": `${parentBaseUrl}/#organization` },
    };

    return {
        "@context": "https://schema.org",
        "@graph": [website, author, organization, app],
    };
};
