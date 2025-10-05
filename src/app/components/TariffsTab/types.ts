type ZIndexProps = { lessIndex: string; biggerIndex: string };

export interface TariffsTabViewProps {
  period: string;
  priceAfterSale: number;
  id: string;
  priceBeforeSale: number;
  description: string;
  isHit: boolean;
  className?: string;
  isVertical?: boolean;
  isActive?: boolean;
  isOnSale?: boolean;
  onClick: () => void;
}

export type TariffsTabProps = TariffsTabViewProps & { salePercent: number | null };
