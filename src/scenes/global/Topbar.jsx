import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      <Box display='flex' alignItems='centre'>

        {/* emblem */}
        <img
          alt="nationalEmblem"
          height="60px"
          src={'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Emblem_of_India_%28brown%29.svg/376px-Emblem_of_India_%28brown%29.svg.png?20220816142529'}
          style={{ cursor: "pointer", margin: '0 10px 0 10px' }}
        />
        {/* G20 logo */}
        <img
          alt="nationalEmblem"
          height="60px"
          src={'https://upload.wikimedia.org/wikipedia/commons/0/0d/G20_India_2023_logo.svg'}
          style={{ cursor: "pointer", margin: '0 10px 0 10px' }}
        />
        <Box style={{ cursor: "pointer", margin: '0 10px 0 10px' }}>
          <Typography variant="h3" fontWeight="bold">
            MULTI-STATE CO-OPERATIVE SOCIETIES
          </Typography>
          <Typography>
            Ministry of Cooperation, Govt. of India
          </Typography>
        </Box>
      </Box>
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton>
          <PersonOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
