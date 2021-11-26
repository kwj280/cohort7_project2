import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';

import React from 'react'

const useStyles = makeStyles((theme) => ({
 
  appBar: {
    top: 'auto',
    bottom: 0,
  },
 
}));


const Footer = () => {
  const classes = useStyles();

  return (
    <AppBar color="default" position="fixed" className={classes.appBar}>
      <ToolBar>
        <List component="nav">
          <ListItem component="div">
            <ListItemText inset>
              <Typography color="secondary" variant="subtitle1">
                <Link to="/jobs">Find Jobs</Link>
              </Typography>
            </ListItemText>

            <ListItemText inset>
              <Typography color="secondary" variant="subtitle1">
                <Link to="/company/reviews">Company Reviews</Link>
              </Typography>
            </ListItemText>

            <ListItemText inset>
              <Typography color="secondary" variant="subtitle1">
                <Link to="/company/salaries">Company Salaries</Link>
              </Typography>
            </ListItemText>
          </ListItem>
        </List>
      </ToolBar>
    </AppBar>

  )
}

export default Footer
