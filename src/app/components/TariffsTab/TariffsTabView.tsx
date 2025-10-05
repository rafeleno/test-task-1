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
  console.log(description);

  return (
    <div
      onClick={onClick}
      className={
        `
        relative duration-75 ease-in rounded-[30] border-[2] border-[#484D4E] bg-[#313637] cursor-pointer xl:rounded-[40]
        ${isVertical ? "col-span-full p-[22_30_0_30] xl:p-[30_30_0_30]" : "p-[22_30_0_30] xl:p-[70_21_0_21]"}
        ${isHit ? "before:w-[90%]" : "before:w-[60%]"}
        ${isActive ? "before:bg-[#fdb056]" : "before:bg-[#484D4E]"}
        ${isOnSale ? "" : " " + styles.withOutSale}` +
        (isActive ? " border-[#fdb056]" : "") +
        (className ? " " + className : "")
      }
      data-id={id}
    >
      {isHit && (
        <div className="absolute text-[#fdb056] top-[10px] right-[19px] xl:right-[22px] xl:text-[22px]" aria-hidden="true">
          хит!
        </div>
      )}

      <div
        className={` absolute rounded-b-[8px] w-min [text-wrap:nowrap] h-[50px] py-[15px] pr-[8px] pb-[2px] pl-[8px] top-[-13px] text-[22px] text-white bg-[#fd5656] right-[62] xl:left-[48px]
" ${roboto.className}`}
      >
        -{salePercent}%
      </div>
      <div className={`${isVertical ? "flex-row max-w-[546]" : "flex-row max-w-[546] xl:flex-col xl:max-w-[204]"} flex m-auto gap-[50] xl:gap-[70]`}>
        <div className={`text-nowrap`}>
          <h2 className={`text-[18px] xl:text-2xl font-[500] place-self-start xl:place-self-center ${isVertical ? "mb-[6]" : "xl:mb-[10]"}`}>{period}</h2>
          <div className={`relative place-self-center`}>
            <p className={`${styles.priceAfterSale} ${isActive ? "text-[#fdb056]" : ""}`}>{priceAfterSale} ₽</p>
            <p className={`${styles.priceBeforeSale}`}>{priceBeforeSale} ₽</p>
          </div>
        </div>
        {/* По макету на малом экране описание "Для тех, кто хочет всегда быть в форме и поддерживать здоровье" - сокращается, но сокращенный вариант с бэка не пришел */}
        <div className={`${isVertical ? "place-self-center" : " place-self-center xl:place-self-start"} text-[14px] md:text-[16px] description`}>{description}</div>
      </div>
    </div>
  );
};
