"use client";
import { Footer } from "@/component/shared";
import { theme } from "@/styles/theme";
import { ThemeProvider } from "@mui/material";
import { ReactNode } from "react";

export const HeaderLayout = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        {children}
        <Footer />
      </>
    </ThemeProvider>
  );
};
