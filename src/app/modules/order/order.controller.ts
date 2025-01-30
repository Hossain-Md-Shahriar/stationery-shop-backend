import { Request, Response } from 'express';
import { OrderServices } from './order.service';

const CreateOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;
    const result = await OrderServices.CreateOrderIntoDB(orderData);

    res.status(200).json({
      message: 'Order created successfully',
      success: true,
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      message: 'Failed to create order',
      success: false,
      error: error,
      stack: error.stack || 'stack trace not available',
    });
  }
};

const GetRevenue = async (req: Request, res: Response) => {
  try {
    const result = await OrderServices.GetRevenueFromOrders();

    res.status(200).json({
      message: 'Revenue calculated successfully',
      success: true,
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      message: 'Failed to calculate revenue',
      success: false,
      error: error,
      stack: error.stack || 'stack trace not available',
    });
  }
};

export const OrderControllers = {
  CreateOrder,
  GetRevenue,
};
