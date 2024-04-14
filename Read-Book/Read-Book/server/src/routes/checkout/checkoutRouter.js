const router = require('express').Router();
const checkoutController = require('../../controllers/checkoutController/checkoutController');

router.post('/',checkoutController.checkoutUser);
router.get('/:id', checkoutController.getCheckoutByUserId);
// router.delete('/:id', cartController.deleteCartUser);

module.exports = router;