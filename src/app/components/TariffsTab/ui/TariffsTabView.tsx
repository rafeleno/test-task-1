import { TariffsTabProps } from "../types";
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
  console.log(description);

  return (
    <div
      onClick={onClick}
      className={
        `
        relative duration-75 ease-in rounded-[20] border-[2] border-[#484D4E] bg-[#313637] cursor-pointer md:rounded-[30] xl:rounded-[40]
        ${isVertical ? "col-span-full p-[20_16_0_25] lg:p-[14_30_0_30] xl:p-[30_30_0_30]" : "p-[20_16_0_25] lg:p-[14_30_0_30] xl:p-[70_21_0_21]"}
        ${isHit ? "before:w-[90%]" : "before:w-[60%]"}
        ${isActive ? "before:bg-[#fdb056]" : "before:bg-[#484D4E]"}
        ${isOnSale ? "" : " " + styles.withOutSale}` +
        (isActive ? " border-[#fdb056]" : "") +
        (className ? " " + className : "")
      }
      data-id={id}
    >
      {isHit && (
        <div className="absolute text-[#fdb056] top-[5px] md:top-[8px] xl:top-[10px] right-[19px] xl:right-[22px] xl:text-[22px]" aria-hidden="true">
          хит!
        </div>
      )}

      <div
        className={`${styles.salePercentTab} ${
          isHit ? "right-[62]" : "right-[30]"
        } absolute rounded-b-[8px] w-min [text-wrap:nowrap] h-[50px] p-[22_7_1_7] sm:p-[20_7_1_7] xl:p-[15_8_2_8] top-[-20px] sm:top-[-16px] xl:top-[-13px] sm:text-[18px] xl:text-[22px] text-white bg-[#fd5656] xl:left-[48px] xl:right-0" ${
          roboto.className
        }`}
      >
        -{salePercent}%
      </div>
      <div
        className={`${isVertical ? "flex-row max-w-[546]" : "flex-row max-w-[546] xl:flex-col xl:max-w-[204]"} flex m-auto gap-[30] sm:gap-[40] md:gap-[50] xl:gap-[70]`}
      >
        <div className={`text-nowrap h-[88px] lg:h-[102px] xl:h-[130]`}>
          <h2 className={`text-[18px] xl:text-2xl font-[500] place-self-start xl:place-self-center ${isVertical ? "xl:mb-[6]" : "xl:mb-[10]"}`}>{period}</h2>
          <div className={`relative place-self-center`}>
            <p className={`${styles.priceAfterSale} ${isActive ? "text-[#fdb056]" : ""}`}>{priceAfterSale} ₽</p>
            <p className={`${styles.priceBeforeSale} ${!isOnSale ? styles.afterSale : ""} ${isActive ? styles.active : ""}`}>{priceBeforeSale} ₽</p>
          </div>
        </div>
        {/* По макету на малом экране описание "Для тех, кто хочет всегда быть в форме и поддерживать здоровье" - сокращается, но сокращенный вариант с бэка не пришел */}
        <div className={`${isVertical ? "place-self-center" : " place-self-center xl:place-self-start"} text-[14px] sm:text-[16px] description`}>{description}</div>
      </div>
    </div>
  );
};
