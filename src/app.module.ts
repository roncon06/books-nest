import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { BooksModule } from './books/books.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './products/products.module';
import { MultiplyValueMiddleware } from './products/produtcs.middleware';
import { ProductsController } from './products/products.controller';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://0.0.0.0/books-nest'),
    BooksModule,
    ProductsModule,
  ],
  controllers: [],
  providers: [],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(MultiplyValueMiddleware)
      .forRoutes('products');
  }
}
