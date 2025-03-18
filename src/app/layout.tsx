import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./common/theme-provider";
import { Navbar } from "./common/navbar";
import { Footer } from "./common/footer";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter",
});

const poppins = Poppins({
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
    display: "swap",
    variable: "--font-poppins",
});

export const metadata: Metadata = {
    title: "Indian Alternatives - Find Indian Alternatives to Popular Products",
    description: "Discover Indian alternatives to popular products and services. Support Indian innovation and self-reliance with our curated list of alternatives.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <div className="min-h-screen flex flex-col">
                        <Navbar />
                        <main className="flex-grow">{children}</main>
                        <Footer />
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
