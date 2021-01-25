const regionsController = require('../controllers/regions.controller')
const Router = require('express');
const router = new Router();

router.post('/regions', regionsController.createRegion);
router.get('/regions', regionsController.getRegions);
router.get('/regions/:id', regionsController.getOneRegion);
router.put('/regions', regionsController.updateRegion);
router.delete('/regions/:id', regionsController.deleteRegion);

module.exports = router;