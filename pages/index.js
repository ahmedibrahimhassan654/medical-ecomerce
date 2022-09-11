// import Head from 'next/head'

import Head from "next/head";
import HeaderComp from "../components/Header/HeaderComp";
import Layout from "../components/Layout";
import FeaturedProducts from "../components/product/FeaturedProducts";

export default function Home(props) {
  const { products } = props;
  return (
    <>
      <Head>
        <title>American Affordable Drugs Pharmacy </title>
        <meta name="description"></meta>
      </Head>
      <Layout>
        <HeaderComp />
        <FeaturedProducts />
      </Layout>
    </>
  );
}
