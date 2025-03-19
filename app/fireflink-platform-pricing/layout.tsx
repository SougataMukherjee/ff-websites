import React, { ReactNode } from "react";

export default function PricingPageLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <section>{children}</section>;
}
