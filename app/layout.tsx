import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/darkmode/theme-provider";
import { Darkmode } from "@/components/darkmode/Drakmode";

export const metadata: Metadata = {
  title: "Happy Anniversary 18m",
  description: "Happy Anniversary 18m",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        {children}
        <Darkmode />
        </ThemeProvider>
      </body>
    </html>
  );
}
