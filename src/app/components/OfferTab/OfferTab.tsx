import { OfferTabProps } from "./types";

export const OfferTab = ({ period, priceAfterSale, priceBeforeSale, salePercent, description, isHit }: OfferTabProps) => {
  return (
    <div className=" bg-gray-500 rounded-[40] py-[23]">
      <div className="flex flex-col max-w-51 m-auto gap-[40]">
        <div>
          <p className="mb-0 text-5xl font-[600] text-amber-500 place-self-center">{priceAfterSale} ₽</p>
          <p className="self-end text-2xl font-[400] line-through place-self-end">{priceBeforeSale} ₽</p>
          <h2 className="mb-0.5 text-2xl font-[500] place-self-center">{period}</h2>
        </div>
        <div className="description">{description}</div>
      </div>
    </div>
  );
};
