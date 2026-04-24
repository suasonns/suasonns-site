import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Suason Nursing Services LLC",
  description: "Compliance and survey support for Home Health and Hospice agencies",
};

import { ReactNode } from "react";

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <div className="min-h-screen flex flex-col">{children}</div>
      </body>
    </html>
  );
}