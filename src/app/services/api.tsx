import { ITariff } from "../components/Tariffs/types";

export const getTariffs = async (): Promise<ITariff[]> => {
  return fetch("https://t-core.fit-hub.pro/Test/GetTariffs")
    .then((res) => res.json())
    .then((data: ITariff[]) => {
      data.sort((a, b) => b.price - a.price);
      return data;
    });
};
