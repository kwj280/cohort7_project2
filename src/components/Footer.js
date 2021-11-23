import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { Routes, Route, Link } from 'react-router-dom'
import React from 'react'

const Footer = () => {
  return (
    <div>
      <header>
        <nav>
          <AppBar color="white" position="static">
            <ToolBar>
              <List component="nav">
                <ListItem component="div">
                  <ListItemText inset>
                    <Typography color="secondary" variant="title">
                      <Link to="/jobs">Find Jobs</Link>
                    </Typography>
                  </ListItemText>

                  <ListItemText inset>
                    <Typography color="white" variant="title">
                      <Link to="/company/reviews">Company Reviews</Link>
                    </Typography>
                  </ListItemText>

                  <ListItemText inset>
                    <Typography color="white" variant="title">
                      <Link to="/company/salaries">Company Salaries</Link>
                    </Typography>
                  </ListItemText>
                </ListItem>
              </List>
            </ToolBar>
          </AppBar>
         
        </nav>
      </header>
    </div>
   )
}

export default Footer
