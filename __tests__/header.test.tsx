// テスト用のライブラリをインポート
import { render, screen } from "@testing-library/react"
// テストをしたいモジュールをインポート
import Header from "../components/header"

// テストの説明
describe("Header", () => {
  // テストケース
  it("リンク「SPA2210 APP」が存在すること", () => {
    // Header（components/header.tsx）を出力
    render(<Header />);
    const linkElement = screen.getByRole("link", { name: "SPA2210 APP" });
    expect(linkElement).toBeInTheDocument();
  });

  it("リンク「Home」が存在すること", () => {
    render(<Header />);
    const linkElement = screen.getByRole("link", { name: "Home" });
    expect(linkElement).toBeInTheDocument();
  });

  it("リンク「About」が存在すること", () => {
    render(<Header />);
    const linkElement = screen.getByRole("link", { name: "About" });
    expect(linkElement).toBeInTheDocument();
  });

  it("リンク「Log in」が存在すること", () => {
    render(<Header />);
    const linkElement = screen.getByRole("link", { name: "Log in" });
    expect(linkElement).toBeInTheDocument();
  });
});