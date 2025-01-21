import React, { ReactNode } from "react";

export default function FinderPageLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <section>{children}</section>;
}
