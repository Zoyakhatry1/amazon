/*jshint esversion: 6 */

import { getSession } from "next-auth/react";
import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";

export default function Home(props) {
  return (
    <div>
      <Head>
        <title>Amazon 2.0</title>
        <meta name="google-site-verification" content="J33zdLY8ml8nYhefCrXpKXIvPp3YLo5lz0goKBc5ZL4" />
      </Head>
      
      <Header />
      <main className="max-w-screen-2xl mx-auto">
        <Banner />
        <ProductFeed products={props.products}/>
      </main>
    </div>
  );
}

export async function getServerSideProps(context){
  const session=await getSession(context);
  const products = await fetch("https://fakestoreapi.com/products").then(
   (res)=> res.json()
  );    

  return{
    props:{
      products,
      session,
    }
  }
}
