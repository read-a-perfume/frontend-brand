import { Box } from "@mui/material";
import LeftDrawer from "../../components/drawer/left-drawer";
import DrawerItem from "../../components/drawer/drawer-item";
import { useState } from "react";
import UserSection from "./user-section";
import BrandSection from "./brand-section";

const Home = () => {
  const [isUser, setIsUser] = useState<boolean>(true);

  return (
    <Box sx={{ display: "flex" }}>
      <LeftDrawer>
        <DrawerItem
          text="유저 관리"
          onClick={() => {
            setIsUser(true);
          }}
        />
        <DrawerItem
          text="기업 관리"
          onClick={() => {
            setIsUser(false);
          }}
        />
      </LeftDrawer>
      {isUser ? <UserSection /> : <BrandSection />}
    </Box>
  );
};

export default Home;
