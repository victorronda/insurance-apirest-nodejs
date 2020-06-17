import Router from 'express';
import index from '../controllers/index'

const router = Router();


router.get('/user/:userId', index.getUserDataByUserId );
router.get('/user', index.getUserDataByUserName );
router.get('/policies', index.getPoliciesDataLinkedByUserName );
router.get('/user_policy', index.getUserDataLinkedByPolicyNumber );


module.exports = router;