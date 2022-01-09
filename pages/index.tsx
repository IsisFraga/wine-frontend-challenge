import type { NextPage } from 'next'
import Head from 'next/head'
import App from './_app'
import styles from '../styles/Home.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { Actions } from 'store';

const Home: NextPage = () => {
  const {app} = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <Head>
        <title>Vinhos com descontos especiais | Wine</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <button onClick={() => console.log('useSelector', app)}>Click useSelector</button><br/>
      <button onClick={() => dispatch({type: Actions.START_LOADING})}>Start Loading</button>
      <button onClick={() => dispatch({type: Actions.FINISH_LOADING})}>Finish loading</button>
      <button onClick={() => dispatch({type: Actions.TOGGLE_MODALCART})}>Toggle Modal Cart</button>
      <button onClick={() => dispatch({type: Actions.TOGGLE_SIDEBAR})}>Toggle Sidebar</button>
      <main className={styles.main}>
        Redirecting to search...
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}

export default Home
