import { Typography, AppBar as MyAppBar, Toolbar } from "@mui/material";

interface proptype {
  text: string;
}

const AppBar = ({ text }: proptype) => {
  return (
    <MyAppBar
      sx={{
        height: 50,
        width: "calc(100% - 200px)",
        display: "flex",
        justifyContent: "center",
        paddingLeft: "20px",
      }}
      position="fixed"
    >
      <Typography variant="h6">{text}</Typography>
    </MyAppBar>
  );
};

export default AppBar;
