import { httpBatchLink } from "@trpc/client";
import { createTRPCNext } from "@trpc/next";
import type { websiteTrpcRouterTypes } from "@b2fPortal/dist/dummyx/website/trpcApi/trpcRouter";
import superjson from "superjson";
import { trpcBaseUrl } from "../config";
import { inferRouterInputs, inferRouterOutputs } from "@trpc/server";

export const backendV1 = createTRPCNext<websiteTrpcRouterTypes>({
    config({ ctx }) {
        return {
            transformer: superjson,
            links: [
                httpBatchLink({
                    /**
                     * If you want to use SSR, you need to use the server's full URL
                     * @link https://trpc.io/docs/ssr
                     **/
                    url: trpcBaseUrl,
                }),
            ],
            /**
             * @link https://tanstack.com/query/v4/docs/reference/QueryClient
             **/
            // queryClientConfig: { defaultOptions: { queries: { staleTime: 60 } } },
        };
    },
    /**
     * @link https://trpc.io/docs/ssr
     **/
    ssr: false,
});

export type TBackendV1Input = inferRouterInputs<websiteTrpcRouterTypes>;
export type TBackendV1Output = inferRouterOutputs<websiteTrpcRouterTypes>;
