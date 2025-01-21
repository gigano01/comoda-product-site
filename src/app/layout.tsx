import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Comoda",
  description: "Comoda is dé slimme oplossing voor uitleendiensten.",
  icons: ["logo/comoda-logo1.svg"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
