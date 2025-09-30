import { OfferTabProps } from './types';
import styles from './styles.module.css';

export const OfferTab = ({
  period,
  priceAfterSale,
  priceBeforeSale,
  salePercent,
  description,
  isHit,
  className,
  isVertical = false,
}: OfferTabProps) => {
  return (
    <div
      className={`${
        isVertical ? 'col-span-full' : ''
      } bg-[#313637] rounded-[40] py-[23] border-[2] border-[#484D4E]`}
    >
      <div
        className={`${
          isVertical ? 'flex-row' : 'flex-col '
        } flex max-w-51 m-auto gap-[40]`}
      >
        <div>
          <p className="mb-0 text-5xl font-[600] place-self-center">
            {priceAfterSale} ₽
          </p>
          <p className="self-end text-2xl font-[400] line-through place-self-end">
            {priceBeforeSale} ₽
          </p>
          <h2 className="mb-0.5 text-2xl font-[500] place-self-center">
            {period}
          </h2>
        </div>
        <div className="description">{description}</div>
      </div>
    </div>
  );
};
