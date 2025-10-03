import { useContext, useEffect, useState } from "react";
import Button from "../Button/Button";
import CheckBox from "../CheckBox/CheckBox";
import FlexBox from "../FlexBox/FlexBox";
import Tariffs from "../Tariffs/Tariffs";
import { ITariff } from "../Tariffs/types";
import { getTariffs } from "@/app/services/api";
import { TimeContext } from "@/app/services/TimeContext";

const CheckoutArea = () => {
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
      <Tariffs tariffs={tariffs} isOnSale={ctx?.timeStatus !== "over"} selectedOffer={selectedOffer} setSelectedOffer={setSelectedOffer} />
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
      <Button onClick={() => console.log("Button clicked")} className="mb-[14]" disabled={!isOrderReady}>
        Купить
      </Button>
      <p className="text-sm/4 text-[#9b9b9b]">
        Нажимая кнопку «Купить», Пользователь соглашается на разовое списание денежных средств для получения пожизненного доступа к приложению. Пользователь соглашается,
        что данные кредитной/дебетовой карты будут сохранены для осуществления покупок дополнительных услуг сервиса в случае желания пользователя.
      </p>
    </>
  );
};
export default CheckoutArea;
