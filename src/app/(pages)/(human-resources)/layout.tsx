import { Sidebar } from "@/components/human-resources/sidebar";
import { HRHeader } from "@/features/header/humanResources/header";
import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "NaijaPrime",
  description: "NaijaPrime",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="overflow-hidden">
      <Sidebar>
        <HRHeader />
        {children}
      </Sidebar>
    </div>
  );
}
