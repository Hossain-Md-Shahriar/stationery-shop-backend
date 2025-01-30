import { Request, Response } from 'express';
import { ProductServices } from './product.service';

const createProduct = async (req: Request, res: Response) => {
  try {
    const productData = req.body;
    const result = await ProductServices.CreateProductIntoDB(productData);

    res.status(200).json({
      message: 'Product created successfully',
      success: true,
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      message: 'Failed to create product',
      success: false,
      error,
      stack: error.stack || 'stack trace not available',
    });
  }
};

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const { searchTerm } = req.query;
    const result = await ProductServices.GetAllProductFromDB(
      searchTerm as string
    );

    res.status(200).json({
      message: 'Products retrieved successfully',
      success: true,
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      message: 'Failed to retrieve products',
      success: false,
      error,
      stack: error.stack || 'stack trace not available',
    });
  }
};

const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    const result = await ProductServices.GetSingleProductFromDB(productId);

    if (!result) {
      res.status(404).json({
        message: 'Product not found',
        success: false,
      });
      return;
    }

    res.status(200).json({
      message: 'Product retrieved successfully',
      success: true,
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      message: 'Failed to retrieve product',
      success: false,
      error,
      stack: error.stack || 'stack trace not available',
    });
  }
};

const updateProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    const data = req.body;
    const result = await ProductServices.UpdateProductFromDB(productId, data);

    if (!result) {
      res.status(404).json({
        message: 'Product not found',
        success: false,
      });
      return;
    }

    res.status(200).json({
      message: 'Product updated successfully',
      success: true,
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      message: 'Failed to update product',
      success: false,
      error,
      stack: error.stack || 'stack trace not available',
    });
  }
};

const deleteProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    const result = await ProductServices.DeleteProductFromDB(productId);

    if (!result) {
      res.status(404).json({
        message: 'Product not found',
        success: false,
      });
      return;
    }

    res.status(200).json({
      message: 'Product deleted successfully',
      success: true,
      data: {},
    });
  } catch (error: any) {
    res.status(500).json({
      message: 'Failed to delete product',
      success: false,
      error: error,
      stack: error.stack || 'stack trace not available',
    });
  }
};

export const ProductControllers = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
