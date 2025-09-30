import { JSX } from "react";
import styles from "./sryles.module.css";
import { OfferTab } from "@/app/components/OfferTab/OfferTab";

// import Image from "next/image"; TODO: Сделать оптимизацию картинки черезе Next

export const HomePageView = (): JSX.Element => {
  return (
    <>
      <h1>Выбери подходящий для себя тариф</h1>
      <div className="content max-w-300 bg-amber-500 m-auto h-auto flex flex-row">
        <img src="/man.png" alt="bulk man" className="content__image mr-auto" />
        <div>
          <div className="content-supplies grid grid-cols-3 grid-rows-2 gap-3">
            <OfferTab period={"3 месяца"} priceAfterSale={1000} priceBeforeSale={1500} salePercent={30} description="Описание тарифаОписание тарифа" isHit={true} />
            <OfferTab period={"1 месяц"} priceAfterSale={1000} priceBeforeSale={1500} salePercent={30} description="Описание тарифа" isHit={true} />
            <OfferTab period={"1 неделя"} priceAfterSale={1000} priceBeforeSale={1500} salePercent={30} description="Описание тарифа" isHit={true} />
            <OfferTab period={"Навсегда"} priceAfterSale={1000} priceBeforeSale={1500} salePercent={30} description="Описание тарифа" isHit={true} />
          </div>
          <div className="content__attention">
            <p>Следуя плану на 3 месяца и более, люди получают в 2 раза лучший результат, чем за 1 месяц</p>
          </div>
        </div>
      </div>
    </>
  );
};
