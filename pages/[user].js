import Head from 'next/head'
import { useRouter } from 'next/router'
import ClipLoader from 'react-spinners/ClipLoader'

import useHeightScreen from '../hooks/useHeightScreen'
import useAuth from '../hooks/useAuth'
import useUser from '../hooks/useUser'
import Header from '../components/Header'
import AuthForm from '../components/forms/AuthForm'
import HeaderProfile from '../components/HeaderProfile'
import ProfileLeft from '../components/ProfileLeft'
import ProfileRight from '../components/ProfileRight'

const User = () => {
  const { query } = useRouter()
  const { user } = query
  console.log(user)

  const { viewportHeight } = useHeightScreen()
  const { authUser } = useAuth()
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
          <title>Mi nombre | Facebok Clone</title>
          <meta name='description' content='App clon de facebook' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <Header />
        <main style={{ height: viewportHeight }} className='bg-gray-100'>
          <HeaderProfile />
          <div className='max-w-4xl mx-auto bg-red-500'>
            <div className='flex mx-10'>
              <ProfileLeft />
              <ProfileRight />
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
