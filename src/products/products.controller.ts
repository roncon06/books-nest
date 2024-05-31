import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Erro } from './exceptions/erro.exceptions';


@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  
  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    try{
      return this.productsService.create(createProductDto);
    } catch (error) {
      throw new Erro(HttpStatus.INTERNAL_SERVER_ERROR, 'Erro interno', 'Erro interno')}
  }


  @Get()
  findAll() {
    try {
      return this.productsService.findAll();
    } catch (error) {
      throw new Erro(HttpStatus.INTERNAL_SERVER_ERROR, 'Erro interno', 'Erro interno')}
  }



  @Get(':id')
  findOne(@Param('id') id: string) {
    try{
      return this.productsService.findById(id);
    } catch (error) {
      throw new Erro(HttpStatus.INTERNAL_SERVER_ERROR, 'Erro interno', 'Erro interno')}
  }



  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: CreateProductDto) {
    try{
      return this.productsService.update(id, updateProductDto);
    } catch (error) {
      throw new Erro(HttpStatus.INTERNAL_SERVER_ERROR, 'Erro interno', 'Erro interno')}
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    try{
      return this.productsService.remove(id);
    } catch (error) {
      throw new Erro(HttpStatus.INTERNAL_SERVER_ERROR, 'Erro interno', 'Erro interno')}
  }
  


}
