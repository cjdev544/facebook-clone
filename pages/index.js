import { useState } from 'react'
import Head from 'next/head'
import ClipLoader from 'react-spinners/ClipLoader'

import useAuth from '../hooks/useAuth'
import useUser from '../hooks/useUser'
import Header from '../components/Header'
import AuthForm from '../components/forms/AuthForm'
import SidebarLeft from '../components/SidebarLeft'
import SidebarRight from '../components/SidebarRight'
import Feed from '../components/Feed'

export default function Home() {
  const { authUser } = useAuth()
  const [formLogin, setFormLogin] = useState(true)

  useUser()

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
          <title>Facebook Clone</title>
          <meta name='description' content='App clon de facebook' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <Header />
        <main className='bg-gray-100'>
          <div className='max-w-7xl mx-auto overflow-hidden flex justify-between'>
            <SidebarLeft />
            <Feed />
            <SidebarRight />
          </div>
        </main>
      </div>
    )
  } else {
    return <AuthForm formLogin={formLogin} setFormLogin={setFormLogin} />
  }
}
