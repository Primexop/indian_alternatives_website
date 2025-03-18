export const sanitizeAppName = (rawAppName: string): string => {
    if (!rawAppName) return "";
    let appName = rawAppName;
    // Trim leading and trailing whitespace
    appName = rawAppName.trim();

    // Removing all starting numbers
    appName = appName.replace(/^\d+/, "");

    // Replace multiple spaces between words with a single space
    appName = appName.replace(/\s+/g, " ");

    //replace all except alphanumeric and space
    appName = appName.replace(/[^a-zA-Z0-9 ]/g, "");

    return appName;
};

export const convertAppNameToAppSlug = (AppName: string): string => {
    let appSlug = sanitizeAppName(AppName);

    // replacing space
    appSlug = appSlug.replaceAll(/ /g, "-");

    // making small case
    appSlug = appSlug.toLowerCase();

    return appSlug;
};

export const convertAppSlugToApkPackageName = (appSlug: string): string => {
    const appUsername = appSlug.replaceAll("-", "_");
    const packageName = `com.${appUsername}.gaming_app`;

    return packageName;
};
