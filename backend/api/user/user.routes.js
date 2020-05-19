const express = require('express');
const {
  getUser,
  getUsers,
  deleteUser,
  updateUser,
  addUser,
} = require('./user.controller');
const router = express.Router();

router.get('/', getUsers);
router.get('/:id', getUser);
router.put('/:id', updateUser);
router.post('/', addUser);
router.delete('/:id', deleteUser);

module.exports = router;
