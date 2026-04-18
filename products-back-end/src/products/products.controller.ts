import {
  Body,
  Controller,
  // FileTypeValidator,
  Get,
  MaxFileSizeValidator,
  ParseFilePipe,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ValidationPipe } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth-guard';
import { CreateProductDto } from './dto/creat-product.dto';
import { CurrentUser } from '../auth/current-user.decorator';
import type { TokenPayload } from '../auth/token-payload.interface';
import { ProductsService } from './products.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

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

  @Post(':productId/image')
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(
    FileInterceptor('current-image', {
      storage: diskStorage({
        destination: 'public/products',
        filename: (req, file, callback) => {
          callback(
            null,
            `${String(req.params.productId)}${extname(file.originalname)}`,
          );
        },
      }),
    }),
  )
  uploadProductImage(
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: 5000000 }),
          // new FileTypeValidator({ fileType: 'image/jpeg' }),
        ],
      }),
    )
    _file: Express.Multer.File,
  ) {
    console.log('_file', _file); //log for now to avoid ts errors
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  async getProducts() {
    return this.productsService.getProducts();
  }
}
