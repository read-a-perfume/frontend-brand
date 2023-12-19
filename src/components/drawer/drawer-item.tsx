import { Divider, ListItem, ListItemButton, ListItemText } from "@mui/material";

interface proptype {
  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
  text?: string;
}

const DrawerItem = ({ onClick, text }: proptype) => {
  return (
    <ListItem sx={{ height: 50, borderBottom: "0.5px solid #EEE" }}>
      <ListItemButton onClick={onClick}>
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  );
};

export default DrawerItem;
