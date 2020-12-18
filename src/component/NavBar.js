import React from 'react';
import {Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { BottomNavigation, BottomNavigationAction, colors } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';



const useStyles = makeStyles((theme) =>({
    box:{
        textAlign:"center",
        size:"small"
        
    },
    small: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    root : {
        display:'flex',
        flexWrap:'wrap',
    },
    margin: {
        margin: theme.spacing(1),
        width:'25ch'
    },
    withoutLabel:{
        marginTop: theme.spacing(3),
    },
    textField : {
        width:'25ch',
    }
}))

 

function NavBar() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    
    return(
        <div>
            <BottomNavigation
                
                value={value}
                onChange={(event, newValue)=> {
                setValue(newValue);
                }}
                showLabels     
                    
            >
                <BottomNavigationAction component={Link} to="/home" label="Home" icon={<HomeIcon></HomeIcon>}></BottomNavigationAction>
                <BottomNavigationAction component={Link} to="/menu" label="List" icon={<MenuIcon></MenuIcon>}></BottomNavigationAction>
                <BottomNavigationAction component={Link}  label="Location" icon={<LocationOnIcon/>}></BottomNavigationAction>
                <BottomNavigationAction component={Link} to="/" label="logout" icon={<AccountCircleIcon></AccountCircleIcon>}></BottomNavigationAction>
                
            </BottomNavigation>
           
        </div>
        
    )
}
export default NavBar;