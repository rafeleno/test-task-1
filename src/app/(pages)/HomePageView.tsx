import { JSX } from "react";
import styles from "./styles.module.css";
import { CheckoutArea } from "../components/CheckoutArea";
import { FlexBox } from "../components/FlexBox";

export const HomePageView = (): JSX.Element => {
  return (
    <div className="max-w-300 m-auto mb-14 md:mb-25 xl:mb-[144]">
      <h1 className="mt-[50px] text-[22px] font-[700] text-center leading-[110%] sm:text-[30px] sm:mb-[10] md:mb-[90] md:text-[35px] xl:mb-[110] xl:text-start xl:text-[40px]">
        Выбери подходящий для себя <span className="text-[#fdb056]">тариф</span>
      </h1>
      <div className="content h-auto mr-5 ml-5 md:mr-3 md:ml-0 flex flex-row mb-[24] md:mb-[40] xl:mb-[63]">
        <div className="flex flex-col md:flex-row">
          <div className="relative before:absolute before:w-[100%] before:left-0 before:bottom-0 before:bg-linear-[0deg,#232829_10%,transparent_100%] m-auto before:h-[80] xl:before:h-[160] xl:mr-auto mt-[30] xl:mt-[52]">
            <img src="/man.png" alt="bulk man" className={`${styles.manImage} md:min-w-[348] md:h-[700] xl:min-w-[379] xl:h-[763]`} />
          </div>
          <div className="w-full max-w-[740px]">
            <CheckoutArea />
          </div>
        </div>
      </div>
      <FlexBox
        isTransparent
        size="large"
        className="ml-5 mr-5 md:ml-3 md:mr-3"
        elements={[
          <div className="px-[18] py-[10] xl:px-[30] xl:py-[16] text-[#81FE95] text-[18px] sm:text-[22px] md:text-xl xl:text-2xl border-1 rounded-[30px] leading-[120%] max-w-min text-nowrap font-medium">
            гарантия возврата 30 дней
          </div>,
          <p className="text-[#dcdcdc] leading-[130%] text-[14px] sm:text-[18px] md:text-xl xl:text-2xl font-normal">
            Мы уверены, что наш план сработает для тебя и ты увидишь видимые результаты уже через 4 недели! Мы даже готовы полностью вернуть твои деньги в течение 30 дней
            с момента покупки, если ты не получишь видимых результатов.
          </p>,
        ]}
      ></FlexBox>
    </div>
  );
};
