declare const router: import("express-serve-static-core").Router;
export { router as dummyxWebsiteTrpcRestRouter };
export declare const dummyxWebsiteTrpcRouter: import("@trpc/server").CreateRouterInner<import("@trpc/server").RootConfig<{
    ctx: object;
    meta: object;
    errorShape: never;
    transformer: typeof import("superjson").default;
}>, {
    demoTest: import("@trpc/server").CreateRouterInner<import("@trpc/server").RootConfig<{
        ctx: object;
        meta: object;
        errorShape: never;
        transformer: typeof import("superjson").default;
    }>, {
        getData: import("@trpc/server").BuildProcedure<"query", {
            _config: import("@trpc/server").RootConfig<{
                ctx: object;
                meta: object;
                errorShape: never;
                transformer: typeof import("superjson").default;
            }>;
            _meta: object;
            _ctx_out: {
                mysqlDB: import("../../../../prisma/dummyx/generatedClient/index.js").PrismaClient<{
                    transactionOptions: {
                        isolationLevel: "Serializable";
                    };
                }, never, import("../../../../prisma/dummyx/generatedClient/runtime/library.js").DefaultArgs>;
            };
            _input_in: void;
            _input_out: void;
            _output_in: typeof import("@trpc/server").unsetMarker;
            _output_out: typeof import("@trpc/server").unsetMarker;
        }, {
            status: "success" | "error";
            message: string;
            result?: {
                totalAppsCount: number;
            };
        }>;
    }>;
    home: import("@trpc/server").CreateRouterInner<import("@trpc/server").RootConfig<{
        ctx: object;
        meta: object;
        errorShape: never;
        transformer: typeof import("superjson").default;
    }>, {
        getData: import("@trpc/server").BuildProcedure<"query", {
            _config: import("@trpc/server").RootConfig<{
                ctx: object;
                meta: object;
                errorShape: never;
                transformer: typeof import("superjson").default;
            }>;
            _meta: object;
            _ctx_out: {
                mysqlDB: import("../../../../prisma/dummyx/generatedClient/index.js").PrismaClient<{
                    transactionOptions: {
                        isolationLevel: "Serializable";
                    };
                }, never, import("../../../../prisma/dummyx/generatedClient/runtime/library.js").DefaultArgs>;
            };
            _input_in: void;
            _input_out: void;
            _output_in: typeof import("@trpc/server").unsetMarker;
            _output_out: typeof import("@trpc/server").unsetMarker;
        }, {
            status: "success" | "error";
            message: string;
            result?: {
                totalAppsCount: number;
            };
        }>;
    }>;
    contactRequests: import("@trpc/server").CreateRouterInner<import("@trpc/server").RootConfig<{
        ctx: object;
        meta: object;
        errorShape: never;
        transformer: typeof import("superjson").default;
    }>, {
        create: import("@trpc/server").BuildProcedure<"mutation", {
            _config: import("@trpc/server").RootConfig<{
                ctx: object;
                meta: object;
                errorShape: never;
                transformer: typeof import("superjson").default;
            }>;
            _meta: object;
            _ctx_out: {
                mysqlDB: import("../../../../prisma/dummyx/generatedClient/index.js").PrismaClient<{
                    transactionOptions: {
                        isolationLevel: "Serializable";
                    };
                }, never, import("../../../../prisma/dummyx/generatedClient/runtime/library.js").DefaultArgs>;
            };
            _input_in: {
                message?: string;
                email?: string;
                firstName?: string;
                lastName?: string;
                whatsAppNumber?: string;
                whatsAppCountryCode?: string;
            };
            _input_out: {
                message?: string;
                email?: string;
                firstName?: string;
                lastName?: string;
                whatsAppNumber?: string;
                whatsAppCountryCode?: string;
            };
            _output_in: typeof import("@trpc/server").unsetMarker;
            _output_out: typeof import("@trpc/server").unsetMarker;
        }, {
            status: "success" | "error";
            message: string;
            result?: {
                message: string;
                createdAt: number;
                email: string;
                updatedAt: number | null;
                contactRequestId: number;
                firstName: string;
                lastName: string;
                whatsAppNumber: string;
                whatsAppCountryCode: string;
            };
        }>;
    }>;
}>;
export type websiteTrpcRouterTypes = typeof dummyxWebsiteTrpcRouter;
