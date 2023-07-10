import { DEFAULT_STYLES } from "@/styles/default_styles";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { Container, Paper } from "@mui/material";
import React, { ReactNode } from "react";

export const Section = ({ children,bg='' }: { children: ReactNode,bg?:string }) => {
  return (
    <Paper
      square
      sx={{
        backgroundColor: bg ? bg :DEFAULT_STYLES.darkerBlue  ,
        backgroundPosition: "center",
        backgroundRepeat: " no-repeat",
        overflow: "hidden",
        position: "relative",
        zIndex: 3,
      }}
    >
      <Container maxWidth={false} sx={{ px: { base: 3, sm:6, xl: 20 }, py: 10 }}>
        {children}
      </Container>
    </Paper>
  );
};

