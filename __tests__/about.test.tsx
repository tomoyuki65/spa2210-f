// テスト用のライブラリをインポート
import { render, screen } from "@testing-library/react"
// テストをしたいモジュールをインポート
import About from "../pages/about"

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
describe("About", () => {
  // テストケース
  it("Aboutが表示されていること", () => {
    // About（about.tsx）を出力
    render(<About />);
    // screen.getByTextで文字列を検索し、toBeInTheDocument()で存在確認
    expect(screen.getByText("About")).toBeInTheDocument();
  });

  it("titleが「About | SPA App with Next.js」であること", () => {
    render(<About />);
    const pageTitle = "About | SPA App with Next.js";
    expect(document.title).toBe(pageTitle);
  });
});
