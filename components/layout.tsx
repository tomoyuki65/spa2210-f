import { ReactElement } from "react"
import Header from "../components/header"
import Footer from "../components/footer"

type LayoutProps = Required<{
  readonly children: ReactElement
}>;

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      { children }
      <Footer />
    </>
  );
};

export default Layout;