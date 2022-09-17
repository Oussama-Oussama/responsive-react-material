import { Box, Stack, Divider, ThemeProvider, createTheme } from "@mui/material";
import Nav from "./Component/Nav";
import Leftbar from "./Component/Leftbar";
import Main from "./Component/Main";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Nav />
        <Stack
          direction="row"
          divider={
            <Divider
              orientation="vertical"
              flexItem
              sx={{ display: { xs: "none", md: "flex" } }}
            />
          }
          spacing={2}
        >
          <Leftbar setMode={setMode} mode={mode}/>
          <Main />
        </Stack>
      </Box>
    </ThemeProvider>
  );
}

export default App;
