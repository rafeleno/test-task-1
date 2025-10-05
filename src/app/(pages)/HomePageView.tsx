import { JSX } from "react";

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
        <img src="/man.png" alt="bulk man" className="content__image mr-auto mt-[52] h-[763] before:bg-linear-[25deg,red_5%,yellow_60%,lime_90%,teal]" />
        <div className="w-full max-w-[740px]">
          {/* TODO: 
          Разобрать коммиты(reset soft)
          Вынести карточки в отдельный компонент и вызват там контекст,
          трексть скидку по времени, брать карты с сервера,
          сделать мобильную версию,
          добавить анимации */}
          <CheckoutArea />
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
