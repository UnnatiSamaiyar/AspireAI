import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import { dark } from "@clerk/themes";
import Link from "next/link";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AI Career Coach",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <head>
          <link rel="icon" href="/logo.png" sizes="any" />
        </head>
        <body className={`${inter.className}`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <main className="min-h-screen">{children}</main>
            <Toaster richColors />

            <footer class="rounded-lg shadow-sm  m-4">
              <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div class="sm:flex sm:items-center sm:justify-between">
                  <a
                    href="https://flowbite.com/"
                    class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
                  >
                    <Link href="/">
                      <Image
                        src={"/logo.png"}
                        alt="AspireAi Logo"
                        width={200}
                        height={60}
                        className="h-12 py-1 w-auto object-contain"
                      />
                    </Link>
                  </a>
                  <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                    <li>
                      <a href="#" class="me-4 md:me-6">
                        About
                      </a>
                    </li>
                    <li>
                      <a href="#" class=" me-4 md:me-6">
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a href="#" class=" me-4 md:me-6">
                        Terms of Use
                      </a>
                    </li>
                    <li>
                      <a href="#" class="">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
                <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
                  © {new Date().getFullYear()}{" "}
                  <a href="https://flowbite.com/" className="hover:underline">
                    AspireAI
                  </a>
                  . All Rights Reserved.
                </span>
              </div>
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
