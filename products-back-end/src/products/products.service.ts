import { Injectable, NotFoundException } from '@nestjs/common';
import { promises as fs } from 'fs';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDto } from './dto/creat-product.dto';
import { join } from 'path';
import { PRODUCT_IMAGES_PATH } from './product-images';
import { Prisma } from '@prisma/client';

@Injectable()
export class ProductsService {
  constructor(private readonly prismaService: PrismaService) {}

  async createProduct(data: CreateProductDto, userId: number) {
    return this.prismaService.product.create({
      data: {
        name: data.name,
        description: data.description,
        price: data.price,
        userId: userId,
      },
    });
  }

  async getProducts() {
    const products = await this.prismaService.product.findMany();
    return Promise.all(
      products.map(async (product) => ({
        ...product,
        imageExists: await this.imageExists(product.id),
      })),
    );
  }

  async getProduct(productId: number) {
    try {
      return {
        ...(await this.prismaService.product.findUniqueOrThrow({
          where: { id: productId },
        })),
        imageExists: await this.imageExists(productId),
      };
    } catch {
      throw new NotFoundException(`Product with ID ${productId} not found`);
    }
  }

  private async imageExists(productId: number): Promise<boolean> {
    try {
      await fs.access(
        join(PRODUCT_IMAGES_PATH, `${productId}.png`),
        fs.constants.F_OK,
      );
      return true;
    } catch {
      return false;
    }
  }

  async update(productId: number, data: Prisma.ProductUpdateInput) {
    await this.prismaService.product.update({
      where: { id: productId },
      data,
    });
  }
}
