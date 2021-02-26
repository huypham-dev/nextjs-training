import React from "react";
import { FooterDataType, NavigationType } from "models";
import Footer from "./Footer";
import Header from "./Header";

type Props = {
  children: any
  logo: string
  navigation: NavigationType[]
  footerData: FooterDataType
}

const Layout = ({ children, logo, navigation, footerData }: Props) => (
  <div className="bg-gray-200 font-sans font-thin px-6 bg-fixed bg-cover bg-no-repeat">
    <Header logo={logo} navigation={navigation} />
    {children}
    <Footer data={footerData} />
  </div>
);

export default Layout;
