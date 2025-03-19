import Pricing from "./(pricing)/Pricing";

export default function Home() {
  return (
    <div
      style={{
        height: "120vh",
        backgroundColor: "#F7F9FC",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <Pricing />
    </div>
  );
}
