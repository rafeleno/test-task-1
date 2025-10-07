import { TTimeStatus } from "../Header/types";

export interface ITariff {
  id: string;
  period: string;
  price: number;
  full_price: number;
  is_best: boolean;
  text: string;
}

export interface TariffsProps {
  setSelectedOffer: (id: string | null) => void;
  selectedOffer: string | null;
  tariffs: ITariff[] | null;
  isOnSale: boolean;
  className?: string;
}
