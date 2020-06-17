import Router from 'express';
import index from '../controllers/index'

const router = Router();


router.get('/user/:userId', index.getDataByUserId );
router.get('/user', index.getDataByUserName );


module.exports = router;