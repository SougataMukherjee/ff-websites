"use client";
import Image from "next/image";
import { Button } from "pixel-react";
import { useRouter } from "next/navigation";
const PageNotFound = () => {
  const router = useRouter();
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
        margin: "20px",
      }}
    >
      <Image
        src="/images/not-found.svg"
        alt="not found image"
        width={500}
        height={350}
      />
      <h1>Oops!</h1>
      <p>The page you’re looking for doesn’t exist</p>
      <Button
        variant="primary"
        label="Go to Home page"
        onClick={() => router.push("http://localhost:3000/")}
      />
    </section>
  );
};

export default PageNotFound;
