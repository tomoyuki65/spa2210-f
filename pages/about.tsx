//import type { NextPage } from 'next'
import type { NextPageWithLayout } from "./_app"
import Layout from "../components/layout"
import Head from 'next/head'

const headInfo = {
  title: "About | SPA App with Next.js",
  desctiption: "Aboutページ",
};

const About: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>{ headInfo.title }</title>
        <meta name="description" content={ headInfo.desctiption } />
      </Head>
      <h1 className="flex justify-center m-5 font-semibold text-[30px]">
        About
      </h1>
      <div className="flex flex-col justify-center items-center">
        『SPA2210 APP』は、SPA構成で作るWebアプリケーションです。<br/>
        フロントエンドは「Next.js」、バックエンドは「Rails7のAPIモード」で構成しています。<br/>
        <br/>
        実装コードの詳細は、以下リンク先のTomoyukiのGitHubをご確認下さい。<br/>
        <ul className="list-disc mt-2 text-slate-600">
          <li className="hover:text-blue-600">
            <a href="https://github.com/tomoyuki65/spa2210-f"
               target="_blank"
               rel="noopener noreferrer">
              フロントエンド：spa2210-f
            </a>
          </li>
          <li className="hover:text-blue-600">
            <a href="#"
               target="_blank"
               rel="noopener noreferrer">
              バックエンド　：spa2210-b
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}

// ページ単位のLayout設定
About.getLayout = (page) => (
  <Layout>
    {page}
  </Layout>
);

export default About
