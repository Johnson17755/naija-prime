import { Sidebar } from "@/components/customer-care-department/sidebar";
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
      <Sidebar>{children}</Sidebar>
    </div>
  );
}
