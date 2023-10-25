import { Box } from "@mui/system";
import { styled } from "@mui/material/styles";

export const Container = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url("tech.jpg");
`;

export const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  row-gap: 20px;
  background-color: aliceblue;
  padding-left: 60px;
  padding-right: 60px;
  padding-bottom: 50px;
`;
