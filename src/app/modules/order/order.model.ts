import { Schema, model } from 'mongoose';
import { IOrder } from './order.interface';
import validator from 'validator';
import { Product } from '../product/product.model';

const OrderSchema = new Schema<IOrder>(
  {
    email: {
      type: String,
      required: [true, 'Email is required'],
      validate: {
        validator: (value: string) => validator.isEmail(value),
        message: '{VALUE} is not a valid email',
      },
    },
    product: {
      type: Schema.Types.ObjectId,
      required: [true, 'Product ID is required'],
    },
    quantity: {
      type: Number,
      required: [true, 'Quantity is required'],
      min: [1, 'minimum quantity should be 1'],
    },
    totalPrice: {
      type: Number,
      required: [true, 'Total Price is required'],
    },
  },
  {
    timestamps: true,
  }
);

// pre-save middleware
OrderSchema.pre('save', async function (next) {
  try {
    const product = await Product.findById(this.product);

    if (!product) {
      throw new Error('Product not found');
    }

    if (this.quantity > product.quantity) {
      throw new Error('Insufficient stock');
    }

    const result = await Product.findByIdAndUpdate(
      this.product,
      { $inc: { quantity: -this.quantity } },
      { new: true }
    );

    if (result && result.quantity <= 0) {
      await Product.findByIdAndUpdate(
        this.product,
        { $set: { inStock: false } },
        { new: true }
      );
    }

    next();
  } catch (error: any) {
    next(error);
  }
});

export const Order = model<IOrder>('Order', OrderSchema);
