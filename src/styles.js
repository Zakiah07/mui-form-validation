import { Box } from "@mui/system";
import { styled } from "@mui/material/styles";
import { TextField } from "@mui/material";

export const Container = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url("tech.jpg");
  background-size: cover;
  background-attachment: fixed;
  height: 100vh;
`;

export const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 30px;
  background-color: aliceblue;
  padding: 70px;
`;

export const StyledTextField = styled(TextField)`
  height: 55px;
  width: 20rem;
`;
