import React, { ReactNode } from "react";

export default function ScheduleDemoPageLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <section>{children}</section>;
}
