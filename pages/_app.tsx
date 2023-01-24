import '../styles/globals.css'
import "tailwindcss/tailwind.css"
import type { AppProps } from 'next/app'

// axiosのインポートと設定
import axios from 'axios'
axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_URL

// React-toastifyのインポート
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

// AuthContextのインポート
import { AuthContextProvider } from "../context/AuthContext"

// ページ単位のレイアウト用にインポート
import type { ReactElement, ReactNode } from "react"
import type { NextPage } from "next"

// ページ単位のレイアウト用に型定義を拡張
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

// ページ単位のレイアウトを適用するため、型にAppPropsWithLayoutを設定
function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // getLayoutが設定されている場合にページ単位のレイアウトを適用
  const getLayout = Component.getLayout ?? ((page) => page)
  return (
    <AuthContextProvider>
      { getLayout(<Component {...pageProps} />) }
      <ToastContainer
        position="top-center"   // 通知の表示位置
        autoClose={5000}        // 設定した時間（ms）経過後に通知をクローズさせる
        hideProgressBar={false} // 通知のProgress Barの非表示設定をOFF
        newestOnTop             // 最新の通知をTOPに表示させる
        closeOnClick            // 通知をクリックで閉じれる
        rtl={false}             // 通知の文字を左寄せにする
        pauseOnFocusLoss        // ウィンドウがフォーカスを失った時に通知の時間経過を一時停止
        draggable={false}       // 通知をドラッグできないようにする
        pauseOnHover={false}    // 通知にカーソルを当てても時間経過を一時停止しない
        theme="colored"         // テーマ「coloered」を使用する
      />
    </AuthContextProvider>
  );
}

export default MyApp
