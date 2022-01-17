import type { NextPage } from 'next'
import Head from 'next/head'
import { useSelector, useDispatch } from 'react-redux'
import { Actions } from 'store'
import wineList from 'mocks/wineList'
import {Wine} from 'types';
import Product from 'components/Product'
interface IWine {
  wine: Wine
}

const WinePage: NextPage<IWine> = function ({wine}) {
  const {app} = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <>
      <Head>
        <title>{wine.name}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Product wine={wine}/>
    </>
  ) 
}

export async function getStaticPaths() {
  return {
    paths: wineList.map(wine => ({
      params: {
        id: wine.id.toString()
      }
    })
    ),
    fallback: false
  };
}

export async function getStaticProps({params: {id}}) {

  return {
    props: {
      wine: wineList[id]
    },
  };
}

export default WinePage
