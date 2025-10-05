import { TariffsTabProps } from "./types";
import styles from "./styles.module.css";
import { Roboto } from "next/font/google";
const roboto = Roboto({
  weight: "400",
});

export const TariffsTabView = ({
  period,
  priceAfterSale,
  id,
  priceBeforeSale,
  salePercent,
  description,
  isHit,
  className,
  isVertical = false,
  isActive,
  isOnSale,
  onClick,
}: TariffsTabProps) => {
  return (
    <div
      onClick={onClick}
      className={
        `${isVertical ? "col-span-full pt-[30]" : "pt-[70]"} relative duration-75 ease-in rounded-[40] border-[2] border-[#484D4E] bg-[#313637] cursor-pointer  
        before:absolute before:top-[-2] before:left-[50%] before:translate-x-[-50%] before:h-[2] 
        after:absolute after:top-[-16] after:left-[47] after:h-[14] after:w-[65] 
        after:bg-[#232829] 
        ${isHit ? "before:w-[90%]" : "before:w-[60%]"}
        ${isActive ? "before:bg-[#fdb056]" : "before:bg-[#484D4E]"}
        ${isOnSale ? "" : " " + styles.withOutSale}` +
        (isActive ? " border-[#fdb056]" : "") +
        (className ? " " + className : "")
      }
      data-id={id}
    >
      {isHit && (
        <div className={styles.hit} aria-hidden="true">
          хит!
        </div>
      )}

      <div className={`${styles.salePercentTab} ${roboto.className}`}>-{salePercent}%</div>
      <div className={`${isVertical ? "flex-row max-w-[546]" : "flex-col max-w-[204]"} flex m-auto gap-[40]`}>
        <div className={`${isVertical ? "pl-[40]" + " " : ""}text-nowrap`}>
          <h2 className={`text-2xl font-[500] place-self-center ${isVertical ? "mb-[6]" : "mb-[30]"}`}>{period}</h2>
          <div className={`relative place-self-center`}>
            <p className={`${styles.priceAfterSale} ${isActive ? "text-[#fdb056]" : ""}`}>{priceAfterSale} ₽</p>
            <p className={`${styles.priceBeforeSale}`}>{priceBeforeSale} ₽</p>
          </div>
        </div>
        <div className={`${isVertical ? "place-self-center" : ""} description`}>{description}</div>
      </div>
    </div>
  );
};
