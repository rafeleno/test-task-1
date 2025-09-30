"use client";

import { JSX, useState } from "react";
import styles from "./sryles.module.css";
import { OfferTab } from "@/app/components/OfferTab/OfferTab";
import AttentionMessage from "@/app/components/AttentionMessege/AttentionMessage";
import CheckBox from "@/app/components/CheckBox/CheckBox";

// import Image from "next/image"; TODO: Сделать оптимизацию картинки черезе Next

export const HomePageView = (): JSX.Element => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="max-w-300 m-auto">
      <h1 className="mt-[50px] text-[22px] font-[700] leading-[110%] mb-[110] md:text-[24px] lg:text-[50px]">
        Выбери подходящий для себя <span className="text-[#fdb056]">тариф</span>
      </h1>
      <div className="content m-auto h-auto flex flex-row">
        <img src="/man.png" alt="bulk man" className="content__image mr-auto" />
        <div className="w-full max-w-[740px]">
          <div className="content-supplies grid grid-cols-3  grid-rows-[190px_335px] gap-[14] mb-5">
            <OfferTab
              isVertical={true}
              period={"3 месяца"}
              priceAfterSale={1000}
              priceBeforeSale={1500}
              salePercent={30}
              description="Описание тарифаОписание тарифа"
              isHit={true}
            />
            <OfferTab period={"1 месяц"} priceAfterSale={1000} priceBeforeSale={1500} salePercent={30} description="Описание тарифа" isHit={true} />
            <OfferTab period={"1 неделя"} priceAfterSale={1000} priceBeforeSale={1500} salePercent={30} description="Описание тарифа" isHit={true} />
            <OfferTab period={"Навсегда"} priceAfterSale={1000} priceBeforeSale={1500} salePercent={30} description="Описание тарифа" isHit={true} />
          </div>
          <AttentionMessage className="mb-[30]">
            Следуя плану на 3 месяца и более, люди получают
            <br />в 2 раза лучший результат, чем за 1 месяц
          </AttentionMessage>
          <CheckBox isChecked={checked} onChange={setChecked}>
            Я согласен с офертой рекуррентных платежей и Политикой конфиденциальности
          </CheckBox>
        </div>
      </div>
    </div>
  );
};
