import React, { ReactNode } from "react";

export default function PlatFormPageLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <section>{children}</section>;
}
