/* Homeページ */

import type { NextPage, GetServerSideProps } from "next";
import CatGenerator from "../components/catgenerator";
import FetchCatImage from "../components/fetchcatimage";

interface HomeProps {
  initialCatImageUrl: string;
};

const Home: NextPage<HomeProps> = ({ initialCatImageUrl }) => {
  return (
    <CatGenerator initialCatImageUrl={initialCatImageUrl} />
  );
};

export default Home;

// SSR処理（猫画像URLを取得）
export const getServerSideProps: GetServerSideProps<
  HomeProps
> = async () => {
  const catImage = await FetchCatImage();

  return {
    props: {
      initialCatImageUrl: catImage.url,
    },
  };
};
