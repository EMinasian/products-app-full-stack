import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ProductsService } from 'src/products/products.service';
import Stripe from 'stripe';

@Injectable()
export class CheckoutService {
  constructor(
    @Inject('STRIPE_CLIENT') private readonly stripe: Stripe.Stripe,
    private readonly productsService: ProductsService,
    private readonly configService: ConfigService,
  ) {}

  async createCheckoutSession(productId: number) {
    const product = await this.productsService.getProduct(productId);

    if (!product) {
      throw new Error('Product not found');
    }

    return this.stripe.checkout.sessions.create({
      metadata: {
        productId: product.id,
      },
      line_items: [
        {
          price_data: {
            currency: 'usd',
            unit_amount: product.price * 100,
            product_data: {
              name: product.name,
              description: product.description,
            },
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${this.configService.getOrThrow('FE_BASE_URL')}/`,
      cancel_url: `${this.configService.getOrThrow('FE_BASE_URL')}/`,
    });
  }

  async handleCheckoutWebhook(event: any) {
    // eslint-disable-next-line
    if (event?.type !== 'checkout.session.completed') {
      return;
    }

    const session = await this.stripe.checkout.sessions.retrieve(
      // eslint-disable-next-line
      event.data.object.id,
    );

    if (!session.metadata) {
      return;
    }
    await this.productsService.update(parseInt(session.metadata.productId), {
      sold: true,
    });
  }
}
