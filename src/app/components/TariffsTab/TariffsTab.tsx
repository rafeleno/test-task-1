import { TariffsTabView } from "./TariffsTabView";
import { TariffsTabViewProps } from "./types";

export const TariffsTab = ({
  period,
  priceAfterSale,
  id,
  priceBeforeSale,
  description,
  isHit,
  className,
  isVertical,
  isActive,
  onClick,
  isOnSale,
}: TariffsTabViewProps) => {
  const salePercentValue = Math.round(((priceBeforeSale - priceAfterSale) / priceBeforeSale) * 100);

  return (
    <TariffsTabView
      period={period}
      priceAfterSale={priceAfterSale}
      id={id}
      priceBeforeSale={priceBeforeSale}
      salePercent={isOnSale ? salePercentValue : null}
      description={description}
      isHit={isHit}
      className={className}
      isVertical={isVertical}
      isActive={isActive}
      onClick={onClick}
    />
  );
};
