import React , {  } from 'react';
import "./SideBar.css";
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core/';
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';


const drawerWidth = 300;
const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: 36,
    },

    root: {
        display: 'flex',
        height: 3,
    },

    menuButton: {
        marginRight: theme.spacing(2),
    },

    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
        top: 62,
    },
    header: {
        width: 200,
    },

    appBar: {
        width: 500,
    },
    
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },

    content: {

        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },

    
}))

function SidebarNavigator(props) {
    const classes = useStyles();
    const [] = React.useState(false);
     return(
        <div className={classes.root}>
            <Drawer open={props.drawerOpenClose}
                variant="persistent"
                anchor="left"
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor="left">
                <List>
                  <div className="notes">
                     <ListItem>
                        <ListItemIcon>
                           <EmojiObjectsOutlinedIcon className="Notes" >
                           </EmojiObjectsOutlinedIcon>    
                        </ListItemIcon>
                        <ListItemText primary='Notes'/>
                     </ListItem>
                 </div>
                 <div className="reminder">
                    <ListItem>
                        <ListItemIcon>  
                            <NotificationsNoneOutlinedIcon className="Reminder">
                            </NotificationsNoneOutlinedIcon>
                        </ListItemIcon>
                       <ListItemText primary='Reminders'/>
                    </ListItem>             
                 </div>
                 <div className="Edit-label">
                        <ListItem >
                            <ListItemIcon>
                                <CreateOutlinedIcon className="Edit Labels">
                                </CreateOutlinedIcon>
                            </ListItemIcon>
                            <ListItemText primary='Edit labels' />
                        </ListItem>
                 </div>
                 <div className="archive">
                        <ListItem >
                            <ListItemIcon>
                                <ArchiveOutlinedIcon className="Archive">
                                </ArchiveOutlinedIcon>
                            </ListItemIcon>
                            <ListItemText primary='Archive' />
                        </ListItem>
                 </div>
                 <div className="bin">
                        <ListItem  >
                            <ListItemIcon>
                                <DeleteOutlinedIcon className="Trash">
                                </DeleteOutlinedIcon>
                            </ListItemIcon>
                            <ListItemText primary='Trash' />
                        </ListItem>
                 </div>
                </List>
            </Drawer>
                
        </div>
    )

}

export default SidebarNavigator;