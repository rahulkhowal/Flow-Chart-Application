import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {

      flexGrow: 1,
    },
    appbar:{
        alignItems:'center',
        height:'80px',
        backgroundColor:'#324ab2'
    }
  }),
);

export default function Heading() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static"  className={classes.appbar}>
        <Toolbar >
          <Typography variant="h4" className={classes.title}>
            Flow-Chart Application
          </Typography>
         
        </Toolbar>
      </AppBar>
    </div>
  );
}