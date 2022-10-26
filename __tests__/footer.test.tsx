// テスト用のライブラリをインポート
import { render, screen } from "@testing-library/react"
// テストをしたいモジュールをインポート
import Footer from "../components/footer"

// テストの説明
describe("Footer", () => {
  // テストケース
  it("テキスト「SPA App with Next.js by」が表示されていること", () => {
    // Footer（components/footer.tsx）を出力
    render(<Footer />);
    const textElement = screen.getByText("SPA App with Next.js by");
    expect(textElement).toBeInTheDocument();
  });

  it("リンク「Tomoyuki」が存在すること", () => {
    render(<Footer />);
    const linkElement = screen.getByRole("link", { name: "Tomoyuki" });
    expect(linkElement).toBeInTheDocument();
  });
});