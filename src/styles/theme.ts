import { createTheme } from "@mui/material";

 export const theme = createTheme({
    palette:{
        primary:{
            main:'#1c223a'
        },
        secondary:{
            main:'#4aa5f0'
        },
        warning:{
            main:'#d88730'
        } 
    },
    typography:{
        fontFamily:'inherit',
        h1:{
            fontSize:64
        },
       body1:{
        color:'#afb6d2'
       },
       h6:{
        color:'#afb6d2'
       }

    },
    components:{
       MuiContainer:{
       },
        MuiCard:{
            styleOverrides:{
                root:{
                    backgroundColor:'#1d233c'
                }
            }
        }
    }
})

