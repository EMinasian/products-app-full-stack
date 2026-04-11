"use client";

import { useState } from "react";
import {
  Button,
  Stack,
  Box,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { createPost } from "./actions";

const styles = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const CreatePostsModal = ({
  open,
  handleClose,
}: {
  open: boolean;
  handleClose: () => void;
}) => {
  const [errors, setErrors] = useState<string[]>([]);

  const handleFormClose = () => {
    if (errors.length > 0) {
      setErrors([]);
    }
    handleClose();
  };

  const handleFormSubmit = async (formData: FormData) => {
    const response = await createPost(formData);
    if (!response?.errors) {
      handleFormClose();
    } else {
      setErrors(response.errors);
    }
  };

  return (
    <Modal open={open} onClose={handleFormClose}>
      <Box
        component="form"
        autoComplete="off"
        sx={styles}
        action={handleFormSubmit}
      >
        <Stack spacing={2}>
          <TextField name="name" label="Product name" type="text" required />
          <TextField
            name="description"
            label="Description"
            type="text"
            required
          />
          <TextField name="price" label="Price" type="text" required />
          <Button type="submit" variant="contained" color="primary">
            Create product
          </Button>
          {errors.map((error: string) => (
            <Typography key={error}>{error}</Typography>
          ))}
        </Stack>
      </Box>
    </Modal>
  );
};

export default CreatePostsModal;
