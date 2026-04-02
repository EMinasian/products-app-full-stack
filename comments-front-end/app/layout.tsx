import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Header from "@/components/Header/Header";
import "./globals.css";
import darkTheme from "./dark.theme";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="flex flex-col items-center">
        <AppRouterCacheProvider>
          <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Header />
              {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
        </main>

      </body>
    </html>
  );
}