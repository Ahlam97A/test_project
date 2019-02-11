import Hidden from "@material-ui/core/Hidden";
import Poppers from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import withStyles from "@material-ui/core/styles/withStyles";
import Search from "@material-ui/icons/Search";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Person from "@material-ui/icons/Person";
import Notifications from "@material-ui/icons/Notifications";
import Dashboard from "@material-ui/icons/Dashboard";
import { Switch } from "@material-ui/core";

import React,{Component} from "react";

import classNames from "classnames";

import { Route, Redirect } from 'react-router';

import Button from "components/CustomButtons/Button.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";

import headerLinksStyle from "assets/jss/material-dashboard-react/components/headerLinksStyle.jsx";


function postData(url = ``, data = {}) {
  // Default options are marked with *
  return fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, cors, *same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // "Content-Type": "application/x-www-form-urlencoded",
    },
    redirect: "follow", // manual, *follow, error
    referrer: "no-referrer", // no-referrer, *client
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  })
    .then(response => response.text()); // parses response to JSON
}






class HeaderLinks extends React.Component {

  state = {
    open: false
  };

  handleToggle = () => {
    this.setState(state => ({ open: !state.open }));
  };

  handleClose = event => {
    if (this.anchorEl.contains(event.target)) {
      return;
    }

    this.setState({ open: false });
  };

  handleClick1=(e)=>{
    e.preventDefault();
    //Redirect('../../views/Dashboard/Dashboard.jsx') ;
    <Switch><Redirect to={{ pathname: "../../views/Dashboard/Dashboard.jsx"}}/></Switch>
  
  }

  render() {

    const { classes } = this.props;
    const { open } = this.state;

    return (
      <div>
       

       
        <div className={classes.searchWrapper}>
          <CustomInput
            formControlProps={{className: classes.margin + " " + classes.search }}
            inputProps={{placeholder: "Search",inputProps: {"aria-label": "Search" } }}
          />   
          <Button color="white" aria-label="edit" justIcon round> <Search /></Button> 
        </div>
    



        <Button  
        aria-label="Dashboard"
        justIcon={window.innerWidth > 959}
        simple={!(window.innerWidth > 959)}
        color={window.innerWidth > 959 ? "transparent" : "white"}
        className={classes.buttonLink}
        onClick={this.handleClick1}
        >
           <Dashboard/>
        </Button>



        
        <div className={classes.manager}>
          <Button
            buttonRef={node => {
              this.anchorEl = node;
            }}
            color={window.innerWidth > 959 ? "transparent" : "white"}
            justIcon={window.innerWidth > 959}
            simple={!(window.innerWidth > 959)}
            aria-owns={open ? "menu-list-grow" : null}
            aria-haspopup="true"
            onClick={this.handleToggle}
            className={classes.buttonLink}
          >
            <Notifications className={classes.icons} />
            <span className={classes.notifications}>5</span>
            <Hidden mdUp implementation="css">
              <p onClick={this.handleClick} className={classes.linkText}>
                Notification
              </p>
            </Hidden>
          </Button>
          <Poppers
            open={open}
            anchorEl={this.anchorEl}
            transition
            disablePortal
            className={
              classNames({ [classes.popperClose]: !open }) +
              " " +
              classes.pooperNav
            }
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                id="menu-list-grow"
                style={{
                  transformOrigin:
                    placement === "bottom" ? "center top" : "center bottom"
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={this.handleClose}>
                    <MenuList role="menu">
                      <MenuItem
                        onClick={this.handleClose}
                        className={classes.dropdownItem}
                      >
                        Mike John responded to your email
                      </MenuItem>
                      <MenuItem
                        onClick={this.handleClose}
                        className={classes.dropdownItem}
                      >
                        You have 5 new tasks
                      </MenuItem>
                      <MenuItem
                        onClick={this.handleClose}
                        className={classes.dropdownItem}
                      >
                        You're now friend with Andrew
                      </MenuItem>
                      <MenuItem
                        onClick={this.handleClose}
                        className={classes.dropdownItem}
                      >
                        Another Notification
                      </MenuItem>
                      <MenuItem
                        onClick={this.handleClose}
                        className={classes.dropdownItem}
                      >
                        Another One
                      </MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Poppers>
        </div>
        <Button
          color={window.innerWidth > 959 ? "transparent" : "white"}
          justIcon={window.innerWidth > 959}
          simple={!(window.innerWidth > 959)}
          aria-label="Person"
          className={classes.buttonLink}
        >
          <Person className={classes.icons} />
          <Hidden mdUp implementation="css">
            <p className={classes.linkText}></p>
          </Hidden>
        </Button>
      </div>
    );
  }
}

export default withStyles(headerLinksStyle)(HeaderLinks);
