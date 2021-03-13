import React, { useState, useContext } from "react";
import "./addNote.css";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import Button from '@material-ui/core/Button';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import CheckBoxOutlinedIcon from '@material-ui/icons/CheckBoxOutlined';
import BrushIcon from '@material-ui/icons/Brush';
import DisplayIcons from "../DisplayIcons/DisplayIcons";
import logoicon from "../../assets/pin note.jpg";
import { addNote, updateNotes } from "../../Services/userServices";

var checkOpen = "open";

export default function AddNote(props) {
  const [open, setOpen] = React.useState(false);
  const [showTitle, titleDisplay] = React.useState(props.editOpen);
  const [edit, setEdit] = React.useState(props.setEdited);
  const [noteId, setNoteId] = React.useState(props.editId);
  const [title, settitle] = React.useState(props.editTitle);
  const [description, setdescription] = React.useState(props.editDisc);
  const [trash, setTrash] = React.useState(props.trash);
  const [clr, setClr] = React.useState("#fafafa");

  const handleNote = () => {
    if (props.setEdited) {

      if (title == undefined && description == undefined) {
        console.log('Please fill the data')
        titleDisplay(false);
        return null;
      }
      console.log('We are inside the updateNotes in Addnote')
      let data = {
        id: noteId,
        title: title,
        description: description,
        
      }

      console.log('data : ', data)
      updateNotes(data).then(data=>{
        console.log(data)
        console.log('Note is updated')
      }).catch(err=>{
        console.log('err : ',err)
      })
      titleDisplay(false);
    } else {

      let data = {
        title: title,
        description: description,

      }

      console.log('data : ', data)
      addNote(data).then(data=>{
        
        console.log('Note added succesfully')
      }).catch(err=>{
         console.log('err : ',err)
      })

      if (checkOpen == "close") {
        setOpen(true);
        checkOpen = "open";
      } else if (checkOpen == "open") {
        setOpen(false);
        checkOpen = "close";
      }
      
    }

  }

  const handletitle = (Event) => {
    settitle(Event.target.value);
  }

  const handledescription = (Event) => {
    setdescription(Event.target.value);
  }

  const NotePadOpenClose = () => {
    if (checkOpen == "close") {
      setOpen(true);
      checkOpen = "open";
    } else if (checkOpen == "open") {
      setOpen(false);
      checkOpen = "close";
    }
    console.log(checkOpen);

  }


  return (
    <div className="notesone">
      {open ? (
        <div className="contain container1">
          <div className="note1" >
            <div className="title pd">
              <InputBase
                placeholder='Title...'
                name="title"
                onChange={handletitle}
                fullWidth
              />
              <IconButton>
                <img className="logoIcon" src={logoicon} size="small" />
              </IconButton>
            </div>
            <div className='note pd'>
              <InputBase
                placeholder='Take a note...'
                value={description}
                name="description"
                onChange={handledescription}
                fullWidth
              />
            </div>
          </div>
          <br>
          </br>

          <div className="toolbar">

            <div className="toolbar1">
              <DisplayIcons trash={trash} />
            </div>
            <div className="close-button">
              <Button size="small" onClick={handleNote}>Close</Button>
            </div>
          </div>
        </div> ) : (
        <div className="contain container" >
          <div className="note">
            <InputBase 
                placeholder='Take a note...'  
                onClick={NotePadOpenClose} 
                fullWidth 
            />
          </div>
          <IconButton>
            <CheckBoxOutlinedIcon />
          </IconButton>
          <IconButton>
            <BrushIcon />
          </IconButton>
          <IconButton>
            <ImageOutlinedIcon />
          </IconButton>
        </div>


        )}
    </div>
  )

}

