import Router from 'express';
import index from '../controllers/index'

const router = Router();


router.get('/user/:userId', index.getDataByUserId );


module.exports = router;