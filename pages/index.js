import Head from 'next/head';
import Main from '../Components/Main';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Multilateral Model Institute</title>
        <meta name="description" content="Multilateral Model Institute" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
    </div>
  )
}
