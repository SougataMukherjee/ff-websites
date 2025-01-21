import React, { ReactNode } from "react";

export default function SolutionSalesforcePageLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <section>{children}</section>;
}
