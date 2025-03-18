"use client";

import { ThemeProvider } from "next-themes";

import { NextUIProvider } from "@nextui-org/react";
import { PhotoProvider } from "react-photo-view";

import { backendV1 } from "@helpers/trpc/trpc";

function ProvidersBase({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider attribute="class" enableSystem={false} defaultTheme="light">
            <NextUIProvider>
                <PhotoProvider maskOpacity={0.5}>{children}</PhotoProvider>
            </NextUIProvider>
        </ThemeProvider>
    );
}
export const Providers = backendV1.withTRPC(ProvidersBase);
