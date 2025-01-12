import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchNotes, deleteNote } from '../redux/notesSlice';
import NoteItem from './NoteItem';
import NoteForm from './NoteForm';

const NoteList = () => {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes.notes);
  const status = useSelector((state) => state.notes.status);
  const error = useSelector((state) => state.notes.error);
  const [currentNote, setCurrentNote] = useState(null);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchNotes());
    }
  }, [status, dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteNote(id));
  };

  const handleEdit = (note) => {
    setCurrentNote(note);
  };

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <NoteForm currentNote={currentNote} setCurrentNote={setCurrentNote} />
      {notes.map((note) => (
        <NoteItem key={note._id} note={note} onDelete={handleDelete} onEdit={handleEdit} />
      ))}
    </div>
  );
};

export default NoteList;