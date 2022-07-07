import Head from "next/head";
import Navbar from "./Navbar";

const Layout = ({ pageTitle, title, backButton, children }) => {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <Navbar title={title} backButton={backButton} />
      <div>{children}</div>
    </>
  );
};

export default Layout;
