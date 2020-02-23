import {
  AppBar, Divider,
  Drawer, Hidden, IconButton, List,
  ListItem, ListItemText, Toolbar, Typography, withStyles,
  Menu, MenuItem
} from '@material-ui/core';
import { AccountCircle, Menu as MenuIcon } from '@material-ui/icons';
import * as React from 'react';
import { LocalizeContextProps } from 'react-localize-redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import compose from 'recompose/compose';
import { removeUser } from '../../actions/user/user';
import { IState } from '../../reducers';
import { styles } from './style';

interface INavState {
  openSideNav: boolean,
  direction: string,
  anchorEl: any
}

const user = localStorage.getItem('user');

class NavBar extends React.Component<INavProps, INavState>{
  constructor(props: INavProps) {
    super(props);
    this.state = {
      anchorEl: null,
      direction: 'rtl',
      openSideNav: false
    };
  }

  public handleDrawerToggle = () => {
    this.setState(state => ({ openSideNav: !state.openSideNav }));
  }

  public handleClick = event => {
    this.setState({anchorEl: event.currentTarget});
  }
  public handleClose = () => {
    this.setState({anchorEl: null});
  }
  public handleLogout = () => {
    localStorage.removeItem('user');
    this.props.removeUser();
    this.props.history.push('/login');
  }

  public render() {
    const {classes} = this.props;

    const sideNavLinks = (
      <div className={classes.toolbar}>
        <List onClick={this.handleDrawerToggle}>
          <ListItem button={true}>
            <ListItemText primary="Main Menu" />
          </ListItem>
          <Divider />
        </List>
        {user && (
            <ListItem onClick={this.handleClick}>
              Hello, {user}!
              <IconButton
                  aria-haspopup="true"
                  color="inherit">
                <AccountCircle />
              </IconButton>
              <Menu
                  id="simple-menu"
                  anchorEl={this.state.anchorEl}
                  open={Boolean(this.state.anchorEl)}
                  onClose={this.handleClose}
              >
                <MenuItem onClick={this.handleLogout}>Logout</MenuItem>
              </Menu>
            </ListItem>

        )}
        <Divider />
      </div>
    );

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar variant="dense">
            <Typography>
              App Name
            </Typography>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.navIconHide}>
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Hidden mdUp={true}>
          <Drawer
            anchor={this.state.direction === 'rtl' ? 'right' : 'left'}
            open={this.state.openSideNav}
            onClose={this.handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}>
            {sideNavLinks}
          </Drawer>
        </Hidden>
      </div>
    );
  }
}

interface INavProps extends LocalizeContextProps {
  classes: any,
  removeUser: () => void,
  history: any
}

interface IStateProps {
  getUser: any
}

interface IDispatchProps {
  removeUser(): void
}

const mapStateToProps = (state: IState) => ({
  getUser: state.user
});

const mapDispatchToProps = (dispatch: any) => ({
  removeUser: () => dispatch(removeUser())
});

export default compose(
  withStyles(styles),
  withRouter,
  connect<IStateProps, IDispatchProps>(mapStateToProps, mapDispatchToProps)
)(NavBar);
