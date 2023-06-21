import { Drawer, IconButton } from "@mui/material";
import React, { ReactNode, useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";

const SideMenu = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen((prev) => !prev);
  };
  return (
    <>
      <IconButton onClick={toggleOpen} size={'large'}>
        <HiMenuAlt3 color="white" />
      </IconButton>
      <Drawer anchor="right" open={open} onClose={toggleOpen}>
        {children}
      </Drawer>
    </>
  );
};

export default SideMenu;
