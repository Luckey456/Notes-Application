const express = require('express');
const multer = require('multer');
const {
  getNotes,
  createNote,
  updateNote,
  deleteNote,
} = require('../controllers/notesController');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.get('/', getNotes);
router.post('/', upload.single('image'), createNote);
router.put('/:id', upload.single('image'), updateNote);
router.delete('/:id', deleteNote);

module.exports = router;