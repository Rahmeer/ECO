// import classes from '*.module.css';
import {
  AppBar,
  Badge,
  IconButton,
  // Menu,
  // MenuItem,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/icon.png';
import useStyles from './styles';

const Navbar = ({ totalItem }) => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography
            component={Link}
            to="/"
            variant="h6"
            className={classes.title}
            color="inherit"
          >
            <img
              src={logo}
              clt="Commerce.js"
              height="25px"
              className={classes.image}
            />
            Commerce.js
          </Typography>
          <div className={classes.grow} />
          {location.pathname === '/' ? (
            <div className={classes.button}>
              <IconButton
                component={Link}
                to="/cart"
                aria-label="show cart items"
                color="inherit"
              >
                <Badge badgeContent={totalItem} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          ) : null}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
