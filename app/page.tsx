"use client";
import { Poppins } from "next/font/google";
import { GlobalProvider } from "@/Context/GlobalContext";
import ErrorBoundary from "@/components/ErrorBoundary";
import dynamic from "next/dynamic";
import Loader from "@/components/Loader/Loader";

// Dynamically import HomePage with a loader
const DynamicPage = dynamic(() => import("./homepage/page"), {
  loading: () => <Loader />,
  ssr: false,
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "600"],
});

export default function Home() {
  return (
    <GlobalProvider>
      <main className={poppins.className}>
        <ErrorBoundary>
          <DynamicPage />
        </ErrorBoundary>
      </main>
    </GlobalProvider>
  );
}
