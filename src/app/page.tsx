import { JSX } from "react";
import { HomePageView } from "./(pages)/HomePage/HomePageView";

const Page = async (): Promise<JSX.Element> => {
  const employees = await fetch("https://t-core.fit-hub.pro/Test/GetTariffs");

  return (
    <>
      <HomePageView />
    </>
  );
};

export default Page;
