import {
  Alert,
  AlertTitle,
  Button,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { Container, StyledBox } from "./styles.js";
import { useState } from "react";
import { formFields } from "./formData.js";

function App() {
  const [inputs, setInputs] = useState(
    formFields.reduce((acc, field) => ({ ...acc, [field.id]: "" }), {})
  );
  const [open, setOpen] = useState(false);

  const handleInputsChange = (e) => {
    const { id, value } = e.target;
    const fieldConfig = formFields.find((field) => field.id === id);

    let hasError = false;

    if (fieldConfig.validation) {
      hasError = !value.match(fieldConfig.validation);
    }

    if (id === "confirmpassword" && value !== inputs.password) {
      hasError = true;
    }

    setInputs({ ...inputs, [id]: value, [`${id}Error`]: hasError });
  };

  const handleClick = (e) => {
    e.preventDefault();

    const hasErrors = formFields.some((field) => {
      return (
        (inputs[field.id] === "" && field.required) ||
        inputs[`${field.id}Error`]
      );
    });

    if (hasErrors) {
      formFields.forEach((field) => {
        const hasError = !inputs[field.id] || inputs[`${field.id}Error`];
        setInputs((prevState) => ({
          ...prevState,
          [`${field.id}Error`]: hasError,
        }));
      });
    } else {
      console.log(inputs);
      setOpen(true);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <Container>
      <StyledBox
        component="form"
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
            type={field.type}
            value={inputs[field.id]}
            onChange={handleInputsChange}
            error={inputs[`${field.id}Error`]}
            InputLabelProps={field.InputLabelProps}
            helperText={inputs[`${field.id}Error`] ? field.errorMessage : ""}
            required={field.required}
          />
        ))}
        <Button
          fullWidth
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
      </StyledBox>
    </Container>
  );
}

export default App;
