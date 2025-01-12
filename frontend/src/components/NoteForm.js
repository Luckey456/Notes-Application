import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createNote, updateNote } from '../redux/notesSlice';

const NoteForm = ({ currentNote, setCurrentNote }) => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    image: null,
  });
  const [existingImage, setExistingImage] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentNote) {
      setFormData({
        title: currentNote.title,
        content: currentNote.content,
        image: null,
      });
      setExistingImage(currentNote.image ? `http://localhost:5000/${currentNote.image}` : null);
    } else {
      setFormData({
        title: '',
        content: '',
        image: null,
      });
      setExistingImage(null);
    }
  }, [currentNote]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
    if (files) {
      setExistingImage(URL.createObjectURL(files[0]));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('title', formData.title);
    data.append('content', formData.content);
    if (formData.image) {
      data.append('image', formData.image);
    } else if (existingImage) {
      data.append('existingImage', existingImage);
    }

    if (currentNote) {
      dispatch(updateNote({ id: currentNote._id, note: data }));
      setCurrentNote(null);
    } else {
      dispatch(createNote(data));
    }

    setFormData({
      title: '',
      content: '',
      image: null,
    });
    setExistingImage(null);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mb-6">
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={formData.title}
        onChange={handleChange}
        required
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />
      <textarea
        name="content"
        placeholder="Content"
        value={formData.content}
        onChange={handleChange}
        required
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      ></textarea>
      <input
        type="file"
        name="image"
        onChange={handleChange}
        accept="image/*"
        className="mb-4"
      />
      {existingImage && (
        <div className="mb-4">
          <img src={existingImage} alt="Note" className="w-full h-auto rounded" />
        </div>
      )}
      <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700">
        {currentNote ? 'Update Note' : 'Add Note'}
      </button>
    </form>
  );
};

export default NoteForm;