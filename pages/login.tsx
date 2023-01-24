import type { NextPageWithLayout } from "./_app"
import Layout from "../components/layout"
import Head from 'next/head'
import { useEffect, useCallback } from "react"
import { useRouter } from "next/router"
import { useAuthContext } from "../context/AuthContext"
import LoginForm from "../components/LoginForm"

const headInfo = {
  title: "Login | SPA App with Next.js",
  desctiption: "Loginページ",
};

const Login: NextPageWithLayout = () => {
  // ログイン状況を取得
  const { currentUser, loading } = useAuthContext();
  const router = useRouter();

  // ログイン済みの場合はHomeへ飛ばす
  useEffect(() => {
    if (!loading && currentUser) {
      router.push("/");
    }
  // 以下のコメント直下のコードのeslintルールを部分的に無効にする
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser, loading])

  return (
    <>
      <Head>
        <title>{ headInfo.title }</title>
        <meta name="description" content={ headInfo.desctiption } />
      </Head>
      <h1 className="flex justify-center m-5 font-semibold text-[30px]">
        Login
      </h1>
      <div className="flex flex-col justify-center items-center">
        <LoginForm />
      </div>
    </>
  )
}

// ページ単位のLayout設定
Login.getLayout = (page) => (
  <Layout>
    {page}
  </Layout>
);

export default Login
