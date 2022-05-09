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
import {useNavbar} from "../hooks/useNavbar";

// @ts-ignore
import styles from "../styles/Navbar.module.scss"

export default function Navbar() {
    const { push } = useRouter();
    const {
        open,
        handleDrawerOpen,
        handleDrawerClose,
        menuItems
    } = useNavbar();

    return (
        <div>
            <CssBaseline/>
            <AppBar className={styles.appBar}
            position="fixed">
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
                        className={styles.iconBtn}
                        onClick={handleDrawerClose}>
                        <ChevronLeftIcon/>
                    </IconButton>
                </div>
                <List>
                    {menuItems.map(({text, onClick}, index) => (
                        <ListItem
                            className={styles.listItem}
                            button
                            key={text}
                            onClick={onClick}>
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
