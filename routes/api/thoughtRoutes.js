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

// /api/thoughts GET/POST all
router.route('/').get(getAllThought).post(createThought);

// /api/courses/:thoughtId GET/PUT/DELETE single
router
  .route('/:id')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);


// reactions
router
  .route('/:thoughtId/reactions')
  .post(createReaction);

router.route('/:thoughtId/reactions/:reactionId')
.delete(deleteReaction);



module.exports = router;
