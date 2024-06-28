export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <ClerkProvider>

        <html lang="en">
        <body className={inter.className}>
        <div className={'w-screen bg-slate-100 px-8 md:px-16 lg:px-32'}>
          <Navbar/>
        </div>
        <div className={'w-screen bg-slate-100 px-8 md:px-16 lg:px-32'}>
          {children}
        </div>
        </body>
        </html>
      </ClerkProvider>
  );
}
import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";

import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Social Media App",
  description: "Social media app built with Next.js",
};
