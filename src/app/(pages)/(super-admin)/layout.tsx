import type { Metadata } from "next";
import NavBar from "@/components/super-admin/navBar";

export const metadata: Metadata = {
  title: "NaijaPrime",
  description: "NaijaPrime",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <NavBar>{children}</NavBar>
    </div>
  );
}
