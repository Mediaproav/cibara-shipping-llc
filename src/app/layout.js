import localFont from "next/font/local";
import "./globals.css";
import Head from "next/head";
import NavBarComp from "../components/NavBarComp/NavBarComp";
import ComingSoonComp from "../components/ComingSoonComp/index";

import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({ subsets: ["latin"], weight: ["300", "400"] });

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Cibara Shipping LLC",
  description: "Global Freight Solution That You Can Trust",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <Head>
          <link
            rel="icon"
            type="image/png"
            href="./assets/favicon-48x48.png"
            sizes="48x48"
          />
          <link rel="icon" type="image/svg+xml" href="./assets/favicon.svg" />
          <link rel="shortcut icon" href="./assets/favicon.ico" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="./assets/apple-touch-icon.png"
          />
          <meta name="apple-mobile-web-app-title" content="Cibara Shipping" />
          <link rel="manifest" href="./assets/site.webmanifest" />
          <link rel="stylesheet" href="./assets/globals.css" />
        </Head>
      </Head>
      <body className={openSans.className}>
        {/* <NavBarComp /> */}
        {children}
      </body>
    </html>
  );
}
