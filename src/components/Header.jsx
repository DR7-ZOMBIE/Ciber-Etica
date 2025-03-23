// src/components/Header.jsx
import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  IconButton, 
  Drawer, 
  List, 
  ListItem, 
  Box 
} from '@mui/material';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)(({ theme }) => ({
  color: 'inherit',
  textDecoration: 'none',
}));

const navItems = [
  { label: "Inicio", to: "/" },
  { label: "Ética en la IA", to: "/tema1" },
  { label: "Ética en la ciberseguridad", to: "/tema2" },
  { label: "Ciberética", to: "/ciberetica" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box 
      onClick={handleDrawerToggle} 
      sx={{ 
        textAlign: 'center', 
        p: 2, 
        backgroundColor: "#A2D2FF", 
        height: '100%' 
      }}
    >
      <Typography variant="h6" sx={{ my: 2, color: "#000000" }}>
        Ética en la IA & Ciberseguridad
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding sx={{ mb: 1 }}>
            <StyledLink to={item.to}>
              <Button
                fullWidth
                variant="contained"
                sx={{
                  textTransform: 'none',
                  backgroundColor: "#ffffff",
                  color: "#000000",
                  '&:hover': { backgroundColor: "#e0e0e0" },
                }}
              >
                {item.label}
              </Button>
            </StyledLink>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      {/* Navbar pastel con texto en negro */}
      <AppBar position="fixed" sx={{ backgroundColor: "#A2D2FF" }}>
        <Toolbar>
          {/* Botón de menú para mobile */}
          <IconButton
            color="inherit"
            aria-label="abrir menú"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' }, color: "#000000" }}
          >
            <MenuIcon />
          </IconButton>
          
          {/* Título */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: "#000000" }}>
            Ética en la IA & Ciberseguridad
          </Typography>
          
          {/* Menú para desktop */}
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            {navItems.map((item) => (
              <StyledLink key={item.label} to={item.to}>
                <Button sx={{ color: "#000000", textTransform: 'none', mx: 1 }}>
                  {item.label}
                </Button>
              </StyledLink>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      
      {/* Drawer para mobile */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Header;
