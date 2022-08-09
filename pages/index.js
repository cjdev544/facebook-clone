import { useState } from 'react'
import Head from 'next/head'
import ClipLoader from 'react-spinners/ClipLoader'

import Header from '../components/Header'
import AuthForm from '../components/forms/AuthForm'
import useAuth from '../hooks/useAuth'
import SidebarLeft from '../components/SidebarLeft'
import SidebarRight from '../components/SidebarRight'
import Feed from '../components/feed'

export default function Home() {
  const { authUser, logout, initWhitGmail } = useAuth()
  const [formLogin, setFormLogin] = useState(true)

  const override = {
    display: 'block',
    margin: '15rem auto',
    borderColor: 'blue',
  }

  if (authUser === undefined)
    return (
      <ClipLoader
        color='#000'
        loading={true}
        cssOverride={override}
        size={150}
      />
    )

  if (authUser?.uid) {
    return (
      <div>
        <Head>
          <title>Facebok Clone</title>
          <meta name='description' content='App clon de facebook' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <Header />
        <main className='flex justify-between'>
          <SidebarLeft />
          <Feed />
          <SidebarRight />
        </main>
      </div>
    )
  } else {
    return <AuthForm formLogin={formLogin} setFormLogin={setFormLogin} />
  }
}
