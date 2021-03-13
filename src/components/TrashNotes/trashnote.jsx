import React from 'react'
import '../TrashNotes/trashnote.css'
import AddNote from '../addNote/addNote'
import DisplayNote from '../DisplayNotes/DisplayNote'
import DisplayIcons from '../DisplayIcons/DisplayIcons'
import { Typography } from '@material-ui/core'
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded';
import RestoreFromTrashRoundedIcon from '@material-ui/icons/RestoreFromTrashRounded';
import { getTrashNotes, deleteforever, deleteNotes  } from '../../Services/userServices'


export default function Notes(props) {
    const [trash, settrash] = React.useState([]);
    const [noteId, setNoteId] = React.useState();
    const [notedata, setnotedata] = React.useState();

    React.useEffect(()=>{
        displaynotes();
    }, []);

    const displaynotes = () => {
        getTrashNotes().then((data)=>{
            settrash(data.data.data);
            console.log(trash)
        }).catch(err=>{
            console.log('err : ',err)
        })
    }

    const deleteforever = (e, nId) => {
        console.log('nId : ',nId)
        let data = {
            deleteNote_ID: [nId],
        }

        deleteforever(data).then(data=>{
            console.log('Note Successfully deleted : ',data)
            displaynotes();
            props.getall();
        }).catch(err=>{
            console.log('Error failed to delete the note',err)
        })
    }


    const restore = (e,nId) => {
        let data = {
            moveToTrashNote_ID: [nId],
            isTrash: false,
        }

        console.log('data in restore : ', data)
        deleteNotes(data).then(data=>{
            console.log('data : ', data)
            displaynotes();
            props.getall();
        }).catch(err=>{
            console.log('err : ',err)
        })
    }

    return (
        <div className="mainContent">
            {trash.map((data) => (
                <div className="notes" style={{ backgroundColor: data.color }}>
                    <div>
                        <Typography className="title">{data.title}</Typography>
                        <Typography className="description">{data.description}</Typography>
                    </div>
                    <div className="display">
                        <div>
                            <DisplayNote notes={trash} />
                        </div>
                    </div>
                    <div>
                        <DeleteForeverRoundedIcon onClick={(e) => { deleteforever(e, data.id) }} />
                        <RestoreFromTrashRoundedIcon onClick={(e) => { restore(e, data.id) }} />
                    </div>
                </div>
            ))}
        </div>
    )
}