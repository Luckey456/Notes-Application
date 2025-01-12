import React from 'react';
// import NoteForm from '../components/NoteForm';
import NoteList from '../components/NoteList';

const NotesPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Notes</h1>
      {/* <NoteForm /> */}
      <NoteList />
    </div>
  );
};

export default NotesPage;