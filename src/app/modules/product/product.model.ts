import { Schema, model } from 'mongoose';
import { IProduct } from './product.interface';

const ProductSchema = new Schema<IProduct>(
  {
    name: {
      type: String,
      required: [true, 'Product name is required.'],
    },
    brand: {
      type: String,
      required: [true, 'Brand is required.'],
    },
    price: {
      type: Number,
      required: [true, 'Price is required.'],
      min: [1, 'Price must be a positive number'],
    },
    category: {
      type: String,
      enum: {
        values: [
          'Writing',
          'Office Supplies',
          'Art Supplies',
          'Educational',
          'Technology',
        ],
        message: '{VALUE} is not valid category',
      },
      required: [true, 'Category is required.'],
    },
    description: {
      type: String,
      required: [true, 'Description is required.'],
    },
    quantity: {
      type: Number,
      required: [true, 'Quantity is required.'],
    },
    inStock: {
      type: Boolean,
      required: [true, 'In-stock status is required.'],
    },
  },
  {
    timestamps: true,
  }
);

export const Product = model<IProduct>('Product', ProductSchema);
