import { backendEndpoint } from "@serverB2f/constants/development";

import { projectInfo } from "@b2fPortal/projectB2f/constants/projectInfo";

export let isLocalEnvironnement = true;

export let trpcBaseUrl: string;
export let restBaseUrl: string;
export let onesignalAppId: string;

export let webApkBaseUrl: string;

const projectSlug = projectInfo.slug;
const sectionSlug = projectInfo.sections.website.slug;

function isUrlHasPort(url: string): boolean {
    try {
        const parsedURL = new URL(url);
        return parsedURL.port !== "";
    } catch (error) {
        // URL parsing failed, return false
        return false;
    }
}

// console.log(window.location);
if (typeof window !== "undefined") {
    if (isUrlHasPort(window.location.origin) || window.location.origin.includes("-dev")) {
        // console.log(window.location.hostname);
    } else {
        isLocalEnvironnement = false;
    }
}

console.log(isLocalEnvironnement);

if (isLocalEnvironnement === true) {
    // local links
    console.log({ NEXT_PUBLIC_DEV_ENVIRONMENT_TYPE: process.env.NEXT_PUBLIC_DEV_ENVIRONMENT_TYPE });
    if (process.env.NEXT_PUBLIC_DEV_ENVIRONMENT_TYPE === "backend") {
        console.log("inside dev backed");

        trpcBaseUrl = `${backendEndpoint.development.local}/trpc/${projectSlug}/${sectionSlug}`;
        restBaseUrl = `${backendEndpoint.development.local}/rest/${projectSlug}/${sectionSlug}`;
    } else {
        console.log("inside dev remote");
        trpcBaseUrl = `${backendEndpoint.development.remote}/trpc/${projectSlug}/${sectionSlug}`;
        restBaseUrl = `${backendEndpoint.development.remote}/rest/${projectSlug}/${sectionSlug}`;
    }
    onesignalAppId = "cb424881-2e7b-4a48-93fd-d27e81d692f7";

    webApkBaseUrl = "http://localhost:3000";
} else {
    // production links

    trpcBaseUrl = `${backendEndpoint.production.remote}/trpc/${projectSlug}/${sectionSlug}`;
    restBaseUrl = `${backendEndpoint.production.remote}/rest/${projectSlug}/${sectionSlug}`;
    onesignalAppId = "92644a8d-4362-4bf2-857f-469e9ecaae39";

    webApkBaseUrl = "https://mtawar.primexop.com";
}
