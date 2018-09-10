import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import logo from '../../logo.png';


const NavBar = () => {
    return(
        <div>
        <AppBar position="static">
            <img src={logo} style={style} alt="Logo"/>
            <Toolbar>
                <Typography variant="title" color="inherit" style={style}>
                    Todo Manager
                </Typography>
            </Toolbar>
        </AppBar>
        </div>
    )
}
const style = {
    margin:'auto',
    display:'block'
}

export default NavBar;