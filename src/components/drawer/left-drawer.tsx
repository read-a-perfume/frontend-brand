import { Box, Divider, Drawer, ListItem, ListItemText } from "@mui/material";
import { ReactNode } from "react";

interface proptype {
  children: ReactNode;
}

const LeftDrawer = ({ children }: proptype) => {
  return (
    <Drawer
      sx={{
        width: 200,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 200,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <ListItem sx={{ height: 50 }}>
        <ListItemText primary="메뉴" />
      </ListItem>
      <Divider />
      {children}
    </Drawer>
  );
};

export default LeftDrawer;
