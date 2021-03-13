import React, { useState, useEffect } from 'react'
import "./DashBoard.css"
import AppBar from '../AppBar/AppBar'
import AddNote from "../addNote/addNote";
import DisplayNote from "../DisplayNotes/DisplayNote";
import Notes from '../Notes/notes';



class dashboard extends React.Component {

   render(){
    return (
        <div>
          <AppBar />
          <Notes />
         
        </div>
      )
   }
   
}

export default dashboard;

