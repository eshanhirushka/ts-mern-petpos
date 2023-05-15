import React, { useState } from 'react';
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import { tokens } from '../theme';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { logo, user } from '../assets';

const Item = ({ title, to, icon, selected, setSelected }: {title: string; to: string; icon: React.ReactNode; selected: string; setSelected: (title: string) => void;}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
      <MenuItem active={selected === title} style={{color: colors.grey[100],}} onClick={() => setSelected(title)} icon={icon}>
        <Link to={to} />
        <Typography>{title}</Typography>
      </MenuItem>
    );
  };

const SiderNav:React.FC = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Home")

  return (
    <Box sx={{"& .pro-sidebar-inner": {background: `${colors.primary[400]} !important`},"& .pro-icon-wrapper": {backgroundColor: "transparent !important"}, "& .pro-inner-item":{padding: "5px 35px 5px 20px !important"}, "& .pro-inner-item:hover": {color: "#868dfb !important"}, "& .pro-menu-item.active":{color: "#6870fa !important"}}}>
        <ProSidebar collapsed={isCollapsed}>
            <Menu iconShape="square">
                <MenuItem onClick={() => setIsCollapsed(!isCollapsed)} icon={isCollapsed ? <MenuOutlinedIcon /> : undefined} style={{margin: "10px 0 20px 0", color: colors.grey[100],}}>
                    {!isCollapsed && (
                    <Box display="flex" justifyContent="space-between" alignItems="center" ml="15px">
                        <Typography variant="h3" color={colors.grey[100]}>
                            <img src={logo} alt="petpos" width={100} />
                        </Typography>
                        <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                            <MenuOutlinedIcon />
                        </IconButton>
                    </Box>
                    )}
                </MenuItem>
                {!isCollapsed && (
                <Box mb="25px">
                    <Box display="flex" justifyContent="center" alignItems="center">
                        <img alt="profile-user" width="100px" height="100px" src={user} style={{ cursor: "pointer", borderRadius: "50%" }}/>
                    </Box>
                    <Box textAlign="center">
                        <Typography variant="h2" color={colors.grey[100]} fontWeight="bold" sx={{ m: "10px 0 0 0" }}>
                            Eshan Hirushka
                        </Typography>
                        <Typography variant="h5" color={colors.greenAccent[500]}>
                            Petpos Developer
                        </Typography>
                    </Box>
                </Box>
                )}

                <Box paddingLeft={isCollapsed ? undefined : "10%"}>
                    <Item title="Home" to="/" icon={<HomeOutlinedIcon />} selected={selected} setSelected={setSelected} />
                    <Item title="Litter" to="/litter" icon={<PetsOutlinedIcon />} selected={selected} setSelected={setSelected} />
                </Box>
            </Menu>
        </ProSidebar>
    </Box>
  )
}

export default SiderNav