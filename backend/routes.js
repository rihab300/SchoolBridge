const express = require('express');
const router = express.Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUserById,
  getAllMessages,
  getMessageById,
  createMessage,
  updateMessage,
  deleteMessageById,
  getAllAssignments,
  getAssignmentById,
  createAssignment,
  updateAssignment,
  deleteAssignmentById,
} = require('./controllers');

// Users routes
router.get('/users', getAllUsers);
router.get('/users/:id', getUserById);
router.post('/users', createUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUserById);

// Messages routes
router.get('/messages', getAllMessages);
router.get('/messages/:id', getMessageById);
router.post('/messages', createMessage);
router.put('/messages/:id', updateMessage);
router.delete('/messages/:id', deleteMessageById);

// Assignments routes
router.get('/assignments', getAllAssignments);
router.get('/assignments/:id', getAssignmentById);
router.post('/assignments', createAssignment);
router.put('/assignments/:id', updateAssignment);
router.delete('/assignments/:id', deleteAssignmentById);

module.exports = router;
