"use client";

import { useActionState } from "react";
import { useSearchParams } from "next/navigation";
import NextLink from "next/link";
import { Button, Stack, Link, Box, TextField, Typography } from "@mui/material";
import { createUser, authenticateUser } from "./actions";
import { isLoginView } from "@/utils/checks";


export default function AuthPage() {

  const searchParams = useSearchParams();
  const view = searchParams.get("view");
  const [formState, formAction] = useActionState(isLoginView(view) ? authenticateUser : createUser, { errors: [] })

  return (
      <Box
        component="form"
        autoComplete="off"
        width={600}
        action={formAction}
      >
        <Stack spacing={2}>
          {
            !isLoginView(view) && (
              <>
                <TextField name="firstname" label="First name" type="text" />
                <TextField name="lastname" label="Last name" type="text" />
              </>
            )
          }
          <TextField name="email" label="Email" type="email" />
          <TextField name="password" label="Password" type="password" />
          <Button type="submit" variant="contained" color="primary">
            {isLoginView(view) ? "Login" : "Sign Up"}
          </Button>
          <Link component={NextLink} href={isLoginView(view) ? "/auth?view=signup" : "/auth?view=login"} variant="body2" align="center">
            {isLoginView(view) ? "Don't have an account? Sign up here!" : "Already have an account? Login here!"}
          </Link>
          {
            formState?.errors.map((error: string) => <Typography key={error}>{error}</Typography>)
          }
        </Stack>
      </Box>
  );
}