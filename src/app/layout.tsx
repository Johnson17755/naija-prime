import type { Metadata } from "next";
import "./globals.css";
import { StoreProvider } from "@/features/auth/_components/storeProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    <html lang="en">
      <body>
        <main>
          <StoreProvider>{children}</StoreProvider>
          <ToastContainer closeButton={false} hideProgressBar />
        </main>
      </body>
    </html>
  );
}
