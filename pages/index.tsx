/* Homeページ */

import type { NextPageWithLayout } from "./_app"
import Layout from "../components/layout"
import Head from 'next/head'
import LikeButton from "../components/likebutton"
import CatImageFile from "../components/CatImageFile"

const headInfo = {
  title: "SPA App with Next.js",
  desctiption: "Next.jsで作成したSPA構成のアプリケーション",
};

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>{ headInfo.title }</title>
        <meta name="description" content={ headInfo.desctiption } />
      </Head>
      <div className="h-screen w-screen flex flex-col justify-center items-center">
        <CatImageFile />
        <p className="m-3">Please click this like button!</p>
        <LikeButton />
      </div>
    </>
  );
};

// ページ単位のLayout設定
Home.getLayout = (page) => (
  <Layout>
    {page}
  </Layout>
);

export default Home;
