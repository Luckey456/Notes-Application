import React from 'react';

const NoteItem = ({ note, onDelete, onEdit }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h3 className="text-xl font-bold mb-2">{note.title}</h3>
      <p className="mb-4">{note.content}</p>
      {note.image && <img src={`http://localhost:5000/${note.image}`} alt={note.title} className="w-full h-auto rounded" />}
      <div className="mt-4">
        <button onClick={() => onEdit(note)} className="bg-yellow-500 text-white p-2 rounded hover:bg-yellow-700 mr-2">Edit</button>
        <button onClick={() => onDelete(note._id)} className="bg-red-500 text-white p-2 rounded hover:bg-red-700">Delete</button>
      </div>
    </div>
  );
};

export default NoteItem;