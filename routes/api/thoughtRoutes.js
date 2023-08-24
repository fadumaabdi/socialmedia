const router = require('express').Router();
const {
  getAllThought,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction
} = require('../../controllers/thoughtController.js');

router.route('/').get(getAllThought);

router.route('/:userId').post(createThought);

router.route('/:thoughtId').get(getThoughtById).put(updateThought);

router.route('/:thoughtId/users/:userId').delete(deleteThought);

router.route('/:thoughtId/reactions').post(createReaction);

router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

//export router
module.exports = router;