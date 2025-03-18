import { Bai_Jamjuree } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import "react-photo-view/dist/react-photo-view.css";
import { Metadata } from "next";
import { metaData } from "./constants";
import { Header } from "./common/header";
import { Footer } from "./common/footer";

const fontFamily = Bai_Jamjuree({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"], display: "swap" });

export const metadata: Metadata = {
    metadataBase: new URL("https://primexop.com"),
    title: metaData.title,
    description: metaData.description,
    keywords: metaData.keywords,
    robots: "index, follow",
    alternates: {
        canonical: "/"
    },
    openGraph: {
        title: metaData.title,
        description: metaData.description,
        type: "website",
        locale: "en_IN",
        siteName: "Indian Alternatives",
        images: [{
            url: "/images/indian-alternatives-logo.svg",
            width: 1200,
            height: 630,
            alt: "Indian Alternatives"
        }]
    },
    twitter: {
        card: "summary_large_image",
        title: metaData.title,
        description: metaData.description,
        images: ["/images/indian-alternatives-logo.svg"]
    }
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html suppressHydrationWarning={true} lang="en">
            {/* <head>
      <link rel="icon" href="favicon.ico" sizes="any" />
    </head> */}

            <body
                className={fontFamily.className + " bg-[#ffffffec] dark:bg-black dark:text-white "}
                suppressHydrationWarning={true}
            >
                {/* TODO: Fix the type error */}
                {/* @ts-expect-error   unexpected type error */}
                <Providers>
                    <div className="flex flex-col min-h-screen justify-between overflow-hidden">
                        <Header />

                        <div className="mb-auto pt-24">{children}</div>

                        <Footer />
                        {/* <ScrollToTop /> */}
                    </div>
                </Providers>
            </body>
        </html>
    );
}
