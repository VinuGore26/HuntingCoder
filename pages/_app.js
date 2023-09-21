import "@/styles/globals.css";
import { Inter } from "next/font/google";
import Navbar from "Components/Navbar.js";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <>
      <div className={inter.className}>
        <Navbar />
        <Component {...pageProps} />
      </div>
    </>
  );
}
