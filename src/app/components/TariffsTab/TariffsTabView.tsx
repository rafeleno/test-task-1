import { TariffsTabProps } from './types';
import styles from './styles.module.css';
import { Roboto } from 'next/font/google';
const roboto = Roboto({
  weight: '400',
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
  onClick,
}: TariffsTabProps) => {
  return (
    <div
      onClick={onClick}
      className={
        `${
          isVertical ? 'col-span-full pt-[30]' : 'pt-[70]'
        } rounded-[40] border-[2] border-[#484D4E] bg-[#313637] cursor-pointer relative` +
        ' ' +
        (isActive ? ' border-[#fdb056]' : '') +
        ' ' +
        (isHit ? styles.hit : '')
      }
      data-id={id}
    >
      {salePercent && (
        <div className={styles.salePercentTab + ' ' + roboto.className}>
          -{salePercent}%
        </div>
      )}
      <div
        className={`${
          isVertical ? 'flex-row max-w-[546]' : 'flex-col max-w-[204]'
        } flex m-auto gap-[40]`}
      >
        <div
          className={`${isVertical ? 'pl-[40]' + ' ' : ''}text-nowrap
           ${styles.withOutfSales}`}
        >
          <h2 className="text-2xl font-[500] place-self-center mb-[30]">
            {period}
          </h2>
          <div className="relative place-self-center">
            <p
              className={
                `text-5xl font-[600]  ${styles.priceAfterSale}` +
                ' ' +
                (isActive ? 'text-[#fdb056]' : '')
              }
            ></p>
            {priceAfterSale} ₽
            <p className={`${styles.priceBeforeSale}`}>{priceBeforeSale} ₽</p>
          </div>
        </div>
        <div className={`${isVertical ? 'place-self-center' : ''} description`}>
          {description}
        </div>
      </div>
    </div>
  );
};
