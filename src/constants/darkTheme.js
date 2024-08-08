import { createTheme } from "@mui/material/styles";
import { grey, purple } from "@mui/material/colors";

const darkTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: grey[900], // Custom background color
      paper: "#ffffff", // Custom paper color
    },
    primary: {
      main: purple[700], // Custom primary color
    },
    secondary: {
      main: purple[800], // Custom secondary color
    },
    text: {
      primary: "#000000", // Custom text color
    },
  },
});

export default darkTheme;
