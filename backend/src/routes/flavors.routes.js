import { Router } from 'express';
import { listFlavors } from '../controllers/flavors.controller.js';

const router = Router();
router.get('/', listFlavors);
export default router;
