import React from 'react'
import AddNote from '../addNote/addNote'
import DisplayNote from '../DisplayNotes/DisplayNote'
import { getNotes } from '../../Services/userServices'

export default function Notes(props){
    
    var [note, setNote] = React.useState([]);
    
    React.useEffect(()=>{
        displaynotes();
    }, []);

    const displaynotes = () => {
        getNotes().then(data=>{
            console.log('data in notes : ',data.data.data)
            setNote(data.data.data)
            console.log('note : ',note);
        }).catch(err=>{
            console.log('err : ',err);
        })
    }

    return(
        <div className="mainContent">
          <AddNote getNoteUpdate={displaynotes} /> 
          <DisplayNote notes={note} />   
        </div>
    )
}