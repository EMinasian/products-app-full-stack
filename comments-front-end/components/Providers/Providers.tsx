import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material";
import darkTheme from "@/app/dark.theme";


const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={darkTheme}>
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  )
}

export default Providers;