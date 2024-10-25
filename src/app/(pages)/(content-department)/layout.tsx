import NavBar from "@/components/content-department/navBar";
import type { Metadata } from "next";


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
