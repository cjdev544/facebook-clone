import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
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
  const { authUser } = useAuth()
  const { getOneUser } = useUser()
  const [userPage, setUserPage] = useState()
  const [formLogin, setFormLogin] = useState(true)
  const { query } = useRouter()
  const { user } = query

  const [showPhotosGrid, setShowPhotosGrid] = useState(false)
  const [isAuthProfile, setIsAuthProfile] = useState(false)

  useEffect(() => {
    if (authUser && userPage) {
      if (authUser.uid === userPage.uid) setIsAuthProfile(true)
    }
  }, [authUser, userPage])

  useEffect(() => {
    getOneUser(user)
      .then((res) => {
        setUserPage(res.userPage)
      })
      .catch((err) => {
        setUserPage(err.userPage)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])

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

  if (userPage === null) return 'Usuario no encontrado'
  if (!userPage) return null

  if (authUser?.uid) {
    return (
      <div>
        <Head>
          <title>{userPage.displayName} | Facebook Clone</title>
          <meta name='description' content='App clon de facebook' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <Header />
        <main className='pb-10 bg-gray-100'>
          <div className='max-w-7xl mx-auto'>
            <HeaderProfile
              authUser={authUser}
              userPage={userPage}
              isAuthProfile={isAuthProfile}
              showPhotosGrid={showPhotosGrid}
              setShowPhotosGrid={setShowPhotosGrid}
            />
            <div className='max-w-4xl mx-auto'>
              {!showPhotosGrid ? (
                <div className='flex flex-col sm:flex-row mx-2 sm:mx-10'>
                  <ProfileLeft
                    userPage={userPage}
                    setShowPhotosGrid={setShowPhotosGrid}
                  />
                  <ProfileRight userPage={userPage} />
                </div>
              ) : (
                <div className='mx-2 sm:mx-10 bg-white p-3 my-4 shadow-md rounded-lg'>
                  <h3 className='font-bold text-xl'>Fotos</h3>
                  <Photos userPage={userPage} />
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
