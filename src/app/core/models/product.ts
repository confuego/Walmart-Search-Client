import { GiftOptions } from './gift-optiions';
import { ImageEntity } from './image-entity';

export class Product {
  itemId: number;
  parentItemId: number;
  name: string;
  msrp: number;
  salePrice: number;
  upc: string;
  categoryPath: string;
  shortDescription: string;
  longDescription: string;
  thumbnailImage: string;
  mediumImage: string;
  largeImage: string;
  productTrackingUrl: string;
  standardShipRate: number;
  modelNumber: string;
  productUrl: string;
  customerRating: string;
  numReviews: number;
  customerRatingImage: string;
  categoryNode: string;
  rhid: string;
  bundle: boolean;
  stock: string;
  addToCartUrl: string;
  affiliateAddToCartUrl: string;
  giftOptions: GiftOptions;
  imageEntities: ImageEntity[];
  offerType: string;
  isTwoDayShippingEligible: boolean;
  availableOnline: boolean;
}
