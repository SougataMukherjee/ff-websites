import Loader from "@/components/Loader/Loader";
import dynamic from "next/dynamic";
const Feature = dynamic(() => import("./(feature)/Feature"), {
  loading: () => <Loader />,
});
const Service = dynamic(() => import("./(services)/Service"), {
  loading: () => <Loader />,
});
const Carousel = dynamic(() => import("./(carousel)/Carousel"), {
  loading: () => <Loader />,
});
const PlatformCard = dynamic(() => import("./(card)/PlatformCard"), {
  loading: () => <Loader />,
});

export default function Home() {
  return (
    <>
      <Feature />
      <Service />
      <Carousel />
      <PlatformCard />
    </>
  );
}
