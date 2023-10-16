import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection/HeroSection";
// import { Inter } from "next/font/google";
import Head from "next/head";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Food & Grocery Delivery Resturants</title>
      </Head>



      < Header showLogoAndIcon={true} />
      <HeroSection />
    <Footer />

    </>
  );
}
