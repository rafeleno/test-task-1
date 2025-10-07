import { ITariff, TariffsProps } from "./types";
import { TariffsTab } from "../TariffsTab";
import { Loader } from "../Loader";

export const Tariffs = ({ tariffs, isOnSale, selectedOffer, setSelectedOffer, className }: TariffsProps) => {
  // Важно! С Бэка приходит массив, в котором у первых двух элементов одиновый id, так что id в map генерируется локально

  return (
    <div
      className={`relative content-supplies grid grid-cols-1 grid-rows-[repeat(4,_130px)] gap-[14] xl:grid-cols-3 xl:grid-rows-[190px_335px] ${
        className ? ` ${className}` : ""
      }`}
    >
      {!tariffs && <Loader />}
      {tariffs &&
        tariffs.map((offer: ITariff, index: number) => {
          return (
            <TariffsTab
              onClick={() => setSelectedOffer(index.toString())}
              id={index.toString()}
              isVertical={offer.is_best}
              period={offer.period}
              priceAfterSale={offer.price}
              priceBeforeSale={offer.full_price}
              description={offer.text}
              isHit={offer.is_best}
              isActive={selectedOffer === index.toString()}
              isOnSale={isOnSale}
              className="overflow-hidden"
            />
          );
        })}
    </div>
  );
};
