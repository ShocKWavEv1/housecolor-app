import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./provider";
import Head from "next/head";

export const metadata: Metadata = {
  title: "housecolor | we live in the details",
  description: "construimos experiencias y productos digitales",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
