"use client";

import { useState } from "react";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CreatePostsModal from "./CreateProductsModal";

const CreatePostsButton = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="absolute left-10 bottom-10">
        <Fab color="primary" aria-label="add" onClick={handleOpen}>
          <AddIcon />
        </Fab>
      </div>
      <CreatePostsModal open={open} handleClose={handleClose} />
    </>
  );
};

export default CreatePostsButton;
