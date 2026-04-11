import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ValidationPipe } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth-guard';
import { CreateProductDto } from './dto/creat-product.dto';
import { CurrentUser } from '../auth/current-user.decorator';
import type { TokenPayload } from '../auth/token-payload.interface';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  async createProduct(
    @Body(
      new ValidationPipe({
        transform: true,
        transformOptions: {
          enableImplicitConversion: true,
        },
        whitelist: true,
      }),
    )
    body: CreateProductDto,
    @CurrentUser() user: TokenPayload,
  ) {
    return this.productsService.createProduct(body, user.userId);
  }
}
