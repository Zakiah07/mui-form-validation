export const formFields = [
  {
    id: "name",
    label: "Full Name",
    type: "text",
    validation: /^[a-zA-Z ]{3,}$/,
    errorMessage: "Name must exceed 3 characters and contain letters only",
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
    errorMessage: "This field is required",
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
    validation: /^[a-zA-Z0-9]+$/,
    errorMessage: "Password must consists of numbers and letters",
    required: true,
  },
  {
    id: "confirmpassword",
    label: "Confirm Password",
    type: "password",
    validation: /^[a-zA-Z0-9]+$/,
    errorMessage: "Password must match the one above",
    required: true,
  },
];
