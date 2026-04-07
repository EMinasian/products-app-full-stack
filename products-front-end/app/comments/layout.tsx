import { Container } from "@mui/material";

export default function CommentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Container maxWidth="lg" className="my-12 flex flex-col items-center">
      {children}
    </Container>
  );
}
