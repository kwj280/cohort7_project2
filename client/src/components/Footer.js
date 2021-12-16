import AppBar from '@mui/material/AppBar'
import ToolBar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import { Link } from 'react-router-dom'
import React from 'react'

const Footer = () => {

  return (
    <AppBar color="inherit" position="static" sx={{ top: 'auto', bottom: 0 }}>
      <ToolBar>
        <List component="nav">
          <ListItem component="div">
            <ListItemText inset>
              <Typography color="default" variant="subtitle1">
                <Link to="/jobs">Find Jobs</Link>
              </Typography>
            </ListItemText>
            <ListItemText inset>
              <Typography color="default" variant="subtitle1">
                <Link to="/company/reviews">Company Reviews</Link>
              </Typography>
            </ListItemText>

            <ListItemText inset>
              <Typography color="default" variant="subtitle1">
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
