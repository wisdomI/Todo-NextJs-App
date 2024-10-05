import "./globals.css";

import Navbar from "../components/Navbar"; // Ensure path is correct
import localFont from "next/font/local";

const geistSans = localFont({
  src: [
    {
      path: "./fonts/GeistVF.woff", // Ensure the path to your fonts is correct
      weight: "100 900",
      style: "normal",
    },
  ],
  variable: "--font-geist-sans",
});

const geistMono = localFont({
  src: [
    {
      path: "./fonts/GeistMonoVF.woff", // Ensure the path to your fonts is correct
      weight: "100 900",
      style: "normal",
    },
  ],
  variable: "--font-geist-mono",
});

export const metadata = {
  title: "Todo Next App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
