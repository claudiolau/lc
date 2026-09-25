import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
export const metadata: Metadata = {
  title: "Claudio Lau",
  description: "Profile",
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-foreground antialiased">
        <div className="flex min-h-screen flex-col">
          <Header /> <main className="flex-1"> {children} </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
