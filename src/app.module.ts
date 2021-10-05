import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// import { ProductsController } from './controllers/products/products.controller';
import { CategoriesController } from './controllers/categories.controller';
import { UsersController } from './controllers/users.controller';

import { CustomersController } from './controllers/customers.controller';
import { OrdersController } from './controllers/orders.controller';
// import { ProductsService} from './controllers/products/products.service'
import { ProductsModule } from './controllers/products/products.module';

import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [ProductsModule, MongooseModule.forRoot('mongodb://localhost/nest')],
  controllers: [AppController,  CategoriesController, UsersController,  CustomersController, OrdersController],
  providers: [AppService],
})
export class AppModule {}
