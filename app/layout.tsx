
import type { Metadata } from "next";
import "./globals.css";




export const metadata: Metadata = {
  title: "Art Gallery Website",
  description: "Art Gallery Website",
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  

  return (
    <html lang="en">
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""/>
      <link href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@100..900&family=Outfit:wght@100..900&display=swap" rel="stylesheet"/>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
