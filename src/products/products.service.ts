import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './schemas/product.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ProductsService {
  constructor(@InjectModel(Product.name) private productModel: Model<Product>) {}

  create(CreateProductDto: CreateProductDto) {
    return this.productModel.create(CreateProductDto);
  }

  findAll() {
    return this.productModel.find();
  }

  findById(id: string) {
    return this.productModel.findById(id);
  }



 update(id: string, updateProductDto: UpdateProductDto) {
    return this.productModel.findByIdAndUpdate(id, {
      name: updateProductDto.name,
      value: updateProductDto.value,
      quantity: updateProductDto.quantity,
    });
  }

  remove(id: string) {
    return this.productModel.findByIdAndDelete(id);
  }
}