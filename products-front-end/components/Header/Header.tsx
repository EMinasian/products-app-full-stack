"use client";

import { useState, useContext } from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ShoppingBasketOutlined from "@mui/icons-material/ShoppingBasketOutlined";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import HeaderSettings from "./HeaderSettings";
import AuthContext from "@/contexts/authContext";
import type { AuthContextType } from "@/contexts/authContext";
import { isLoginView } from "@/utils/checks";

const pages = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Comments",
    url: "/comments",
  },
];

function Header() {
  const { isAuthenticated, user } = useContext<AuthContextType>(AuthContext);
  const searchParams = useSearchParams();
  const router = useRouter();

  const view = searchParams.get("view");
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          {isAuthenticated && (
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: "block", md: "none" } }}
              >
                {pages.map((page) => (
                  <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                    <Typography
                      sx={{ textAlign: "center" }}
                      href={page.url}
                      component={Link}
                    >
                      {page.title}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          )}
          <ShoppingBasketOutlined sx={{ mr: 1 }} />
          {isAuthenticated && (
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page.title}
                  onClick={() => {
                    handleCloseNavMenu();
                    router.push(page.url);
                  }}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page.title}
                </Button>
              ))}
            </Box>
          )}

          {isAuthenticated ? (
            <HeaderSettings user={user!} />
          ) : (
            <Button
              onClick={() => {
                router.push(
                  `/auth?view=${isLoginView(view) ? "signup" : "login"}`,
                );
              }}
            >
              {isLoginView(view) ? "Signup" : "Login"}
            </Button>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
