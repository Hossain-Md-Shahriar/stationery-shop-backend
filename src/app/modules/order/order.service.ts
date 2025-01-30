import { IOrder } from './order.interface';
import { Order } from './order.model';

const CreateOrderIntoDB = async (OrderData: IOrder) => {
  const result = await Order.create(OrderData);
  return result;
};

const GetOrdersFromDB = async () => {
  const result = await Order.find();
  return result;
};

const GetRevenueFromOrders = async () => {
  const result = await Order.aggregate([
    {
      $group: {
        _id: null,
        totalRevenue: { $sum: '$totalPrice' },
      },
    },
    {
      $project: {
        _id: 0,
        totalRevenue: 1,
      },
    },
  ]);

  return result;
};

export const OrderServices = {
  CreateOrderIntoDB,
  GetRevenueFromOrders,
  GetOrdersFromDB,
};
