import type { Metadata } from "next";
import { Montserrat } from 'next/font/google'; 
import "./globals.css";
import WrapperPage from "./_page";

const montserrat = Montserrat({
  subsets: ['latin'],  // You can add more subsets if you need them (e.g., ['latin', 'latin-ext'])
  weight: ['400', '600'], // You can specify font weights you want to use
});


export const metadata: Metadata = {
  title: "Marketing Agency |Ariz Global",
  description: "Marketing agency, web development, Graphic design, Creative content",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${montserrat.className} antialiased`}
      >
        <WrapperPage>{children}</WrapperPage>
      </body>
    </html>
  );
}
