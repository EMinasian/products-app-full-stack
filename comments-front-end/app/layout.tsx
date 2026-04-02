import { CssBaseline } from "@mui/material";
import Providers from "@/components/Providers";
import Header from "@/components/Header/Header";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="flex flex-col items-center">
        <Providers>
          <CssBaseline />
          <Header />
            {children}
        </Providers>
        </main>

      </body>
    </html>
  );
}