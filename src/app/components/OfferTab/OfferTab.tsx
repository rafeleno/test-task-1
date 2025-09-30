import { OfferTabProps } from "./types";
import styles from "./styles.module.css";

export const OfferTab = ({ period, priceAfterSale, priceBeforeSale, salePercent, description, isHit, className, isVertical = false }: OfferTabProps) => {
  return (
    <div className={`${isVertical ? "col-span-full pt-[30]" : "pt-[70]"} rounded-[40] border-[2] border-[#484D4E] bg-[#313637]`}>
      <div className={`${isVertical ? "flex-row max-w-[546]" : "flex-col max-w-[204]"} flex m-auto gap-[40]`}>
        <div>
          <h2 className="text-2xl font-[500] place-self-center mb-[30]">{period}</h2>
          <p className="mb-0 text-5xl font-[600] place-self-center">{priceAfterSale} ₽</p>
          <p className="self-end text-2xl font-[400] line-through place-self-end text-[#919191]">{priceBeforeSale} ₽</p>
        </div>
        <div className={`${isVertical ? "place-self-center" : ""} description`}>{description}</div>
      </div>
    </div>
  );
};
