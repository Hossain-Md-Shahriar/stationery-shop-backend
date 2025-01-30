import express from 'express';
import { OrderControllers } from './order.controller';

const router = express.Router();

router.post('/', OrderControllers.CreateOrder);
router.get('/revenue', OrderControllers.GetRevenue);

export const OrderRoutes = router;
