export const formFields = [
  {
    id: "name",
    label: "Full Name",
    type: "text",
    validation: /^[a-zA-Z ]{4,}$/,
    errorMessage: "Name must exceed 3 letters",
    required: true,
  },
  {
    id: "date",
    label: "Date of Birth",
    type: "date",
    required: true,
    InputLabelProps: {
      shrink: true,
    },
    errorMessage: "Choose birthdate",
  },
  {
    id: "email",
    label: "Email Address",
    type: "email",
    validation: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,4})+$/,
    errorMessage: "Email must be in a valid email form",
    required: true,
  },
  {
    id: "password",
    label: "Password",
    type: "password",
    validation: /^(?=.*[a-zA-Z])(?=.*[0-9]).{6,}$/,
    errorMessage: "Password must be at least 6 numbers and letters",
    required: true,
  },
  {
    id: "confirmpassword",
    label: "Confirm Password",
    type: "password",
    errorMessage: "Password must match the one above",
    required: true,
  },
];
