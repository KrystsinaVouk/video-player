import * as React from 'react';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import {useRouter} from "next/router";
import {useActions} from "../hooks/useActions";
import {useEffect} from "react";
import {useTypedSelector} from "../hooks/useTypedSelector";

export default function Navbar() {
    const router = useRouter()
    const {removeUser} = useActions();
    const {user} = useTypedSelector(state => state.user);

    const menuItems = [
        {text: 'Home', onClick: () => router.push('/')},
        {text: 'Videos', onClick: () => router.push('/')},
        {text: 'Sign out', onClick: () => removeUser()},
    ]

    const [open, setOpen] = React.useState(false);


    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    useEffect(()=> {
        if (!user) {
            router.push('/');
        }
    }, [user])

    return (
        <div>
            <CssBaseline/>
            <AppBar
                style={{background:'darkgrey', color:'black', boxShadow: '0 3px 3px rgba(0,0,0,.1)'}}
                position="fixed"
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Menu
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="persistent"
                anchor="left"
                open={open}
            >
                <div>
                    <IconButton
                        style={{ boxShadow: '0 5px 5px rgba(0,0,0,.1)'}}
                        onClick={handleDrawerClose}>
                        <ChevronLeftIcon/>
                    </IconButton>
                </div>
                <List>
                    {menuItems.map(({text, onClick}, index) => (
                        <ListItem
                            style={{ boxShadow: '0 5px 5px rgba(0,0,0,.3)'}}
                            button
                            key={text}
                            onClick={()=>removeUser()}>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}
                            </ListItemIcon>
                            <ListItemText primary={text}/>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </div>
    );
}
