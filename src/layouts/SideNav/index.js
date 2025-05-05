import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './SideNav.module.css';
import profilePic from '../../Assets/profile.jfif';

// MUI imports
import {
  Drawer,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Divider,
  Typography,
  useMediaQuery,
  useTheme,
  Tooltip,
  Badge
} from '@mui/material';

// Icons
import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import EmailIcon from '@mui/icons-material/Email';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import StarIcon from '@mui/icons-material/Star';

const SideNav = () => {
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [open, setOpen] = useState(!isMobile);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Handle resize events
  useEffect(() => {
    setOpen(!isMobile);
  }, [isMobile]);

  const handleDrawerToggle = () => {
    if (isMobile) {
      setMobileOpen(!mobileOpen);
    } else {
      setOpen(!open);
    }
  };

  const navigationItems = [
    { text: 'Home', icon: <HomeIcon />, path: '/' },
    { text: 'Education', icon: <SchoolIcon />, path: '/education' },
    { text: 'Projects', icon: <WorkIcon />, path: '/projects' },
    { text: 'Contact', icon: <EmailIcon />, path: '/contact' }
  ];

  const drawerContent = (
    <>
      <Box className={styles.drawerHeader}>
        {open && (
          <IconButton 
            onClick={handleDrawerToggle}
            className={styles.collapseButton}
          >
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        )}
        {!open && !isMobile && (
          <IconButton 
            onClick={handleDrawerToggle}
            className={styles.expandButton}
          >
            <MenuOpenIcon />
          </IconButton>
        )}
      </Box>
      
      <Box className={`${styles.profile} ${!open && styles.profileCollapsed}`}>
        <div className={styles.avatarContainer}>
          <img 
            src={profilePic} 
            alt="Profile"
            className={styles.avatar} 
          />
        </div>
        {open && (
          <Box className={styles.profileInfo}>
            <Typography variant="h6" className={styles.profileName}>
              Your Name
            </Typography>
            <Typography variant="body2" className={styles.profileTitle}>
              <Badge 
                color="success" 
                variant="dot" 
                sx={{ mr: 1 }}
              >
                <span>Web Developer</span>
              </Badge>
            </Typography>
          </Box>
        )}
      </Box>
      
      <Divider className={styles.divider} />
      
      <List className={styles.navList}>
        {navigationItems.map((item) => {
          const isActive = location.pathname === item.path;
          
          return (
            <ListItem
              button
              component={Link}
              to={item.path}
              key={item.text}
              className={`${styles.navItem} ${isActive ? styles.activeNavItem : ''}`}
            >
              <Tooltip title={open ? "" : item.text} placement="right" arrow>
                <ListItemIcon className={styles.navIcon}>
                  {item.icon}
                </ListItemIcon>
              </Tooltip>
              {open && <ListItemText primary={item.text} />}
            </ListItem>
          );
        })}
      </List>
    </>
  );

  return (
    <>
      {/* Desktop permanent drawer */}
      {!isMobile && (
        <Drawer
          variant="permanent"
          open={open}
          className={`${styles.drawer} ${open ? styles.drawerOpen : styles.drawerClose}`}
          classes={{
            paper: `${styles.drawerPaper} ${open ? styles.drawerOpen : styles.drawerClose}`,
          }}
        >
          {drawerContent}
        </Drawer>
      )}

      {/* Mobile temporary drawer */}
      {isMobile && (
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          className={styles.mobileDrawer}
          classes={{
            paper: styles.mobileDrawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile
          }}
        >
          {drawerContent}
        </Drawer>
      )}
    </>
  );
};

export default SideNav;