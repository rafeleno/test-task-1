"use client";

import { useContext, useEffect, useState } from "react";

import { ITariff } from "@components/Tariffs/types";
import { getTariffs } from "@/app/services/api";
import { TimeContext } from "@/app/services/TimeContext";
import { CheckBox } from "@components/CheckBox";
import { Button } from "@components/Button";
import { Tariffs } from "@components/Tariffs";
import { FlexBox } from "@components/FlexBox";

export const CheckoutArea = () => {
  const [isPolicyChecked, setIsPolicyChecked] = useState(false);
  const [isOrderReady, setIsOrderReady] = useState(false);
  const [selectedOffer, setSelectedOffer] = useState<string | null>("0"); // Вызвано кривыми id
  const ctx = useContext(TimeContext);

  const [tariffs, setTariffs] = useState<ITariff[] | null>(null);

  useEffect(() => {
    getTariffs().then((data) => {
      setTariffs(data);
    });
  }, []);

  useEffect(() => {
    if (isPolicyChecked && selectedOffer) {
      setIsOrderReady(true);
    } else {
      setIsOrderReady(false);
    }
    console.log("isOrderReady:", isOrderReady);
    console.log("isPolicyChecked:", isPolicyChecked);
  }, [isPolicyChecked, selectedOffer]);

  return (
    <>
      <Tariffs
        tariffs={tariffs}
        isOnSale={ctx?.timeStatus !== "over"}
        selectedOffer={selectedOffer}
        setSelectedOffer={setSelectedOffer}
        className="mb-[12px] sm:mb-[16px] md:mb-[20px]"
      />
      <FlexBox
        elements={[
          <span className="mr-2 min-w-[24] min-h-[24] w-[24] h-[24] place-self-center">
            <img src="/alert.svg" className="w-[24] h-[24]" />
          </span>,
          <span className="text-[12px] sm:text-[14px] md:text-[16px]">Следуя плану на 3 месяца и более, люди получают в 2 раза лучший результат, чем за 1 месяц</span>,
        ]}
        className="mb-[24] sm:mb-[28] md:mb-[32]"
      ></FlexBox>
      <CheckBox isChecked={isPolicyChecked} onChange={setIsPolicyChecked} className="mb-[22px] sm:mb-[14px] text-[#cdcdcd]">
        Я согласен с <a href="/offer" className="underline">офертой рекуррентных платежей</a> и <a href="/privacy" className="underline">Политикой конфиденциальности</a>
      </CheckBox>
      <Button onClick={() => console.log("Button clicked")} className="mb-[20px] sm:mb-[14px]" disabled={!isOrderReady}>
        Купить
      </Button>
      <p className="text-[10px]/3.5 sm:text-sm/4 text-[#9b9b9b]">
        Нажимая кнопку «Купить», Пользователь соглашается на разовое списание денежных средств для получения пожизненного доступа к приложению. Пользователь соглашается,
        что данные кредитной/дебетовой карты будут сохранены для осуществления покупок дополнительных услуг сервиса в случае желания пользователя.
      </p>
    </>
  );
};
