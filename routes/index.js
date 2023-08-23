const router = require('express').Router();
//import all API routes from api/index.js
const apiRoutes = require('./api');
//add api prefix
router.use('/api', apiRoutes);

router.use((req, res) => res.send('Wrong route!'));

module.exports = router;
