const localHostname = "localhost";

export const localPort = 3211;
try {
    // if (window) {
    //     localHostname = window.location.hostname;
    // }
} catch (e) {
    // console.log(e);
}

export const localTunnelSubdomain = "shared-two-dev";

export const backendEndpoint = {
    development: {
        local: `http://${localHostname}:${localPort}`,
        remote: `https://s1-api.primexop.com`,
    },
    production: {
        remote: "https://s1-api.primexop.com",
    },
};
