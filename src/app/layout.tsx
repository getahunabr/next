import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    absolute: "",
    default: "",
    template: "%s | codeVolution",
  },
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <header style={{ backgroundColor: "lightblue", padding: "1rem" }}>
        <p>Header</p>
      </header>

      <body className={inter.className}>{children}</body>
      <footer style={{ backgroundColor: "ghostWhite", padding: "1rem" }}>
        {" "}
        <p>Footer</p>
      </footer>
    </html>
  );
}
