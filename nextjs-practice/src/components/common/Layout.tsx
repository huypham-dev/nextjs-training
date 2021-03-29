import { navigations } from "constants/navigations";
import Head from "next/head";
import dynamic from "next/dynamic";
import { memo, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";

type Props = {
  children: React.ReactNode;
  title: string;
};

const LoginForm = dynamic(() => import("../LoginForm"));

const Layout = ({ children, title }: Props): JSX.Element => {
  const [isShowForm, setShowForm] = useState(false);
  const toggleForm = () => setShowForm(!isShowForm);

  return (
    <div className="font-sans font-thin">
      <Head>
        <title>{title || "Blog"}</title>
        <meta name="description" content="Blog app - build with Next.js" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header navigations={navigations} onShowForm={toggleForm} />
      {children}
      <Footer />
      {isShowForm && <LoginForm onClose={toggleForm} />}
    </div>
  );
};

export default memo(Layout);
