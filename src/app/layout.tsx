"use client";

import { Montserrat } from "next/font/google";
import Header from "./components/Header";
import GlobalStyles from "../globalStyles";
import Footer from "./components/Footer";

const montSerrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Sgt. Pepper's Lonely Hearts Club Band | The Beatles",
  description: "Sgt. Pepper's Lonely Hearts Club Band algum page",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={montSerrat.className}>
        <GlobalStyles />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
