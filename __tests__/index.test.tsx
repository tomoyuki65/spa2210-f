// テスト用のライブラリをインポート
import { render, screen } from "@testing-library/react"
// テストをしたいモジュールをインポート
import Home from "../pages/index"

// next/headをモック化
jest.mock('next/head', () => {
  return {
    __esModule: true,
    default: ({ children }: { children: Array<React.ReactElement> }) => {
      return <>{children}</>
    },
  };
});

// テストの説明
describe("Home", () => {
  // テストケース
  it("titleが「SPA App with Next.js」であること", () => {
    // Home（index.tsx）を出力
    render(<Home />);
    const pageTitle = "SPA App with Next.js";
    expect(document.title).toBe(pageTitle);
  });
});
