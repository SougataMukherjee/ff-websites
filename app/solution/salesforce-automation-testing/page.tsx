import SalesForceFeature from "./(feature)/SalesForceFeature";
import StackOfCard from "./(stack-of-card)/StackOfCard";
import SalesForceCard from "./(card)/SalesForceCard";

export default function Home() {
  return (
    <>
      <SalesForceFeature />
      <StackOfCard />
      <SalesForceCard />
    </>
  );
}
