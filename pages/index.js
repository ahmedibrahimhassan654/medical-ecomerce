// import Head from 'next/head'

import Head from "next/head";
import Layout from "../components/Layout";

export default function Home(props) {
  const { products } = props;
  return (
    <>
      <Head>
        <title>American Affordable Drugs Pharmacy </title>
        <meta name="description"></meta>
      </Head>
      <Layout>
        
      </Layout>
    </>
  );
}
