import '../styles/globals.css'
import "tailwindcss/tailwind.css"
import type { AppProps } from 'next/app'

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
  return getLayout(<Component {...pageProps} />)
}

export default MyApp
