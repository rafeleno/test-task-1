export interface OfferTabProps {
  period: string;
  priceAfterSale: number;
  priceBeforeSale: number;
  salePercent: number;
  description: string;
  isHit: boolean;
  className?: string;
  isVertical?: boolean;
}
