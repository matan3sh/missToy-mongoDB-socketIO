const express = require('express');
const {
  getToys,
  getToy,
  addToy,
  deleteToy,
  updateToy,
} = require('./toy.controller');
const router = express.Router();

router.get('/', getToys);
router.get('/:id', getToy);
router.post('/', addToy);
router.put('/:id', updateToy);
router.delete('/:id', deleteToy);

module.exports = router;
