import {
  Alert,
  AlertTitle,
  Button,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { StyledBox } from "./styles.js";
import { useState } from "react";

const formFields = [
  {
    id: "name",
    label: "Name",
    type: "text",
    validation: /^[a-zA-Z ]+$/,
    errorMessage: "Name must exceed 3 characters and contain alphabets only",
  },
  {
    id: "date",
    label: "Date of Birth",
    type: "date",
  },
  {
    id: "email",
    label: "Email Address",
    type: "email",
    validation: /^[a-zA-Z0-9@.-]+$/,
    errorMessage: "Email must be in a valid email form",
  },
  {
    id: "password",
    label: "Password",
    type: "password",
    validation: /^[a-zA-Z0-9@.-]+$/,
    errorMessage:
      "Password must consists of numbers, letter and special characters",
  },
  {
    id: "confirmpassword",
    label: "Confirm Password",
    type: "password",
    validation: /^[a-zA-Z0-9@.-]+$/,
    errorMessage: "Password must be same as above",
  },
];

function App() {
  const [form, setForm] = useState(
    formFields.reduce((acc, field) => ({ ...acc, [field.id]: "" }), {})
  );
  const [open, setOpen] = useState(false);

  const handleInputsChange = (e) => {
    const { id, value } = e.target;
    const fieldConfig = formFields.find((field) => field.id === id);

    const hasError = !value.match(fieldConfig.validation);

    setForm({ ...form, [id]: value, [`${id}Error`]: hasError });
  };

  const handleClick = (e) => {
    e.preventDefault();
    setOpen(true);

    const hasErrors = formFields.some((field) =>
      field.validate(form[field.id])
    );

    if (hasErrors) {
      <p>CheckData</p>;
    } else {
      setForm();
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <StyledBox
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      autoComplete="off"
    >
      <Typography variant="h4">Sign up now!</Typography>
      {formFields.map((field) => (
        <TextField
          key={field.id}
          fullWidth
          variant="outlined"
          id={field.id}
          label={field.label}
          value={form[field.id]}
          onChange={handleInputsChange}
          error={form[`${field.id}Error`]}
          helperText={form[`${field.id}Error`] ? field.errorMessage : ""}
          required
        />
      ))}
      <Button
        variant="contained"
        color="secondary"
        onClick={handleClick}
      >
        Submit
      </Button>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert
          severity="success"
          onClose={handleClose}
        >
          <AlertTitle>Success</AlertTitle>
          You have signed up! Thanks!
        </Alert>
      </Snackbar>
      {/* <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        Ops, please check your data.
      </Alert> */}
    </StyledBox>
  );
}

export default App;
