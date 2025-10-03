"use client";

import { JSX, useContext, useState } from "react";
import styles from "./sryles.module.css";

import AttentionMessage from "@/app/components/FlexBox/FlexBox";
import CheckBox from "@/app/components/CheckBox/CheckBox";
import DoubleGrid from "@/app/components/FlexBox/FlexBox";
import FlexBox from "@/app/components/FlexBox/FlexBox";
import Button from "@/app/components/Button/Button";
import { TariffsTab } from "@/app/components/TariffsTab";
import TimeProvider, { TimeContext } from "../services/TimeContext";
import Tariffs from "../components/Tariffs/Tariffs";
import CheckoutArea from "../components/CheckoutArea/CheckoutArea";
// import Image from "next/image"; TODO: Сделать оптимизацию картинки черезе Next

export const HomePageView = (): JSX.Element => {
  return (
    <div className="max-w-300 m-auto mb-[144]">
      <h1 className="mt-[50px] text-[22px] font-[700] leading-[110%] mb-[110] md:text-[24px] lg:text-[50px]">
        Выбери подходящий для себя <span className="text-[#fdb056]">тариф</span>
      </h1>
      <div className="content m-auto h-auto flex flex-row mb-[63]">
        <img src="/man.png" alt="bulk man" className="content__image mr-auto mt-[52] h-[763]" />
        <div className="w-full max-w-[740px]">
          {/* TODO: 
          Разобрать коммиты(reset soft)
          Вынести карточки в отдельный компонент и вызват там контекст,
          трексть скидку по времени, брать карты с сервера,
          сделать мобильную версию,
          добавить анимации */}
          <CheckoutArea />
          {/* <Tariffs />
          <FlexBox
            elements={[
              <span className="mr-2">
                <img src="/alert.svg" className="w-[40] h-[40]" />
              </span>,
              <span>
                Следуя плану на 3 месяца и более, люди получают
                <br />в 2 раза лучший результат, чем за 1 месяц
              </span>,
            ]}
            className="mb-[30]"
          ></FlexBox>
          <CheckBox isChecked={isPolicyChecked} onChange={setIsPolicyChecked}>
            Я согласен с офертой рекуррентных платежей и Политикой конфиденциальности
          </CheckBox>
          <Button onClick={() => console.log("Button clicked")} className="mb-[14]">
            Купить
          </Button>
          <p className="text-sm/4 text-[#9b9b9b]">
            Нажимая кнопку «Купить», Пользователь соглашается на разовое списание денежных средств для получения пожизненного доступа к приложению. Пользователь
            соглашается, что данные кредитной/дебетовой карты будут сохранены для осуществления покупок дополнительных услуг сервиса в случае желания пользователя.
          </p> */}
        </div>
      </div>
      <FlexBox
        isTransparent
        size="large"
        elements={[
          <div className="px-[30] py-[16] text-[#81FE95] text-2xl border-1 rounded-[30px] leading-[120%] max-w-min text-nowrap font-medium">
            гарантия возврата 30 дней
          </div>,
          <p className="text-[#dcdcdc] leading-[130%] text-2xl font-normal">
            Мы уверены, что наш план сработает для тебя и ты увидишь видимые результаты уже через 4 недели! Мы даже готовы полностью вернуть твои деньги в течение 30 дней
            с момента покупки, если ты не получишь видимых результатов.
          </p>,
        ]}
      ></FlexBox>
    </div>
  );
};
