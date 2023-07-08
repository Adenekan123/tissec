import { DEFAULT_STYLES } from "@/styles/default_styles";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { Container, Paper } from "@mui/material";
import React, { ReactNode } from "react";

export const Section = ({ children }: { children: ReactNode }) => {
  return (
    <Paper
      square
      sx={{
        backgroundColor: DEFAULT_STYLES.darkerBlue,
        backgroundPosition: "center",
        backgroundRepeat: " no-repeat",
        overflow: "hidden",
        position: "relative",
        zIndex: 3,
      }}
    >
      <Container maxWidth={false} sx={{ px: { xs: 2, md: 12 }, py: 10 }}>
        {children}
      </Container>
    </Paper>
  );
};

