import React, { ReactNode } from "react";

export default function AssetsPageLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <section>{children}</section>;
}
