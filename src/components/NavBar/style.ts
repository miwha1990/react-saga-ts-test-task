
import { createStyles, Theme } from '@material-ui/core/styles';
const drawerWidth = 240;
export const styles = ({ breakpoints, palette, mixins }: Theme) =>
  createStyles({
    drawerPaper: {
      width: drawerWidth,
      [breakpoints.up('md')]: {
        position: 'relative'
      }
    },
    dropdownBtn: {
      [breakpoints.down('md')]: {
        color: palette.primary.light
      },
      textTransform: 'capitalize'
    },
    flex: {
      alignItems: 'center',
      display: 'flex',
      flexGrow: 1,
      justifyContent: 'flex-end'
    },
    linkBtn: {
      [breakpoints.down('md')]: {
        color: palette.primary.light
      },
      borderRadius: '3px',
      color: 'white',
      margin: '0 3px',
      padding: '5px 10px',
      textDecoration: 'none'
    },
    navIconHide: {
      [breakpoints.up('md')]: {
        display: 'none'
      },
      flex: 0,
      marginLeft: 'auto'
    },
    root: {
      display: 'flex',
      flexDirection: 'column',
      marginBottom: '10px'
    },
    themeIcon: {
      paddingRight: '5px'
    },
    themes: {
      textTransform: 'capitalize'
    },
    toolbar: mixins.toolbar
  });
