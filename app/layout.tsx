import type { Metadata } from "next";
import "@/app/_styles/globals.css";
import SideNav from "@/components/SideNav";
import Nav from "@/components/Nav";
export const metadata: Metadata = {
  title: "Hono | nextjs",
  description: "Generated by hono",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="grid grid-cols-[10rem_1fr] gap-8">
        <SideNav />
        <div className="">
          <Nav />
          {children}
        </div>
      </body>
    </html>
  );
}
