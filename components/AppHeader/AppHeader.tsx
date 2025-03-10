"use client";
import { useRouter } from "next/navigation";
import { MegaMenu } from "website-pixel-react";
import {
  ProductMenuData,
  SolutionMenuData,
  ResourceMenuData,
  DropDownMenuData,
} from "@/app/MegaMenuData";

export default function AppHeader() {
  const router = useRouter();
  const handleNavigation = (url: string) => {
    if (url) {
      const currentPath = window.location.origin;
      const fullUrl = `${currentPath}${url.startsWith("/") ? url : `/${url}`}`;
      console.log("Navigating to:", fullUrl);
      router.push(url);
    }
  };
  return (
    <MegaMenu
      itemOne={ProductMenuData}
      itemOneText="Products"
      itemTwoText="Solutions"
      itemThreeText="Resources"
      itemTwo={SolutionMenuData}
      itemThree={ResourceMenuData}
      quickData={DropDownMenuData}
      handleNavigation={handleNavigation}
    />
  );
}
