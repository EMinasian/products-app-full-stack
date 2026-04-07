import { CssBaseline } from "@mui/material";
import Providers from "@/components/Providers";
import Header from "@/components/Header/Header";
import { getCurrentUser } from "./actions";
import "./globals.css";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body>
        <main className="flex flex-col items-center">
          <Providers user={currentUser}>
            <CssBaseline />
            <Header />
            {children}
          </Providers>
        </main>
      </body>
    </html>
  );
}
