import { useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import ClipLoader from 'react-spinners/ClipLoader'

import useAuth from '../hooks/useAuth'
import useUser from '../hooks/useUser'
import Header from '../components/Header'
import AuthForm from '../components/forms/AuthForm'
import HeaderProfile from '../components/HeaderProfile'
import ProfileLeft from '../components/ProfileLeft'
import ProfileRight from '../components/ProfileRight'
import Photos from '../components/Photos'

const User = () => {
  const { query } = useRouter()
  const { user } = query
  const { authUser } = useAuth()
  useUser()

  const [showPhotosGrid, setShowPhotosGrid] = useState(false)

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
          <title>Mi nombre | Facebok Clone</title>
          <meta name='description' content='App clon de facebook' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <Header />
        <main className='pb-10 bg-gray-100'>
          <div className='max-w-7xl mx-auto'>
            <HeaderProfile
              showPhotosGrid={showPhotosGrid}
              setShowPhotosGrid={setShowPhotosGrid}
            />
            <div className='max-w-4xl mx-auto'>
              {!showPhotosGrid ? (
                <div className='flex flex-col sm:flex-row mx-2 sm:mx-10'>
                  <ProfileLeft setShowPhotosGrid={setShowPhotosGrid} />
                  <ProfileRight />
                </div>
              ) : (
                <div className='mx-2 sm:mx-10 bg-white p-3 my-4 shadow-md rounded-lg'>
                  <h3 className='font-bold text-xl'>Fotos</h3>
                  <Photos />
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    )
  } else {
    return <AuthForm formLogin={formLogin} setFormLogin={setFormLogin} />
  }
}

export default User
