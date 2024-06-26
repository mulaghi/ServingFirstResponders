import { Are_You_Serious, Inter, Staatliches } from "next/font/google";
import "./globals.css";
import { setupFsCheck } from "next/dist/server/lib/router-utils/filesystem";
import { OPTIMIZED_FONT_PROVIDERS } from "next/dist/shared/lib/constants";
import Navbar from "../components/Navbar";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Serving1stResponders",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    //Creating a consistant layout for the website
    <>
      <html lang="en">
          <body className={inter.className}>
            <Navbar />
            {children}
          </body>
      </html>
    </>
  );
}