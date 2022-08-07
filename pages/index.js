import Head from 'next/head'
import Header from '../components/Header'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Facebok Clone</title>
        <meta name='description' content='App clon de facebook' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <main>
        <h1 className='text-3xl font-bold underline'>My Facebook App</h1>
      </main>
    </div>
  )
}
