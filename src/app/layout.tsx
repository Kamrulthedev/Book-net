import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Home | Book Net",
  description:
    "Discover, review, and rate your favorite books. Join a community of book lovers and share your reading experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
}
