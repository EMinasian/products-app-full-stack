import { TextField } from "@mui/material";

const InputField = ({ label, type }: { label: string; type: string }) => {
  return (
    <TextField
      label={label}
      variant="outlined"
      type={type}
      fullWidth
      InputLabelProps={{
        shrink: true,
        sx: { color: "white", fontWeight: "bold" },
      }}
      sx={{
        "& .MuiOutlinedInput-input": {
          backgroundColor: "#111111",
        },
        "& .MuiOutlinedInput-input:-webkit-autofill": {
          WebkitBoxShadow: "0 0 0 100px #111111 inset",
        },
      }}
    />
  );
};

export default InputField;
