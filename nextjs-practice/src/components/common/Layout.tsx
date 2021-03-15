import { navigations } from "constants/mockdata";
import Footer from "./Footer";
import Header from "./Header";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props): JSX.Element => (
  <div className="font-sans font-thin">
    <Header navigations={navigations} />
    {children}
    <Footer />
  </div>
);

export default Layout;
