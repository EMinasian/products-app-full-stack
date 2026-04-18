"use client";

import { useState } from "react";
import type { CSSProperties } from "react";
import {
  Button,
  Stack,
  Box,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { createProduct } from "./actions";
import { CloudUpload } from "@mui/icons-material";

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

const fileInputStyles: CSSProperties = {
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
};

const CreatePostsModal = ({
  open,
  handleClose,
}: {
  open: boolean;
  handleClose: () => void;
}) => {
  const [errors, setErrors] = useState<string[]>([]);
  const [fileName, setFileName] = useState<string>("");

  const handleFormClose = () => {
    if (errors.length > 0) {
      setErrors([]);
    }
    setFileName("");
    handleClose();
  };

  const handleFormSubmit = async (formData: FormData) => {
    const response = await createProduct(formData);
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
          <Button
            component="label"
            variant="outlined"
            startIcon={<CloudUpload />}
          >
            Upload image
            <input
              type="file"
              name="current-image"
              style={fileInputStyles}
              onChange={(e) =>
                e.target.files && setFileName(e.target.files?.[0].name || "")
              }
            ></input>
          </Button>
          <Typography variant="body2">{fileName}</Typography>
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
