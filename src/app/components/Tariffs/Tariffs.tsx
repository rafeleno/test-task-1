"use client";

import { ITariff, TariffsProps } from "./types";
import { TariffsTab } from "../TariffsTab";
import { useContext, useEffect, useState } from "react";
import { getTariffs } from "@/app/services/api";
import { TimeContext } from "@/app/services/TimeContext";

export const Tariffs = ({ tariffs, isOnSale, selectedOffer, setSelectedOffer }: TariffsProps) => {
  // Важно! С Бэка приходит массив, в котором у первых двух элементов одиновый id, так что id в map генерируется локально

  return (
    <div className="content-supplies grid grid-cols-1 auto-rows-[130] xl:auto-rows-[190] gap-[14] mb-5 xl:grid-cols-3 xl:grid-rows-[190px_335px]">
      {tariffs &&
        tariffs.map((offer: ITariff, index: number) => {
          return (
            <TariffsTab
              onClick={() => setSelectedOffer(index.toString())}
              id={index.toString()}
              isVertical={offer.is_best}
              period={offer.period}
              priceAfterSale={offer.price}
              priceBeforeSale={offer.full_price}
              description={offer.text}
              isHit={offer.is_best}
              isActive={selectedOffer === index.toString()}
              isOnSale={isOnSale}
              className="overflow-hidden"
            />
          );
        })}
    </div>
  );
};

export default Tariffs;
