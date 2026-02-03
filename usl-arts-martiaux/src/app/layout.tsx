import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

export const metadata: Metadata = {
  title: "USL Arts Martiaux",
  description: "Site de l'USL Arts Martiaux",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="min-h-screen font-sans bg-[var(--background)] text-[var(--foreground)] flex flex-col">
        <Header />
        <main className="flex flex-col items-center mt-6 px-4 h-full flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
