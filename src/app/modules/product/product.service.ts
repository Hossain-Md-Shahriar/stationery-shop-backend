import { IProduct } from './product.interface';
import { Product } from './product.model';

const CreateProductIntoDB = async (productData: IProduct) => {
  const result = await Product.create(productData);
  return result;
};

const GetAllProductFromDB = async (searchTerm?: string) => {
  const filter = searchTerm
    ? {
        $or: [
          { name: { $regex: searchTerm, $options: 'i' } },
          { brand: { $regex: searchTerm, $options: 'i' } },
          { category: { $regex: searchTerm, $options: 'i' } },
        ],
      }
    : {};

  const result = await Product.find(filter);
  return result;
};

const GetSingleProductFromDB = async (id: string) => {
  const result = await Product.findById(id);
  return result;
};

const UpdateProductFromDB = async (id: string, data: Partial<IProduct>) => {
  const result = await Product.findByIdAndUpdate(id, data, { new: true });
  return result;
};

const DeleteProductFromDB = async (id: string) => {
  const result = await Product.findByIdAndDelete(id);
  return result;
};

export const ProductServices = {
  CreateProductIntoDB,
  GetAllProductFromDB,
  GetSingleProductFromDB,
  UpdateProductFromDB,
  DeleteProductFromDB,
};
