'use client';

import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material";
import AuthContext from "@/contexts/authContext";
import type { UserType } from "@/contexts/authContext";
import darkTheme from "@/app/dark.theme";


const Providers = ({ children, user }: { children: React.ReactNode, user: UserType | null }) => {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={darkTheme}>
        <AuthContext.Provider value={{ isAuthenticated: Boolean(user), user }}>
          {children}
        </AuthContext.Provider>
      </ThemeProvider>
    </AppRouterCacheProvider>
  )
}

export default Providers;