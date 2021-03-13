import React, { useState, useEffect } from 'react'
import './DisplayIcons.css';
import IconButton from '@material-ui/core/IconButton';
import AddAlertOutlinedIcon from '@material-ui/icons/AddAlertOutlined';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import ColorLensOutlinedIcon from '@material-ui/icons/ColorLensOutlined';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import { makeStyles } from '@material-ui/core/styles';
import { Menu, MenuItem, Paper } from '@material-ui/core';
import { deleteNotes, ArchiveNotes  } from '../../Services/userServices'


const DisplayIcons = (props) => {
   
    const [anchorE1, setAnchorE1] = React.useState(null);
    const [anchorE2, setAnchorE2] = React.useState(null);
    const [noteId, setNoteId] = React.useState(props.editId);
    const [open, setOpen] = React.useState(false);



    

    const deleteHandleOpen = (event) => {
        setAnchorE2(event.currentTarget);
    }

    const deleteHandleClose = () => {
        setAnchorE2(null);
    }

    const deleted = () => {
        let data = {
            moveToTrashNote_ID: [noteId],
            isTrash: true,
        }

        console.log('delete data : ', data)
        deleteNotes(data).then(data=>{
            console.log('data : ',data)
            if(data.data.success === true){
                alert('Note successfully moved to the trash folder')
            }else if(data.data.success === false){
                alert('Error occured note is not moved to the trash folder')
            }

        }).catch(err=>{
            console.log('err : ',err)
        })

        setAnchorE2(null);

    }
    const archive = () => {

        let data = {
            moveToArchiveNote_ID: [noteId],
            isArchive: true,
        };

        console.log('archive data : ', data)
        ArchiveNotes(data).then(data=>{
            console.log(data)
            if(data.data.success === true){
                alert('Successfully moved to the Archived folder')
            }else if(data.data.success === false){
                alert('Error occured note is not moved to the Archived folder')
            }
        }).catch(err=>{
            console.log('err : ',err)
        })

    }

   

   



    return (
        <div className="tools">
            <IconButton aria-label="Remind me" edge="start">
                <AddAlertOutlinedIcon fontSize="small" />
            </IconButton>
            <IconButton aria-label="Collaborator">
                <PersonAddOutlinedIcon fontSize="small" />
            </IconButton>
            <IconButton aria-label="Change color">
                <ColorLensOutlinedIcon fontSize="small" />
            </IconButton>
            
            <IconButton aria-label="Add image">
                <ImageOutlinedIcon fontSize="small" />
            </IconButton>
            <IconButton aria-label="Archive note">
                <ArchiveOutlinedIcon fontSize="small" onClick={archive} />
            </IconButton>
            <IconButton aria-label="More">
                <MoreVertOutlinedIcon fontSize="small" onClick={deleteHandleOpen} />
            </IconButton>
            <div>
                <Paper>
                    <Menu anchorEl={anchorE2} open={Boolean(anchorE2)} onClose={deleteHandleClose}>
                        <MenuItem onClick={deleted}>Delete</MenuItem>
                    </Menu>
                </Paper>
            </div>
        </div>

    );
}

export default DisplayIcons;