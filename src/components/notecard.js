import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useContext } from 'react';
import noteContext from "../context/notes/NoteContext"

export const Notecard = (props) => {
  const { note, update } = props;
  const context = useContext(noteContext);
  const { deleteNote } = context;
  return (
    <div className="col-md-3 my-1" >
      <Card >
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {note.title}
          </Typography>
          <Typography variant="body3" color="text.secondary" >
            {note.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="text" onClick={() => deleteNote(note._id)}>Delete</Button>
          <Button variant="text" onClick={()=>{update(note)}}>Edit</Button>
        </CardActions>
      </Card>

    </div>
  )
}
